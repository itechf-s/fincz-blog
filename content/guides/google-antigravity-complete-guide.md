---
title: "Google Antigravity CLI (agy) Guide: Terminal AI Agent, Skills, Token Optimization aur Best Practices"
categories: [ AI, Development, Tools ]
tags: [Antigravity CLI, agy, Google Antigravity, AI Agents, Terminal, Skills, Guide]
description: "Google Antigravity CLI (agy) ka complete guide: Installation, Hands-on commands, Inbuilt & Online Skills, Google plugins listing, Token optimization with real examples, Alternatives comparison aur Nateeja."
date: 2026-08-21T08:00:00+05:30
lastmod: 2026-08-21T08:48:00+05:30
images: ["images/2026/08/google-antigravity-guide.webp"]
author: ahmad
---

## Introduction

Software development me terminal-first workflow hamesha sabse tez aur lightweight mana jata hai. Jab baat AI coding agents ki aati hai, toh **Google Antigravity CLI (`agy`)** developers ke liye ek game-changer tool bankar ubhra hai.

Ye Google DeepMind ke agentic reasoning models par chalta hai aur seedha aapke bash ya zsh shell ke andar rehta hai. Isse aapko baar-baar browser ya heavy IDE kholne ki zaroorat nahi padti — aap terminal me command run karke code likhva sakte hain, automated tests execute karwa sakte hain, subagents spawn kar sakte hain aur production bugs fix karwa sakte hain.

Is comprehensive guide me hum seekhenge:
1. **Antigravity CLI (`agy`) kya hai aur iski installation**
2. **Essential Commands with Hands-On Examples**
3. **Inbuilt Skills vs Online Skills (Google Hub, Plugins, aur React Casing/Best Practices)**
4. **Google Plugins Listing (`@google/chrome-devtools`, Modern Web Guidance, etc.)**
5. **Token Optimization with Practical Examples**
6. **`agy` vs Alternatives (Claude Code, Cursor, Aider, Devin) — Advantages & Disadvantages**
7. **Nateeja (Conclusion)**

---

## 1. Antigravity CLI (`agy`) kya hai aur Installation

`agy` Google Antigravity framework ka official terminal client hai.

```text
┌───────────────────────────────────────────────────────────┐
│                 Antigravity CLI (agy) Architecture        │
├─────────────────┬───────────────────┬─────────────────────┤
│ 1. TUI Engine   │ 2. Subagent Engine│ 3. Tool Execution   │
│    (Interactive)│    (Background)   │    (Bash/File Edits)│
├─────────────────┴───────────────────┴─────────────────────┤
│ 4. Customizations: Skills, AGENTS.md, Plugins, MCP        │
└───────────────────────────────────────────────────────────┘
```

### Quick Installation:

**Ubuntu / Linux:**
```bash
sudo apt update && sudo apt install -y curl git python3
curl -fsSL https://antigravity.google/install.sh | bash
echo 'export PATH="$HOME/.gemini/antigravity-cli/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
agy auth login
```

**Windows (PowerShell Admin):**
```powershell
iwr -useb https://antigravity.google/install.ps1 | iex
```

---

## 2. Essential Commands with Hands-On Examples

`agy` ko aap do tariko se use kar sakte hain: **Non-Interactive One-Shot** aur **Interactive TUI Session**.

### A. Terminal Command-Line Flags (Hands-on)

#### 1. One-Shot Task (Bina chat session khole seedha kaam karna)
```bash
# Bug fix karke turant exit ho jana
agy "content/posts/ me sabhi markdown files ka lastmod date update kar do"
```

#### 2. Specific Model Select Karna
```bash
# Fast reasoning ya complex task ke hisab se model choose karna
agy --model gemini-2.5-pro "Backend architecture redesign karne ka plan banao"
```

#### 3. Auto-Approval Mode (Fast Execution)
```bash
# Safe read-only tasks ya auto edits ke liye confirmation prompt skip karna
agy --approval-level auto-edit "src/components me unused imports delete karo"
```

---

### B. Interactive TUI Slash Commands (Hands-on)

Jab aap terminal me `agy` likhkar session start karte hain, toh in slash commands ka use karein:

