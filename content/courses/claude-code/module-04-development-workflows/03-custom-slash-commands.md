---
title: "4.3 Custom Slash Commands"
categories: [ AI, Course ]
tags: [ClaudeCode, CustomCommands, SlashCommands, Automation]
description: "Claude Code me apne custom slash commands banana seekhein (.claude/commands/) aur daily workflows ko automate karein."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 4: Workflows — 4.3 Custom Slash Commands**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki **Custom Slash Commands** kya hote hain.
- `.claude/commands/` folder ke andar apne manpasand shortcut commands bana sakenge.
- Reusable workflows (jaise `/test-all`, `/create-api`, `/git-pr`) ko ek click me automate kar sakenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Mobile Ke Quick Dial Shortcuts):**  
> Roz-roz 10 digit ka phone number type karne ke bajaye aap number ko 'Speed Dial 1' par save kar lete hain aur ek button dabate hi call lag jati hai.  
> **Custom Slash Commands** aapke roz ke lambe prompts ke liye wahi speed dial shortcuts hain!

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Custom Slash Command** | User dwara banaya gaya apna shortcut command | `/create-api`, `/review-pr` |
| **`.claude/commands/`** | Wo folder jahan custom command files rakhi jati hain | Project directory me `.claude/commands/` |
| **Command Markdown** | Command ka prompt aur instructions define karne wali `.md` file | `deploy.md` |
| **Arguments** | Command ke aage extra input pass karna | `/create-api users` |

---

## 📁 **Custom Commands Ka Folder Structure**

Apne project ke root me ek folder banayein:

```text
my-project/
├── .claude/
│   └── commands/
│       ├── test-all.md          # Runs /test-all
│       ├── create-api.md        # Runs /create-api
│       └── make-pr.md           # Runs /make-pr
├── CLAUDE.md
└── package.json
```

---

## 🛠️ **Practical Example 1: `/test-all` Command Banana**

File banayein: `.claude/commands/test-all.md`

```markdown
Run the following verification steps on the project:
1. Run `npm run lint` to check for syntax and style issues.
2. Run `npm test` to run all unit and integration tests.
3. If any test fails, inspect the failing files, explain the exact root cause, and ask for permission to apply the fix.
4. If everything passes, give a clean summary: "All checks passed successfully! ✅"
```

Ab aap Claude Code terminal me seedhe type kar sakte hain:
```text
> /test-all
```
Claude Code turant saare lint aur test steps run karke report de dega!

---

## 🛠️ **Practical Example 2: `/create-api` (With Arguments)**

File banayein: `.claude/commands/create-api.md`

```markdown
Create a new REST API endpoint for the entity specified in the argument ($1):
1. Create model in `src/models/$1.js`.
2. Create controller in `src/controllers/$1Controller.js` with CRUD methods.
3. Add routes in `src/routes/$1Routes.js`.
4. Create unit tests in `tests/$1.test.js`.
5. Run tests and verify the endpoints are working properly.
```

Ab terminal me sirf ye command chalayein:
```text
> /create-api products
```
Ye command `products` entity ke liye model, controller, routes aur tests automatically scaffold kar degi!

---

## ⚡ **Custom Commands Ke Fayde**

1. **Bar-Bar Lamba Prompt Likhne Se Chhutkara:** Ek baar command banayein, poori team use kare.
2. **Team Consistency:** Sabhi developers ek hi standard workflow follow karenge.
3. **Faster Onboarding:** Naye developer ko sirf commands pata hone chahiye.

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Command file me bahut zyada broad aur unclear instructions likhna.
- ✅ **Pro Tip:** Command instructions me step numbers (`1.`, `2.`, `3.`) aur exact verification steps zaroor likhein.

---

## 📝 **Practice Challenge (Khud Karke Dekhein)**

1. Apne project me `.claude/commands/` folder banayein.
2. Ek naya command banayein `docs.md` jo project ke functions padhkar JSDoc comments add kare.
3. Terminal me `> /docs` chala kar check karein.

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- `.claude/commands/` folder me `.md` file banakar aap naye slash commands bana sakte hain.
- Command ka naam wahi hota hai jo file ka naam hota hai (e.g. `test-all.md` ➔ `/test-all`).
- Isse repetitive engineering tasks 10x fast ho jate hain.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [4.2 Plan Mode & Ultraplan](/courses/claude-code/module-04-development-workflows/02-plan-mode-and-ultraplan/)
- ➡️ **Agla Module:** [Module 5: Skills & SubAgents Architecture](/courses/claude-code/module-05-skills-and-subagents/)
