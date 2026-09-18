# AGENTS.md - Fincz Blog Agent Guidelines

This repository contains the source code, articles, and courses for the **Fincz Blog** website built with Hugo (theme: `hugo-theme-bootstrap`).

---

## 1. Project Rules & Constraints

1. **Do NOT run `npm run dev` or Hugo local server**: The user runs local dev servers on their own. Never start background dev servers or continuous watch commands.
2. **Simple Language (Conversational Hindi/Urdu)**:
   - Always keep the language natural, engaging, and simple (daily spoken Hindi/Hinglish/Urdu).
   - Avoid overly difficult pure Hindi words (*shuddh Hindi*) and unnecessarily complex English jargon without immediate explanation.
3. **No Unrequested Deletions**: Do not remove images, internal links, or key metadata unless explicitly instructed.

---

## 2. Content Types & Writing Guidelines

### A. Articles & Blog Posts (`content/posts/`)
- **Location**: `content/posts/<post-slug>.md`
- **Structure**:
  - Clear, hierarchical Markdown headings (`##`, `###`).
  - Engaging hook & introduction with real-world analogies.
  - **AI Terms / Glossary** table for complex terms.
  - Ecosystem breakdowns, ASCII workflow diagrams, and comparison tables.
  - Code/Terminal snippets and **Quick Revision Summary / Key Takeaways** at the end.
- **Frontmatter**:
  - `title`, `categories`, `tags`, `description`, `date`, `lastmod`, `images`, `author`.

### B. Courses & Modular Curriculums (`content/courses/`)
- **Location**: `content/courses/<course-slug>/`
- **Course Hierarchy**:
  - Course landing page: `content/courses/<course-slug>/_index.md` (`type: docs`)
  - Full syllabus page: `content/courses/<course-slug>/syllabus.md` (`type: docs`)
  - Module directories: `content/courses/<course-slug>/module-XX-<name>/_index.md`
  - Lessons: `content/courses/<course-slug>/module-XX-<name>/YY-<lesson-slug>.md`
- **Pedagogical Structure for Lessons**:
  - **🎯 Objective / Goals**: Clear outcomes of the lesson.
  - **💡 Real-Life Analogy**: Daily-life relatable analogy.
  - **📖 Glossary Table**: Complex terms defined in simple Hinglish.
  - **⚙️ Core Concepts**: Deep-dive with ASCII flow diagrams and comparison tables.
  - **💻 Hands-on Commands & Code**: Copy-pasteable CLI commands and practical examples.
  - **⚠️ Common Mistakes & Gotchas**: Pitfalls and token/cost optimization pro tips.
  - **📝 Practice Exercise**: Hands-on challenge.
  - **📌 Quick Revision Summary**: Key takeaway bullets.
  - **🧭 Navigation**: Links to previous and next lessons.
- **Frontmatter**:
  - Must include `type: docs`, `title`, `categories: [ <Category>, Course ]`, `tags`, `description`, `date`, `lastmod`, `images`, `author`.

---

## 3. Tech Stack & Repository Structure

- **SSG**: Hugo (`config/_default/config.yaml`, `layouts/`, `archetypes/`)
- **Content Paths**:
  - `content/posts/`: Blog posts and technical articles
  - `content/courses/`: Multi-module educational courses
  - `content/pages/`: Static pages (about, contact, etc.)
- **Images/Media**:
  - Static images in `static/images/YYYY/MM/` (must also sync to `public/images/YYYY/MM/`).
  - All images should be compressed to `.webp` (<300 KB).
- **Styling & Assets**: Bootstrap 5, PostCSS, FontAwesome (`assets/`).
- **Configuration**:
  - `config/_default/config.yaml`
  - `config/_default/params.yaml`
  - `config/_default/menus.yaml`

---

## 4. Common Agent Workflows & Skills

- **Blog Post Creation**: Follow skill `.agents/skills/fincz-content-writer/SKILL.md`.
- **Course Planning & Creation**: Follow skill `.agents/skills/fincz-course-creator/SKILL.md`.
- **Workflow for New Courses**:
  1. Draft course plan and syllabus in `content/courses/<course-slug>-plan.md`.
  2. Confirm syllabus and module structure with user.
  3. Generate `_index.md`, `syllabus.md`, and module lesson files sequentially.
- **Editing content**: Keep file structure intact, verify frontmatter dates (`lastmod`), and follow the simple Hindi/Urdu tone.
- **Building/Testing**: Run standard linting or non-blocking build checks if requested, but do not start dev servers.
