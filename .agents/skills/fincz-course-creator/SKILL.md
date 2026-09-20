---
name: fincz-course-creator
description: Comprehensive workflow and pedagogical best practices for creating, structuring, and writing modular multi-chapter courses on Fincz Blog (Hugo). Use this skill whenever planning, creating, or updating courses, modules, syllabi, and lesson files.
---

# Fincz Course Creator Skill

This skill defines the complete methodology, structural hierarchy, and pedagogical standards for creating comprehensive, beginner-to-advanced courses on **Fincz Blog** (`Hextra`).

---

## 1. Course Architecture & Directory Structure

All courses reside under `content/courses/<course-slug>/`. Courses use Hugo's `docs` content type for hierarchical sidebar navigation and structured chapter reading.

```text
content/courses/<course-slug>/
├── _index.md                             # Course Landing Page (Hero, overview, what you will learn)
├── syllabus.md                           # Complete Curriculum / Syllabus index with links
├── module-01-<module-name>/              # Module directory (sequential numbering)
│   ├── _index.md                         # Module overview, prerequisites, and learning goals
│   ├── 01-<lesson-slug>.md               # Chapter 1
│   ├── 02-<lesson-slug>.md               # Chapter 2
│   └── 03-<lesson-slug>.md               # Chapter 3
├── module-02-<module-name>/
│   ├── _index.md
│   ├── 01-<lesson-slug>.md
│   └── ...
└── ...
```

---

## 2. Standard Lesson & Chapter Structure (Pedagogical Flow)

Every individual lesson must follow a consistent, highly engaging learning structure:

1. **Lesson Objective (मक़सद / Goals)**:
   - 2-3 bullet points clearly stating what the student will understand and build by the end of this lesson.
2. **Real-World Analogy / Hook**:
   - Relatable daily-life analogy to make abstract technical concepts instantly intuitive (e.g., *Engine vs Car Chassis*, *Chef vs Kitchen Assistant*).
3. **Glossary / Key Terms Table**:
   - Quick table defining complex terminology in simple Hinglish/Urdu words.
4. **Core Technical Concepts & Explanation**:
   - Clear markdown headings (`##`, `###`).
   - Visual ASCII diagrams / flowcharts showing pipelines, terminal workflows, and data flow.
   - Comparative tables (e.g., *Traditional vs Agentic*, *Method A vs Method B*).
5. **Hands-on Terminal Commands / Code Snippets**:
   - Copy-pasteable prompts, CLI commands, or source code with inline explanations.
6. **Common Mistakes & Pro Tips (Gotchas)**:
   - Frequent pitfalls beginners face (e.g., token wastage, forgotten environment variables, missing permissions) and how to fix them.
7. **Practice Exercise / Action Item**:
   - A short, practical task or thought experiment for the reader to test their understanding.
8. **Quick Revision Summary (मुख्य बातें)**:
   - 3-5 bullet points capturing the essence of the lesson for fast revision.
9. **Navigation Links**:
   - Clear links to `⬅️ पिछला Lesson` and `अगला Lesson ➡️`.

---

## 3. Frontmatter Standards for Courses

### 3.1 Course Landing Page (`content/courses/<course-slug>/_index.md`)
```yaml
---
title: "Course Name: Complete Zero to Pro Guide"
description: "Comprehensive SEO-friendly overview of the course in simple Hindi/Urdu."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
categories: [ AI, Course ]
tags: [ClaudeCode, AI, Course, CLI]
images: ["images/YYYY/MM/course-banner.webp"]
author: ahmad
type: docs
---
```

### 3.2 Module Overview (`content/courses/<course-slug>/module-XX/_index.md`)
```yaml
---
title: "Module X: Module Title in Hinglish"
description: "Brief summary of topics covered in this module."
date: 2026-09-18T08:00:00+05:30
categories: [ AI, Course ]
tags: [Topic]
author: ahmad
type: docs
---
```

### 3.3 Individual Lesson (`content/courses/<course-slug>/module-XX/YY-lesson-name.md`)
```yaml
---
title: "1.1 Lesson Title: Clear & Engaging"
description: "Key takeaway of this chapter in simple words."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
categories: [ AI, Course ]
tags: [Topic, Subtopic]
images: ["images/YYYY/MM/lesson-graphic.webp"]
author: ahmad
type: docs
---
```

---

## 4. Language & Tone Guidelines

- **Language**: Simple conversational Hindi/Urdu/Hinglish (रोज़मर्रा की बोलचाल वाली ज़बान).
- **No Dense Jargon**: Do not use heavy Sanskritized Hindi (*shuddh Hindi*) or unexplained English buzzwords.
- **Tone**: Encouraging, structured, mentor-like, practical.

---

## 5. Course Creation Workflow

1. **Step 1: Course Plan & Syllabus Draft**:
   - Create a plan markdown file under `content/courses/<course-slug>-plan.md`.
   - List all modules, lessons, and learning objectives.
   - Review and align with user before bulk generation.
2. **Step 2: Course Root & Syllabus**:
   - Generate `_index.md` (overview & hero) and `syllabus.md` (full syllabus table/links).
3. **Step 3: Sequential Module & Lesson Creation**:
   - Create module directories sequentially (`module-01-...`, `module-02-...`).
   - Create lessons with proper headers, ASCII diagrams, code blocks, and revision summaries.
4. **Step 4: Image Optimization**:
   - Convert images to `.webp` (<300 KB) and place in `static/images/YYYY/MM/` and `public/images/YYYY/MM/`.
5. **Step 5: Review & Verification**:
   - Verify frontmatter syntax, internal links, and chapter sequencing.
   - **Never run `npm run dev` or `hugo server`.**

---

## 6. Reference Files
- [Course Structure & Lesson Template Guide](./references/course_structure.md)
