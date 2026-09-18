---
title: "5.3 Custom SubAgents"
categories: [ AI, Course ]
tags: [ClaudeCode, CustomSubAgents, MultiAgent, SpecializedAI]
description: "Custom Subagents banana seekhein: QA Tester, Security Auditor aur Docs Generator jaise specialized worker agents banana."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 5: Skills & SubAgents — 5.3 Custom SubAgents**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki **Custom Subagents** kaise banaye jate hain.
- Apne project ke liye specialized workers jaise `Security-Auditor`, `Test-Writer`, aur `Docs-Generator` configure kar sakenge.
- Ek Multi-Agent team workflow setup karna seekhenge jahan alag-alag agents milkar ek feature complete karte hain.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Software Company Ki Specialized Team):**  
> Ek hi insaan developer, tester, security officer aur technical writer sab kuch nahi ban sakta.  
> Ek achhi company me:
> - **Developer:** Code likhta hai.
> - **QA Tester (Subagent 1):** Edge cases aur bugs dhoondhta hai.
> - **Security Auditor (Subagent 2):** Vulnerabilities check karta hai.
> - **Tech Writer (Subagent 3):** Documentation aur API docs likhta hai.  
> Custom Subagents aapke terminal me aisi hi ek full-fledged engineering team khadi kar dete hain!

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Custom Subagent** | User dwara banaya gaya specialized worker agent | `test-agent`, `security-agent` |
| **System Prompt** | Subagent ki personality, role aur rules define karna | "You are an expert QA tester" |
| **Tool Scoping** | Subagent ko sirf zaruri tools dena (e.g. Sirf Read ya Sirf Write) | Read-only permissions |
| **Multi-Agent Flow** | Ek agent ka output doosre agent ka input banna | Coder ➔ Tester ➔ Docs |

---

## 🛠️ **Custom Subagent Kaise Define Karein?**

Custom Subagent banate waqt 3 cheezein define karni hoti hain:
1. **Name & Role:** Agent ka naam aur role (e.g. `unit-tester`).
2. **System Prompt:** Agent ko kya karna hai aur kya nahi karna hai.
3. **Tools & Permissions:** Kya agent code edit kar sakta hai ya sirf read kar sakta hai.

---

## 📝 **Practical Example: `unit-tester` Subagent Banana**

Maan lijiye hum ek subagent banate hain jiska kaam sirf **Jest unit tests** likhna aur verify karna hai:

```markdown
# Subagent Config: unit-tester

## Role
You are a Senior Test Automation Engineer specialized in Jest and React Testing Library.

## Responsibilities
1. Inspect the given component or backend service file.
2. Identify all possible edge cases, happy paths, and error scenarios.
3. Write unit tests inside the `tests/` directory.
4. Run `npm test` to ensure 100% pass rate.
5. Report the test coverage percentage to the Main Agent.

## Rules
- Do NOT modify application source code (only write inside `tests/`).
- Follow Arrange-Act-Assert (AAA) pattern.
```

---

## 🔄 **Multi-Agent Orchestration Flow**

Jab aap koi naya feature banwate hain, toh ye team is tarah kaam karti hai:

```text
               +-----------------------------------+
               |           User Request            |
               | "Build Payment Webhook Handler"   |
               +-----------------┬-----------------+
                                 │
                                 ▼
               +-----------------------------------+
               |        1. Main Coder Agent        |
               | -> Writes `src/api/webhook.js`    |
               +-----------------┬-----------------+
                                 │
                                 ▼
               +-----------------------------------+
               |      2. Custom Tester Agent       |
               | -> Writes 8 unit tests in `tests/`|
               | -> Runs `npm test` & confirms pass|
               +-----------------┬-----------------+
                                 │
                                 ▼
               +-----------------------------------+
               |      3. Security Auditor Agent    |
               | -> Checks Stripe signature verify |
               | -> Confirms zero security leaks   |
               +-----------------┬-----------------+
                                 │
                                 ▼
               +-----------------------------------+
               |   Production Ready PR Created!    |
               +-----------------------------------+
```

---

## ⚡ **Custom Subagents Ke Fayde**

1. **High Quality Code:** Har kaam ka specialist alag hota hai.
2. **Zero Clutter:** Main agent ko lambe test logs nahi dekhne padte.
3. **Safe Permissions:** Security auditor ko sirf read permission dekar safe rakha ja sakta hai.

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Subagent ko bahut zyada broad role de dena (e.g. "You do everything").
- ✅ **Pro Tip:** Har subagent ka role bilkul single-responsibility (chhota aur specific) rakhein.

---

## 📝 **Practice Challenge (Khud Sochien)**

1. Apne project ke liye ek `Docs-Generator` subagent ka role sochein jiska kaam har naye API endpoint ke liye Swagger / OpenAPI docs generate karna ho.
2. Usko kaun-kaun se rules sikhaye ja sakte hain?

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Custom Subagents se aap specialized roles (Tester, Security, Docs) bana sakte hain.
- Tool Scoping se aap subagents ki powers ko safe rakh sakte hain.
- Multi-agent orchestration se enterprise-grade, tested software banta hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [5.2 Built-in SubAgents](/courses/claude-code/module-05-skills-and-subagents/02-built-in-subagents/)
- ➡️ **Agla Module:** [Module 6: MCP, Hooks & Automation Plugins](/courses/claude-code/module-06-mcp-and-integrations/)
