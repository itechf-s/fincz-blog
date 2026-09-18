---
title: "2.2 Making Code Changes & Diffs"
categories: [ AI, Course ]
tags: [ClaudeCode, Diffs, CodeEditing, Terminal]
description: "Claude Code के साथ कोड एडिट करना सीखें: Targeted edits, Diffs रिव्यू और सेफ टर्मिनल कमांड्स चलाना।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 2: Everyday CLI — 2.2 Making Code Changes & Diffs**

---

## 🎯 **Objective (इस लेसन का मक़सद)**
इस लेसन को पूरा करने के बाद आप:
- समझ पाएंगे कि Claude Code पूरी फाइल बदलने के बजाय सिर्फ **Targeted Diffs** कैसे बनाता है।
- टर्मिनल में **Diffs Review** करके सेफ तरीके से बदलावों को मंजूर (approve) या रिजेक्ट कर सकेंगे।
- एक साथ कई फाइल्स में कोड सुधारना (Refactoring) सीखेंगे।

---

## 💡 **Real-Life Analogy (आसान मिसाल)**

> **मिसाल (कमरे का बल्ब बदलना):**  
> मान लीजिए आपके बेडरूम का एक बल्ब खराब हो गया है।  
> - **खराब AI:** पूरे कमरे की दीवार तोड़कर दोबारा बनाता है (पूरी फाइल rewrite), जिससे बाकी चीजें भी टूट जाती हैं।  
> - **Claude Code (Diff तरीका):** यह एक समझदार इलेक्ट्रिशियन की तरह सिर्फ खराब बल्ब को निकालता है और नया लगा देता है (सिर्फ 2-3 लाइनें बदलता है)। बाकी पूरा कमरा सेफ रहता है।

---

## 📖 **Key Terms & Glossary (ज़रूरी शब्द)**

| Term (शब्द) | Simple Meaning (आसान मतलब) | Example (मिसाल) |
| :--- | :--- | :--- |
| **Code Diff** | पुराने कोड और नए कोड के बीच का फर्क | Green (`+`) नया कोड, Red (`-`) पुराना कोड |
| **Surgical Edit** | पूरी फाइल के बजाय सिर्फ जरूरी लाइनों को बदलना | 500 लाइनों में से सिर्फ 3 लाइनें बदलना |
| **Permission Prompt**| बदलाव लागू करने से पहले आपसे पूछना | `Apply these changes? [y/n/e]` |
| **Refactoring** | कोड के लॉजिक को साफ और बेहतर बनाना | बड़े कोड को छोटा और मॉडर्न करना |

---

## 🔍 **Claude Code का एडिटिंग फ्लो (Step-by-Step)**

जब आप Claude Code को कोई बदलाव करने को कहते हैं:

```text
[ यूज़र प्रॉम्प्ट: "cart.js में डिस्काउंट का फॉर्मूला सही करो" ]
                        │
                        ▼
[ Step 1: Ripgrep Search ] ➔ ढूंढता है 'discount' कहाँ लिखा है
                        │
                        ▼
[ Step 2: Read Lines ]     ➔ cart.js की खास लाइनें (Lines 40-65) पढ़ता है
                        │
                        ▼
[ Step 3: Generate Diff ]  ➔ सिर्फ गलत लाइन को ठीक करके प्रीव्यू दिखाता है
                        │
                        ▼
[ Step 4: User Approval ]  ➔ स्क्रीन पर Diff दिखाकर आपसे 'Yes/No' पूछता है
                        │
                        ▼
[ Step 5: Test Execution ] ➔ फाइल सेव करके टेस्ट चलाकर वेरिफाई करता है
```

---

## 💻 **टर्मिनल में Diffs को पढ़ना**

जब Claude Code फाइल एडिट करता है, तो स्क्रीन पर ऐसा साफ Diff दिखता है:

```diff
--- a/src/services/cart.js
+++ b/src/services/cart.js
@@ -42,7 +42,7 @@ function calculateTotal(items, coupon) {
   let subtotal = items.reduce((sum, item) => sum + item.price, 0);
   
-  // गलती: फिक्स्ड डिस्काउंट घटा रहा था
-  let discount = coupon ? subtotal - 50 : 0;
+  // सही: अब प्रतिशत के हिसाब से कैलकुलेट होगा
+  let discount = coupon ? (subtotal * coupon.percentage) / 100 : 0;
   
   return subtotal - discount;
 }
```

- **लाल लाइन (`-`):** पुराना कोड जो हटाया जा रहा है।
- **हरी लाइन (`+`):** नया कोड जो जोड़ा जा रहा है।

---

## 🎮 **यूज़र के ऑप्शन्स**

टर्मिनल पर जब Diff आएगा, तो आपसे पूछा जाएगा:

```text
Do you want to apply these changes? (y/n/e):
```

- **`y` (Yes):** बदलाव तुरंत सेव कर दो।
- **`n` (No):** बदलाव रद्द कर दो, कोई फाइल चेंज नहीं होगी।
- **फीडबैक देना:** आप नया निर्देश भी दे सकते हैं: *"नहीं, डिस्काउंट में अधिकतम ₹200 की लिमिट भी लगाओ।"*

---

## ⚠️ **Common Mistakes & Pro Tips (बचने वाली गलतियाँ)**

- ❌ **गलती:** Diff देखे बिना जल्दबाजी में `y` दबा देना।
- ✅ **Pro Tip:** हमेशा चेक करें कि नए कोड में कोई जरूरी कमेंट या पुराना एरर हैंडलिंग तो नहीं हट गया।

---

## 📝 **Practice Challenge (खुद करके देखें)**

1. अपने प्रोजेक्ट के किसी फंक्शन में जान-बूझकर एक छोटी गलती करें।
2. Claude Code से कहें: `"प्रोजेक्ट में टेस्ट चलाओ और एरर ठीक करो"`।
3. देखें कैसे Claude Code एरर पढ़कर सही लाइन का Diff दिखाता है।

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- Claude Code **Targeted Edits** करता है जिससे पूरी फाइल खराब होने का खतरा नहीं रहता।
- Diffs में **Red (`-`)** का मतलब लाइन हटना और **Green (`+`)** का मतलब नई लाइन जुड़ना है।
- बदलाव सेव होने के बाद Claude Code खुद टेस्ट चलाकर कन्फर्म करता है।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Lesson:** [2.1 Slash Commands Mastery](/courses/claude-code/module-02-core-workflow/01-slash-commands-mastery/)
- ➡️ **अगला Lesson:** [2.3 Multimodal Image Context](/courses/claude-code/module-02-core-workflow/03-multimodal-image-context/)
