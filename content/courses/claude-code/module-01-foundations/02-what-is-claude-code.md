---
title: "1.2 What is Claude Code & Architecture"
categories: [ AI, Course ]
tags: [ClaudeCode, Architecture, Terminal, Anthropic]
description: "Claude Code kya hai aur iska terminal architecture kaise kaam karta hai? Samjhein background tools aur security model."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 1: Foundations — 1.2 What is Claude Code & Architecture**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki **Claude Code** asliyat me kya hai aur Anthropic ne ise terminal-first kyu banaya.
- Claude Code ke **Internal Architecture** aur uske core tools (File Reader, Editor, Ripgrep, Bash Runner) ko jaan payenge.
- Iske **Permission Model** aur safety rules ko samjh sakeinge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Cookbook vs Smart Kitchen Chef):**  
> - **ChatGPT / Web Chat:** Ye ek aisi recipe book ki tarah hai jo aapko khana banane ka tareeqa batati hai, lekin masale aur bartan aapko khud dhoondh kar gas par rakhne padte hain.  
> - **Claude Code:** Ye ek aisa master chef hai jo seedhe aapke kitchen (Terminal) me khada hai. Wo khud fridge khol kar dekhta hai kya samaan hai (Project Files), khud sabzi kaatta hai (Code Edit karta hai), gas par pakata hai (Commands run karta hai), aur taste karke batata hai ki namak kaisa hai (Tests verify karta hai).

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Terminal CLI** | Command Prompt ya Terminal me chalne wala tool | `claude` command |
| **Built-in Tools** | AI ke paas available powers (file dekhna, edit karna, bash run karna) | File Read, Grep, Edit, Bash |
| **Permission Guard** | Danger commands chalane se pehle user se confirmation maangna | "Allow running `rm -rf`? (y/n)" |
| **Context Compaction** | Lambi chat aur extra logs ko chhota karke memory bachana | `/compact` command |

---

## ⚙️ **Claude Code Ka Internal Architecture**

Claude Code sirf ek LLM model nahi hai, balki model ke upar bana hua ek poora **Agentic System** hai:

```text
+-------------------------------------------------------------------------------+
|                             Developer Terminal                                |
|                        (User types prompt in CLI)                             |
+---------------------------------------┬---------------------------------------+
                                        │
                                        ▼
+-------------------------------------------------------------------------------+
|                           Claude Code Core Engine                             |
|       (Prompt Analysis, Context Management & Tool Orchestrator)              |
+---------------------------------------┬---------------------------------------+
                                        │
             ┌──────────────────────────┼──────────────────────────┐
             ▼                          ▼                          ▼
   ┌───────────────────┐      ┌───────────────────┐      ┌───────────────────┐
   │  File System Tool │      │   Search Tools    │      │  Terminal Runner  │
   │  (Read & Edit)    │      │  (Glob & Ripgrep) │      │  (Bash Execution) │
   └─────────┬─────────┘      └─────────┬─────────┘      └─────────┬─────────┘
             │                          │                          │
             └──────────────────────────┼──────────────────────────┘
                                        ▼
+-------------------------------------------------------------------------------+
|                         Your Local Project Codebase                           |
|             (Git repo, package.json, source files, unit tests)                |
+-------------------------------------------------------------------------------+
```

---

## 🛠️ **Claude Code Ke 4 Core Powers (Tools)**

Parde ke peeche Claude Code in 4 tools ka use karke kaam karta hai:

1. **File Viewer (Read Tool):**  
   Aapke project ki kisi bhi file ka content padhta hai. Token bachane ke liye ye sirf relevant lines ko slice karke padhta hai.

2. **Grep & File Search (Ripgrep / Glob):**  
   Agar aap bolenge "Check karo `handleLogin` function kahan defined hai", toh ye poore project me `grep` chala kar exact file aur line dhoondh leta hai.

3. **Smart Code Editor (Replace Tool):**  
   Ye poori file ko dobara nahi likhta (jisse syntax tootne ka darr ho), balki sirf badalne wali lines ko target karke clean diff banata hai.

4. **Bash Command Runner (Execution Tool):**  
   Ye terminal me commands chala sakta hai jaise:
   - Dependencies install karna: `npm install lodash`
   - Tests run karna: `npm test` ya `pytest`
   - Git operations: `git status`, `git diff`, `git add`

---

## 🛡️ **Safety & Permission Model (Aapka Control)**

Kahi AI galti se galat file delete na kar de ya galat command na chala de, iske liye Claude Code me **Safety Guardrails** hote hain:

```text
[Safe Actions - Automatic]
  ├── Files read karna
  ├── Codebase search karna
  └── Git status check karna

[Sensitive Actions - Asks Permission]
  ├── File me naya code save karna (Diff dikha kar confirmation)
  ├── External commands chalana (jaise `npm run build`)
  └── Git commit / push karna
```

Aap hamesha har change ko review kar sakte hain aur decide kar sakte hain ki allow karna hai ya reject.

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Har command ke liye bina soche 'Yes' press karna.
- ✅ **Pro Tip:** Jab bhi Claude Code kisi command ya file change ki permission maange, toh pehle terminal par dikh rahe **Diff** ko dhyaan se dekhein taaki koi galat file overwrite na ho.

---

## 📝 **Practice Challenge (Khud Sochien)**

1. Agar aapko 50 files wale project me ek API URL badalna ho, toh manually badalne me kitna time lagega?
2. Claude Code ke search aur edit tools milkar is kaam ko kitni der me kar sakte hain?

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Claude Code ek **Terminal-First AI Agent** hai jo local project environment me run hota hai.
- Iske paas 4 mukhya tools hote hain: **Read, Search (Grep), Edit, aur Bash Execution**.
- Iska **Permission System** aapko poora control deta hai taaki koi unsafe command bina aapki permission ke na chale.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [1.1 Agentic Coding vs Vibe Coding](/courses/claude-code/module-01-foundations/01-agentic-coding-vs-vibe-coding/)
- ➡️ **Agla Lesson:** [1.3 Installation & Setup](/courses/claude-code/module-01-foundations/03-installation-and-setup/)
