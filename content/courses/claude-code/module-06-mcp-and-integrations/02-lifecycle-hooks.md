---
title: "6.2 Lifecycle Hooks"
categories: [ AI, Course ]
tags: [ClaudeCode, LifecycleHooks, Automation, Security, Linter]
description: "Claude Code me Lifecycle Hooks kya hote hain? Janein Pre-tool aur Post-tool hooks se code formatting aur safety automate karna."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 6: MCP & Plugins — 6.2 Lifecycle Hooks**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki **Lifecycle Hooks** kya hote hain.
- **Pre-Tool Hooks** se dangerous commands ko block karna seekhenge.
- **Post-Tool Hooks** se file edit hote hi automatically **Prettier / ESLint** run karwana seekhenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Airport Security Check & Sanitization):**  
> - **Pre-Hook (Boarding se pehle):** Security guard check karta hai ki aapke paas koi dangerous cheez toh nahi hai. Agar hai, toh rokk deta hai.  
> - **Post-Hook (Flight se utarne ke baad):** Automatic conveyor belt aapka bag sanitise karke aapko handover karta hai.  
> **Lifecycle Hooks** Claude Code me bilkul yahi security aur cleaning automate karte hain!

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Pre-Tool Hook** | AI dwara koi action lene se theek pehle chalne wali script | Dangerous command check |
| **Post-Tool Hook** | AI dwara file change karne ke turant baad chalne wali script | Auto-run Prettier linter |
| **Linter / Formatter** | Code ke indentation aur formatting ko clean karne wala tool | `prettier --write` |
| **Guardrail** | Galti se koi data ya file delete hone se rokne wala suraksha niyam | Block `DROP DATABASE` |

---

## ⚙️ **Hooks Ka Execution Flow**

```text
[ User Prompt: "Update auth controller logic" ]
                       │
                       ▼
[ Pre-Hook Check ] ────> Kya koi secret key ya dangerous command toh nahi? (Pass ✅)
                       │
                       ▼
[ Claude Edits File ] ─> `src/controllers/auth.js` modified
                       │
                       ▼
[ Post-Hook Action ] ──> Automatically runs `npx prettier --write src/controllers/auth.js`
                       │
                       ▼
[ Final Output ] ──────> Perfectly formatted & secured code ready!
```

---

## 🛠️ **Practical Example: Auto-Formatter Post-Hook Setup**

Apne `.claude/hooks/` folder me ek script add karein:

```bash
# .claude/hooks/post-file-edit.sh
#!/bin/bash
FILE_PATH=$1

# Agar JavaScript/TypeScript file modify hui hai toh Prettier chalayein
if [[ "$FILE_PATH" == *.js || "$FILE_PATH" == *.ts || "$FILE_PATH" == *.jsx || "$FILE_PATH" == *.tsx ]]; then
  echo "🧹 Running Prettier on $FILE_PATH..."
  npx prettier --write "$FILE_PATH"
fi
```

Ab jab bhi Claude Code kisi file ko edit karega, aapko manually format karne ki zarurat nahi hogi — Prettier automatically run ho jayega!

---

## 🛡️ **Practical Example: Pre-Hook Security Guard**

```bash
# .claude/hooks/pre-command.sh
#!/bin/bash
COMMAND=$1

# Agar command me dangerous words hain toh block karein
if [[ "$COMMAND" =~ "rm -rf /" || "$COMMAND" =~ "DROP DATABASE" ]]; then
  echo "🚨 BLOCKED: Dangerous command detected!"
  exit 1
fi
```

---

## ⚡ **Lifecycle Hooks Ke Fayde**

1. **Zero Bad Formatting:** Team ke code style rules hamesha 100% follow hote hain.
2. **Iron-Clad Security:** AI kabhi koi sensitive command nahi chala sakta.
3. **Automated Audit Logs:** Har edit ka record file me save hota rehta hai.

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Pre-hook me bahut heavy aur slow script laga dena jisse har turn par 10 second ka delay aaye.
- ✅ **Pro Tip:** Hooks ko fast aur lightweight rakhein taaki coding speed slow na ho.

---

## 📝 **Practice Challenge (Khud Sochien)**

1. Sochien agar aapke project me Git branch me commit hone se pehle auto-lint check hook lag jaye, toh kya code review fast ho jayega?
2. Post-hook me tests run karwana kyu faydemand hai?

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Pre-hooks actions se pehle chalte hain (Safety & Guardrails ke liye).
- Post-hooks actions ke baad chalte hain (Formatting, Prettier & Linting ke liye).
- Isse code quality aur security automate ho jati hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [6.1 Claude Code with MCP](/courses/claude-code/module-06-mcp-and-integrations/01-claude-code-with-mcp/)
- ➡️ **Agla Lesson:** [6.3 Plugins & Ecosystem](/courses/claude-code/module-06-mcp-and-integrations/03-plugins-and-ecosystem/)
