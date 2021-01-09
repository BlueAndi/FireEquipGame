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

function createGameModel() {
    var creator = new fireEquip.Creator();
    var topic   = "TSF-W (46/1)";
    
    creator.createGame("Wo ist was im Fahrzeug?", "Andreas Merkle", "2021", "FFw Roggenburg", "v0.1");
    creator.appendTopic(topic, "./images/FFw-Roggenburg-46-1-1.jpg");

    /* ******************************************************************************** */

    creator.appendLocation(topic, "front", "Feuerwehrauto von vorne", "./images/FFw-Roggenburg-46-1-37.jpg");

    creator.appendLocation(topic, "tail", "Feuerwehrauto von hinten", "./images/FFw-Roggenburg-46-1-32.jpg");

    creator.appendLocation(topic, "right", "Feuerwehrauto von rechts", "./images/FFw-Roggenburg-46-1-1.jpg");
    creator.appendLocationArea(topic, "right", "right_door_1", "Beifahrertüre", "poly", "1128,818,1284,815,1310,741,1386,699,1377,541,1263,402,1216,389,1097,378,1103,574,1098,699,1127,710");
    creator.appendLocationArea(topic, "right", "right_door_2", "Mannschaftstüre rechts", "rect", "885,815,1100,376");
    creator.appendLocationArea(topic, "right", "right_g2", "G2", "rect", "549,343,799,824");
    creator.appendLocationArea(topic, "right", "right_g4", "G4", "rect", "58,339,527,732");
    creator.appendLocationArea(topic, "right", "right_storage", "Staufach rechts", "poly", "88,800,300,808,301,727,91,717");
    creator.appendLocationArea(topic, "right", "", "Lichtmast", "poly", "824,744,841,742,842,695,848,579,849,389,865,395,864,352,879,303,834,298,824,330,821,724");

    creator.appendLocation(topic, "right_door_1", "Feuerwehrauto von rechts - Geöffnete Beifahrertüre", "./images/FFw-Roggenburg-46-1-5.jpg");
    creator.appendLocationArea(topic, "right_door_1", "", "Beifahrertüre rechts innen", "poly", "1157,805,1256,804,1292,727,1330,668,1340,529,1350,511,1263,411,1194,395,1116,385,1117,578");
    creator.appendLocationArea(topic, "right_door_1", "right_door_2", "Mannschaftstüre rechts", "poly", "887,813,1093,815,1100,382,895,373");
    creator.appendLocationArea(topic, "right_door_1", "right_g2", "G2", "poly", "540,817,796,817,809,348,555,345");
    creator.appendLocationArea(topic, "right_door_1", "right_g4", "G4", "poly", "44,705,524,728,536,346,67,339");
    creator.appendLocationArea(topic, "right_door_1", "right_storage", "Staufach rechts", "poly", "87,797,297,807,303,731,92,717");
    creator.appendLocationArea(topic, "right_door_1", "", "Lichtmast", "poly", "824,744,841,742,842,695,848,579,849,389,865,395,864,352,879,303,834,298,824,330,821,724");

    creator.appendLocation(topic, "right_door_2", "Feuerwehrauto von rechts - Geöffnete Mannschaftstüre", "./images/FFw-Roggenburg-46-1-6.jpg");
    creator.appendLocationArea(topic, "right_door_2", "right_door_1", "Beifahrertüre", "poly", "1137,815,1283,818,1300,760,1340,711,1392,694,1386,542,1273,419,1239,402,1133,389,1138,554");
    creator.appendLocationArea(topic, "right_door_2", "", "Mannschaftstüre rechts innen", "poly", "905,811,1071,807,1083,534,1075,386,912,385,902,576,894,790");
    creator.appendLocationArea(topic, "right_door_2", "right_g2", "G2", "poly", "540,813,801,818,812,352,557,345");
    creator.appendLocationArea(topic, "right_door_2", "right_g4", "G4", "poly", "45,702,522,728,539,343,68,336");
    creator.appendLocationArea(topic, "right_door_2", "right_storage", "Staufach rechts", "poly", "91,798,303,810,301,728,94,720");
    creator.appendLocationArea(topic, "right_door_2", "", "Lichtmast", "poly", "824,744,841,742,842,695,848,579,849,389,865,395,864,352,879,303,834,298,824,330,821,724");

    creator.appendLocation(topic, "right_g2", "Feuerwehrauto von rechts - G2 geöffnet", "./images/FFw-Roggenburg-46-1-2.jpg");
    creator.appendLocationArea(topic, "right_g2", "right_door_1", "Beifahrertüre rechts", "poly", "1128,814,1283,818,1299,757,1343,718,1382,694,1383,539,1273,409,1201,386,1104,382,1103,701,1133,708");
    creator.appendLocationArea(topic, "right_g2", "right_door_2", "Mannschaftstüre rechts", "poly", "888,813,1096,813,1096,381,894,372");
    creator.appendLocationArea(topic, "right_g2", "right_g2_l1", "G2 innen", "poly", "543,808,788,817,802,350,552,348");
    creator.appendLocationArea(topic, "right_g2", "right_g4", "G4", "poly", "45,698,526,724,539,342,71,336");
    creator.appendLocationArea(topic, "right_g2", "right_storage", "Staufach rechts", "poly", "89,797,303,810,304,730,92,717");
    creator.appendLocationArea(topic, "right_g2", "", "Lichtmast", "poly", "824,744,841,742,842,695,848,579,849,389,865,395,864,352,879,303,834,298,824,330,821,724");

    creator.appendLocation(topic, "right_g4", "Feuerwehrauto von rechts - G4 geöffnet", "./images/FFw-Roggenburg-46-1-3.jpg");
    creator.appendLocationArea(topic, "right_g4", "right_door_1", "Beifahrertüre rechts", "poly", "1130,818,1282,820,1304,754,1349,711,1390,697,1387,542,1279,416,1220,392,1098,378,1101,701,1130,711");
    creator.appendLocationArea(topic, "right_g4", "right_door_2", "Mannschaftstüre rechts", "poly", "884,815,1094,815,1094,379,895,373");
    creator.appendLocationArea(topic, "right_g4", "right_g2", "G2", "poly", "540,811,795,820,806,355,553,346");
    creator.appendLocationArea(topic, "right_g4", "right_g4_l1", "G4 innen", "poly", "48,702,523,727,536,346,65,336");
    creator.appendLocationArea(topic, "right_g4", "right_storage", "Staufach rechts", "poly", "89,797,303,810,304,730,92,717");
    creator.appendLocationArea(topic, "right_g4", "", "Lichtmast", "poly", "824,744,841,742,842,695,848,579,849,389,865,395,864,352,879,303,834,298,824,330,821,724");

    creator.appendLocation(topic, "right_storage", "Feuerwehrauto von rechts - Staufach geöffnet", "./images/FFw-Roggenburg-46-1-4.jpg");
    creator.appendLocationArea(topic, "right_storage", "right_door_1", "Beifahrertüre rechts", "poly", "1131,815,1284,815,1313,740,1386,692,1382,545,1270,405,1191,383,1100,378,1101,699,1130,711");
    creator.appendLocationArea(topic, "right_storage", "right_door_2", "Mannschaftstüre rechts", "poly", "885,813,1090,814,1096,378,895,372");
    creator.appendLocationArea(topic, "right_storage", "right_g2", "G2", "poly", "542,814,796,815,806,350,557,346");
    creator.appendLocationArea(topic, "right_storage", "right_g4", "G4", "poly", "55,694,522,724,535,346,67,336");
    creator.appendLocationArea(topic, "right_storage", "right_storage_l1", "Staufach rechts innen", "poly", "101,794,303,805,303,728,102,721");
    creator.appendLocationArea(topic, "right_storage", "", "Lichtmast", "poly", "824,744,841,742,842,695,848,579,849,389,865,395,864,352,879,303,834,298,824,330,821,724");

    creator.appendLocation(topic, "right_g2_l1", "Feuerwehrauto von rechts - G2 geöffnet", "./images/FFw-Roggenburg-46-1-7.jpg");

    creator.appendLocation(topic, "right_g4_l1", "Feuerwehrauto von rechts - G4 geöffnet", "./images/FFw-Roggenburg-46-1-8.jpg");

    creator.appendLocation(topic, "right_storage_l1", "Feuerwehrauto von rechts - Staufach geöffnet", "./images/FFw-Roggenburg-46-1-9.jpg");
    creator.appendLocationArea(topic, "right_storage_l1", "", "Wassertank Druckabgang B", "circle", "274,360,72");
    creator.appendLocationArea(topic, "right_storage_l1", "", "Wassertank Zulauf B", "circle", "288,566,76");
    creator.appendLocationArea(topic, "right_storage_l1", "", "Verteiler mit 1x B-Schlauch", "poly", "482,582,575,602,781,605,905,585,943,555,1213,549,1224,428,1117,415,1151,379,1201,375,1143,300,1103,328,1120,356,1074,396,1071,355,1048,322,991,333,967,358,971,398,951,425,899,413,858,426,713,408,701,339,668,309,629,340,504,342,437,393,417,432,436,536,456,566");

    creator.appendLocation(topic, "left", "Feuerwehrauto von links", "./images/FFw-Roggenburg-46-1-15.jpg");
    creator.appendLocationArea(topic, "left", "left_door_1", "Fahrertüre", "poly", "330,802,479,797,476,697,502,685,489,368,354,386,310,416,221,532,224,687,286,714,311,750");
    creator.appendLocationArea(topic, "left", "left_door_2", "Mannschaftstüre links", "poly", "512,795,719,791,695,358,492,368");
    creator.appendLocationArea(topic, "left", "left_g1", "G1", "poly", "798,800,1057,791,1030,316,774,330");
    creator.appendLocationArea(topic, "left", "left_g3", "G3", "poly", "1050,316,1067,699,1556,662,1535,293");
    creator.appendLocationArea(topic, "left", "left_storage", "Staufach links", "poly", "1292,777,1532,760,1551,708,1548,681,1292,694");

    creator.appendLocation(topic, "left_door_1", "Feuerwehrauto von links - Geöffnete Fahrertüre", "./images/FFw-Roggenburg-46-1-19.jpg");
    creator.appendLocationArea(topic, "left_door_1", "", "Fahrertüre innen", "poly", "356,788,444,788,463,758,479,627,483,372,356,395,240,519,267,682");
    creator.appendLocationArea(topic, "left_door_1", "left_door_2", "Mannschaftstüre links", "poly", "494,369,513,795,716,788,696,355");
    creator.appendLocationArea(topic, "left_door_1", "left_g1", "G1", "poly", "778,333,804,792,1057,782,1031,318");
    creator.appendLocationArea(topic, "left_door_1", "left_g3", "G3", "poly", "1050,320,1067,699,1546,665,1532,293");
    creator.appendLocationArea(topic, "left_door_1", "left_storage", "Staufach links", "poly", "1292,698,1292,777,1533,758,1551,701,1551,675");

    creator.appendLocation(topic, "left_door_2", "Feuerwehrauto von links - Geöffnete Mannschaftstüre", "./images/FFw-Roggenburg-46-1-20.jpg");
    creator.appendLocationArea(topic, "left_door_2", "left_door_1", "Fahrertüre", "poly", "330,802,479,797,476,697,502,685,489,368,354,386,310,416,221,532,224,687,286,714,311,750");
    creator.appendLocationArea(topic, "left_door_2", "", "Mannschaftstüre links innen", "poly", "517,372,682,368,702,777,539,784,516,549,513,449");
    creator.appendLocationArea(topic, "left_door_2", "left_g1", "G1", "poly", "798,800,1057,791,1030,316,774,330");
    creator.appendLocationArea(topic, "left_door_2", "left_g3", "G3", "poly", "1050,316,1067,699,1556,662,1535,293");
    creator.appendLocationArea(topic, "left_door_2", "left_storage", "Staufach links", "poly", "1292,777,1532,760,1551,708,1548,681,1292,694");

    creator.appendLocation(topic, "left_g1", "Feuerwehrauto von links - G1 geöffnet", "./images/FFw-Roggenburg-46-1-16.jpg");
    creator.appendLocationArea(topic, "left_g1", "left_door_1", "Fahrertüre", "poly", "330,802,479,797,476,697,502,685,489,368,354,386,310,416,221,532,224,687,286,714,311,750");
    creator.appendLocationArea(topic, "left_g1", "left_door_2", "Mannschaftstüre links", "poly", "512,795,719,791,695,358,492,368");
    creator.appendLocationArea(topic, "left_g1", "left_g1_l1", "G1 innen", "poly", "802,798,776,338,1027,323,1050,782");
    creator.appendLocationArea(topic, "left_g1", "left_g3", "G3", "poly", "1050,316,1067,699,1556,662,1535,293");
    creator.appendLocationArea(topic, "left_g1", "left_storage", "Staufach links", "poly", "1292,777,1532,760,1551,708,1548,681,1292,694");

    creator.appendLocation(topic, "left_g3", "Feuerwehrauto von links - G3 geöffnet", "./images/FFw-Roggenburg-46-1-17.jpg");
    creator.appendLocationArea(topic, "left_g3", "left_door_1", "Fahrertüre", "poly", "330,802,479,797,476,697,502,685,489,368,354,386,310,416,221,532,224,687,286,714,311,750");
    creator.appendLocationArea(topic, "left_g3", "left_door_2", "Mannschaftstüre links", "poly", "512,795,719,791,695,358,492,368");
    creator.appendLocationArea(topic, "left_g3", "left_g1", "G1", "poly", "798,800,1057,791,1030,316,774,330");
    creator.appendLocationArea(topic, "left_g3", "left_g3_l1", "G3 innen", "poly", "1073,699,1054,350,1515,330,1542,664");
    creator.appendLocationArea(topic, "left_g3", "left_storage", "Staufach links", "poly", "1292,777,1532,760,1551,708,1548,681,1292,694");

    creator.appendLocation(topic, "left_storage", "Feuerwehrauto von links", "./images/FFw-Roggenburg-46-1-18.jpg");
    creator.appendLocationArea(topic, "left_storage", "left_door_1", "Fahrertüre", "poly", "330,802,479,797,476,697,502,685,489,368,354,386,310,416,221,532,224,687,286,714,311,750");
    creator.appendLocationArea(topic, "left_storage", "left_door_2", "Mannschaftstüre links", "poly", "512,795,719,791,695,358,492,368");
    creator.appendLocationArea(topic, "left_storage", "left_g1", "G1", "poly", "798,800,1057,791,1030,316,774,330");
    creator.appendLocationArea(topic, "left_storage", "left_g3", "G3", "poly", "1050,316,1067,699,1556,662,1535,293");
    creator.appendLocationArea(topic, "left_storage", "left_storage_l1", "Staufach links innen", "poly", "1293,774,1526,760,1525,684,1296,698");

    creator.appendLocation(topic, "left_g1_l1", "Feuerwehrauto von links - G1 geöffnet", "./images/FFw-Roggenburg-46-1-21.jpg");
    
    creator.appendLocation(topic, "left_g3_l1", "Feuerwehrauto von links - G3 geöffnet", "./images/FFw-Roggenburg-46-1-22.jpg");

    creator.appendLocation(topic, "left_storage_l1", "Feuerwehrauto von links - Staufach geöffnet", "./images/FFw-Roggenburg-46-1-24.jpg");
    creator.appendLocationArea(topic, "left_storage_l1", "", "Schlauchbrücken", "poly", "784,611,1168,602,1173,536,1189,499,1163,402,1163,257,728,263,323,283,324,408,290,506,323,538,311,562,331,612");
    creator.appendLocationArea(topic, "left_storage_l1", "", "Klettband für B-Schläuche", "poly", "1206,519,1267,516,1279,475,1297,438,1290,406,1263,399,1251,422,1210,426");

    /* ******************************************************************************** */

    creator.appendDirection(topic, "front", "links", "right");
    creator.appendDirection(topic, "front", "rechts", "left");

    creator.appendDirection(topic, "tail", "links", "left");
    creator.appendDirection(topic, "tail", "rechts", "right");

    creator.appendDirection(topic, "right", "links", "tail");
    creator.appendDirection(topic, "right", "rechts", "front");
    creator.appendDirection(topic, "right", "Öffne Beifahrertüre", "right_door_1");
    creator.appendDirection(topic, "right", "Öffne Mannschaftstüre rechts", "right_door_2");
    creator.appendDirection(topic, "right", "Öffne G2", "right_g2");
    creator.appendDirection(topic, "right", "Öffne G4", "right_g4");
    creator.appendDirection(topic, "right", "Öffne Stauchfach", "right_storage");

    creator.appendDirection(topic, "right_door_1", "links", "tail");
    creator.appendDirection(topic, "right_door_1", "rechts", "front");
    creator.appendDirection(topic, "right_door_1", "Beifahrertüre schließen", "right");
    creator.appendDirection(topic, "right_door_1", "Öffne Mannschaftstüre rechts", "right_door_2");
    creator.appendDirection(topic, "right_door_1", "Öffne G2", "right_g2");
    creator.appendDirection(topic, "right_door_1", "Öffne G4", "right_g4");
    creator.appendDirection(topic, "right_door_1", "Öffne Stauchfach", "right_storage");

    creator.appendDirection(topic, "right_door_2", "links", "tail");
    creator.appendDirection(topic, "right_door_2", "rechts", "front");
    creator.appendDirection(topic, "right_door_2", "Mannschaftstüre schließen", "right");
    creator.appendDirection(topic, "right_door_2", "Öffne Beifahrertüre", "right_door_1");
    creator.appendDirection(topic, "right_door_2", "Öffne G2", "right_g2");
    creator.appendDirection(topic, "right_door_2", "Öffne G4", "right_g4");
    creator.appendDirection(topic, "right_door_2", "Öffne Stauchfach", "right_storage");

    creator.appendDirection(topic, "right_g2", "links", "tail");
    creator.appendDirection(topic, "right_g2", "rechts", "front");
    creator.appendDirection(topic, "right_g2", "G2 schließen", "right");
    creator.appendDirection(topic, "right_g2", "Öffne Beifahrertüre", "right_door_1");
    creator.appendDirection(topic, "right_g2", "Öffne Mannschaftstüre rechts", "right_door_2");
    creator.appendDirection(topic, "right_g2", "G2 innen", "right_g2_l1");
    creator.appendDirection(topic, "right_g2", "Öffne G4", "right_g4");
    creator.appendDirection(topic, "right_g2", "Öffne Stauchfach", "right_storage");

    creator.appendDirection(topic, "right_g4", "links", "tail");
    creator.appendDirection(topic, "right_g4", "rechts", "front");
    creator.appendDirection(topic, "right_g4", "G4 schließen", "right");
    creator.appendDirection(topic, "right_g4", "Öffne Beifahrertüre", "right_door_1");
    creator.appendDirection(topic, "right_g4", "Öffne Mannschaftstüre rechts", "right_door_2");
    creator.appendDirection(topic, "right_g4", "Öffne G2", "right_g2");
    creator.appendDirection(topic, "right_g4", "G4 innen", "right_g4_l1");
    creator.appendDirection(topic, "right_g4", "Öffne Stauchfach", "right_storage");

    creator.appendDirection(topic, "right_storage", "links", "tail");
    creator.appendDirection(topic, "right_storage", "rechts", "front");
    creator.appendDirection(topic, "right_storage", "Stauchfach schließen", "right");
    creator.appendDirection(topic, "right_storage", "Öffne Beifahrertüre", "right_door_1");
    creator.appendDirection(topic, "right_storage", "Öffne Mannschaftstüre rechts", "right_door_2");
    creator.appendDirection(topic, "right_storage", "Öffne G2", "right_g2");
    creator.appendDirection(topic, "right_storage", "Öffne G4", "right_g4");
    creator.appendDirection(topic, "right_storage", "Stauchfach rechts innen", "right_storage_l1");

    creator.appendDirection(topic, "right_g2_l1", "Zurück", "right_g2");

    creator.appendDirection(topic, "right_g4_l1", "Zurück", "right_g4");

    creator.appendDirection(topic, "right_storage_l1", "Zurück", "right_storage");

    creator.appendDirection(topic, "left", "links", "front");
    creator.appendDirection(topic, "left", "rechts", "tail");
    creator.appendDirection(topic, "left", "Öffne Fahrertüre", "left_door_1");
    creator.appendDirection(topic, "left", "Öffne Mannschaftstüre links", "left_door_2");
    creator.appendDirection(topic, "left", "Öffne G1", "left_g1");
    creator.appendDirection(topic, "left", "Öffne G3", "left_g3");
    creator.appendDirection(topic, "left", "Öffne Stauchfach", "left_storage");

    creator.appendDirection(topic, "left_door_1", "links", "front");
    creator.appendDirection(topic, "left_door_1", "rechts", "tail");
    creator.appendDirection(topic, "left_door_1", "Fahrertüre schließen", "left");
    creator.appendDirection(topic, "left_door_1", "Öffne Mannschaftstüre links", "left_door_2");
    creator.appendDirection(topic, "left_door_1", "Öffne G1", "left_g1");
    creator.appendDirection(topic, "left_door_1", "Öffne G3", "left_g3");
    creator.appendDirection(topic, "left_door_1", "Öffne Stauchfach", "left_storage");

    creator.appendDirection(topic, "left_door_2", "links", "front");
    creator.appendDirection(topic, "left_door_2", "rechts", "tail");
    creator.appendDirection(topic, "left_door_2", "Mannschaftstüre schließen", "left");
    creator.appendDirection(topic, "left_door_2", "Öffne Fahrertüre", "left_door_1");
    creator.appendDirection(topic, "left_door_2", "Öffne G1", "left_g1");
    creator.appendDirection(topic, "left_door_2", "Öffne G3", "left_g3");
    creator.appendDirection(topic, "left_door_2", "Öffne Stauchfach", "left_storage");

    creator.appendDirection(topic, "left_g1", "links", "front");
    creator.appendDirection(topic, "left_g1", "rechts", "tail");
    creator.appendDirection(topic, "left_g1", "G1 schließen", "left");
    creator.appendDirection(topic, "left_g1", "Öffne Fahrertüre", "left_door_1");
    creator.appendDirection(topic, "left_g1", "Öffne Mannschaftstüre links", "left_door_2");
    creator.appendDirection(topic, "left_g1", "G1 innen", "left_g1_l1");
    creator.appendDirection(topic, "left_g1", "Öffne G3", "left_g3");
    creator.appendDirection(topic, "left_g1", "Öffne Stauchfach", "left_storage");

    creator.appendDirection(topic, "left_g3", "links", "front");
    creator.appendDirection(topic, "left_g3", "rechts", "tail");
    creator.appendDirection(topic, "left_g3", "G3 schließen", "left");
    creator.appendDirection(topic, "left_g3", "Öffne Fahrertüre", "left_door_1");
    creator.appendDirection(topic, "left_g3", "Öffne Mannschaftstüre links", "left_door_2");
    creator.appendDirection(topic, "left_g3", "Öffne G1", "left_g1");
    creator.appendDirection(topic, "left_g3", "G3 innen", "left_g3_l1");
    creator.appendDirection(topic, "left_g3", "Öffne Stauchfach", "left_storage");

    creator.appendDirection(topic, "left_storage", "links", "front");
    creator.appendDirection(topic, "left_storage", "rechts", "tail");
    creator.appendDirection(topic, "left_storage", "Stauchfach schließen", "left");
    creator.appendDirection(topic, "left_storage", "Öffne Fahrertüre", "left_door_1");
    creator.appendDirection(topic, "left_storage", "Öffne Mannschaftstüre links", "left_door_2");
    creator.appendDirection(topic, "left_storage", "Öffne G1", "left_g1");
    creator.appendDirection(topic, "left_storage", "Öffne G3", "left_g3");
    creator.appendDirection(topic, "left_storage", "Stauchfach links innen", "left_storage_l1");

    creator.appendDirection(topic, "left_g1_l1", "Zurück", "right_g1");

    creator.appendDirection(topic, "left_g3_l1", "Zurück", "right_g3");

    creator.appendDirection(topic, "left_storage_l1", "Zurück", "left_storage");

    /* ******************************************************************************** */
    
    creator.setEntryId(topic, "right");

    /* Add items to search for in the quiz. */
    creator.appendItem(topic, "G1");
    creator.appendItem(topic, "G2");
    creator.appendItem(topic, "G3");
    creator.appendItem(topic, "G4");
    creator.appendItem(topic, "Wassertank Druckabgang B");
    creator.appendItem(topic, "Wassertank Zulauf B");
    creator.appendItem(topic, "Verteiler mit 1x B-Schlauch");
    creator.appendItem(topic, "Schlauchbrücken");
    creator.appendItem(topic, "Klettband für B-Schläuche");
    creator.appendItem(topic, "Lichtmast");

    return creator.getGame();
};
