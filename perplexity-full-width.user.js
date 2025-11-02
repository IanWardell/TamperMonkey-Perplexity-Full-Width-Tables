// ==UserScript==
// @name         Full Width Perplexity Attachments & Tables
// @namespace    https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width/
// @author       https://github.com/IanWardell/
// @version      1.0.1
// @description  Ensure output tables AND attachment grids display full width on Perplexity
// @match        *://*.perplexity.ai/*
// @all-frames   true
// @run-at       document-idle
// @grant        none
// @updateURL    https://raw.githubusercontent.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/main/perplexity-full-width.user.js
// @downloadURL  https://raw.githubusercontent.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/main/perplexity-full-width.user.js
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    function stretchAttachments() {
        // All table groups and output tables
        document.querySelectorAll('div.group.relative').forEach(group => {
            group.style.width = 'fit-content';
            // Table wrappers and direct tables
            group.querySelectorAll('div.w-full, table').forEach(el => {
                el.style.width = '100%';
                el.style.maxWidth = '100vw';
                el.style.overflowX = 'auto';
            });
        });

        // Attachments/flex layout fixes
        document.querySelectorAll('.min-w-full, .min-w-0').forEach(minw => {
            minw.style.width = '100%';
            minw.style.maxWidth = '100vw';
        });

        // Specifically fix group.relative.flex wrappers, often used for multi-column file attachments
        document.querySelectorAll('div.group.relative.flex').forEach(flexGroup => {
            flexGroup.style.width = '100%';
            flexGroup.style.maxWidth = '100vw';
        });
        // Each column in the grid
        document.querySelectorAll('.gap-sm.grid > .min-w-0').forEach(col => {
            col.style.width = '100%';
            col.style.maxWidth = '100vw';
        });
        // File-attachment lists (common for PDF rows)
        document.querySelectorAll('.line-clamp-1').forEach(row => {
            row.style.maxWidth = '100vw';
        });
    }

    document.addEventListener('DOMContentLoaded', stretchAttachments);
    let observer = new MutationObserver(stretchAttachments);
    observer.observe(document.body, { childList: true, subtree: true });
})();
