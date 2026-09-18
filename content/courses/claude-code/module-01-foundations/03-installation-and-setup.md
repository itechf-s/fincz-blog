---
title: "1.3 Installation & Setup"
categories: [ AI, Course ]
tags: [ClaudeCode, Installation, Setup, CLI, Anthropic]
description: "Claude Code को आसानी से इंस्टॉल करना सीखें: Node.js, npm पैकेज, Anthropic API Key सेटअप और पहला टेस्ट रन।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 1: Foundations — 1.3 Installation & Setup**

---

## 🎯 **Objective (इस लेसन का मक़सद)**
इस लेसन को पूरा करने के बाद आप:
- अपने कंप्यूटर (Mac, Linux, या Windows WSL) पर **Claude Code CLI** इंस्टॉल कर सकेंगे।
- **Anthropic Console** से API Key बनाकर अपने टर्मिनल में जोड़ सकेंगे।
- Claude Code को पहली बार चलाकर `/doctor` कमांड से सेटअप चेक कर सकेंगे।
- बजट और खर्च की लिमिट सेट करके बिना वजह के बिल से बचना सीखेंगे।

---

## 💡 **Real-Life Analogy (आसान मिसाल)**

> **मिसाल (मोबाइल फोन और सिम कार्ड):**  
> - Claude Code CLI एक **स्मार्टफोन** की तरह है जिसे आपने इंस्टॉल कर लिया है।  
> - लेकिन यह तब तक काम नहीं करेगा जब तक इसमें **सिम कार्ड (Anthropic API Key)** न लगाई जाए और थोड़ा रिचार्ज (क्रेडिट्स) न हो। API Key जुड़ते ही आपका टर्मिनल दुनिया के सबसे ताकतवर AI दिमाग से कनेक्ट हो जाता है।

---

## 📖 **Key Terms & Glossary (ज़रूरी शब्द)**

| Term (शब्द) | Simple Meaning (आसान मतलब) | Example (मिसाल) |
| :--- | :--- | :--- |
| **Node.js** | जावास्क्रिप्ट को टर्मिनल में चलाने वाला सॉफ्टवेयर | Node.js v18 या v20 |
| **npm (Node Package Manager)** | टूल्स और लाइब्रेरी इंस्टॉल करने का प्रोग्राम | `npm install -g ...` |
| **Anthropic API Key** | Claude AI को इस्तेमाल करने का सीक्रेट पासवर्ड | `sk-ant-api03-...` |
| **WSL (Windows Subsystem for Linux)** | विंडोज के अंदर लिनक्स टर्मिनल चलाने की सुविधा | Ubuntu on Windows |

---

## 📋 **ज़रूरी तैयारी (Pre-requisites)**

Claude Code इंस्टॉल करने से पहले ये चेक कर लें:
1. आपके सिस्टम में **Node.js 18 या उससे ऊपर का वर्जन** होना चाहिए।
2. टर्मिनल (Mac Terminal, Linux Bash, या Windows में WSL2)।

टर्मिनल में Node.js का वर्जन चेक करें:
```bash
node -v
# ऐसा दिखना चाहिए: v18.x.x या v20.x.x या v22.x.x
```

