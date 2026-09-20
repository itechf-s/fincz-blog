---
name: fincz-content-writer
description: Standard workflow and guidelines for creating, updating, and optimizing technical and AI blog posts on Fincz Blog (Hugo). Use this skill whenever writing new Hugo posts, updating existing articles, handling images/frontmatter, and applying conversational Hindi/Urdu tone rules.
---

# Fincz Content Writer Skill

This skill enforces the exact writing, structuring, and media-handling workflow for the **Fincz Blog** (`Hextra`).

---

## 1. Core Workflow Checklist

Whenever asked to create or update an article on Fincz Blog:

1. **Check Requirements / Prompts**:
   - Read instructions from `hugo/prompts.md` or `hugo/update-post.md` if referenced.
2. **Draft / Update Article**:
   - File location: `content/posts/<post-slug>.md`.
   - Maintain accurate YAML frontmatter.
3. **Handle Images**:
   - Optimize images under **300 KB** (convert to `.webp` using Python PIL/Pillow).
   - Place in `static/images/YYYY/MM/` and copy to `public/images/YYYY/MM/`.
4. **Tone & Style**:
   - Use simple, conversational Hindi/Urdu/Hinglish (daily spoken language).
   - Avoid pure Sanskritized Hindi (*shuddh Hindi*) and unexplained complex jargon.
5. **No Dev Servers**:
   - Never run `npm run dev` or `hugo server`.

---

## 2. Standard Article Structure

Every technical or AI article should follow this structure:

1. **Engaging Introduction**:
   - Direct, keyword-rich hook with real-life analogies (e.g., Engine vs Chassis).
2. **Quick AI / Terms Glossary (Table)**:
   - Key terms, simple meanings, and practical examples.
3. **Core Concepts & Frameworks**:
   - Clear Markdown headings (`##`, `###`).
   - ASCII / text architecture diagrams for workflows and pipelines.
   - Comparative tables (e.g., Tool A vs Tool B, Advantages vs Disadvantages).
4. **Hands-on / Code Examples**:
   - Real-world code snippets or command-line examples.
5. **Security & Best Practices (where applicable)**:
   - Common pitfalls, guardrails, and optimization tips.
6. **Nateeja / Conclusion & Quick Revision Summary**:
   - Bulleted summary for quick revision.

---

## 3. YAML Frontmatter Template

```yaml
---
title: "Article Title: Clear and Engaging in Hinglish"
categories: [ AI, Development, Tools ]
tags: [Topic1, Topic2, Guide]
description: "SEO-friendly description in simple Hindi/Urdu under 160 characters."
date: 2026-08-21T08:00:00+05:30
lastmod: 2026-08-21T08:00:00+05:30
images: ["images/2026/08/post-image.webp"]
author: ahmad
---
```

---

## 4. Image Optimization Standard

To keep images under 300 KB:

```bash
python3 -c "
from PIL import Image
img = Image.open('source-image.jpg')
img.save('static/images/YYYY/MM/slug.webp', 'WEBP', quality=85)
img.save('public/images/YYYY/MM/slug.webp', 'WEBP', quality=85)
"
```

---

## 5. Reference Files
- [Article Structure Guide](./references/article_structure.md)
