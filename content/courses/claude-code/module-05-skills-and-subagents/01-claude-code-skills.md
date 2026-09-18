---
title: "5.1 Claude Code Skills"
categories: [ AI, Course ]
tags: [ClaudeCode, Skills, SKILLMD, Automation, ModularAI]
description: "Claude Code Skills kya hain aur kaise banti hain? Janein SKILL.md ke sath domain expertise package karna."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 5: Skills & SubAgents — 5.1 Claude Code Skills**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki **Claude Code Skills** kya hoti hain aur `CLAUDE.md` se alag kaise hain.
- `SKILL.md` file likhkar domain-specific knowledge aur specialized workflows package kar sakenge.
- Seekhenge ki Skills kaise automatically activate hoti hain jab unse related task aata hai.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (General Doctor vs Specialist Doctor):**  
> `CLAUDE.md` ek General Doctor ki tarah hai jo basic baatein jaanta hai.  
> Lekin jab heart ka operation karna ho toh ek **Cardiologist (Specialist Skill)** ki zarurat hoti hai.  
> **Skill** wahi specialized expertise hai jo zaroorat padne par activate hoti hai aur kaam khatam hote hi chup ho jati hai, taaki faltu me memory occupy na ho.

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Skill (`SKILL.md`)** | Khas domain ke liye banayi gayi specialized instruction pack | `docker-optimizer/SKILL.md` |
| **Auto-Activation** | Jab prompt match kare toh AI ka khud us skill ko load kar lena | "Dockerize karo" ➔ Docker skill active |
| **Skill Packaging** | Instructions, references aur helper scripts ko ek folder me bandhna | `.agents/skills/<skill-name>/` |
| **Progressive Disclosure** | Poori knowledge har waqt load na karke sirf zarurat par load karna | Token saving technique |

---

## 📁 **Skills Ka Folder Structure**

Skills ko is tarah organize kiya jata hai:

```text
.agents/skills/
└── database-migrator/
    ├── SKILL.md                          # Main instructions & frontmatter
    ├── references/                       # Detailed guidelines / docs
    │   └── migration_rules.md
    └── scripts/                          # Optional helper scripts
        └── validate_schema.py
```

---

## 📄 **`SKILL.md` File Ka Standard Format**

`SKILL.md` ke top par YAML frontmatter hota hai jisme `name` aur `description` likha hota hai:

```markdown
---
name: database-migrator
description: Best practices and automated workflow for safely migrating relational database schemas in PostgreSQL without downtime. Use this skill whenever altering tables, creating indexes, or running migrations.
---

# Database Migrator Skill

Whenever the user asks to create or update database tables:

## 1. Safety Rules
- Never use `DROP TABLE` without explicit user permission.
- Always create indexes concurrently (`CREATE INDEX CONCURRENTLY`).
- Add rollback SQL scripts for every new migration.

## 2. Step-by-Step Workflow
1. Inspect current `prisma/schema.prisma` or SQL files.
2. Draft the migration script under `migrations/`.
3. Test migration locally with test database.
```

---

## ⚡ **Skill Auto-Activation Kaise Kaam Karti Hai?**

```text
[ User Prompt: "Humein users table me naya index add karna hai" ]
                             │
                             ▼
[ AI Scans Skill Descriptions ] ──> Finds 'database-migrator' description matches!
                             │
                             ▼
[ Auto-Loads SKILL.md ]         ──> Applies concurrent index rules & safety checks
                             │
                             ▼
[ Produces Safe Migration ]     ──> Zero downtime migration created successfully!
```

---

## ⚖️ **`CLAUDE.md` vs Custom Commands vs Skills**

| Feature | `CLAUDE.md` | Custom Commands (`.claude/commands/`) | Skills (`SKILL.md`) |
| :--- | :--- | :--- | :--- |
| **Scope** | Poore project ke basic rules | Ek specific shortcut action (e.g. `/test`) | Deep specialized domain workflows |
| **Activation** | Har waqt load rehta hai | User manually `/command` type karta hai | AI prompt match hone par **Auto-Load** karta hai |
| **Token Impact** | Hamesha context me rehta hai | Sirf call karne par load hota hai | Sirf zarurat padne par load hota hai |

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** `SKILL.md` ke description me vague baatein likhna jisse AI ko samajh hi na aaye ki kab activate hona hai.
- ✅ **Pro Tip:** `description` me clear trigger words likhein: *"Use this skill whenever doing X, Y, or Z"*.

---

## 📝 **Practice Challenge (Khud Karke Dekhein)**

1. Apne project me `.agents/skills/git-workflow/` folder banayein.
2. Usme `SKILL.md` banayein jisme standard Git commit format (Conventional Commits: `feat:`, `fix:`, `chore:`) define karein.
3. Claude Code me bole: `"Is feature ko commit karo"` aur dekhein skill auto-activate hoti hai ya nahi.

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Skills specialized workflows ko package karne ka tareeqa hain.
- Ye **Progressive Disclosure** follow karti hain (sirf zarurat par load hokar tokens bachati hain).
- Frontmatter me clear `description` likhne se AI ise automatically trigger kar leta hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Module:** [Module 4: Development Workflows](/courses/claude-code/module-04-development-workflows/)
- ➡️ **Agla Lesson:** [5.2 Built-in SubAgents](/courses/claude-code/module-05-skills-and-subagents/02-built-in-subagents/)
