---
title: "2.1 Slash Commands Mastery"
categories: [ AI, Course ]
tags: [ClaudeCode, SlashCommands, CLI, Tools]
description: "Claude Code ke sabhi built-in slash commands (/init, /cost, /compact, /doctor, /clear, /review) ka complete practical guide."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 2: Everyday CLI — 2.1 Slash Commands Mastery**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Claude Code ke sabhi **Built-in Slash Commands** ko fluently use kar sakenge.
- `/init` se kisi bhi naye project me instant AI rules bana sakenge.
- `/cost` aur `/compact` ka use karke apne paise aur tokens bacha sakenge.
- Session ko `/clear` aur `/doctor` se efficiently manage kar sakenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Car Ke Dashboard Buttons):**  
> Claude Code me normal baatchit karna steering ghumane jaisa hai, lekin **Slash Commands (`/`)** dashboard ke special shortcut buttons hain — jaise AC on karna (`/init`), fuel/meter check karna (`/cost`), windscreen saaf karna (`/clear`), ya engine checkup karna (`/doctor`).

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Command (Lafz) | Simple Meaning (Aasan Matlab) | Use Case (Kab Chalayein) |
| :--- | :--- | :--- |
| **`/help`** | Sabhi available commands ki list dekhna | Jab command bhool jayein |
| **`/init`** | Project ko scan karke `CLAUDE.md` memory file banana | Naye project me shuruat karte waqt |
| **`/cost`** | Current session me kitne tokens aur paise kharch hue dekhna | Budget monitor karne ke liye |
| **`/compact`** | Lambi chat ko chhota karke memory free karna | Jab context bhari hone lage |
| **`/clear`** | Poori purani chat history delete karke fresh start karna | Naya feature shuru karte waqt |
| **`/doctor`** | Setup aur API connections check karna | Troubleshooting ke waqt |

---

## 📑 **Top Slash Commands Ki Reference Table**

| Command | Kya Karta Hai? | Example Output / Action |
| :--- | :--- | :--- |
| `> /help` | Saari commands aur unka description dikhata hai | Command list screen par aati hai |
| `> /init` | Project ke tech-stack ko detect karke `CLAUDE.md` create karta hai | Creates `CLAUDE.md` with build & test commands |
| `> /cost` | Current session ka total token count aur USD cost batata hai | `Total cost: $0.04 (Tokens: 15,200)` |
| `> /compact` | Context ko summarize karke RAM/Tokens free karta hai | `Context compacted from 80k to 12k tokens` |
| `> /clear` | Memory bilkul clean karta hai (Fresh Session) | Screen clear ho jati hai aur token count 0 ho jata hai |
| `> /doctor` | CLI health, Git, Node.js aur API key verify karta hai | All green ticks (Healthy) |

---

## 🔍 **In-Depth: Sabse Zaruri Commands Ka Sahi Use**

### 1. `> /init` — Naye Project Ki Pehli Command
Jab aap kisi naye project me Claude Code pehli baar chalate hain, toh sabse pehle `/init` chalayein:

```text
> /init
```
**Ye kya karega?**  
Ye aapke `package.json`, build files, linters aur directory structure ko scan karega aur ek `CLAUDE.md` file bana dega jisme likha hoga ki project ko build kaise karna hai, test kaise run karna hai aur kaun se rules follow karne hain.

---

### 2. `> /cost` — Budget Par Nazar Rakhna
Kaam karte waqt aap kisi bhi time `/cost` chala kar dekh sakte hain:

```text
> /cost

Session Cost Breakdown:
- Input Tokens: 24,500 ($0.073)
- Output Tokens: 3,200 ($0.048)
- Total Session Cost: $0.121
```
Isse aapko pata rehta hai ki aapka kitna budget consume hua hai.

---

### 3. `> /compact` — Tokens Aur Speed Bachana
Agar aap kaafi der se ek hi session me kaam kar rahe hain aur 5-6 files edit kar chuke hain, toh context window bhari hone lagti hai. Aise me type karein:

```text
> /compact
```
Claude Code purani baaton ka ek crisp summary bana lega aur extra terminal logs hata dega. Isse agla prompt fast chalega aur tokens kam lagenge.

---

### 4. `> /clear` — Fresh Task Shuru Karna
Jab ek feature ka kaam poora ho jaye aur aapko bilkul naya kaam shuru karna ho, toh purane logs ko `/clear` se saaf kar dein taaki AI purani baaton se confuse na ho.

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Ek hi lambi chat me poore din ka kaam karte rehna bina `/compact` ya `/clear` kiye. Isse response slow ho jata hai aur tokens tezi se kharch hote hain.
- ✅ **Pro Tip:** Har naye unrelated task se pehle `/clear` karein, aur agar lamba task chal raha ho toh har 30-40 minutes me `/compact` karein.

---

## 📝 **Practice Challenge (Khud Karke Dekhein)**

1. Apne terminal me `claude` start karein.
2. `> /help` chala kar sabhi options dekhein.
3. `> /cost` check karein aur note karein ki current spend kya hai.
4. `> /compact` chala kar dekhein ki context kaise condense hota hai.

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- `/init` se project ki memory file `CLAUDE.md` automatically ban jati hai.
- `/cost` se aap live token spend aur dollar cost track kar sakte hain.
- `/compact` lambi chat ko summarize karke tokens aur paise bachata hai.
- `/clear` naya kaam shuru karte waqt session reset karta hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Module:** [Module 1: Foundations](/courses/claude-code/module-01-foundations/)
- ➡️ **Agla Lesson:** [2.2 Making Code Changes & Diffs](/courses/claude-code/module-02-core-workflow/02-making-code-changes/)
