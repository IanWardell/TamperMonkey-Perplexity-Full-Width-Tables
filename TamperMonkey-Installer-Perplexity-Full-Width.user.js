// ==UserScript==
// @name         TamperMonkey Installer - Perplexity Full Width (tables & attachments)
// @namespace    https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width/
// @author       https://github.com/IanWardell/
// @version      1.0.1
// @description  Lightweight loader that fetches and runs the latest Perplexity Full Width script from GitHub. Safe to install on any *.perplexity.ai page.
// @match        *://*.perplexity.ai/*
// @all-frames   true
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @connect      raw.githubusercontent.com
// @connect      githubusercontent.com
// @connect      github.com
// @updateURL    https://raw.githubusercontent.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/main/TamperMonkey-Installer-Perplexity-Full-Width.user.js
// @downloadURL  https://raw.githubusercontent.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/main/TamperMonkey-Installer-Perplexity-Full-Width.user.js
// ==/UserScript==

(function(){'use strict';
    const LOG_PREFIX = '[PerplexityWide-Installer]';
    const SOURCE_URL = 'https://raw.githubusercontent.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/main/perplexity-full-width.user.js';

    function log(...args){ try{ console.log(LOG_PREFIX, ...args); }catch(_e){} }

    function runCode(source){ 
        try {
            const el = document.createElement('script');
            el.type = 'text/javascript';
            el.textContent = source;
            (document.head || document.documentElement || document.body || document).appendChild(el);
            el.remove();
            log('Loaded main script from remote');
        } catch (e) {
            console.error(LOG_PREFIX, 'Execution error:', e);
        }
    }

    function fetchAndRun(){ 
        log('Fetching', SOURCE_URL);
        GM_xmlhttpRequest({
            method: 'GET',
            url: SOURCE_URL,
            onload: function(resp){ 
                if (resp.status >= 200 && resp.status < 300) {
                    runCode(resp.responseText);
                } else {
                    console.warn(LOG_PREFIX, 'HTTP', resp.status, '- falling back to embedded minimal safe no-op.');
                }
            },
            onerror: function(e) {
                console.warn(LOG_PREFIX, 'Network error', e);
            }
        });
    }

    // Menu command to re-fetch latest without reinstall
    try {
        GM_registerMenuCommand('Reload Perplexity Full Width (fetch latest)', fetchAndRun);
    } catch(_e) { /* optional */ }

    fetchAndRun();
})();
