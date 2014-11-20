// ==UserScript==
// @name         SO Horizontal Comment Action
// @author       Jason C
// @description  Put comment flag icon next to vote icon instead of below it.
// @version      0.6
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


// Adjusts comment action formatting. 'actions' is a list of .comment-actions tables.

function modifyCommentActions (actions) {
    
    for (var n = 0; n < actions.length; ++ n) {
    
        // find second td of second tr (the flag icon), move it to first tr (next to vote action),
        // then remove second tr (now unused).
        var parent = actions[n].getElementsByTagName('tbody')[0];
        var rows = parent.getElementsByTagName('tr');
        var dsttr = rows[0];
        var srctr = rows[1];
  
        if (srctr) { // your own comments won't have this row (you can't flag them).
            var srctd = srctr.getElementsByTagName('td')[1];        
            srctr.removeChild(srctd);
            dsttr.appendChild(srctd);
            parent.removeChild(srctr);
        }
        
    }

}


// Apply formatting to all pre-existing comment blocks.

modifyCommentActions(document.querySelectorAll('.comment-actions'));


// Watch for changes to apply formatting to new comment blocks (e.g. when showing hidden commments).

var commentObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function (mutation) {
        modifyCommentActions(mutation.target.querySelectorAll('.comment-actions'));
    });
});

var commentBlocks = document.querySelectorAll('div.comments table tbody');

var observerOptions = {
    subtree: false,
    childList: true, 
    attributes: false,
    characterData: false,
}

for (var k = 0; k < commentBlocks.length; ++ k) {
    commentObserver.observe(commentBlocks[k], observerOptions);
}
