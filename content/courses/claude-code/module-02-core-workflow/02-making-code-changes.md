---
title: "2.2 Making Code Changes & Diffs"
categories: [ AI, Course ]
tags: [ClaudeCode, Diffs, CodeEditing, Terminal]
description: "Claude Code ke sath code changes kaise karein? Target edits, git diff inspection aur safe command execution seekhein."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 2: Everyday CLI — 2.2 Making Code Changes & Diffs**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki Claude Code poori file rewrite karne ke bajaye **Targeted Diffs** kaise banata hai.
- Terminal me **Diffs Review** karke safe code changes approve ya reject kar sakenge.
- Multi-file refactoring ko smoothly handle karna seekhenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (Ghar Ka Renovation):**  
> Maan lijiye aapke bedroom ki ek light kharab hai.  
> - **Kharab AI:** Poore kamre ki deewar tod kar dobara banata hai (poori file rewrite), jisse baaki cheezein bhi toot jati hain.  
> - **Claude Code (Diff approach):** Ye ek smart electrician ki tarah sirf us kharab bulb ko nikalta hai aur naya bulb laga deta hai (sirf exact 2-3 lines badalta hai). Baaki poora kamra safe rehta hai.

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **Code Diff** | Purane code aur naye code ke beech ka farq | Green (`+`) naya code, Red (`-`) purana code |
| **Surgical Edit** | Poori file ke bajaye sirf zaruri lines ko badalna | 500 lines me se sirf 4 lines replace karna |
| **Permission Prompt** | Change apply karne se pehle aapse poochna | `Apply these changes? [y/n/e]` |
| **Refactoring** | Code ke logic ko clean aur behtar banana | Functions ko modular karna |

---

## 🔍 **Claude Code Ka Editing Flow (Step-by-Step)**

Jab aap Claude Code ko koi code change karne ko bolte hain, toh wo ye steps follow karta hai:

```text
[ User Prompt: "Fix discount calculation in cart.js" ]
                        │
                        ▼
[ Step 1: Ripgrep Search ] ➔ dhoondhta hai 'discount' kahan calculate ho raha hai
                        │
                        ▼
[ Step 2: Read Lines ] ➔ cart.js ki specific lines (e.g. Lines 40-65) padhta hai
                        │
                        ▼
[ Step 3: Generate Diff ] ➔ sirf galat formula ko theek karke preview dikhata hai
                        │
                        ▼
[ Step 4: User Approval ] ➔ Terminal par Diffs dikhakar aapse 'Yes/No' poochta hai
                        │
                        ▼
[ Step 5: Test Execution ] ➔ File save hone ke baad tests run karke verify karta hai
```

---

## 💻 **Terminal Me Diffs Ko Padhna**

Jab Claude Code code edit karta hai, toh terminal par is tarah ka clean diff dikhta hai:

```diff
--- a/src/services/cart.js
+++ b/src/services/cart.js
@@ -42,7 +42,7 @@ function calculateTotal(items, coupon) {
   let subtotal = items.reduce((sum, item) => sum + item.price, 0);
   
-  // Galti: Discount fixed amount subtract kar raha tha
-  let discount = coupon ? subtotal - 50 : 0;
+  // Theek: Ab percentage ke hisaab se calculate hoga
+  let discount = coupon ? (subtotal * coupon.percentage) / 100 : 0;
   
   return subtotal - discount;
 }
```

- **Red Line (`-`):** Purana code jo hataya ja raha hai.
- **Green Line (`+`):** Naya code jo add kiya ja raha hai.

---

## 🎮 **User Interaction Options**

Terminal par jab diff aayega, toh aapse pucha jayega:

```text
Do you want to apply these changes? (y/n/e):
```

- **`y` (Yes):** Change ko turant apply kar do aur file save kar do.
- **`n` (No / Cancel):** Is change ko cancel kar do, koi file modify nahi hogi.
- **Feedback dena:** Aap mana karke naya prompt bhi de sakte hain: *"Nahi, percentage ke sath max discount ₹200 ka cap bhi lagao."*

---

## ⚡ **Multi-File Refactoring Ka Example**

Agar aapko ek sath 3-4 files me changes karne hain, toh aap seedha prompt de sakte hain:

```text
> "User table me 'phone_number' column add kiya hai. Ab auth controller, registration form aur test cases sabhi jagah is field ko handle karo aur check karo test pass ho rahe hain ya nahi."
```

Claude Code sequence me:
1. `src/models/user.js` ko edit karega.
2. `src/controllers/auth.js` ko edit karega.
3. `tests/auth.test.js` me naya test add karega.
4. Terminal me `npm test` chalayega aur output report karega.

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Terminal par diffs dekhe bina aankh band karke `y` dabana.
- ✅ **Pro Tip:** Hamesha check karein ki naye code me koi zaruri comment ya existing error handling toh delete nahi ho gayi.

---

## 📝 **Practice Challenge (Khud Karke Dekhein)**

1. Apne project me kisi ek function me jaan-bujhkar ek chhota typo kar dein.
2. Claude Code ko prompt dein: `"Project me test run karo aur jo error aaye use fix karo"`.
3. Dekhein kaise Claude Code error read karke exact line ka diff banata hai.

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Claude Code **Targeted Edits** karta hai jisse poori file kharab hone ka risk zero hota hai.
- Diffs me **Red (`-`)** ka matlab purani line hatna aur **Green (`+`)** ka matlab nayi line judna hai.
- Changes save hone ke baad Claude Code khud tests chala kar confirm karta hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Lesson:** [2.1 Slash Commands Mastery](/courses/claude-code/module-02-core-workflow/01-slash-commands-mastery/)
- ➡️ **Agla Lesson:** [2.3 Multimodal Image Context](/courses/claude-code/module-02-core-workflow/03-multimodal-image-context/)