अगर Node.js नहीं है, तो [nodejs.org](https://nodejs.org) से LTS वर्जन डाउनलोड करके इंस्टॉल कर लें।

---

## 🚀 **Step 1: Claude Code CLI इंस्टॉल करना**

टर्मिनल में नीचे दी गई कमांड चलाएं:

```bash
npm install -g @anthropic-ai/claude-code
```

> **नोट (Mac/Linux यूज़र्स):** अगर परमिशन एरर आए तो `sudo npm install -g @anthropic-ai/claude-code` चलाएं।

---

## 🔑 **Step 2: Anthropic API Key सेटअप करना**

1. [console.anthropic.com](https://console.anthropic.com) पर जाएं और लॉगिन करें।
2. **API Keys** सेक्शन में जाकर **Create Key** पर क्लिक करें और की को कॉपी कर लें (`sk-ant-...`)।
3. अपने टर्मिनल में इस की को सेट करें:

```bash
# Mac / Linux (~/.bashrc या ~/.zshrc में जोड़ें)
export ANTHROPIC_API_KEY="sk-ant-api03-आपकी-की-यहाँ"
```

या फिर जब आप पहली बार `claude` कमांड चलाएंगे, तो टर्मिनल खुद आपसे ब्राउज़र में लॉगिन करने या API Key पेस्ट करने को कहेगा।

---

## 🏃‍♂️ **Step 3: पहला रन और वेरिफिकेशन**

अपने किसी भी प्रोजेक्ट फोल्डर के अंदर जाएं और टर्मिनल में लिखें:

```bash
cd my-project
claude
```

आपके सामने Claude Code का टर्मिनल इंटरफ़ेस खुल जाएगा:

```text
  ╭────────────────────────────────────────────────────────╮
  │                                                        │
  │   Claude Code (v0.x.x)                                 │
  │   Anthropic Research Preview CLI                       │
  │                                                        │
  │   Type /help for command list                          │
  │                                                        │
  ╰────────────────────────────────────────────────────────╯

> _
```

---

## 🩺 **Step 4: `/doctor` कमांड से हेल्थ चेक करना**

प्रॉम्प्ट में `/doctor` लिखकर Enter दबाएं:

```text
> /doctor
```

यह कमांड चेक करेगी कि:
- ✅ Node.js वर्जन सही है।
- ✅ API Key कनेक्टेड और चालू है।
- ✅ Git repo सही से कॉन्फ़िगर है।
- ✅ फाइल टूल्स और टर्मिनल सही से काम कर रहे हैं।

---

## 💰 **Step 5: बजट लिमिट सेट करना (ज़रूरी कदम)**

अनावश्यक खर्च से बचने के लिए Anthropic Console पर:
1. **Billing & Plans ➔ Spend Limits** में जाएं।
2. महीने की लिमिट सेट करें (जैसे $5 या $10 प्रति माह)।
3. इससे आपका बजट कभी भी सीमा पार नहीं करेगा।

---

## ⚠️ **Common Mistakes & Pro Tips (बचने वाली गलतियाँ)**

- ❌ **गलती:** विंडोज में सादे Command Prompt (cmd) में चलाना जिसमें लिनक्स टूल्स नहीं होते।
- ✅ **Pro Tip:** विंडोज यूज़र्स हमेशा **WSL2 (Ubuntu)** का इस्तेमाल करें ताकि सारे टूल्स बिना किसी रुकावट के चलें।

---

## 📝 **Practice Challenge (खुद करके देखें)**

1. टर्मिनल में `claude` शुरू करें।
2. प्रॉम्प्ट में लिखें: `"इस फोल्डर में कौन-कौन सी फाइल्स हैं मुझे लिस्ट करके बताओ"`।
3. देखें कैसे Claude Code खुद फाइल्स को स्कैन करके समरी दिखाता है।
4. बाहर आने के लिए `/exit` या `Ctrl+C` दबाएं।

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- Claude Code इंस्टॉल करने की कमांड है: `npm install -g @anthropic-ai/claude-code`।
- इसे चलाने के लिए **Anthropic API Key** की ज़रूरत होती है।
- `/doctor` कमांड से आप चेक कर सकते हैं कि सेटअप में कोई दिक्कत तो नहीं है।
- कंसोल पर **Spend Limit** सेट करके आप बजट को कंट्रोल में रख सकते हैं।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Lesson:** [1.2 What is Claude Code & Architecture](/courses/claude-code/module-01-foundations/02-what-is-claude-code/)
- ➡️ **अगला Module:** [Module 2: Everyday CLI & Core Workflow](/courses/claude-code/module-02-core-workflow/)
