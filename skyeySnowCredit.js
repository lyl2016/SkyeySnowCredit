// ==UserScript==
// @name         天雪积分易读转换
// @supportURL   https://github.com/lyl2016/SkyeySnowCredit/
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  天雪积分自动除1073741824方便识读
// @author       Nimaime
// @match        https://skyeysnow.com/home.php?mod=spacecp&ac=credit*
// @match        https://www.skyey2.com/home.php?mod=spacecp&ac=credit*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=skyeysnow.com
// @grant        none
// ==/UserScript==

(function () {
    var creditBar = document.getElementsByClassName("creditl mtm bbda cl")[0];
    if (creditBar == undefined) return;
    for (var i = 0; i < creditBar.children.length; i++) {
        if (creditBar.children[i].className != "") continue;
        if (creditBar.children[i].nodeName != "LI") continue;
        var point = Number(creditBar.children[i].childNodes[1].data) / 1073741824;
        creditBar.children[i].childNodes[1].data = point + " ";
    }
})();