---
title: "7.1 Building a Fullstack SaaS App"
categories: [ AI, Course ]
tags: [ClaudeCode, Capstone, Fullstack, Nextjs, SaaS, PostgreSQL]
description: "Claude Code CLI se poora Fullstack SaaS App (URL Shortener & Analytics) scratch se end tak build karna seekhein."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 7: Capstone — 7.1 Building a Fullstack SaaS App**

---

## 🎯 **Objective (Is Project Ka Maqsad)**
Is project ko poora karne ke baad aap:
- Claude Code CLI ka use karke **Scratch se lekar End tak** ek complete Fullstack SaaS application build kar sakenge.
- Next.js 14 App Router, Tailwind CSS, Prisma ORM aur PostgreSQL ko connect karwayenge.
- Spec-Driven workflow aur Terminal Agent ke zariye production-grade code banwana seekhenge.

---

## 💡 **Project Overview: "ShortLink SaaS"**

Hum ek **URL Shortener & Click Analytics SaaS** banayenge jisme:
1. User lambe URL ko short link me convert kar sake (`short.ly/xyz123`).
2. Har link ke total clicks aur analytics (country, device) track hon.
3. Clean modern UI (Dark mode support ke sath).

---

## 🏗️ **Architecture & Tech Stack**

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

## 🚀 **Step 1: Spec File Tayyar Karna (`specs/app.md`)**

Project root me `specs/app.md` banayein:

```markdown
# ShortLink SaaS Specification

## 1. Database Models (Prisma)
- `Link`: id, originalUrl, shortCode (unique), createdAt, totalClicks
- `ClickLog`: id, linkId, ipAddress, userAgent, country, createdAt

## 2. API Endpoints
- `POST /api/shorten` -> Takes `originalUrl`, generates 6-char random code, returns short URL.
- `GET /[shortCode]` -> Redirects user to `originalUrl` and logs click asynchronously.
- `GET /api/analytics/[shortCode]` -> Returns total clicks & breakdown.

## 3. UI Requirements
- Clean modern hero input with "Shorten URL" button.
- Copy-to-clipboard toast notification.
- Analytics dashboard chart showing daily clicks.
```

---

## 💻 **Step 2: Claude Code Me Plan & Execution**

Terminal me `claude` launch karein aur ye prompt dein:

```text
> "specs/app.md ko read karo. Pehle Prisma schema setup karo, fir API endpoints aur redirection logic implement karo. Har step par test verify karna."
```

### Claude Code Ka Action:
1. `prisma/schema.prisma` file create karega.
2. `src/app/api/shorten/route.js` aur redirect handler `src/app/[shortCode]/route.js` likhega.
3. Edge cases handle karega (jaise invalid URL validation).

---

## 🎨 **Step 3: Frontend UI Banwana**

Ab UI ke liye prompt dein:

```text
> "Ab modern Tailwind CSS UI banao: src/app/page.jsx me URL input card, recent shortened links table, aur copy link button add karo. Lucide icons use karna."
```

Claude Code clean, responsive component create karke ready kar dega!

---

## 🧪 **Step 4: Automated Testing & Verification**

```text
> "Is poore app ke liye Jest unit tests likho (Valid URL shortening, invalid URL error, redirect logic) aur test suite run karke report do."
```

Claude Code `tests/shortener.test.js` likhega aur `npm test` chala kar sabhi green checks pass kar dega!

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- Spec file se huru karne par poora fullstack app bina kisi confusion ke ban jata hai.
- Claude Code backend, database models, frontend aur tests sabhi ko coordinate karke build karta hai.
- Har milestone ke baad verification se bug-free application tayyar hota hai.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Module:** [Module 6: MCP & Plugins](/courses/claude-code/module-06-mcp-and-integrations/)
- ➡️ **Agla Lesson:** [7.2 Automated Debugging, Testing & PRs](/courses/claude-code/module-07-production-projects/02-automated-debugging-and-testing/)
