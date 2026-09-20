---
title: "5.1 Claude Code Skills"
categories: [ AI, Course ]
tags: [ClaudeCode, Skills, SKILLMD, Automation, ModularAI]
description: "Claude Code Skills क्या हैं और कैसे बनती हैं? जानें SKILL.md के साथ एक्सपर्ट नॉलेज पैकेज करना।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

## 🎯 **Objective (इस लेसन का मक़सद)**
इस लेसन को पूरा करने के बाद आप:
- समझ पाएंगे कि **Claude Code Skills** क्या होती हैं और ये `CLAUDE.md` से अलग कैसे हैं।
- `SKILL.md` फाइल लिखकर खास काम के लिए गाइडलाइंस और टूल्स पैकेज कर सकेंगे।
- सीखेंगे कि प्रॉम्प्ट मैच होने पर स्किल्स खुद-ब-खुद (ऑटोमैटिक) कैसे एक्टिवेट होती हैं।

---

## 💡 **Real-Life Analogy (आसान मिसाल)**

> **मिसाल (जनरल फिजिशियन vs स्पेशलिस्ट डॉक्टर):**  
> `CLAUDE.md` एक जनरल डॉक्टर की तरह है जो बेसिक बातें जानता है।  
> लेकिन जब हार्ट की सर्जरी करनी हो तो एक **हार्ट स्पेशलिस्ट (Skill)** की ज़रूरत होती है।  
> **Skill** वही खास एक्सपर्टीज है जो ज़रूरत पड़ने पर एक्टिवेट होती है और काम खत्म होते ही हट जाती है, ताकि बिना वजह मेमोरी न भरे।

---

## 📖 **Key Terms & Glossary (ज़रूरी शब्द)**

| Term (शब्द) | Simple Meaning (आसान मतलब) | Example (मिसाल) |
| :--- | :--- | :--- |
| **Skill (`SKILL.md`)** | किसी खास विषय के लिए बनाई गई निर्देशों की फाइल | `docker-skill/SKILL.md` |
| **Auto-Activation** | प्रॉम्प्ट मैच होने पर AI का खुद उस स्किल को लोड कर लेना | "Dockerize करो" ➔ स्किल लोड |
| **Skill Packaging** | नियमों, उदाहरणों और स्क्रिप्ट्स को एक फोल्डर में रखना | `.agents/skills/<name>/` |
| **Progressive Disclosure**| पूरी जानकारी हर वक्त लोड न करके सिर्फ ज़रूरत पर लोड करना | टोकन बचाने की तकनीक |

---

## 📁 **Skills का फोल्डर स्ट्रक्चर**

स्किल्स को इस तरह रखा जाता है:

```text
.agents/skills/
└── database-migrator/
    ├── SKILL.md                          # मुख्य नियम और फ्रंटमैटर
    ├── references/                       # डिटेल्ड गाइडलाइंस
    │   └── migration_rules.md
    └── scripts/                          # हेल्पर स्क्रिप्ट्स
        └── validate_schema.py
```

---

## 📄 **`SKILL.md` फाइल का फॉर्मेट**

`SKILL.md` के ऊपर YAML फ्रंटमैटर होता है:

```markdown
---
name: database-migrator
description: PostgreSQL डेटाबेस माइग्रेशन और इंडेक्सिंग के सेफ नियम। जब भी कोई टेबल या स्कीमा बदलना हो तो यह स्किल यूज़ करें।
---

# Database Migrator Skill

जब भी यूज़र डेटाबेस टेबल बदलने को कहे:

## 1. Safety Rules
- बिना यूज़र की मंजूरी के `DROP TABLE` कभी मत चलाना।
- इंडेक्स हमेशा `CREATE INDEX CONCURRENTLY` से बनाना।

## 2. Step-by-Step Workflow
1. `prisma/schema.prisma` चेक करो।
2. `migrations/` में माइग्रेशन स्क्रिप्ट तैयार करो।
```

---

## ⚡ **ऑटो-एक्टिवेशन कैसे काम करता है?**

```text
[ यूज़र प्रॉम्प्ट: "users टेबल में नया इंडेक्स लगाना है" ]
                             │
                             ▼
[ AI स्किल डिस्क्रिप्शन चेक करता है ] ➔ 'database-migrator' मैच हो गया!
                             │
                             ▼
[ SKILL.md अपने आप लोड होती है ]     ➔ सेफ इंडेक्सिंग के नियम लागू हो गए
                             │
                             ▼
[ बिल्कुल सही माइग्रेशन तैयार! ]      ➔ बिना किसी डाउनटाइम के काम पूरा!
```

---

## ⚠️ **Common Mistakes & Pro Tips (बचने वाली गलतियाँ)**

- ❌ **गलती:** `SKILL.md` के डिस्क्रिप्शन में गोल-मोल बातें लिखना जिससे AI को समझ ही न आए कि कब एक्टिवेट होना है।
- ✅ **Pro Tip:** `description` में साफ-साफ ट्रिगर शब्द लिखें: *"Use this skill whenever doing X, Y, or Z"*.

---

## 📝 **Practice Challenge (खुद करके देखें)**

1. `.agents/skills/git-workflow/` फोल्डर बनाएं।
2. उसमें `SKILL.md` बनाकर Conventional Commits (`feat:`, `fix:`) के नियम लिखें।
3. प्रॉम्प्ट दें: `"इस फीचर को कमिट करो"` और देखें स्किल एक्टिवेट होती है या नहीं।

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- स्किल्स खास कामों के नियमों को अलग से पैकेज करने का तरीका हैं।
- यह सिर्फ ज़रूरत पड़ने पर लोड होकर बहुत सारे टोकन बचाती हैं।
- फ्रंटमैटर में साफ `description` लिखने से AI इसे खुद पहचान लेता है।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Module:** [Module 4: Development Workflows](/courses/claude-code/module-04-development-workflows/)
- ➡️ **अगला Lesson:** [5.2 Built-in SubAgents](/courses/claude-code/module-05-skills-and-subagents/02-built-in-subagents/)
