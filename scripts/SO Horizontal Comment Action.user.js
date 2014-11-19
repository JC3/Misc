// ==UserScript==
// @name         SO Horizontal Comment Action
// @author       Jason C
// @description  Put comment flag icon next to vote icon instead of below it.
// @namespace    
// @include http*://*.stackexchange.com*
// @include http*://*.stackoverflow.com*
// @include http*://stackoverflow.com*
// @include http*://*.superuser.com*
// @include http*://superuser.com*
// @include http*://*.serverfault.com*
// @include http*://serverfault.com*
// @include http*://*.stackapps.com*
// @include http*://stackapps.com*
// @grant        none
// ==/UserScript==

var actions = document.querySelectorAll('.comment-actions');

for (var n = 0; n < actions.length; ++ n) {
    
    // find second td of second tr, move it to first tr, then remove second tr.
    
    var parent = actions[n].getElementsByTagName('tbody')[0];
    var rows = parent.getElementsByTagName('tr');
    var dsttr = rows[0];
    var srctr = rows[1];
    var srctd = srctr.getElementsByTagName('td')[1];
    
    srctr.removeChild(srctd);
    dsttr.appendChild(srctd);
    parent.removeChild(srctr);
    
}
