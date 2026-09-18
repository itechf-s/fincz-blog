---
title: "3.2 CLAUDE.md — The Project Brain"
categories: [ AI, Course ]
tags: [ClaudeCode, CLAUDEMD, Rules, Memory, BestPractices]
description: "CLAUDE.md kya hai aur kaise banayein? Seekhein project ke rules, memory aur coding standards ko define karna."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 3: Memory — 3.2 CLAUDE.md — The Project Brain**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki `CLAUDE.md` file kya hoti hai aur ye Claude Code ke liye kyu sabse important file hai.
- Ek standard `CLAUDE.md` file likhna seekhenge jisme build commands, coding rules aur test workflows shamil hon.
- Global `~/.claude/CLAUDE.md` aur Local Project `CLAUDE.md` ka farq samjhenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Company Ka Employee Handbook):**  
> Jab koi naya employee company join karta hai, toh use ek **Rulebook / Handbook** di jati hai jisme likha hota hai: Office aane ka time kya hai, code kaise commit karna hai aur kaun si galti nahi karni hai.  
> **`CLAUDE.md`** aapke AI agent ke liye wahi rulebook hai. Jab bhi Claude Code start hota hai, wo sabse pehle is file ko padhta hai aur iske bataye rules kabhi nahi bhoolta!

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **`CLAUDE.md`** | Project ke root me rakhi rules aur instructions wali file | `./CLAUDE.md` |
| **Persistent Memory** | Wo baatein jo session reset hone ke baad bhi AI ko yaad rehti hain | Coding standards & commands |
| **Global Rules** | Wo rules jo aapke computer ke har project me apply hon | `~/.claude/CLAUDE.md` |
| **Local Rules** | Wo rules jo sirf usi specific project ke liye hon | `my-app/CLAUDE.md` |

---

## 🏗️ **`CLAUDE.md` Ka Standard Template**

Ek achhi `CLAUDE.md` file me ye 5 sections hone chahiye:

```markdown
# CLAUDE.md - Project Guidelines & Rules

## 1. Build & Test Commands (Kaam chalane ke commands)
- Build: `npm run build`
- Test: `npm test`
- Lint: `npm run lint`
- **Rule:** Kabhi bhi `npm run dev` background me mat chalana.

## 2. Tech Stack & Architecture (Project kya use karta hai)
- Frontend: React (Next.js 14 App Router), Tailwind CSS
- Backend: Node.js, Express, PostgreSQL (Prisma ORM)
- State Management: Zustand

## 3. Code Style & Rules (Likhne ka tareeqa)
- Hamesha TypeScript use karein (Strict mode).
- Functional components aur React Hooks use karein.
- Har function ke liye try-catch aur proper error handling likhein.

## 4. Tone & Language (Baat karne ka tareeqa)
- User se simple conversational Hindi/Hinglish me baat karein.
- Mushkil aur shuddh Hindi ke shabdon se bachein.
```

---

## ⚙️ **Claude Code Isko Kaise Read Karta Hai?**

Jab bhi aap koi command ya prompt dete hain, Claude Code background me:

```text
[ User Prompt: "Fix cart bug" ]
              │
              ▼
[ 1. Auto-Load CLAUDE.md ] ───> Checks commands, tech-stack & constraints
              │
              ▼
[ 2. Execute with Rules ]  ───> Uses Next.js 14 patterns, runs `npm test` (not dev server)
              │
              ▼
[ 3. Verified Output ]     ───> Follows all project rules 100% accurately!
```

---

## 🌐 **Global vs Local `CLAUDE.md`**

| Type | Location | Kab Use Karein? |
| :--- | :--- | :--- |
| **Global `CLAUDE.md`** | `~/.claude/CLAUDE.md` (Home dir) | Apni personal pasand ke rules ke liye (jaise: *"Hamesha short output do"*, *"Hinglish me baat karo"*). Ye har project me chalega. |
| **Local `CLAUDE.md`** | Project ke root folder me `./CLAUDE.md` | Project-specific commands ke liye (jaise: *"Is repo me `pnpm` use karo"*, *"PostgreSQL schema rules"*). |

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** `CLAUDE.md` me 2000 lines ka lamba essay likh dena jisse tokens waste hon.
- ✅ **Pro Tip:** `CLAUDE.md` ko concise aur bullet points me rakhein (under 100-150 lines). Sirf wahi baatein likhein jo AI ko batana zaruri ho.

---

## 📝 **Practice Challenge (Khud Karke Dekhein)**

1. Apne kisi project ke root me `> /init` chala kar `CLAUDE.md` banayein.
2. File ko open karke check karein ki build aur test commands sahi hain ya nahi.
3. Usme ek custom rule add karein: *"Har response ke baad 1 line ka summary do"*.
4. Ek prompt dekar test karein ki AI rule follow kar raha hai ya nahi.

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- `CLAUDE.md` aapke project ka **Brain / Rulebook** hai jisko AI har turn par read karta hai.
- Isme build commands, tech-stack details aur coding standards likhe jate hain.
- `/init` command se ye file automatically generate ho sakti hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [3.1 Context Window Management](/courses/claude-code/module-03-context-and-memory/01-context-window-management/)
- ➡️ **Agla Module:** [Module 4: Development Workflows & Planning](/courses/claude-code/module-04-development-workflows/)
