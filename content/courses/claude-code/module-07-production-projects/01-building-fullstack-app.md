---
title: "7.1 Building a Fullstack SaaS App"
categories: [ AI, Course ]
tags: [ClaudeCode, Capstone, Fullstack, Nextjs, SaaS, PostgreSQL]
description: "Claude Code CLI से पूरा Fullstack SaaS App (URL Shortener & Analytics) शुरुआत से अंत तक बनाना सीखें।"
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 7: Capstone — 7.1 Building a Fullstack SaaS App**

---

## 🎯 **Objective (इस प्रोजेक्ट का मक़सद)**
इस प्रोजेक्ट को पूरा करने के बाद आप:
- Claude Code CLI का इस्तेमाल करके **शुरुआत से लेकर अंत तक** एक पूरा Fullstack SaaS ऐप बना सकेंगे।
- Next.js 14 App Router, Tailwind CSS, Prisma ORM और PostgreSQL को कनेक्ट कर सकेंगे।
- Spec-Driven तरीके से प्रोडक्शन-क्वालिटी कोड तैयार करवा सकेंगे।

---

## 💡 **प्रोजेक्ट का ओवरव्यू: "ShortLink SaaS"**

हम एक **URL Shortener & Analytics SaaS** बनाएंगे जिसमें:
1. यूज़र लंबे लिंक को छोटा कर सके (`short.ly/xyz123`)।
2. हर लिंक के कुल क्लिक्स और डिवाइस के आंकड़े ट्रैक हों।
3. साफ-सुथरा मॉडर्न UI (डार्क मोड सपोर्ट के साथ)।

---

## 🏗️ **आर्किटेक्चर और टेक स्टैक**

```text
+-------------------------------------------------------------+
| Frontend: Next.js 14 App Router + Tailwind CSS + Lucide Icons|
+------------------------------┬------------------------------+
                               │
                               ▼
+-------------------------------------------------------------+
| Backend: Next.js API Routes (Server Actions + Zod Validation)|
+------------------------------┬------------------------------+
                               │
                               ▼
+-------------------------------------------------------------+
| Database: PostgreSQL (Prisma ORM Models & Migrations)       |
+-------------------------------------------------------------+
```

---

## 🚀 **Step 1: स्पेक फाइल तैयार करना (`specs/app.md`)**

प्रोजेक्ट में `specs/app.md` फाइल बनाएं:

```markdown
# ShortLink SaaS Specification

## 1. Database Models (Prisma)
- `Link`: id, originalUrl, shortCode (unique), createdAt, totalClicks
- `ClickLog`: id, linkId, ipAddress, country, createdAt

## 2. API Endpoints
- `POST /api/shorten` -> लंबा URL लेकर 6-अक्षर का छोटा कोड बनाता है।
- `GET /[shortCode]` -> ओरिजिनल लिंक पर रीडायरेक्ट करता है और क्लिक लॉग करता है।
- `GET /api/analytics/[shortCode]` -> कुल क्लिक्स की डिटेल देता है।

## 3. UI Requirements
- मॉडर्न हीरो इनपुट कार्ड और "Shorten URL" बटन।
- कॉपी-टू-क्लिपबोर्ड का नोटिफिकेशन।
- रोज़ाना क्लिक्स दिखाने वाला छोटा चार्ट।
```

---

## 💻 **Step 2: Claude Code में प्लान और कोडिंग**

टर्मिनल में `claude` शुरू करें और यह प्रॉम्प्ट दें:

```text
> "specs/app.md को पढ़ो। पहले Prisma schema बनाओ, फिर API endpoints और redirection logic लिखो। हर स्टेप पर टेस्ट चेक करना।"
```

Claude Code:
1. `prisma/schema.prisma` फाइल तैयार करेगा।
2. API रूट्स `src/app/api/shorten/route.js` और रीडायरेक्शन लॉजिक लिखेगा।
3. गलत URL का वैलिडेशन खुद हैंडल करेगा।

---

## 🎨 **Step 3: फ्रंटएंड UI बनवाना**

```text
> "अब मॉडर्न Tailwind CSS UI बनाओ: src/app/page.jsx में URL इनपुट कार्ड, हाल ही में बनाए लिंक्स की टेबल और कॉपी बटन जोड़ो।"
```

---

## 🧪 **Step 4: ऑटोमैटिक टेस्टिंग और चेकिंग**

```text
> "इस पूरे ऐप के लिए Jest यूनिट टेस्ट्स लिखो (Valid URL, Invalid URL error, Redirection) और टेस्ट्स चलाकर रिपोर्ट दो।"
```

Claude Code `tests/shortener.test.js` लिखेगा और `npm test` चलाकर सभी टेस्ट्स पास करके दिखा देगा!

---

## 📌 **Quick Revision Summary (मुख्य बातें)**

- स्पेक फाइल से शुरुआत करने पर पूरा फुलस्टैक ऐप बिना किसी कन्फ्यूजन के बन जाता है।
- Claude Code डेटाबेस, बैकएंड, फ्रंटएंड और टेस्ट्स सभी को जोड़कर तैयार करता है।
- हर स्टेप पर टेस्टिंग से 100% काम करने वाला ऐप तैयार होता है।

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **पिछला Module:** [Module 6: MCP & Plugins](/courses/claude-code/module-06-mcp-and-integrations/)
- ➡️ **अगला Lesson:** [7.2 Automated Debugging, Testing & PRs](/courses/claude-code/module-07-production-projects/02-automated-debugging-and-testing/)
