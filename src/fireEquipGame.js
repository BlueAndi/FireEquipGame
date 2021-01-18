// MIT License
// 
// Copyright (c) 2021 Andreas Merkle <web@blue-andi.de>
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

/**
 * The Fire Equipment Game, which contains the Creator and Game class.
 * The Creator is used to build the game data model.
 * The Game is used to play the game, based on a given game data model.
 * @namespace
 */
var fireEquip = window.fireEquip || {};

/******************************************************************************
 * Version of the fire equipment game library.
 *****************************************************************************/

/**
 * Fire Equipment Game engine version
 */
fireEquip.VERSION = "v0.1";

/******************************************************************************
 * Creator: Used to build the game data model.
 *****************************************************************************/

/**
 * The model creator is used to create the underlying data model, containing
 * all game specific informations.
 * @class
 * 
 * @param  {Object} [data] - The game data model, which to use.
 */
fireEquip.Creator = function(data) {
    this._data = null;

    if ("object" === typeof data) {
        this._data = data;
    }
};

/**
 * Creates a new data model. Note, a existing data model will be cleared!
 * 
 * @param {string} name         - The name of the game.
 * @param {string} author       - The name of the game author.
 * @param {string} year         - The year of the initial model creation.
 * @param {string} department   - The fire department, the model is made for.
 * @param {string} version      - The version of the data model.
 */
fireEquip.Creator.prototype.createGame = function(name, author, year, department, version) {
    this._data = {
        info: {
            name: name,
            author: author,
            year: year,
            department: department,
            version: version
        },
        topics: []
    };
};

/**
 * Get the game data model.
 * 
 * @return {Object} Data model
 */
fireEquip.Creator.prototype.getGame = function() {
    return this._data;
};

/**
 * Append a topic to the data model. A topic may be e.g. a specific fire engine.
 * 
 * @param {string} name         - Name of the topic, the source is related to.
 * @param {string} [src]        - Source link to the image, which to show.
 * @param {string} [address]    - Topic related address, e.g. where the fire engine is located.
 */
fireEquip.Creator.prototype.appendTopic = function(name, src, address) {
    var intAddress = {
        name: "",
        street: "",
        postalCode: "",
        location: ""
    };
    var intSrc = null;

    if ("string" === typeof src) {
        intSrc = src;
    }

    if ("object" === typeof address) {
        if ("string" === typeof address.name) {
            intAddress.name = address.name;
        }

        if ("string" === typeof address.street) {
            intAddress.street = address.street;
        }

        if ("string" === typeof address.postalCode) {
            intAddress.postalCode = address.postalCode;
        }

        if ("string" === typeof address.location) {
            intAddress.location = address.location;
        }
    }

    if ("string" === typeof name) {

        this._data.topics.push({
            name: name,
            src: intSrc,
            address: intAddress,
            locations: [],
            items: []
        });
    }
};

/**
 * Get the topic data model.
 * @private
 * 
 * @param {string} topicName - Name of the topic.
 * 
 * @return {Object} Topic data model
 */
fireEquip.Creator.prototype._getTopic = function(topicName) {
    var index   = 0;
    var topic   = null;

    while((this._data.topics.length > index) && (null == topic)) {
        if (this._data.topics[index].name === topicName) {
            topic = this._data.topics[index];
        } else {
            ++index;
        }
    }

    return topic;
};

/**
 * Set the entry location of a topic. If the game starts, this will define on
 * which location to start.
 * 
 * @param {string} topicName    - Name of the topic.
 * @param {string} entryId      - Location id, where to start.
 */
fireEquip.Creator.prototype.setEntryId = function(topicName, entryId) {
    var topic = this._getTopic(topicName);

    if (null !== topic) {
        topic.entryId = entryId;
    }
};

/**
 * Append a location to a topic. A location may be the front of the fire engine
 * or a specific storage location, where the equipment is located.
 * @private
 * 
 * @param {string} topicName    - Name of the topic.
 * @param {string} id           - Location id (must be unique).
 * @param {string} name         - Name of the location.
 * @param {string} src          - Source link to the location image.
 */
fireEquip.Creator.prototype.appendLocation = function(topicName, id, name, src) {
    var topic = this._getTopic(topicName);

    if (null !== topic) {
        topic.locations.push({
            id: id,
            name: name,
            src: src,
            areas: [],
            directions: []
        });
    }
};

/**
 * Get the location data model.
 * @private
 * 
 * @param {string} topicName    - Name of the topic.
 * @param {string} locationId   - Name of the location id.
 * 
 * @return {Object} Location data model
 */
fireEquip.Creator.prototype._getLocation = function(topicName, locationId) {
    var index       = 0;
    var topic       = this._getTopic(topicName);
    var location    = null;

    if (null !== topic) {

        while((topic.locations.length > index) && (null == location)) {
            if (topic.locations[index].id === locationId) {
                location = topic.locations[index];
            } else {
                ++index;
            }
        }
    }

    return location;
};

