---
title: "6.1 Claude Code with MCP"
categories: [ AI, Course ]
tags: [ClaudeCode, MCP, ModelContextProtocol, Integrations, PostgreSQL]
description: "Model Context Protocol (MCP) क्या है? जानें Claude Code को डेटाबेस, GitHub और ब्राउज़र से कैसे जोड़ें।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 6: MCP & Plugins — 6.1 Claude Code with MCP**

---

## 🎯 **Objective (इस लेसन का मक़सद)**
इस लेसन को पूरा करने के बाद आप:
- समझ पाएंगे कि **Model Context Protocol (MCP)** क्या है और Anthropic ने इसे क्यों बनाया।
- Claude Code CLI को **PostgreSQL डेटाबेस** और **GitHub MCP सर्वर्स** से जोड़ सकेंगे।
- AI को सीधे डेटाबेस क्वेरी चलाने और ब्राउज़र ऑटोमेशन के अधिकार देना सीखेंगे।

---

## 💡 **Real-Life Analogy (आसान मिसाल)**

> **मिसाल (USB Type-C केबल):**  
> पहले हर डिवाइस (फोन, लैपटॉप, कैमरा) के लिए अलग चार्जर केबल लगती थी। फिर आया **USB Type-C**, जिसने एक कॉमन स्टैंडर्ड बनाकर सभी डिवाइसेज को आपस में जोड़ दिया।  
> **Model Context Protocol (MCP)** AI की दुनिया का Type-C पोर्ट है! चाहे डेटाबेस हो, GitHub हो या क्रोम ब्राउज़र — MCP के ज़रिए कोई भी टूल Claude Code से एक क्लिक में जुड़ जाता है।

---

## 📖 **Key Terms & Glossary (ज़रूरी शब्द)**

| Term (शब्द) | Simple Meaning (आसान मतलब) | Example (मिसाल) |
| :--- | :--- | :--- |
| **MCP** | AI मॉडल्स को बाहरी टूल्स और डेटा से जोड़ने का ओपन स्टैंडर्ड | Anthropic MCP Standard |
| **MCP Server** | एक छोटा प्रोग्राम जो डेटाबेस या API के टूल्स उपलब्ध कराता है | `@modelcontextprotocol/server-postgres` |
| **MCP Client** | Claude Code CLI जो उन टूल्स का इस्तेमाल करता है | Claude Code agent |
| **Tool Calling** | AI का खुद डेटाबेस में क्वेरी चलाना या वेब पेज खोलना | `read_query("SELECT * FROM users")` |

---

## 🌐 **MCP का आर्किटेक्चर**

```text
                           +------------------------+
                           |    Claude Code CLI     |
                           |      (MCP Client)      |
                           +-----------┬------------+
                                       │
                ┌──────────────────────┼──────────────────────┐
                │ MCP Protocol (JSON-RPC कम्युनिकेशन)         │
                ▼                      ▼                      ▼
    +──────────────────────+ +──────────────────────+ +──────────────────────+
    |    Postgres MCP      | |     GitHub MCP       | |    Puppeteer MCP     |
    |  - टेबल स्कीमा देखना | |  - इश्यूज फेच करना   | |  - वेब ब्राउज़र खोलना |
    |  - टेस्ट क्वेरी चलाना| |  - Pull Request बनाना| |  - स्क्रीनशॉट लेना    |
    +──────────┬───────────+ +──────────┬───────────+ +──────────┬───────────+
               │                        │                        │
               ▼                        ▼                        ▼
        [ PostgreSQL DB ]         [ GitHub.com ]          [ Chrome Browser ]
```

---

## 🛠️ **Claude Code में MCP सर्वर कैसे जोड़ें?**

```bash
# PostgreSQL MCP सर्वर जोड़ना
claude mcp add postgresql npx -y @modelcontextprotocol/server-postgres postgresql://user:pass@localhost:5432/mydb
```

---

## 💻 **MCP के साथ काम के प्रॉम्प्ट्स**

### 1. डेटाबेस स्कीमा देखकर क्वेरी फिक्स करना
```text
> "Postgres डेटाबेस में 'orders' टेबल का स्कीमा चेक करो और देखो पिछले 30 दिन में सबसे ज्यादा बिकने वाले प्रोडक्ट्स कौन से हैं। इस क्वेरी को बैकएंड में जोड़ो।"
```

### 2. GitHub Issue को ऑटो-सॉल्व करना
```text
> "GitHub रिपो में Issue #42 को देखो। उसमें बताए गए बग को समझो, कोड ठीक करो और Pull Request बना दो।"
```

---

## ⚠️ **Common Mistakes & Pro Tips (बचने वाली गलतियाँ)**

- ❌ **गलती:** प्रोडक्शन डेटाबेस का डायरेक्ट राइट एक्सेस MCP सर्वर को दे देना।
- ✅ **Pro Tip:** लोकल या स्टेजिंग डेटाबेस इस्तेमाल करें, और प्रोडक्शन के लिए हमेशा **Read-Only** परमिशन दें।

---

## 📝 **Practice Challenge (खुद सोचें)**

1. सोचें अगर Claude Code के पास डेटाबेस और ब्राउज़र दोनों का एक्सेस हो, तो वह बग ढूंढकर ब्राउज़र में टेस्ट भी कैसे कर सकता है?
2. MCP सामान्य प्लगइन्स से बेहतर क्यों है?

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- MCP Anthropic का ओपन-सोर्स स्टैंडर्ड है जो AI को बाहरी सॉफ्टवेयर से जोड़ता है।
- इससे Claude Code सीधे डेटाबेस और GitHub से बात कर सकता है।
- सुरक्षा के लिए हमेशा सीमित परमिशन वाले डेटाबेस क्रेडेंशियल्स इस्तेमाल करें।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Module:** [Module 5: Skills & SubAgents](/courses/claude-code/module-05-skills-and-subagents/)
- ➡️ **अगला Lesson:** [6.2 Lifecycle Hooks](/courses/claude-code/module-06-mcp-and-integrations/02-lifecycle-hooks/)
