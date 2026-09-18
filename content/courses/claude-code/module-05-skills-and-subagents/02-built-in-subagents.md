---
title: "5.2 Built-in SubAgents"
categories: [ AI, Course ]
tags: [ClaudeCode, SubAgents, MultiAgent, ContextIsolation]
description: "Subagents kya hote hain? Janein kaise background worker agents ko task dekar 90% tokens aur main context bachaya jata hai."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 5: Skills & SubAgents — 5.2 Built-in SubAgents**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki **Subagents (Worker Agents)** kya hote hain aur ye kaise kaam karte hain.
- **Context Isolation** ki power seekhenge jisse main agent ka dimaag (context window) hamesha fresh rehta hai.
- Seekhenge ki Research aur Codebase Search jaise heavy tasks ko Subagents kaise delegate karte hain.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Company Ka CEO vs Research Intern):**  
> Agar ek CEO khud library jakar 50 kitabein padhne lage, toh uska poora din aur energy waste ho jayegi.  
> Samajhdar CEO kya karta hai? Wo apne **Research Intern (Subagent)** ko bhejta hai: *"Jaao in 50 kitabon ko padho aur mujhe sirf 1 page ka summary do"*.  
> Intern saari mehnat karta hai aur CEO ko clean summary laakar deta hai. CEO ka time aur dimaag dono bachte hain!

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Main Agent** | Jo aapse directly baat karta hai aur main decisions leta hai | Claude Code Primary CLI |
| **Subagent** | Background me specific kaam karne wala temporary helper agent | `research` subagent |
| **Context Isolation** | Subagent ki lambi chat ko alag rakhna taaki main chat clean rahe | Memory bachana |
| **Delegation** | Bada ya lamba task chhote worker agent ko saupna | "Research agent, check this repo" |

---

## 🏗️ **Subagents Ka Architecture Diagram**

```text
                           +------------------------+
                           |       USER PROMPT      |
                           +-----------┬------------+
                                       │
                                       ▼
                           +------------------------+
                           |       MAIN AGENT       |
                           | (Controls Master Plan) |
                           +-----------┬------------+
                                       │
                ┌──────────────────────┴──────────────────────┐
                │ Delegates heavy search task                 │
                ▼                                             ▼
    +─────────────────────────+                   +─────────────────────────+
    |   Research Subagent 1   |                   |    Codebase Subagent 2  |
    | (Reads 40 files & logs) |                   |  (Runs heavy grep tests)|
    +───────────┬─────────────+                   +───────────┬─────────────+
                │                                             │
                └──────────────────────┬──────────────────────┘
                                       │ Returns ONLY Crisp 3-Line Summary!
                                       ▼
                           +------------------------+
                           |       MAIN AGENT       |
                           | (Clean context & fast) |
                           +------------------------+
```

---

## 💰 **Token Savings Ka Asli Jadugar**

Bina Subagent ke:
- Main agent 30 files padhta hai ➔ **120,000 Tokens** consume ho gaye!
- Agla prompt slow aur mehenga ho gaya.

Subagent ke sath:
- Subagent alag memory me 30 files padhta hai.
- Main agent ko sirf **500 Tokens** ka summary return karta hai.
- **Nateeja:** 95% Tokens aur paise bach gaye, aur main session bilkul fresh raha!

---

## 🛠️ **Built-in Research Subagent Ka Workflow**

Jab aap Claude Code ko kisi badi library ya documentation ko research karne ko bolte hain:
1. Main agent background me ek **Research Subagent** launch karta hai.
2. Subagent web search karta hai, online docs padhta hai aur GitHub code inspect karta hai.
3. Jab research poori ho jati hai, toh wo seedhe main agent ko answer handover kar deta hai.
4. User ko bina context bhare direct solution mil jata hai.

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Chhote 1-line ke task ke liye subagent spawn karna jisse setup overhead badhe.
- ✅ **Pro Tip:** Subagents sirf heavy tasks ke liye use karein (jaise: poora codebase scan karna, online docs research karna ya multi-file audit karna).

---

## 📝 **Practice Challenge (Khud Sochien)**

1. Sochien agar aapko kisi 10,000 lines wale open-source repo ka architecture samajhna ho, toh bina context bhare subagent kaise madad karega?
2. Kyu subagents ko alag context me run karna token optimization ke liye best practice maana jata hai?

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Subagents background worker agents hote hain jo main agent ki taraf se specific tasks karte hain.
- **Context Isolation** ki wajah se main chat ka token limit waste nahi hota.
- Heavy reading aur research subagents ko delegate karna pro-level engineering hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [5.1 Claude Code Skills](/courses/claude-code/module-05-skills-and-subagents/01-claude-code-skills/)
- ➡️ **Agla Lesson:** [5.3 Custom SubAgents](/courses/claude-code/module-05-skills-and-subagents/03-custom-subagents/)