/**
 * Append a area to a location. The area is a map on the image with coordinates to define
 * the items.
 * 
 * @param {string} topicName    - Name of the topic, the location belongs to.
 * @param {string} locationId   - Id of the location.
 * @param {string} id           - Area id, which must be unique.
 * @param {string} name         - Name of the area or item.
 * @param {string} shape        - The shape of the coordinate map: rect, poly, circle
 * @param {string} coords       - Coordinates around the area.
 */
fireEquip.Creator.prototype.appendLocationArea = function(topicName, locationId, id, name, shape, coords) {
    var location = this._getLocation(topicName, locationId);

    if (null !== location) {
        location.areas.push({
            id: id,
            name: name,
            shape: shape,
            coords: coords
        });
    }
};

/**
 * Append a possible direction, where you can go from a specific location.
 * 
 * @param {string} topicName    - Name of the topic.
 * @param {string} locationId   - The current location id.
 * @param {string} name         - Direction name or describe the action.
 * @param {string} refId        - The location id, where you can go.
 */
fireEquip.Creator.prototype.appendDirection = function(topicName, locationId, name, refId) {
    var location = this._getLocation(topicName, locationId);

    if (null !== location) {
        location.directions.push({
            name: name,
            refId: refId
        });
    }
};

/**
 * Append a item, which is used in the quiz to be found.
 * The item name must correspond a area name!
 * 
 * @param {string} topicName    - Name of the topic, the item belongs to.
 * @param {string} name         - Item name.
 */
fireEquip.Creator.prototype.appendItem = function(topicName, name) {
    var topic = this._getTopic(topicName);

    if (null !== topic) {
        topic.items.push({
            name: name
        });
    }
};

/******************************************************************************
 * Game: Used to play the game.
 *****************************************************************************/

/**
 * The game engine, which navigates through the given game data model.
 * @class
 * 
 * @param {string}      id          - The container id (&lt;div&gt;), where the game is shown.
 * @param {Object}      data        - The game data model.
 * @param {function}    updateFunc  - If a update of the container is necessary, this callback is called.
 * @param {function}    successFunc - If a item is found during game, this callback is called.
 */
fireEquip.Game = function(id, data, updateFunc, successFunc) {

    this._containerId       = null;
    this._data              = null;
    this._currentLocationId = null;
    this._selectedTopic     = null;
    this._map               = null;
    this._itemToFind        = "";
    this._foundItems        = [];
    this._MAX_FOUND_ITEMS   = 10;
    this._updateFunc        = null;
    this._successFunc       = null;

    if ("string" === typeof id) {
        this._containerId = id;
    }

    if ("object" === typeof data) {
        this._data = data;
    }

    if ("function" === typeof startFunc) {
        this._startFunc = startFunc;
    }

    if ("function" === typeof updateFunc) {
        this._updateFunc = updateFunc;
    }

    if ("function" === typeof successFunc) {
        this._successFunc = successFunc;
    }

    fireEquip._instance = this;
};

/**
 * Build a associative array with the location id as key for performant and easy
 * finding the right location later.
 * @private
 */
fireEquip.Game.prototype._buildMap = function() {
    var index = 0;

    if ("object" !== typeof this._selectedTopic) {
        return;
    }

    this._map = [];
    for(index = 0; index < this._selectedTopic.locations.length; ++index) {
        this._map[this._selectedTopic.locations[index].id] = this._selectedTopic.locations[index];
    }
};

/**
 * Preloads a single image from the given source link.
 * @private
 * 
 * @param {string} src - The image source link.
 * 
 * @return {Promise}
 */
fireEquip.Game.prototype._preloadImage = function(src) {
    return new Promise(function(resolve, reject) {
        var image = new Image();
        image.onload = function() {
            resolve();
        };
        image.onerror = function() {
            reject();
        };
        image.src = src;
    });
};

/**
 * Preload all images which are contained in the current selected topic.
 * @private
 * 
 * @return {Promise}
 */
fireEquip.Game.prototype._preloadImages = function() {
    var index   = 0;
    var sources = [];

    if ("object" !== typeof this._selectedTopic) {
        return;
    }
    
    if (0 == this._selectedTopic.locations.length) {
        return;
    }

    for(index = 0; index < this._selectedTopic.locations.length; ++index) {
        sources.push(this._selectedTopic.locations[index].src);
    }

    return Promise.all(sources.map(function(src) {
        return this._preloadImage(src);
    }.bind(this)));
};

/**
 * Update the display container.
 * @private
 */
fireEquip.Game.prototype._update = function() {

    if (null !== this._updateFunc) {
        this._updateFunc(this._containerId, this);
    }
}

/**
 * Notify about a successful found item.
 * @private
 */
fireEquip.Game.prototype._notifySuccess = function() {

    if (null !== this._successFunc) {
        this._successFunc(this._containerId, this);
    }
}

/**
 * @typedef {Object} GameInfo
 * @property {string} name          - The name of the game.
 * @property {string} author        - The name of the game author.
 * @property {string} year          - The year of the initial model creation.
 * @property {string} department    - The fire department, the model is made for.
 * @property {string} version       - The version of the data model.
 */

/**
 * Get general game information.
 * 
 * @return {GameInfo} Game information structure.
 */
