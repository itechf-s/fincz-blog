---
title: "7.2 Automated Debugging, Testing & PRs"
categories: [ AI, Course ]
tags: [ClaudeCode, Debugging, Testing, GitPR, Capstone]
description: "प्रोजेक्ट के मुश्किल बग्स फिक्स करना, ऑटोमैटिक यूनिट टेस्ट्स तैयार करना और Git Pull Request बनाना सीखें।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 7: Capstone — 7.2 Automated Debugging, Testing & PRs**

---

## 🎯 **Objective (इस प्रोजेक्ट का मक़सद)**
इस फाइनल लेसन को पूरा करने के बाद आप:
- किसी भी पुराने प्रोजेक्ट के **फेल होते टेस्ट्स और छुपे हुए बग्स** को Claude Code से खुद ठीक करवा सकेंगे।
- **Root Cause Analysis (RCA)** सीखेंगे कि एजेंट कैसे टर्मिनल एरर पढ़कर सही जगह का बग ढूंढता है।
- बग ठीक होने के बाद नई Git ब्रांच बनाकर ऑटोमैटिक **Pull Request (PR)** तैयार करना सीखेंगे।

---

## 💡 **Real-Life Analogy (आसान मिसाल)**

> **मिसाल (डिटेक्टिव और डॉक्टर):**  
> जब कोई केस होता है, तो डिटेक्टिव फिंगरप्रिंट मैच करता है (Error logs देखना), सबूत जुटाता है (Codebase grep करना), और असली मुजरिम को पकड़ लेता है (Bug fix करना)। उसके बाद कोर्ट में पूरी रिपोर्ट पेश करता है (Git Pull Request बनाना)।  
> Claude Code इस पूरे प्रोसेस को पूरी तरह ऑटोमेटेड बना देता है!

---

## 🔄 **ऑटोमैटिक बग-फिक्सिंग का 5-स्टेप लूप**

```text
  ┌──────────────────────────────────────────────────────────┐
  │ 1. टेस्ट सूट चलाना ➔ 3 Tests FAILED ❌                  │
  │    (टर्मिनल एरर लॉग पकड़ा गया)                           │
  └────────────────────────────┬─────────────────────────────┘
                               │
                               ▼
  ┌──────────────────────────────────────────────────────────┐
  │ 2. एरर ट्रेस करना ➔ Ripgrep से `src/` में सर्च करना      │
  │    (पेमेंट लॉजिक में बग पकड़ा गया)                       │
  └────────────────────────────┬─────────────────────────────┘
                               │
                               ▼
  ┌──────────────────────────────────────────────────────────┐
  │ 3. सही Diff लगाना ➔ सिर्फ गलत लाइन को ठीक करना           │
  └────────────────────────────┬─────────────────────────────┘
                               │
                               ▼
  ┌──────────────────────────────────────────────────────────┐
  │ 4. दोबारा टेस्ट चलाना ➔ ALL TESTS PASSED ✅              │
  └────────────────────────────┬─────────────────────────────┘
                               │
                               ▼
  ┌──────────────────────────────────────────────────────────┐
  │ 5. PR बनाना ➔ `fix/checkout-idempotency-bug`              │
  │    साफ कमिट मैसेज और समरी तैयार!                         │
  └──────────────────────────────────────────────────────────┘
```

---

## 💻 **टर्मिनल में लाइव वर्कफ़्लो**

### Step 1: एरर ढूंढना
Claude Code में टाइप करें:

```text
> "प्रोजेक्ट में टेस्ट्स रन करो और देखो कौन से टेस्ट केसेस फेल हो रहे हैं।"
```

टर्मिनल आउटपुट:
```text
FAIL tests/payment.test.js
  ● Checkout Flow › should prevent double charge on rapid clicks
    AssertionError: expected chargeCount to be 1, but received 2
```

---

### Step 2: खुद-ब-खुद कारण समझना
Claude Code `src/services/payment.js` को स्कैन करेगा और देखेगा कि पेमेंट में डुप्लीकेट चार्ज रोकने वाली चाबी (idempotency key) मिसिंग है।

---

### Step 3: सटीक Diff लगाकर ठीक करना

```diff
--- a/src/services/payment.js
+++ b/src/services/payment.js
@@ -18,6 +18,10 @@ async function processPayment(userId, amount, idempotencyKey) {
+  // चेक करो कि क्या यह पेमेंट पहले प्रोसेस हो चुकी है
+  const existing = await cache.get(`pay:${idempotencyKey}`);
+  if (existing) return existing;
+  
   const result = await stripe.charges.create({ amount, currency: 'usd' });
```

---

### Step 4: दोबारा टेस्ट और PR बनाना
जब टेस्ट्स पास हो जाएं:

```text
> "नई गिट ब्रांच बनाओ 'fix/idempotency-bug', चेंजेस कमिट करो, और GitHub PR का डिस्क्रिप्शन तैयार करो।"
```

Claude Code:
1. `git checkout -b fix/idempotency-bug` चलाएगा।
2. `git commit -m "fix(payment): prevent duplicate charges using idempotency cache"` करेगा।
3. PR डिस्क्रिप्शन तैयार करके स्क्रीन पर दिखा देगा!

---

## 🎓 **कोर्स का अंत: अब आप एक 10x Agentic Engineer हैं!**

बधाई हो! आपने **Claude Code Master Course** के सभी 7 मॉड्यूल्स सफलतापूर्वक पूरे कर लिए हैं:

1. ✅ **Foundations:** Agentic Loops & Setup
2. ✅ **Core CLI:** Slash commands, Diffs & Multimodal Vision
3. ✅ **Memory:** Context Window & `CLAUDE.md` Master Rules
4. ✅ **Workflows:** Spec-Driven Development & Plan Modes
5. ✅ **Architecture:** Skills & SubAgents
6. ✅ **Integrations:** MCP, Lifecycle Hooks & Plugins
7. ✅ **Production:** Fullstack SaaS & Autonomous Bug Fixing

अब आप किसी भी सॉफ्टवेयर प्रोजेक्ट को 10 गुना स्पीड और आत्मविश्वास के साथ आसानी से बना और लीड कर सकते हैं!

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- AI एरर स्टैक ट्रेस पढ़कर खुद सही लाइन पर जाकर बग ठीक करता है।
- टेस्ट्स का पास होना इस बात का सबूत है कि फिक्स 100% सही है।
- Git PR तैयार होने के साथ पूरा कोडिंग लाइफसाइकिल ऑटोमेट हो जाता है।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Lesson:** [7.1 Building a Fullstack SaaS App](/courses/claude-code/module-07-production-projects/01-building-fullstack-app/)
- 🏠 **कोर्स होम पेज:** [Claude Code Home](/courses/claude-code/)
