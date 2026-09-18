---
title: "4.1 Spec-Driven Development (SDD)"
categories: [ AI, Course ]
tags: [ClaudeCode, SDD, Specifications, Engineering]
description: "Spec-Driven Development (SDD) kya hai? Janein kaise requirements aur specs likh kar 100% accurate code banwayen."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 4: Workflows — 4.1 Spec-Driven Development (SDD)**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki **Spec-Driven Development (SDD)** kya hota hai aur ye prompt-and-pray se behtar kyu hai.
- Feature ke liye clean **Specification / PRD markdown file** likhna seekhenge.
- Claude Code ko spec file dekar bina kisi galti ke multi-file feature implement karwa sakenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Ghar Banana vs Architect Ka Blueprint):**  
> Agar aap majdooron se bolen *"ek 3 kamre ka ghar bana do jaisa achha lage"*, toh wo aisi building banayenge jisme na kitchen theek hoga na bathroom.  
> Lekin agar aap pehle **Architect se poora Blueprint (Spec)** banwate hain jisme ek-ek inch ki naap likhi ho, toh har deewar aur pillar perfect banta hai.  
> **SDD** coding me wahi Blueprint tayyar karne ka tareeqa hai.

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Spec (Specification)** | Feature ki clear requirements aur rules wali document | `specs/auth-feature.md` |
| **SDD (Spec-Driven Dev)** | Pehle spec likhna aur fir AI se exact code implement karwana | Spec ➔ Test ➔ Code ➔ Verify |
| **PRD (Product Requirement Doc)**| Product ka goal, user stories aur edge cases | Product Manager ki document |
| **Deterministic Code** | Wo code jo bina andaze ke bilkul exact requirements ke hisaab se bane | Bug-free code |

---

## 🔄 **SDD Ka 4-Step Engineering Workflow**

```text
  ┌───────────────────────────────────────────────────────────┐
  │ 1. Write Spec File (specs/feature-name.md)                │
  │    - Inputs / Outputs                                     │
  │    - Database Schema & Edge Cases                         │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │ 2. Feed to Claude Code                                    │
  │    > "Read specs/auth-feature.md and implement the steps" │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │ 3. Automated Test Writing & Implementation                │
  │    - Claude creates unit tests from specs                 │
  │    - Implements controllers, services & routes            │
  └─────────────────────────────┬─────────────────────────────┘
                                │
                                ▼
  ┌───────────────────────────────────────────────────────────┐
  │ 4. Verification & Green Checks                            │
  │    - Runs test suite: All tests PASS                      │
  └───────────────────────────────────────────────────────────┘
```

---

## 📝 **Sample Spec File Template (`specs/auth.md`)**

Apne project me ek folder banayein `specs/` aur file likhein:

```markdown
# Feature: User Authentication & JWT

## 1. Goal
Users ko email aur password se login aur register karne ki suvidha dena.

## 2. API Endpoints
- `POST /api/auth/register` (body: email, password, name)
  - Agar email pehle se exist kare toh `409 Conflict` return kare.
- `POST /api/auth/login` (body: email, password)
  - Sahi credentials par JWT access token (expiry: 1 hour) return kare.

## 3. Security Rules
- Passwords ko `bcrypt` se hash karna hai (Salt rounds: 10).
- Input validation me email format check hona chahiye.

## 4. Test Cases
- Sahi data par user register hona chahiye.
- Wrong password par `401 Unauthorized` milna chahiye.
```

---

## 💻 **Terminal Prompt Se Execute Karwana**

Ab Claude Code me bas ye simple prompt chalayein:

```text
> "specs/auth.md file ko padho. Iske hisaab se auth routes, controllers, aur unit tests implement karo. Jab saare tests pass ho jayein tab mujhe report karo."
```

Claude Code bina kisi andaze ke exact endpoints, validation aur tests bana dega!

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Chhat-pat code likhne ke chakkar me spec likhna skip karna aur fir ghanto bugs fix karna.
- ✅ **Pro Tip:** 10 minute spec likhne me lagayein, isse AI ka coding time 80% fast aur bilkul accurate ho jata hai.

---

## 📝 **Practice Challenge (Khud Karke Dekhein)**

1. Apne project ke kisi naye feature ke liye `specs/todo-api.md` file likhein.
2. Usme 3 endpoints aur 2 test cases define karein.
3. Claude Code ko spec file pass karein aur dekhein kitna clean code banta hai!

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Spec-Driven Development me code likhne se pehle requirements ki doc banti hai.
- Ye AI ko "bina bhatke" seedha sahi code likhne me guide karta hai.
- Specs se AI automated test cases bhi khud bana leta hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Module:** [Module 3: Memory & CLAUDE.md](/courses/claude-code/module-03-context-and-memory/)
- ➡️ **Agla Lesson:** [4.2 Plan Mode & Ultraplan](/courses/claude-code/module-04-development-workflows/02-plan-mode-and-ultraplan/)
