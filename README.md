# 🧩 TamperMonkey-Perplexity-Full-Width
TamperMonkey Script to make Perplexity Tables Output Full-Width

**Author:** [IanWardell](https://github.com/IanWardell)  
**License:** MIT  
**Version:** 1.1.0  

> Ensure output **tables and attachment grids** in [Perplexity.ai](https://www.perplexity.ai) display full width, even inside multi-column layouts or flex attachment groups.  
> Designed to fix the constrained table/attachment rendering used in the default UI.

---

## 📦 Installation Options

### ✅ Recommended: Installer (auto-updates)
This lightweight loader always fetches the latest stable build of the main script.

[**▶ Install TamperMonkey-Installer-Perplexity-Full-Width.user.js**](https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/raw/refs/heads/main/TamperMonkey-Installer-Perplexity-Full-Width.user.js)

> Keeps your Perplexity layout automatically patched.  
> Includes menu command: “Reload Perplexity Full Width (fetch latest)”.

---

### ⚙️ Direct Install (fixed version)
If you prefer to pin to a specific build:

[**▶ Install perplexity-full-width.user.js**](https://github.com/IanWardell/TamperMonkey-Perplexity-Full-Width-Tables/raw/refs/heads/main/perplexity-full-width.user.js)

---

## 🧠 Features
- Expands all result **tables**, **grids**, and **attachments** to use 100% available width.
- Works across **dynamic mutations** (via `MutationObserver`).
- Includes **debounce protection** for live refreshes.
- Uses simple, **non-intrusive CSS overrides**.
- Debug logging toggle (`DEBUG = true`).

---

## 🛠️ Technical Details
| Component | Purpose |
|------------|----------|
| `perplexity-full-width.user.js` | Main script (runs at `document-idle`, handles DOM manipulation) |
| `TamperMonkey-Installer-Perplexity-Full-Width.user.js` | Loader (runs at `document-start`, fetches latest version, optional menu reload) |

---

## 🧩 Repository Structure
```
TamperMonkey-Perplexity-Full-Width/
│
├── perplexity-full-width.user.js
├── TamperMonkey-Installer-Perplexity-Full-Width.user.js
└── README.md
```

---

## 🔒 Permissions
- `@connect` → `raw.githubusercontent.com`, `githubusercontent.com`, `github.com` (for installer fetch)
- `@grant none` → (for main script)
- No external dependencies or analytics.

---

## 🧾 License
MIT © [IanWardell](https://github.com/IanWardell)
