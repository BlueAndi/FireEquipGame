var menu = {}

menu.data = [{
    "title": "Home",
    "hyperRef": "/fireEquipGame/index.html"
}];

menu.create = function(ulId) {
    var index       = 0;
    var listItem    = null;
    var anchor      = null;

    for(index = 0; index < menu.data.length; ++index) {
        if ("undefined" === typeof menu.data[index].subMenu) {
            menu._createMenuItem(ulId, menu.data[index]);
        } else {
            menu._createSubMenu(ulId, menu.data[index]);
        }
    }
};

menu._createMenuItem = function(ulId, menuItem) {
    var listItem    = $("<li>").attr("class", "nav-item");
    var anchor      = $("<a>")
                    .attr("class", "nav-link")
                    .attr("href", menuItem.hyperRef)
                    .text(menuItem.title);
    
    if (location.pathname === menuItem.hyperRef) {
        $(anchor).addClass("active");
    }

    $(listItem).append(anchor)
    $("#" + ulId).append(listItem)
};

menu._createSubMenu = function(ulId, menuItem) {
    var listItem    = $("<li>").attr("class", "nav-item dropdown");
    var anchor      = $("<a>")
                    .attr("class", "nav-link dropdown-toggle")
                    .attr("href", "#")
                    .attr("id", menuItem.title + "-dropdown")
                    .attr("role", "button")
                    .attr("data-toggle", "dropdown")
                    .attr("aria-haspopup", "true")
                    .attr("aria-expanded", "false")
                    .text(menuItem.title);
    var div         = $("<div>")
                    .attr("class", "dropdown-menu")
                    .attr("aria-labelledby", menuItem.title + "-dropdown");
    var index       = 0;

    for(index = 0; index < menuItem.subMenu.length; ++index) {
        if (true === menu._createSubMenuItem(div, menuItem.subMenu[index])) {
            $(listItem).addClass("active");
        }
    }

    $(listItem).append(anchor);
    $(listItem).append(div);
    $("#" + ulId).append(listItem);
};

menu._createSubMenuItem = function($div, subMenuItem) {
    var anchor      = $("<a>")
                    .attr("class", "dropdown-item")
                    .attr("href", subMenuItem.hyperRef)
                    .text(subMenuItem.title);
    var isActive    = false;
    
    $($div).append(anchor);

    if (location.pathname === subMenuItem.hyperRef) {
        $(anchor).addClass("active");
        isActive = true;
    }

    return isActive;
};
