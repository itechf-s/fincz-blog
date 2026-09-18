---
title: "2.3 Multimodal Image Context"
categories: [ AI, Course ]
tags: [ClaudeCode, Multimodal, Vision, UI, Figma]
description: "Claude Code terminal me screenshots, Figma designs aur UI images pass karke exact code banwana seekhein."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 2: Everyday CLI — 2.3 Multimodal Image Context**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Claude Code terminal me **Screenshots aur UI Mockups** ko as context pass kar sakenge.
- Figma design ya screenshot dekh kar pixel-perfect **React/Tailwind/HTML components** banwa sakenge.
- Frontend ke visual bugs (jaise alignment kharab hona) image dikha kar jaldi fix karwa sakenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Ghar Ka Naksha vs Phone Par Samjhana):**  
> Agar aap kisi mistri ko phone par samjhayein ki *"sofa yahan rakho aur TV wahan"*, toh wo galti kar sakta hai. Lekin agar aap use design ki photo (screenshot) dikha dein, toh wo bina kisi confusion ke exact waisa hi set kar dega.  
> Claude Code me **Image Context** bilkul yahi kaam karta hai!

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Multimodal AI** | Text ke sath images/photos ko samajhne wala AI | Claude 3.5 Sonnet Vision |
| **Image Drag & Drop** | Image file ko mouse se terminal me khench kar chhodna | Dragging `screenshot.png` |
| **UI Mockup** | Website ya app ke page ka visual design | Figma export image |
| **Visual Bug** | Screen par UI ka tedha-medha ya cut hona | Mobile screen overflow |

---

## 🖼️ **Terminal Me Images Kaise Pass Karein?**

Claude Code CLI me images attach karne ke 2 aasan tareeqe hain:

```text
Tareeqa 1: Drag & Drop
[ Image File (.png/.jpg) ] ───(Mouse se drag karein)───> [ Claude Code Terminal ]

Tareeqa 2: File Path Type Karna
> "Ye design dekho: ./mockups/dashboard.png aur iska React Tailwind component banao"
```

1. **Tareeqa 1 (Drag & Drop):**  
   Apne desktop ya file explorer se image file ko terminal prompt ke andar drag & drop kar dein. Terminal khud uska path paste kar dega.

2. **Tareeqa 2 (Direct Path):**  
   Image ko project folder me rakhein aur prompt me path likh dein (jaise `assets/login-ui.png`).

---

## 💻 **Real-World Prompts & Use Cases**

### 1. Figma Design Se React Component Banana
```text
> "Main ek image attach kar raha hoon (./designs/pricing-card.png). 
Is design ko analyze karo aur ek responsive React component banao with Tailwind CSS. 
Pricing toggle (Monthly/Yearly) ka interactive state bhi add karna."
```

Claude Code image ko scan karke:
- Exact colors, padding aur typography detect karega.
- Responsive layout (Flexbox/Grid) banayega.
- Component code `src/components/PricingCard.jsx` me save kar dega.

---

### 2. Frontend Visual Bug Fix Karna
```text
> "Mobile screen par navbar cut ho raha hai jaisa is screenshot me dikh raha hai (./screenshots/bug-mobile.png). 
Navbar.tsx file inspect karo aur flex-wrap aur z-index theek karo."
```

Claude Code visual bug dekh kar samajh jayega ki kahan overflow ho raha hai aur exact CSS fix kar dega.

---

## ⚙️ **Vision Processing Ka Flowchart**

```text
+------------------------+
|  Screenshot / Wireframe|
+-----------┬------------+
            │ (Pass to CLI)
            ▼
+-------------------------------------------------------------+
| Claude Vision Engine                                        |
| 1. Detect layout structure (Navbar, Hero, Cards, Footer)    |
| 2. Extract text, buttons, icons placement                   |
| 3. Identify color palette & spacing (Margins/Padding)       |
+---------------------------┬---------------------------------+
                            │
                            ▼
+-------------------------------------------------------------+
| Generated Code (HTML/Tailwind/React/Vue)                    |
| Component saved directly to your local project directory!   |
+-------------------------------------------------------------+
```

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Bahut zyada heavy 4K images attach karna jisse unnecessary latency badhe.
- ✅ **Pro Tip:** Clear aur cropped screenshot dein jisme sirf wahi hissa ho jisko build ya fix karwana hai. Isse tokens kam lagte hain aur accuracy 100% hoti hai.

---

## 📝 **Practice Challenge (Khud Karke Dekhein)**

1. Kisi website ke achhe UI card ka screenshot lein.
2. Us screenshot ko apne project folder me save karein.
3. Claude Code me command dein: `"Is screenshot ka ek clean Tailwind card banao"`.
4. Browser me render karke dekhein kitna accurate banta hai!

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Claude Code terminal me seedhe **Images/Screenshots** as input accept karta hai.
- Drag & drop ya file path dekar aap UI design pass kar sakte hain.
- Design se code banana aur visual bugs theek karna image context se super fast ho jata hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [2.2 Making Code Changes & Diffs](/courses/claude-code/module-02-core-workflow/02-making-code-changes/)
- ➡️ **Agla Module:** [Module 3: Context Window & CLAUDE.md Memory](/courses/claude-code/module-03-context-and-memory/)
