---
title: "4.3 Custom Slash Commands"
categories: [ AI, Course ]
tags: [ClaudeCode, CustomCommands, SlashCommands, Automation]
description: "Claude Code में अपने कस्टम शॉर्टकट कमांड्स बनाना सीखें (.claude/commands/) और रोज़ के काम को आसान बनाएं।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 4: Workflows — 4.3 Custom Slash Commands**

---

## 🎯 **Objective (इस लेसन का मक़सद)**
इस लेसन को पूरा करने के बाद आप:
- समझ पाएंगे कि **Custom Slash Commands** क्या होते हैं।
- `.claude/commands/` फोल्डर के अंदर अपने मनपसंद शॉर्टकट कमांड्स बना सकेंगे।
- बार-बार होने वाले कामों (जैसे `/test-all`, `/create-api`) को एक क्लिक में चला सकेंगे।

---

## 💡 **Real-Life Analogy (आसान मिसाल)**

> **मिसाल (मोबाइल का स्पीड डायल):**  
> रोज़-रोज़ 10 अंकों का फोन नंबर टाइप करने के बजाय आप नंबर को 'Speed Dial 1' पर सेव कर लेते हैं और एक बटन दबाते ही कॉल लग जाती है।  
> **Custom Slash Commands** आपके रोज़ के लंबे प्रॉम्प्ट्स के लिए वही स्पीड डायल शॉर्टकट्स हैं!

---

## 📖 **Key Terms & Glossary (ज़रूरी शब्द)**

| Term (शब्द) | Simple Meaning (आसान मतलब) | Example (मिसाल) |
| :--- | :--- | :--- |
| **Custom Slash Command**| यूज़र द्वारा बनाया गया अपना शॉर्टकट कमांड | `/create-api`, `/test-all` |
| **`.claude/commands/`** | वह फोल्डर जहाँ कस्टम कमांड फाइल्स रखी जाती हैं | `.claude/commands/` |
| **Command File** | कमांड के नियम बताने वाली `.md` फाइल | `deploy.md` |
| **Arguments** | कमांड के साथ एक्स्ट्रा नाम या इनपुट पास करना | `/create-api products` |

---

## 📁 **कस्टम कमांड्स का फोल्डर स्ट्रक्चर**

अपने प्रोजेक्ट में यह फोल्डर बनाएं:

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

## 🛠️ **प्रैक्टिकल उदाहरण 1: `/test-all` कमांड बनाना**

फाइल बनाएं: `.claude/commands/test-all.md`

```markdown
Run the following verification steps on the project:
1. Run `npm run lint` to check syntax.
2. Run `npm test` to run all unit tests.
3. If any test fails, explain the root cause and ask to fix it.
4. If everything passes, say: "All tests passed successfully! ✅"
```

अब आप टर्मिनल में सीधे लिख सकते हैं:
```text
> /test-all
```
Claude Code तुरंत सारे टेस्ट्स रन करके रिपोर्ट दे देगा!

---

## 🛠️ **प्रैक्टिकल उदाहरण 2: `/create-api` (इनपुट के साथ)**

फाइल बनाएं: `.claude/commands/create-api.md`

```markdown
Create a new REST API endpoint for the entity specified in argument ($1):
1. Create model in `src/models/$1.js`.
2. Create controller in `src/controllers/$1Controller.js`.
3. Add routes in `src/routes/$1Routes.js`.
4. Create unit tests in `tests/$1.test.js`.
5. Run tests and verify the endpoints.
```

अब टर्मिनल में सिर्फ यह कमांड चलाएं:
```text
> /create-api products
```
यह कमांड `products` के लिए मॉडल, कंट्रोलर, रूट्स और टेस्ट्स खुद बना देगी!

---

## ⚠️ **Common Mistakes & Pro Tips (बचने वाली गलतियाँ)**

- ❌ **गलती:** कमांड फाइल में बहुत ढीले-ढाले निर्देश लिखना।
- ✅ **Pro Tip:** कमांड में स्टेप नंबर (`1.`, `2.`, `3.`) साफ-साफ लिखें ताकि AI स्टेप-बाय-स्टेप काम करे।

---

## 📝 **Practice Challenge (खुद करके देखें)**

1. अपने प्रोजेक्ट में `.claude/commands/` फोल्डर बनाएं।
2. एक नया कमांड बनाएं `docs.md` जो फंक्शन्स पढ़कर कमेंट्स जोड़े।
3. टर्मिनल में `> /docs` चलाकर चेक करें।

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- `.claude/commands/` फोल्डर में `.md` फाइल बनाकर नए कमांड्स बनते हैं।
- फाइल का जो नाम होगा, वही कमांड का नाम बन जाएगा (जैसे `test-all.md` ➔ `/test-all`)।
- इससे रोज़ के काम 10 गुना तेज़ हो जाते हैं।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Lesson:** [4.2 Plan Mode & Ultraplan](/courses/claude-code/module-04-development-workflows/02-plan-mode-and-ultraplan/)
- ➡️ **अगला Module:** [Module 5: Skills & SubAgents Architecture](/courses/claude-code/module-05-skills-and-subagents/)
