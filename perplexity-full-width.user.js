// ==UserScript==
// @name         Full Width Perplexity Attachments & Tables
// @namespace    https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width/
// @author       https://github.com/IanWardell/
// @version      1.1.0
// @description  Ensure output tables AND attachment grids display full width on Perplexity
// @match        *://*.perplexity.ai/*
// @all-frames   true
// @run-at       document-idle
// @grant        none
// @updateURL    https://raw.githubusercontent.com/IanWardell/TamperMonkey-Perplexity-Full-Width/main/perplexity-full-width.user.js
// @downloadURL  https://raw.githubusercontent.com/IanWardell/TamperMonkey-Perplexity-Full-Width/main/perplexity-full-width.user.js
// @license      MIT
// ==/UserScript==

(function(){'use strict';
    const DEBUG = true;
    const LOG_PREFIX = '[PerplexityWide]';
    const log = (...args) => { if (DEBUG) try { console.log(LOG_PREFIX, ...args); } catch(_e) {} };

    function stretchAttachments() {
        log('stretchAttachments() start');
        // Table groups and output tables
        document.querySelectorAll('div.group.relative').forEach(group => {
            group.style.width = 'fit-content';
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

        // group.relative.flex wrappers
        document.querySelectorAll('div.group.relative.flex').forEach(flexGroup => {
            flexGroup.style.width = '100%';
            flexGroup.style.maxWidth = '100vw';
        });

        // Grid columns
        document.querySelectorAll('.gap-sm.grid > .min-w-0').forEach(col => {
            col.style.width = '100%';
            col.style.maxWidth = '100vw';
        });

        // File-attachment list rows
        document.querySelectorAll('.line-clamp-1').forEach(row => {
            row.style.maxWidth = '100vw';
        });

        log('stretchAttachments() done');
    }

    function debounce(fn, delay = 150) {
        let t; 
        return (...args) => { clearTimeout(t); t = setTimeout(() => fn.apply(null, args), delay); };
    }
    const debouncedStretch = debounce(stretchAttachments, 150);

    function init() {
        log('init');
        stretchAttachments();
        const mo = new MutationObserver(() => debouncedStretch());
        mo.observe(document.body, { childList: true, subtree: true });
        log('MutationObserver active');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
