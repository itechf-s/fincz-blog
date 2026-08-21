---
title: "Google Antigravity CLI (agy) Guide: Terminal-First AI Agent, Installation, Skills aur Best Practices"
categories: [ AI, Development, Tools ]
tags: [Antigravity CLI, agy, Google Antigravity, AI Agents, Terminal, Guide]
description: "Google Antigravity CLI (agy) ka complete guide: Terminal me AI agent chalane ka tarika, Ubuntu/Windows installation, slash commands, shortcuts, custom skills aur token optimization."
date: 2026-08-21T08:00:00+05:30
lastmod: 2026-08-21T08:25:00+05:30
images: ["images/2026/08/google-antigravity-guide.webp"]
author: ahmad
---

## Introduction

Agar aap ek terminal-lover developer hain aur bina heavy IDE khole seedha command-line se powerful AI coding agent chalana chahte hain, toh **Google Antigravity CLI (`agy`)** aapke liye sabse behtareen tool hai.

`agy` ek lightweight, ultra-fast, terminal-based AI coding assistant hai jo Google DeepMind ke agentic models par chalta hai. Ye seedha aapke bash/zsh shell me rehta hai, files edit karta hai, terminal commands run karta hai, background subagents spawn karta hai aur complex projects ko autonomously manage karta hai.

Is comprehensive guide me hum seekhenge:
1. **Antigravity CLI (`agy`) kya hai aur iske core use cases**
2. **History aur Evolution**
3. **Ubuntu/Linux aur Windows me Step-by-Step Installation**
4. **CLI Flags, TUI Shortcuts aur Slash Commands**
5. **Skills System: Online install karna aur Custom Skills banana**
6. **Token Optimization aur CLI Best Practices**
7. **Configuration: `settings.json` aur Important Terms**

---

## 1. Antigravity CLI (`agy`) kya hai? (What, Why, Where)

### What is `agy`?
`agy` Google Antigravity platform ka official command-line interface (CLI) hai. Ye ek Terminal User Interface (TUI) provide karta hai jaha aap natural language me instructions dete hain aur agent aapke terminal par seedha actions execute karta hai.

```text
┌───────────────────────────────────────────────────────────┐
│                 Antigravity CLI (agy)                     │
├─────────────────┬───────────────────┬─────────────────────┤
│ 1. TUI Session  │ 2. Subagent Engine│ 3. Tool Execution   │
│    (Interactive)│    (Background)   │    (Bash/File Edits)│
├─────────────────┴───────────────────┴─────────────────────┤
│ 4. Config: ~/.gemini/antigravity-cli/settings.json        │
└───────────────────────────────────────────────────────────┘
```

### Why use CLI over GUI/IDE?
- **Blazing Fast & Lightweight:** Zero memory overhead, bina heavy browser ya electron apps ke fast chalta hai.
- **Remote Server / SSH Friendly:** Cloud VPS, AWS EC2, ya headless Linux servers par bina display ke chal sakta hai.
- **Seamless Unix Piping:** Scripting aur terminal workflows me asani se integrate hota hai.

### Real-World Use Cases:
- **Fast Bug Fixing:** Terminal me error aate hi `agy` khol kar bug investigate aur fix karwana.
- **Git & PR Workflows:** Git status check karna, branch banana, meaningful commits likhna aur PR description draft karna.
- **Automated Refactoring:** Large codebases me multi-file edits aur non-blocking build checks chalana.
- **DevOps & Infra:** Dockerfiles, CI/CD YAML files aur server setup scripts automate karna.

---

## 2. Antigravity CLI ki History

1. **Phase 1 (PaLM / Codey CLI):** Initial experiments terminal code completion ke liye.
2. **Phase 2 (Gemini CLI):** Terminal me multi-turn basic conversation support.
3. **Phase 3 (Google Antigravity `agy` 2025-2026):** Pura agentic engine terminal me integrate kiya gaya — jisme self-healing terminal execution, dynamic subagent management, MCP (Model Context Protocol) aur Progressive Skills support shamil hai.

---

## 3. Installation Guide (Step-by-Step)

### A. Ubuntu / Linux me Install Karein

1. **Prerequisites Install Karein:**
   ```bash
   sudo apt update && sudo apt install -y curl git python3
   ```

2. **Official Installer Run Karein:**
   ```bash
   curl -fsSL https://antigravity.google/install.sh | bash
   ```

3. **Path Verify Karein:**
   ```bash
   echo 'export PATH="$HOME/.gemini/antigravity-cli/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

4. **Login aur Start Karein:**
   ```bash
   agy auth login
   agy
   ```

---

### B. Windows me Install Karein (PowerShell / WSL)

**Method 1: Windows Native PowerShell**
```powershell
# Open PowerShell as Administrator
iwr -useb https://antigravity.google/install.ps1 | iex
```

**Method 2: WSL2 Ubuntu (Highly Recommended)**
Windows par WSL enable karke Ubuntu terminal me upar wala Linux command run karein.

---

## 4. Useful Commands, Flags aur Slash Commands

### A. CLI Command Line Flags

```bash
# Direct task run karke exit ho jana (Non-interactive mode)
agy "Fix the lint errors in src/index.ts"

# Specific model ke sath CLI start karna
agy --model gemini-2.5-pro

