---
title: "3.2 CLAUDE.md — The Project Brain"
categories: [ AI, Course ]
tags: [ClaudeCode, CLAUDEMD, Rules, Memory, BestPractices]
description: "CLAUDE.md क्या है और कैसे बनाएं? सीखें प्रोजेक्ट के नियम, मेमोरी और कोडिंग के तरीके तय करना।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

## 🎯 **Objective (इस लेसन का मक़सद)**
इस लेसन को पूरा करने के बाद आप:
- समझ पाएंगे कि `CLAUDE.md` फाइल क्या है और यह Claude Code के लिए सबसे जरूरी फाइल क्यों है।
- एक सही `CLAUDE.md` फाइल लिखना सीखेंगे जिसमें बिल्ड कमांड्स, कोडिंग के नियम और टेस्टिंग के तरीके शामिल हों।
- Global `~/.claude/CLAUDE.md` और लोकल प्रोजेक्ट `CLAUDE.md` का फर्क समझेंगे।

---

## 💡 **Real-Life Analogy (आसान मिसाल)**

> **मिसाल (कंपनी की रूलबुक / हैंडबुक):**  
> जब कोई नया कर्मचारी ऑफिस जॉइन करता है, तो उसे एक **नियम-पुस्तिका (रूलबुक)** दी जाती है जिसमें लिखा होता है: ऑफिस का समय क्या है, कोड कैसे लिखना है और कौन सी गलती नहीं करनी है।  
> **`CLAUDE.md`** आपके AI एजेंट के लिए वही रूलबुक है। जब भी Claude Code चालू होता है, वह सबसे पहले इस फाइल को पढ़ता है और इसके नियम कभी नहीं भूलता!

---

## 📖 **Key Terms & Glossary (ज़रूरी शब्द)**

| Term (शब्द) | Simple Meaning (आसान मतलब) | Example (मिसाल) |
| :--- | :--- | :--- |
| **`CLAUDE.md`** | प्रोजेक्ट के मुख्य फोल्डर में रखी नियमों वाली फाइल | `./CLAUDE.md` |
| **Persistent Memory**| वह बातें जो चैट रीसेट होने के बाद भी AI को याद रहती हैं | कोडिंग रूल्स और कमांड्स |
| **Global Rules** | वह नियम जो आपके कंप्यूटर के हर प्रोजेक्ट में लागू हों | `~/.claude/CLAUDE.md` |
| **Local Rules** | वह नियम जो सिर्फ उसी खास प्रोजेक्ट के लिए हों | `my-app/CLAUDE.md` |

---

## 🏗️ **`CLAUDE.md` का सही फॉर्मेट**

एक अच्छी `CLAUDE.md` फाइल में ये 4 मुख्य हिस्से होने चाहिए:

```markdown
# CLAUDE.md - Project Guidelines & Rules

## 1. Build & Test Commands (चलाने के कमांड्स)
- Build: `npm run build`
- Test: `npm test`
- Lint: `npm run lint`
- **नियम:** कभी भी `npm run dev` बैकग्राउंड में मत चलाना।

## 2. Tech Stack (प्रोजेक्ट क्या इस्तेमाल करता है)
- Frontend: React (Next.js 14 App Router), Tailwind CSS
- Backend: Node.js, Express, PostgreSQL (Prisma ORM)

## 3. Code Style & Rules (लिखने का तरीका)
- हमेशा TypeScript इस्तेमाल करें (Strict mode).
- हर फंक्शन में try-catch और सही एरर हैंडलिंग लिखें।

## 4. Tone & Language (बात करने का तरीका)
- यूज़र से आसान बोलचाल वाली हिंदी/हिंग्लिश में बात करें।
- मुश्किल और शुद्ध हिंदी के शब्दों से बचें।
```

---

## ⚙️ **Claude Code इसे कैसे पढ़ता है?**

जब भी आप कोई काम देते हैं:

```text
[ यूज़र प्रॉम्प्ट: "Fix cart bug" ]
              │
              ▼
[ 1. CLAUDE.md खुद लोड होती है ] ───> कमांड्स और प्रोजेक्ट नियम चेक करता है
              │
              ▼
[ 2. नियमों के हिसाब से काम ]    ───> Next.js 14 का सही तरीका यूज़ करता है
              │
              ▼
[ 3. बिल्कुल सही कोड तैयार! ]     ───> 100% सही और टेस्टेड कोड मिलता है
```

---

## 🌐 **Global vs Local `CLAUDE.md`**

| प्रकार | लोकेशन | कब इस्तेमाल करें? |
| :--- | :--- | :--- |
| **Global `CLAUDE.md`** | `~/.claude/CLAUDE.md` (Home dir) | अपनी निजी पसंद के नियमों के लिए (जैसे: *"हमेशा छोटा जवाब दो"*, *"हिंग्लिश में बात करो"*)। यह हर प्रोजेक्ट में चलेगा। |
| **Local `CLAUDE.md`** | प्रोजेक्ट फोल्डर में `./CLAUDE.md` | प्रोजेक्ट के खास कमांड्स के लिए (जैसे: *"यहाँ `pnpm` इस्तेमाल करो"*, *"डेटाबेस रूल्स"*). |

---

## ⚠️ **Common Mistakes & Pro Tips (बचने वाली गलतियाँ)**

- ❌ **गलती:** `CLAUDE.md` में 2000 लाइनों का लंबा निबंध लिख देना जिससे टोकन बर्बाद हों।
- ✅ **Pro Tip:** `CLAUDE.md` को छोटा और पॉइंट-वाइज रखें (100-150 लाइनों के अंदर)। सिर्फ काम की बातें ही लिखें।

---

## 📝 **Practice Challenge (खुद करके देखें)**

1. अपने प्रोजेक्ट में `> /init` चलाकर `CLAUDE.md` बनाएं।
2. उसमें एक नया नियम जोड़ें: *"हर बदलाव के बाद 1 लाइन की समरी दो"*।
3. टेस्ट करें कि AI यह नियम फॉलो कर रहा है या नहीं।

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- `CLAUDE.md` आपके प्रोजेक्ट का **मास्टर दिमाग** है जिसे AI हर बार पढ़ता है।
- इसमें बिल्ड कमांड्स, टेक्नोलॉजी और कोडिंग के तौर-तरीके लिखे जाते हैं।
- `/init` कमांड से यह फाइल खुद-ब-खुद बन सकती है।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Lesson:** [3.1 Context Window Management](/courses/claude-code/module-03-context-and-memory/01-context-window-management/)
- ➡️ **अगला Module:** [Module 4: Development Workflows & Planning](/courses/claude-code/module-04-development-workflows/)
