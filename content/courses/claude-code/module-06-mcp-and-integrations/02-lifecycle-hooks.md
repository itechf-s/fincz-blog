---
title: "6.2 Lifecycle Hooks"
categories: [ AI, Course ]
tags: [ClaudeCode, LifecycleHooks, Automation, Security, Linter]
description: "Claude Code में Lifecycle Hooks क्या होते हैं? जानें Pre-tool और Post-tool hooks से ऑटोमैटिक कोड फॉर्मेटिंग और सुरक्षा।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 6: MCP & Plugins — 6.2 Lifecycle Hooks**

---

## 🎯 **Objective (इस लेसन का मक़सद)**
इस लेसन को पूरा करने के बाद आप:
- समझ पाएंगे कि **Lifecycle Hooks** क्या होते हैं।
- **Pre-Tool Hooks** से खतरनाक कमांड्स को ब्लॉक करना सीखेंगे।
- **Post-Tool Hooks** से फाइल बदलते ही अपने-आप **Prettier / ESLint** चलवाना सीखेंगे।

---

## 💡 **Real-Life Analogy (आसान मिसाल)**

> **मिसाल (एयरपोर्ट सिक्योरिटी चेक & सैनिटाइजेशन):**  
> - **Pre-Hook (फ्लाइट पर चढ़ने से पहले):** गार्ड चेक करता है कि आपके पास कोई खतरनाक सामान तो नहीं है। अगर है, तो रोक देता है।  
> - **Post-Hook (उतरने के बाद):** कन्वेयर बेल्ट आपके बैग को सैनिटाइज करके आपको सौंपती है।  
> **Lifecycle Hooks** कोडिंग में बिल्कुल यही काम करते हैं!

---

## 📖 **Key Terms & Glossary (ज़रूरी शब्द)**

| Term (शब्द) | Simple Meaning (आसान मतलब) | Example (मिसाल) |
| :--- | :--- | :--- |
| **Pre-Tool Hook** | AI द्वारा कोई कदम उठाने से ठीक पहले चलने वाली स्क्रिप्ट | खतरनाक कमांड रोकना |
| **Post-Tool Hook**| फाइल बदलने के तुरंत बाद चलने वाली स्क्रिप्ट | Prettier चलाना |
| **Linter / Formatter**| कोड के स्पेस और स्टाइल को साफ करने वाला टूल | `prettier --write` |
| **Guardrail** | गलती से कोई फाइल डिलीट होने से रोकने वाला नियम | ब्लॉक `DROP TABLE` |

---

## ⚙️ **Hooks कैसे काम करते हैं?**

```text
[ यूज़र प्रॉम्प्ट: "auth controller अपडेट करो" ]
                       │
                       ▼
[ Pre-Hook Check ] ────> क्या कोई सीक्रेट की या खतरनाक कमांड तो नहीं? (Pass ✅)
                       │
                       ▼
[ Claude Edits File ] ─> `src/controllers/auth.js` में कोड बदल गया
                       │
                       ▼
[ Post-Hook Action ] ──> अपने आप चल गया: `npx prettier --write src/controllers/auth.js`
                       │
                       ▼
[ Final Output ] ──────> बिल्कुल साफ और सुरक्षित कोड तैयार!
```

---

## 🛠️ **ऑटो-फॉर्मेटिंग पोस्ट-हुक का उदाहरण**

अपने `.claude/hooks/` फोल्डर में स्क्रिप्ट जोड़ें:

```bash
# .claude/hooks/post-file-edit.sh
#!/bin/bash
FILE_PATH=$1

# अगर JS/TS फाइल बदली है तो Prettier चलाएं
if [[ "$FILE_PATH" == *.js || "$FILE_PATH" == *.ts || "$FILE_PATH" == *.jsx ]]; then
  echo "🧹 Running Prettier on $FILE_PATH..."
  npx prettier --write "$FILE_PATH"
fi
```

अब जब भी Claude Code कोई फाइल एडिट करेगा, कोड अपने-आप फॉर्मेट हो जाएगा!

---

## ⚠️ **Common Mistakes & Pro Tips (बचने वाली गलतियाँ)**

- ❌ **गलती:** Pre-hook में बहुत भारी स्क्रिप्ट लगा देना जिससे हर बार 10 सेकंड का इंतज़ार करना पड़े।
- ✅ **Pro Tip:** हुक स्क्रिप्ट्स को हमेशा बहुत तेज़ और हल्का रखें।

---

## 📝 **Practice Challenge (खुद सोचें)**

1. सोचें अगर गिट में कमिट होने से पहले ऑटो-लिंटर हुक लग जाए, तो क्या कोड हमेशा साफ रहेगा?
2. पोस्ट-हुक में टेस्ट्स चलवाना क्यों फायदेमंद है?

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- Pre-hooks काम करने से पहले चलते हैं (सुरक्षा के लिए)।
- Post-hooks काम खत्म होने के बाद चलते हैं (फॉर्मेटिंग और लिंटिंग के लिए)।
- इससे कोड की क्वालिटी अपने-आप बेहतर बनी रहती है।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Lesson:** [6.1 Claude Code with MCP](/courses/claude-code/module-06-mcp-and-integrations/01-claude-code-with-mcp/)
- ➡️ **अगला Lesson:** [6.3 Plugins & Ecosystem](/courses/claude-code/module-06-mcp-and-integrations/03-plugins-and-ecosystem/)
