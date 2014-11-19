// ==UserScript==
// @name         SO Horizontal Comment Action 
// @namespace    
// @include      *stackoverflow.*
// @grant        none
// ==/UserScript==

var actions = document.querySelectorAll('.comment-actions');

for (var n = 0; n < actions.length; ++ n) {
    
    // find second td of second tr, move it to first tr, then remove second tr.
    
    var parent = actions[n].getElementsByTagName('tbody')[0];
    var dsttr = parent.getElementsByTagName('tr')[0];
    var srctr = parent.getElementsByTagName('tr')[1];
    var srctd = srctr.getElementsByTagName('td')[1];
    
    srctr.removeChild(srctd);
    dsttr.appendChild(srctd);
    parent.removeChild(srctr);
    
}