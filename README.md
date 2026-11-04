# Tire & Rubber Intelligence

This public GitHub Pages repository contains Qian Li's author-controlled tire and rubber industry notes.

**Live site:** [sdliqian2021.github.io/tire-and-rubber-weekly-intelligence-report](https://sdliqian2021.github.io/tire-and-rubber-weekly-intelligence-report/)

The site intentionally uses a simple bilingual blog format:

- `zh/reports/` contains the Chinese-first weekly reports;
- `reports/` preserves the existing English weekly report paths;
- `data/stories.json` keeps one backward-compatible record per story, with optional Chinese display and route fields;
- accepted bilingual reports share stable story anchors, evidence dates, sources, and quantitative facts.

AI agents may help collect, organize, and check public information. The human author may edit any canonical post at any time and explicitly decides when its current version is copied here, committed, and published.

GitHub Pages deploys from the `main` branch and repository root. Drafts, private research records, credentials, source captures, and approval records do not belong in this repository.

## Preview both public sites locally before publishing

From PowerShell or Command Prompt in this repository, run:

```powershell
.\preview.cmd
```

The relative command works after the shell has been changed into this repository. Alternatively, double-click `preview.cmd` in File Explorer. The launcher finds an installed Python 3 even when `python` is not on PATH and, if port 4000 is occupied, selects the first available port through 4010.

The command opens the Technical Thoughts home page and also serves the Intelligence project:

```text
Technical Thoughts: http://127.0.0.1:4000/
Intelligence:       http://127.0.0.1:4000/tire-and-rubber-weekly-intelligence-report/
```

Keep the PowerShell window open. After changing a homepage, report, layout, or CSS file in either public repository, save it and refresh the browser. Navigation between the two sites remains local. Press `Ctrl+C` when finished. This preview does not commit, push, deploy, or modify the public story index.
