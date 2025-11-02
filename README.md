# Tampermonkey-Perplexity-Full-Width
Tampermonkey script that expands Perplexity tables and attachment grids to use the full available width while respecting the existing UI.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
[![Tampermonkey](https://img.shields.io/badge/Tampermonkey-v4.20%2B-blue)](#prerequisites)

**Quick install:**  
- [Installer (auto-updates)](https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/raw/refs/heads/main/TamperMonkey-Installer-Perplexity-Full-Width.user.js)  
- [Direct install (fixed version)](https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/raw/refs/heads/main/perplexity-full-width.user.js)

**Author:** [IanWardell](https://github.com/IanWardell)  
**License:** MIT  
**Version:** 1.0.2

## Screenshots

| Before | After |
|:-------:|:------:|
| ![Limited Width Sample](https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/blob/main/Images/Limited-Width-Sample.png?raw=true) | ![Full Width Sample](https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/blob/main/Images/Full-Width-Sample.png?raw=true) |

## Prerequisites
- Browser: Chrome 120+ (tested), Firefox 122+, Edge 120+
- Tampermonkey: v4.20+ (required)
- Verified on: Windows 11
- Perplexity.ai UI changes frequently. If the script stops working after a site update, see Troubleshooting and open an issue with details.
- Violentmonkey and Greasemonkey have not been tested. They may work, but they are not officially supported by my testing at this time.

## Installation

### Option A: Installer (auto updates)
1. Install the loader script:  
   https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/raw/refs/heads/main/TamperMonkey-Installer-Perplexity-Full-Width.user.js
2. Open any Perplexity.ai page. The loader fetches and runs the latest main script automatically.
3. Optional: In the Tampermonkey menu, click "Reload Perplexity Full Width (fetch latest)" to force a refresh.

### Option B: Direct install (fixed version)
1. Install the main script:  
   https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/raw/refs/heads/main/perplexity-full-width.user.js
2. Direct installs do not auto update. Reinstall to get new versions later.

## Verify
- Open a Perplexity.ai answer that renders tables or attachment grids.
- Open the DevTools Console and confirm you see log lines prefixed with `[PerplexityWide]`.
- Resize the window. Tables and attachment grids should fill the available width and scroll horizontally when needed.

## Configuration and debug
- The main script has a DEBUG toggle near the top: `const DEBUG = true;`.
- With DEBUG enabled, the console shows detailed messages with the `[PerplexityWide]` prefix.
- To temporarily disable the script, toggle it off in the Tampermonkey dashboard without uninstalling.

## Permissions
- Installer script:
  - Uses `GM_xmlhttpRequest` to fetch the latest code from GitHub.
  - Requires `@connect` for `raw.githubusercontent.com`, `githubusercontent.com`, and `github.com` to allow fetching updates from GitHub.
- Main script:
  - Uses `@grant none`.
  - Does not make network requests or collect data.

## Troubleshooting
Most breakages occur when Perplexity updates class names. Always check the "Scope and selectors used" section first.

- Force reload the page with cache bypass:
  - Windows: `Ctrl+Shift+R`
  - macOS: `Cmd+Shift+R`
- Make sure the script is enabled in Tampermonkey and runs on `*://*.perplexity.ai/*`.
- If elements still do not stretch:
  - In the Console, confirm `[PerplexityWide]` logs appear.
  - Paste the following in the Console to check whether the targeted selectors exist:  
    `document.querySelectorAll('div.group.relative, div.group.relative.flex, .min-w-full, .min-w-0, .gap-sm.grid > .min-w-0, .line-clamp-1').length`
  - If the count is 0 or unexpectedly small, Perplexity may have changed CSS classes.
- When reporting an issue, include:
  - Example URL, steps to reproduce, browser version, Tampermonkey version
  - Console output with DEBUG enabled
  - A screenshot of the relevant DOM structure if possible

## Scope and selectors used
The script currently adjusts width and overflow on:
- `div.group.relative`
- `div.group.relative.flex`
- `.min-w-full`
- `.min-w-0`
- `.gap-sm.grid > .min-w-0`
- `.line-clamp-1`

These class names are subject to change by Perplexity. Breakage is most likely when the service renames or restructures its grid wrappers or table containers.

## Versioning
- Semantic Versioning:
  - MAJOR for breaking changes in behavior or configuration
  - MINOR for new features and selector expansions
  - PATCH for fixes and non-breaking tweaks
- Installer users get new versions automatically.
- Direct install users must reinstall to pick up updates.

## Uninstall or disable
- Tampermonkey Dashboard > locate the script > either:
  - Toggle the switch to disable
  - Click the trash icon to remove

## Security and privacy
- The main script does not send network requests and does not log or transmit user data.
- The installer only fetches the code from this GitHub repository.

## Contributing and issues
- Open issues with:
  - URL and steps to reproduce
  - Browser version and Tampermonkey version
  - Console output with DEBUG enabled
  - Screenshot or snippet of the changed DOM if known
- Pull requests should:
  - Keep the logging prefix consistent: `[PerplexityWide]`
  - Avoid adding dependencies
  - Include a brief note in the changelog

## License
This project is licensed under the [MIT License](./LICENSE).