fireEquip.Game.prototype.getInfo = function() {
    var info = {};

    if ("object" === typeof this._data) {
        info = this._data.info;
    }

    return info;
}

/**
 * Get all topics.
 * 
 * @return {string[]} List of all topic names.
 */
fireEquip.Game.prototype.getTopics = function() {
    var topics  = [];
    var index   = 0;

    if ("object" === typeof this._data) {

        for(index = 0; index < this._data.topics.length; ++index) {
            topics.push(this._data.topics[index].name);
        }
    }

    return topics;
};

/**
 * Select a topic.
 * 
 * @param {string} topicName - The name of the topic, which to select.
 */
fireEquip.Game.prototype.selectTopic = function(topicName) {
    var index   = 0;
    var promise = null;

    if ("object" !== typeof this._data) {
        promise = Promise.reject();
    } else {

        this._selectedTopic = null;
        while((this._data.topics.length > index) && (null == this._selectedTopic)) {

            if (this._data.topics[index].name === topicName) {
                this._selectedTopic     = this._data.topics[index];
                this._currentLocationId = this._selectedTopic.entryId;
                this._buildMap();
                promise = this._preloadImages().then(function() {
                    this._update();
                }.bind(this));
            } else {
                ++index;
            }
        }
    }

    return promise;
};

/**
 * Get selected topic.
 * 
 * @return {string} Name of the selected topic.
 */
fireEquip.Game.prototype.getSelectedTopic = function() {
    var name = "";

    if (null !== this._selectedTopic) {
        name = this._selectedTopic.name;
    }

    return name;
}

/**
 * Start the quiz game: A item is randomly choosen, which must be found.
 * 
 * @return {Promise}
 */
fireEquip.Game.prototype.start = function() {
    return new Promise(function(resolve, reject) {
        var itemRandomIndex = 0;
        var nextItemFound   = false;
        var itemName        = "";
        var MAX_FOUND_ITEMS = (this._MAX_FOUND_ITEMS < this._foundItems.length) ? this._MAX_FOUND_ITEMS : 1;
        var MIN_ITEMS       = 2;
    
        if (null === this._selectedTopic) {
            reject();
        } else {
            if (MIN_ITEMS <= this._selectedTopic.items.length) {

                while(false == nextItemFound) {
                    itemRandomIndex = Math.floor(Math.random() * this._selectedTopic.items.length);
                    itemName        = this._selectedTopic.items[itemRandomIndex].name;

                    if (false == this._foundItems.includes(itemName)) {
                        nextItemFound = true;

                        this._foundItems.push(itemName);

                        if (MAX_FOUND_ITEMS < this._foundItems.length) {
                            this._foundItems.shift();
                        }
                    }
                }
    
                this._itemToFind = itemName;
                this._update();
            }

            resolve();
        }    
    }.bind(this));
}

/**
 * Get the item, which was randomly choose to find.
 * 
 * @return {string} The item name.
 */
fireEquip.Game.prototype.getItemToFind = function() {
    var name = "";

    if (null !== this._itemToFind) {
        name = this._itemToFind;
    }

    return name;
}

/**
 * @typedef {Object} DirectionInfo
 * @property {string}   name    - The direction name.
 * @property {string}   refId   - The location id where to go.
 */

/**
 * @typedef {Object} LocationInfo
 * @property {string}           id          - The location id.
 * @property {string}           src         - The source link for the location.
 * @property {Object[]}         areas       - List of all related areas.
 * @property {DirectionInfo[]}  directions  - List of all possible directions to go.
 */

/**
 * Get current location.
 * 
 * @return {LocationInfo}
 */
fireEquip.Game.prototype.getLocation = function() {
    var location = null;

    if (null !== this._currentLocationId) {
        location = this._map[this._currentLocationId];
    }

    return location;
}

/**
 * Get all possible directions from the current location.
 * 
 * @return {DirectionInfo}
 */
fireEquip.Game.prototype.getDirections = function() {
    var directions  = [];
    var index       = 0;

    if (null !== this._map) {

        for(index = 0; index < this._map[this._currentLocationId].directions.length; ++index) {
            directions.push(this._map[this._currentLocationId].directions[index]);
        }
    }

    return directions;
};

/**
 * Go along a direction.
 * 
 * @param {string} locationId   - Location id, where to go.
 * @param {string} areaName     - The name of the area, which was selected.
 */
fireEquip.Game.prototype.go = function(locationId, areaName) {
    var location            = null;
    var availableDirections = [];
    var index               = 0;
    var direction           = null;

    if (null === this._map) {
        return;
    }

    location            = this._map[this._currentLocationId];
    availableDirections = location.directions;

    while((availableDirections.length > index) && (null === direction)) {
        if (availableDirections[index].refId === locationId) {
            direction = availableDirections[index];
        } else {
            ++index;
        }
    }

    if (null !== direction) {

        if (direction.refId in this._map) {
            this._currentLocationId = direction.refId;
            this._update();
        }

        isSuccessful = true;
    }

    if (this._itemToFind === areaName) {
        this._notifySuccess()
        this.start();
    }
};
