---
title: "7.2 Automated Debugging, Testing & PRs"
categories: [ AI, Course ]
tags: [ClaudeCode, Debugging, Testing, GitPR, Capstone]
description: "Real codebase ke complex bugs fix karna, automated unit tests generate karna aur Git Pull Request banana seekhein."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 7: Capstone — 7.2 Automated Debugging, Testing & PRs**

---

## 🎯 **Objective (Is Project Ka Maqsad)**
Is final lesson ko poora karne ke baad aap:
- Kisi bhi existing repository ke **Fail hote tests aur hidden bugs** ko Claude Code se autonomously fix karwa sakenge.
- **Root Cause Analysis (RCA)** seekhenge ki agent kaise terminal error logs padhkar exact bug dhoondhta hai.
- Poore fix ke baad clean Git branch banakar automated **Pull Request (PR)** generate karna seekhenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Forensic Detective & Doctor):**  
> Jab koi bada crime scene hota hai, toh detective fingerprint match karta hai (Error logs scan karta hai), saboot ikattha karta hai (Codebase grep karta hai), aur exact criminal ko pakad leta hai (Bug fix karta hai). Uske baad court me poora charge sheet submit karta hai (Git Pull Request ready karta hai).  
> Claude Code is process ko 100% automated bana deta hai!

---

## 🔄 **Automated Bug-Fixing Ka 5-Step Loop**

```text
  ┌──────────────────────────────────────────────────────────┐
  │ 1. Run Test Suite ➔ 3 Tests FAILED ❌                    │
  │    (Terminal error log captured)                         │
  └────────────────────────────┬─────────────────────────────┘
                               │
                               ▼
  ┌──────────────────────────────────────────────────────────┐
  │ 2. Trace Call Stack ➔ Ripgrep search in `src/`           │
  │    (Identifies race condition in checkout logic)         │
  └────────────────────────────┬─────────────────────────────┘
                               │
                               ▼
  ┌──────────────────────────────────────────────────────────┐
  │ 3. Apply Targeted Diff ➔ Fixes concurrency lock          │
  └────────────────────────────┬─────────────────────────────┘
                               │
                               ▼
  ┌──────────────────────────────────────────────────────────┐
  │ 4. Re-run Test Suite ➔ ALL TESTS PASSED ✅               │
  └────────────────────────────┬─────────────────────────────┘
                               │
                               ▼
  ┌──────────────────────────────────────────────────────────┐
  │ 5. Auto-Generate PR ➔ `fix/checkout-race-condition`      │
  │    Clean commit message + PR summary written!            │
  └──────────────────────────────────────────────────────────┘
```

---

## 💻 **Terminal Me Live Workflow Execution**

### Step 1: Reproduction & Error Detection
Claude Code me type karein:

```text
> "Project me tests run karo aur dekho kaun se test cases fail ho rahe hain."
```

Output:
```text
FAIL tests/payment.test.js
  ● Checkout Flow › should prevent double charge on rapid clicks
    AssertionError: expected chargeCount to be 1, but received 2
```

---

### Step 2: Autonomous Root Cause Analysis
Claude Code khud `src/services/payment.js` ko inspect karega aur dekhega ki rapid clicks me idempotency key ya locking mechanism missing hai.

---

### Step 3: Targeted Fix & Diff Apply
Claude Code diff preview dikhayega:

```diff
--- a/src/services/payment.js
+++ b/src/services/payment.js
@@ -18,6 +18,10 @@ async function processPayment(userId, amount, idempotencyKey) {
+  // Check if payment with this idempotency key was already processed
+  const existing = await cache.get(`pay:${idempotencyKey}`);
+  if (existing) return existing;
+  
   const result = await stripe.charges.create({ amount, currency: 'usd' });
```

---

### Step 4: Re-testing & PR Creation
Jab saare tests pass ho jayein:

```text
> "Nayi git branch banao 'fix/idempotency-bug', changes commit karo with Conventional Commit format, aur GitHub PR ka markdown description generate karo."
```

Claude Code:
1. `git checkout -b fix/idempotency-bug` chalayega.
2. `git commit -m "fix(payment): prevent duplicate charges using idempotency cache"` karega.
3. PR description ready karke screen par display kar dega!

---

## 🎓 **Course Conclusion: Ab Aap Ek 10x Agentic Engineer Hain!**

Mubarak ho! Aapne **Claude Code Master Course** ke sabhi 7 Modules successfully complete kar liye hain:

1. ✅ **Foundations:** Agentic Loops & Setup
2. ✅ **Core CLI:** Slash commands, Diffs & Multimodal Vision
3. ✅ **Memory:** Context Window & `CLAUDE.md` Master Rules
4. ✅ **Workflows:** Spec-Driven Development & Plan Modes
5. ✅ **Architecture:** Skills & SubAgents
6. ✅ **Integrations:** MCP, Lifecycle Hooks & Plugins
7. ✅ **Production:** Fullstack SaaS & Autonomous Bug Fixing

Ab aap kisi bhi software development project ko 10x speed aur confidence ke sath bina kisi dar ke lead kar sakte hain!

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Autonomous debugging me AI error stack trace padhkar khud exact line par fix karta hai.
- Tests ka green hona is baat ka proof hai ki fix 100% working hai.
- Git PR generation ke sath poora engineering lifecycle automate ho jata hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [7.1 Building a Fullstack SaaS App](/courses/claude-code/module-07-production-projects/01-building-fullstack-app/)
- 🏠 **Course Overview:** [Claude Code Home](/courses/claude-code/)
