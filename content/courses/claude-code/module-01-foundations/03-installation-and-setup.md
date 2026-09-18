---
title: "1.3 Installation & Setup"
categories: [ AI, Course ]
tags: [ClaudeCode, Installation, Setup, CLI, Anthropic]
description: "Claude Code ko step-by-step install karna seekhein: Node.js, npm package, Anthropic API Key setup aur first test run."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 1: Foundations — 1.3 Installation & Setup**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Apne system (Mac, Linux, ya Windows WSL) par **Claude Code CLI** install kar sakenge.
- **Anthropic Console** se API Key generate karke configure kar sakenge.
- Claude Code ka first run karke `/doctor` se setup verify kar sakenge.
- Cost limit set karke unexpected bills se bachna seekhenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (SIM Card & Mobile Phone):**  
> - Claude Code CLI ek **Smart Mobile Phone** ki tarah hai jisko aapne install kar liya hai.  
> - Lekin phone tabhi chalega jab usme **SIM Card (Anthropic API Key)** lagegi aur thoda balance (API credits) hoga. API Key lagte hi aapka CLI agent duniya ke sabse powerful AI brains se connect ho jata hai.

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Node.js** | JavaScript ko terminal me chalane wala runtime | Node.js v18 ya v20 |
| **npm (Node Package Manager)** | Tools aur libraries install karne ka tool | `npm install -g ...` |
| **Anthropic API Key** | Claude ke AI brain ko use karne ka secret password | `sk-ant-api03-...` |
| **WSL (Windows Subsystem for Linux)** | Windows ke andar Linux terminal chalane ka tareeqa | Ubuntu on Windows |

---

## 📋 **Pre-requisites (Zaruri Cheezein)**

Claude Code install karne se pehle ye check karein:
1. **Node.js 18+ ya upar ka version** install hona chahiye.
2. Terminal (macOS Terminal, Linux Bash, ya Windows me WSL2).

Apne terminal me Node.js ka version check karein:
```bash
node -v
# Output aana chahiye: v18.x.x ya v20.x.x ya v22.x.x
```

Agar Node.js install nahi hai, toh [nodejs.org](https://nodejs.org) se LTS version download karke install kar lein.

---

## 🚀 **Step 1: Claude Code CLI Install Karna**

Terminal me niche di gayi command chalayein:

```bash
npm install -g @anthropic-ai/claude-code
```

> **Note (Mac/Linux Users):** Agar permission error aaye toh `sudo npm install -g @anthropic-ai/claude-code` chalayein ya apne npm permissions fix karein.

---

## 🔑 **Step 2: Anthropic API Key Setup Karna**

1. [console.anthropic.com](https://console.anthropic.com) par jayein aur account banayein ya login karein.
2. **API Keys** section me jakar **Create Key** par click karein aur key copy kar lein (`sk-ant-...`).
3. Apne terminal me is key ko environment variable ki tarah save karein:

```bash
# Mac / Linux (~/.bashrc ya ~/.zshrc me add karein)
export ANTHROPIC_API_KEY="sk-ant-api03-aapki-secret-key-yaha"
```

Ya fir jab aap pehli baar `claude` command chalayenge, toh terminal aapse browser login ya API key paste karne ko kahega.

---

## 🏃‍♂️ **Step 3: First Run & Verification**

Apne kisi bhi project folder ke andar jayein aur terminal me type karein:

```bash
cd my-project
claude
```

Aapke samne Claude Code ka interactive terminal interface khul jayega:

```text
  ╭────────────────────────────────────────────────────────╮
  │                                                        │
  │   Claude Code (v0.x.x)                                 │
  │   Anthropic Research Preview CLI                       │
  │                                                        │
  │   Type /help for command list                          │
  │                                                        │
  ╰────────────────────────────────────────────────────────╯

> _
```

---

## 🩺 **Step 4: `/doctor` Command Se Health Check**

Claude Code ke prompt me `/doctor` type karke Enter karein:

```text
> /doctor
```

Ye command check karegi ki:
- ✅ Node.js version compatible hai.
- ✅ API Key valid aur connected hai.
- ✅ Git repo properly configured hai.
- ✅ Local tools (grep, bash) theek se kaam kar rahe hain.

---

## 💰 **Step 5: Budget & Cost Limit Set Karna (Zaruri Step)**

Paise bachane aur bina wajah billing se bachne ke liye Anthropic Console par:
1. **Billing & Plans ➔ Spend Limits** me jayein.
2. Monthly Budget limit set karein (jaise $5 ya $10 per month).
3. Isse aapka budget cross nahi hoga aur aap safe rahenge.

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Windows par normal Command Prompt (cmd) me chalana jisme bash tools nahi hote.
- ✅ **Pro Tip:** Windows users hamesha **WSL2 (Ubuntu)** use karein taaki Claude Code saare Linux tools aur scripts bina kisi issue ke run kar sake.

---

## 📝 **Practice Challenge (Khud Karke Dekhein)**

1. Apne terminal me `claude` launch karein.
2. Prompt me likhein: `"Is folder me kaun kaun si files hain mujhe list karke batao"`
3. Dekhein kaise Claude Code khud files scan karke aapko summary deta hai.
4. Exit karne ke liye `/exit` ya `Ctrl+C` dabayein.

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Claude Code install karne ke liye command hai: `npm install -g @anthropic-ai/claude-code`.
- Isko chalane ke liye **Anthropic API Key** ki zarurat hoti hai.
- `/doctor` command se aap check kar sakte hain ki setup me koi problem toh nahi hai.
- Console par **Spend Limit** set karke aap unexpected cost se safe reh sakte hain.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [1.2 What is Claude Code & Architecture](/courses/claude-code/module-01-foundations/02-what-is-claude-code/)
- ➡️ **Agla Module:** [Module 2: Everyday CLI & Core Workflow](/courses/claude-code/module-02-core-workflow/)