# Auto-approve mode (read-only tasks ke liye fast execution)
agy --approval-level auto-edit
```

### B. TUI Keyboard Shortcuts

| Shortcut | Kaam |
| :--- | :--- |
| `Ctrl + C` | Current running tool call ya output cancel karna |
| `Ctrl + D Ctrl + D` | CLI session safely exit karna |
| `Up / Down Arrow` | Previous prompt history scroll karna |
| `Tab` | Slash commands aur file paths auto-complete karna |

### C. Essential In-Chat Slash Commands

| Slash Command | Use Case | Real-World Example |
| :--- | :--- | :--- |
| `/help` | Sabhi available commands ki list dekhna | `/help` |
| `/goal` | Complex long-running task jo bina ruke finish karna ho | `/goal Migrate all API routes to Fastify` |
| `/plan` | Execution shuru karne se pehle detailed roadmap banana | `/plan Add OAuth2 authentication` |
| `/grill-me` | Agent aapse sawal puch kar design requirements final karta hai | `/grill-me` |
| `/schedule` | Background timer ya cron schedule set karna | `/schedule in 5m "Check deployment status"` |
| `/learn` | Agent ko naye rules aur preferences sikhana | `/learn Hamesha simple Hindi me explain karo` |
| `/teamwork-preview`| Multi-agent parallel coordination view karna | `/teamwork-preview` |

---

## 5. Antigravity SKILLS: Terminal Me Kaise Use Karein

**Skill kya hai?**
Ek Skill ek folder hota hai jisme `SKILL.md` file hoti hai, jo CLI agent ko kisi specific framework ya tool me train karti hai.

### Progressive Disclosure (Token Saving)
CLI agent shuru me sabhi skills ka poora content load nahi karta. Wo sirf Skill ka **Name** aur **Description** dekhta hai. Jab aap kisi task me uski zaroorat padti hai, tabhi poora `SKILL.md` context me inject hota hai.

```text
[ Global & Workspace Skills ] 
            │ (Metadata only: Name + Description)
            ▼
[ Terminal Prompt: "Check webpage accessibility" ]
            │
            ▼ (Matches: 'a11y-debugging')
[ Loads SKILL.md dynamically into context ]
```

### A. Online Skills Install Karna:
```bash
agy skill install @google/chrome-devtools
agy skill install @google/modern-web-guidance
```

### B. Custom Project Skill Banana:
Apne project root me `.agents/skills/hugo-expert/SKILL.md` banayein:

```markdown
---
name: hugo-expert
description: Hugo static site ke liye SEO-optimized blog posts likhna aur frontmatter verify karna.
---

# Hugo Expert Guidelines
- Posts `content/posts/<slug>.md` me banayein.
- Frontmatter me `title`, `date`, `lastmod`, `images` zaroor ho.
- Bhasha hamesha simple bolchal ki Hindi/Urdu ho.
```

---

## 6. Token Optimization & Best Practices

Terminal me kaam karte waqt tokens bachane ke liye in rules ka dhyan rakhein:

```text
┌───────────────────────────────────────────────────────────┐
│               Token Optimization in CLI                   │
├───────────────────────────────────────────────────────────┤
│ 1. Project Rules (AGENTS.md) instead of long prompts      │
│ 2. Use Small Diffs (replace_file_content over rewrite)    │
│ 3. Subagent Offloading (Keep main terminal session clean) │
│ 4. Clear/Compact Session when switching contexts          │
└───────────────────────────────────────────────────────────┘
```

1. **`AGENTS.md` File Use Karein:**
   Har prompt me bar-bar project rules samjhane ki zaroorat nahi hai. Project root par `AGENTS.md` rakhein, `agy` ise automatic read kar lega.
2. **Subagents Spawn Karein:**
   Agar badi search karni ho ya bohot saari files read karni ho, toh `research` subagent ko kaam de dein taaki aapka main CLI terminal context clutter na ho.
3. **Targeted Line Edits:**
   Badi files ko poora rewrite karne se bachein; agent targeted line replacements se fast aur saste me kaam karta hai.

---

## 7. Configuration (`settings.json`) aur Glossary

CLI ki settings **`~/.gemini/antigravity-cli/settings.json`** me hoti hain:

```json
{
  "model": "gemini-2.5-pro",
  "approval_level": "default",
  "theme": "dark",
  "telemetry": false
}
```

### Important Glossary:

| Term | Aasan Matlab |
| :--- | :--- |
| **`agy`** | Antigravity CLI ka executable command name. |
| **Subagent** | Background process jo parallel task complete karke CLI me report karta hai. |
| **MCP** | Model Context Protocol — terminal tools aur databases ko connect karne ka standard. |
| **Progressive Disclosure** | On-demand skill loading technique jisse token waste nahi hote. |
| **Artifacts** | Agent dwara generate kiye gaye structured diffs aur files. |

---

## 8. Quick Revision Summary

- **Antigravity CLI (`agy`):** Terminal-native autonomous AI coding agent.
- **Fast Install:** `curl -fsSL https://antigravity.google/install.sh | bash`
- **Exit Shortcut:** `Ctrl+D Ctrl+D` ya `/exit`.
- **Custom Skills:** `.agents/skills/<name>/SKILL.md` bana kar agent ko customize karein.
- **Project Guidelines:** `AGENTS.md` banakar team ke sath rules share karein.
- **Optimization:** Targeted edits aur subagents se token cost aur context limit optimize karein.