| Slash Command | Asli Kaam (Use Case) | Hands-on Example |
| :--- | :--- | :--- |
| `/goal` | **Autonomous Deep Execution:** Bada task jo agent bina ruke khud test & verify karke complete kare. | `/goal MySQL se PostgreSQL migration complete karo aur saare tests pass hone chahiye` |
| `/plan` | **Architecture Roadmap:** Direct code likhne se pehle step-by-step strategy banana. | `/plan React app me Stripe payment gateway integrate karne ka plan banao` |
| `/grill-me` | **Interactive Interview:** Agent aapse counter-questions puch kar requirements finalize karta hai. | `/grill-me New microservices database schema` |
| `/schedule` | **Liveness / Background Timers:** Specific time baad agent ko reminder ya build check trigger karna. | `/schedule in 10m "Check if Docker build finished"` |
| `/learn` | **Persistent Knowledge:** Agent ko apni personal preference ya project convention yaad karwana. | `/learn Hamesha simple bolchal ki Hindi/Urdu use karo aur pure Hindi se bacho` |
| `/teamwork-preview` | **Multi-Subagent Coordination:** Ek sath Frontend, Backend aur QA subagents ka work status dekhna. | `/teamwork-preview` |

---

## 3. Antigravity SKILLS: Complete Deep Dive

**Skill kya hoti hai?**
Skill ek structured folder hota hai jisme `SKILL.md` file hoti hai. Ye agent ko kisi specific technology, standard ya workflow (jaise React casing conventions, accessibility audit, Chrome DevTools) par expert banata hai.

### Progressive Disclosure (Token Bachane Ka Secret)
`agy` shuru me saari skills ka poora document context me nahi daalta. Wo sirf Skill ka **Name** aur **Description** padhta hai. Jab user ke sawal se description match hoti hai, tabhi poora `SKILL.md` load hota hai.

---

### Inbuilt Skills Kaise Check aur Use Karein?

`agy` ke sath kuch system skills pehle se aati hain. Inhe dekhne ke liye:
- **Built-in Path:** `~/.gemini/antigravity-cli/builtin/skills/`
- **Popular Inbuilt Skills:**
  1. `antigravity_guide`: CLI aur IDE commands ka pura offline manual.
  2. `agy-customizations`: Skills, Rules, Plugins aur Hooks create karne ki official guide.
  3. `permissioned-github`: GitHub pull requests aur repo permissions manage karna.

**Inhe use kaise karein?**
Aapko alag se command nahi chalani padti. Aap bas aam bhasha me bolein:
> *"Mujhe Antigravity CLI me custom hook banana sikhao"* → Agent automatic `agy-customizations` skill activate kar lega!

---

## 4. Online Skills & Plugins: Kaha Milegi aur Kaise Install Karein?

Aksar developers sochte hain: *"React App me PascalCase/camelCase lagane ki best practice skill kaha se milegi?"* ya *"Google ki official skills kaise dekhein?"*

### A. Skill Discovery & Providers
Skills 3 levels par exist karti hain:

```text
Discovery Hierarchy:
1. Workspace Level   ──► .agents/skills/  (Aapke project me, Git me commit hoti hai)
2. Global Level      ──► ~/.gemini/config/plugins/  (Aapke pure computer ke liye)
3. Built-in Level    ──► ~/.gemini/antigravity-cli/builtin/skills/
```

### B. Google Official Plugins & Skills Listing

Google dwara provide kiye gaye official plugins `~/.gemini/config/plugins/` me store hote hain:

| Plugin Name | Shamil Skills (Skills Included) | Asli Kaam (Use Case) |
| :--- | :--- | :--- |
| **`@google/chrome-devtools-plugin`** | `chrome-devtools`<br>`a11y-debugging`<br>`debug-optimize-lcp`<br>`memory-leak-debugging`<br>`troubleshooting` | Browser automation, Core Web Vitals (LCP) improve karna, Memory leak check karna aur Accessibility (a11y) audit karna. |
| **`@google/modern-web-guidance-plugin`**| `modern-web-guidance`<br>`chrome-extensions` | Modern HTML/CSS, Container queries, View Transitions aur Chrome Extensions (Manifest V3) develop karna. |
| **`@google/antigravity-sdk`** | `google-antigravity-sdk` | Python SDK se multi-agent orchestration aur custom tool leasing karna. |

### C. Example: React Casing & Coding Standard Skill Banana

