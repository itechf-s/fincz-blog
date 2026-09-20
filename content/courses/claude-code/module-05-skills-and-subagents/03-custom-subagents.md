---
title: "5.3 Custom SubAgents"
categories: [ AI, Course ]
tags: [ClaudeCode, CustomSubAgents, MultiAgent, SpecializedAI]
description: "Custom Subagents बनाना सीखें: QA Tester, Security Auditor और Docs Generator जैसे खास वर्कर एजेंट्स तैयार करना।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

## 🎯 **Objective (इस लेसन का मक़सद)**
इस लेसन को पूरा करने के बाद आप:
- समझ पाएंगे कि **Custom Subagents** कैसे बनाए जाते हैं।
- अपने प्रोजेक्ट के लिए खास वर्कर जैसे `Security-Auditor`, `Test-Writer`, और `Docs-Generator` कॉन्फ़िगर कर सकेंगे।
- एक Multi-Agent टीम वर्कफ़्लो बनाना सीखेंगे जहाँ अलग-अलग एजेंट्स मिलकर एक बड़ा काम पूरा करते हैं।

---

## 💡 **Real-Life Analogy (आसान मिसाल)**

> **मिसाल (सॉफ्टवेयर कंपनी की टीम):**  
> एक ही इंसान कोडर, टेस्टर, सिक्योरिटी ऑफिसर और टेक्निकल राइटर सब कुछ नहीं बन सकता।  
> एक अच्छी टीम में:
> - **Developer:** कोड लिखता है।
> - **QA Tester (Subagent 1):** कमियाँ और बग्स ढूंढता है।
> - **Security Auditor (Subagent 2):** सिक्योरिटी लीक्स चेक करता है।
> - **Tech Writer (Subagent 3):** डॉक्यूमेंटेशन लिखता है।  
> Custom Subagents आपके टर्मिनल में ऐसी ही एक पूरी टीम खड़ी कर देते हैं!

---

## 📖 **Key Terms & Glossary (ज़रूरी शब्द)**

| Term (शब्द) | Simple Meaning (आसान मतलब) | Example (मिसाल) |
| :--- | :--- | :--- |
| **Custom Subagent** | यूज़र द्वारा बनाया गया खास काम करने वाला वर्कर एजेंट | `test-agent`, `docs-agent` |
| **System Prompt** | एजेंट की भूमिका, काम और नियम तय करना | "You are a QA Engineer" |
| **Tool Scoping** | सब-एजेंट को सिर्फ जरूरी टूल्स देना (जैसे सिर्फ पढ़ना) | Read-only permissions |
| **Multi-Agent Team** | एक एजेंट का काम खत्म होने पर दूसरे एजेंट का शुरू होना | Coder ➔ Tester ➔ Docs |

---

## 🛠️ **Custom Subagent कैसे बनाते हैं?**

कस्टम सब-एजेंट बनाते वक्त 3 बातें तय करनी होती हैं:
1. **Name & Role:** एजेंट का नाम और काम (जैसे `unit-tester`)।
2. **System Prompt:** एजेंट को क्या करना है और कौन से नियम मानने हैं।
3. **Tools & Permissions:** क्या एजेंट फाइल एडिट कर सकता है या सिर्फ पढ़ सकता है।

---

## 📝 **प्रैक्टिकल उदाहरण: `unit-tester` सब-एजेंट**

```markdown
# Subagent Config: unit-tester

## Role
You are a Senior Test Automation Engineer specialized in Jest.

## Responsibilities
1. Inspect the given component or backend service file.
2. Identify all possible edge cases and error scenarios.
3. Write unit tests inside the `tests/` directory.
4. Run `npm test` to ensure 100% pass rate.
5. Report results back to the Main Agent.

## Rules
- Do NOT modify application source code (only write inside `tests/`).
```

---

## 🔄 **Multi-Agent टीम कैसे काम करती है?**

```text
               +-----------------------------------+
               |           User Request            |
               | "Payment Webhook Handler बनाओ"    |
               +-----------------┬-----------------+
                                 │
                                 ▼
               +-----------------------------------+
               |        1. Main Coder Agent        |
               | -> `src/api/webhook.js` लिखता है  |
               +-----------------┬-----------------+
                                 │
                                 ▼
               +-----------------------------------+
               |      2. Custom Tester Agent       |
               | -> 8 यूनिट टेस्ट्स लिखता है       |
               | -> `npm test` चलाकर चेक करता है   |
               +-----------------┬-----------------+
                                 │
                                 ▼
               +-----------------------------------+
               |      3. Security Auditor Agent    |
               | -> Stripe सिग्नेचर वेरिफिकेशन चेक  |
               | -> ज़ीरो सिक्योरिटी लीक कन्फर्म!   |
               +-----------------┬-----------------+
                                 │
                                 ▼
               +-----------------------------------+
               |   Production Ready PR तैयार!      |
               +-----------------------------------+
```

---

## ⚠️ **Common Mistakes & Pro Tips (बचने वाली गलतियाँ)**

- ❌ **गलती:** एक ही सब-एजेंट को बहुत सारे अलग-अलग काम सौंप देना।
- ✅ **Pro Tip:** हर सब-एजेंट का रोल बिल्कुल छोटा और साफ रखें (Single Responsibility)।

---

## 📝 **Practice Challenge (खुद सोचें)**

1. अपने प्रोजेक्ट के लिए एक `Docs-Generator` सब-एजेंट की कल्पना करें जो हर नए API रूट के लिए डॉक्यूमेंटेशन लिखे।
2. उसे कौन से नियम सिखाए जा सकते हैं?

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- Custom Subagents से आप अलग-अलग एक्सपर्ट्स (Tester, Security, Docs) बना सकते हैं।
- Tool Scoping से एजेंट्स की शक्तियों को सुरक्षित रखा जा सकता है।
- Multi-agent टीम से प्रोफेशनल और टेस्टेड सॉफ्टवेयर बनता है।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Lesson:** [5.2 Built-in SubAgents](/courses/claude-code/module-05-skills-and-subagents/02-built-in-subagents/)
- ➡️ **अगला Module:** [Module 6: MCP, Hooks & Automation Plugins](/courses/claude-code/module-06-mcp-and-integrations/)
