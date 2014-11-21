// ==UserScript==
// @name         SO Underline Links
// @description  Adds dotted underline to links in posts.
// @version      0.1
// @author       Jason C
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

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.post-text a { border-bottom: 1px dotted #808080; }');
document.head.appendChild(style);