Agar aapko apne project me **React naming conventions (Components in PascalCase, hooks in camelCase, CSS modules)** enforce karni hai:

1. Apne project root me folder banayein:
   ```bash
   mkdir -p .agents/skills/react-casing-guidelines
   ```
2. Uske andar `SKILL.md` banayein:
   ```markdown
   ---
   name: react-casing-guidelines
   description: Use this skill whenever creating or refactoring React components, hooks, or files. Enforces PascalCase and camelCase rules.
   ---

   # React Naming Conventions
   - Component Files: Hamesha PascalCase me hon (e.g., `UserProfile.tsx`).
   - Custom Hooks: Hamesha `use` prefix ke sath camelCase me hon (e.g., `useAuthStatus.ts`).
   - Helper Utilities: `camelCase.ts`.
   - Never use kebab-case for React components.
   ```
Jab bhi aap bolein: *"Ek naya login component banao"*, agent automatically is rule ko follow karega!

---

## 5. Token Optimization: Practical Examples ke Sath

LLMs me context window aur token consumption sabse keemti cheez hai. `agy` me tokens kaise bachayein:

```text
┌───────────────────────────────────────────────────────────┐
│               Token Optimization Comparison               │
├─────────────────────────────┬─────────────────────────────┤
│ ❌ Token Barbadi (Bad)      │ ✅ Token Bachat (Optimized)  │
├─────────────────────────────┼─────────────────────────────┤
│ 1. Har prompt me rules      │ 1. AGENTS.md me 1 bar rules │
│    repeat karna (~800 tok)  │    likhna (Auto-cached)     │
│ 2. Poori 1000 line file ko  │ 2. replace_file_content se  │
│    rewrite karna            │    sirf 5 lines change karna│
│ 3. Main chat me 20 files ka │ 3. Research subagent ko     │
│    content dump karna       │    background me bhejna     │
└─────────────────────────────┴─────────────────────────────┘
```

### Real Example:
- **Galat Tarika:** Agent se kehna: *"Pura `server.js` dobara likho aur usme port change karke 8080 kar do."* (Cost: ~4,000 tokens).
- **Sahi Tarika (`agy` default):** Agent targeted replace tool use karke sirf line number 45 par `PORT = 8080` replace karta hai (Cost: ~150 tokens — **96% Token Bachat!**).

---

## 6. Antigravity CLI (`agy`) vs Alternatives

| Tool / Platform | Kaun Banata Hai? | Advantages (Fayde) | Disadvantages (Nuksan) |
| :--- | :--- | :--- | :--- |
| **Google Antigravity (`agy`)** | Google DeepMind | • Subagent Swarms & Parallel Tasks<br>• Progressive Skills architecture<br>• Terminal native & super lightweight<br>• Highly customizable (`AGENTS.md`, MCP) | • New platform hai, community plugins abhi grow ho rahe hain. |
| **Claude Code** | Anthropic | • Terminal workflow<br>• Claude 3.5 Sonnet ki high coding accuracy | • Background subagent management limited hai<br>• Token consumption heavy sessions me zyada ho sakti hai. |
| **Cursor IDE** | Anysphere | • Visual GUI (VS Code fork)<br>• Great inline autocomplete (Tab-Tab) | • Heavy GUI (Electron based)<br>• SSH / Headless remote server par directly nahi chalta. |
| **Aider** | Open-source | • Direct git commits automate karta hai<br>• Multiple LLM providers support karta hai | • Multi-agent autonomous loops aur dynamic skills system nahi hai. |
| **Devin** | Cognition AI | • Autonomous web-based sandbox | • Bohot expensive (High enterprise pricing)<br>• Local terminal me direct integration nahi hai. |

---

## 7. Nateeja (Conclusion)

**Google Antigravity CLI (`agy`)** modern software developers ke liye terminal ke andar ek personal senior developer ki tarah kaam karta hai.

Iska sabse bada power iska **Skills System** aur **Progressive Disclosure** hai — jisse aap apne project ke complex rules aur conventions ko ek baar define kar dete hain aur agent bina token waste kiye unhe follow karta hai. Chahe aapko single-line bug fix karna ho ya poora multi-agent background task chalana ho, `agy` terminal development ko 10x fast aur smart bana deta hai.
