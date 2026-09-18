---
title: "3.1 Context Window Management"
categories: [ AI, Course ]
tags: [ClaudeCode, ContextWindow, Tokens, CostOptimization]
description: "Context Window aur Tokens ko manage karna seekhein. Janein kaise /compact aur token optimization se paise bacha sakte hain."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 3: Memory — 3.1 Context Window Management**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki **Context Window** kya hoti hai aur ye kaise kaam karti hai.
- Seekhenge ki context bhar jane se AI kyu confuse (hallucinate) hone lagta hai.
- `/compact` aur `/clear` ka sahi time par use karke **70-80% Token Cost** bachana seekhenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Chhota Writing Pad / Whiteboard):**  
> Maan lijiye aapke paas ek whiteboard hai jispar 20 baatein likhi ja sakti hain.  
> Agar aap har chhoti baat likhte jayenge aur purani baaton ko nahi mitayenge, toh whiteboard bhar jayega aur nayi baatein likhne ki jagah nahi bachegi.  
> **`/compact`** ka matlab hai: Purani 15 baaton ka 2 lines me saaf summary likh dena, taaki whiteboard par aage ke kaam ke liye nayi jagah ban jaye.

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Token** | AI ke padhne ki unit (~4 characters ya 1 shabd = 1.3 token) | 1,000 words ≈ 1,300 tokens |
| **Context Bloat** | Chat me zarurat se zyada purana kachra ya logs jama hona | 150k tokens ka bhari session |
| **Hallucination** | Context bharne par AI ka galat ya andaze se jawab dena | Galat file paths assume karna |
| **Input vs Output Cost** | AI ko context bhejne ka charge vs AI ke likhne ka charge | Input sasta hota hai, Output mehenga |

---

## 📊 **Context Bloating Ka Asar (Problem vs Solution)**

Jab aap bina context manage kiye kaam karte hain:

```text
[ Shuruat: Fresh Session ] ───> 5,000 Tokens  ───> Fast Response & Very Low Cost ($0.01)
                                      │
                                (Kayi files padhne ke baad)
                                      ▼
[ Bloated Session ]       ───> 120,000 Tokens ───> Slow Response, Hallucinations ($0.40/prompt!)
                                      │
                                (Ran /compact)
                                      ▼
[ Compacted Session ]     ───> 15,000 Tokens  ───> Fast Again & Cheap Cost ($0.04/prompt!)
```

---

## 🔄 **`/compact` Kaise Kaam Karta Hai?**

Jab aap `/compact` command chalate hain:

1. **Purani History Summarize:** Pichhli 30 baatchit ko 4-5 bullet points me condense karta hai.
2. **Heavy Logs Clean:** `npm install` ya test ke 500 lines ke verbose logs ko hata deta hai.
3. **Active State Save:** Ye yaad rakhta hai ki kaun si file par kaam chal raha tha aur current goal kya hai.

---

## ⚖️ **`/compact` vs `/clear` — Kab Kaun Sa Use Karein?**

| Scenario | Kaun Si Command Chalayein? | Kyu? |
| :--- | :--- | :--- |
| **Same Feature par kaam chal raha hai** (e.g. Auth module) lekin session lamba ho gaya | `> /compact` | Taaki pichhla context aur decisions yaad rahein lekin token size chhota ho jaye. |
| **Feature complete ho gaya**, ab bilkul alag feature shuru karna hai (e.g. Payment Gateway) | `> /clear` | Taaki purane Auth module ka context naye payment task me confuse na kare. |

---

## 💡 **Token Aur Paise Bachane Ke 4 Golden Rules**

1. **Targeted Prompts Dein:**  
   AI ko poori repository scan karne ke bajaye specific folder ya file ka path batayein (jaise `src/utils/math.js`).

2. **Large Logs Ko Prompt Me Na Dalein:**  
   Bade crash dumps ko terminal prompt me paste karne ke bajaye bolen: *"Check error in `error.log` line 50 to 80"*.

3. **Har 30-45 Minute Me Compact Karein:**  
   Lambi coding marathon me `/compact` ko regular aadat banayein.

4. **Specific Tool Rules Set Karein:**  
   `CLAUDE.md` me likhein ki heavy builds ya unnecessary log generation na kare.

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Session me tokens ko monitor na karna aur mahine ke end me bada bill dekhna.
- ✅ **Pro Tip:** Har 4-5 prompts ke baad `> /cost` chalakar dekhein ki kitne tokens consume ho rahe hain.

---

## 📝 **Practice Challenge (Khud Karke Dekhein)**

1. Claude Code me `> /cost` chalayein aur current input/output tokens check karein.
2. Ek prompt dein jisme 2-3 files read karwayen.
3. Dobara `> /cost` check karein aur dekhein tokens kaise badhe.
4. `> /compact` chalayein aur dekhein context kaise shrink hota hai!

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Context window AI ki memory limit hoti hai; iske bharne par speed slow aur cost high ho jati hai.
- `/compact` zaruri baaton ko rakhkar extra logs ko compress karta hai.
- Naye unrelated task par jane se pehle `/clear` karna sabse best practice hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Module:** [Module 2: Everyday CLI](/courses/claude-code/module-02-core-workflow/)
- ➡️ **Agla Lesson:** [3.2 CLAUDE.md — The Project Brain](/courses/claude-code/module-03-context-and-memory/02-claude-md-the-master-file/)
