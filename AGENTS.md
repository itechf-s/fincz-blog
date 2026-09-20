# AGENTS.md - Fincz Learn Platform Agent Guidelines

This repository contains the source code, courses, technical guides, practice tracks, and tools for the **Fincz Learn** platform (`https://learn.fincz.com/`) built with Hugo and the **Hextra** theme (Nextra/Vercel style).

---

## 1. Project Rules & Constraints

1. **Do NOT run `npm run dev` or Hugo local dev servers**: The user runs local dev servers on their own. Never start background dev servers or continuous watch commands.
2. **Simple Language (Conversational Hindi/Urdu/Hinglish)**:
   - Always keep the language natural, engaging, and simple (daily spoken Hindi/Hinglish/Urdu).
   - Avoid overly difficult pure Hindi words (*shuddh Hindi*) and unnecessarily complex English jargon without immediate explanation.
3. **No Unrequested Deletions**: Do not remove images, internal links, or key metadata unless explicitly instructed.
4. **Hextra Class Prefixing Rule**:
   - In custom layouts/partials, all Tailwind utility classes must use the `hx:` prefix (e.g. `hx:grid`, `hx:gap-8`, `hx:text-sm`, `hx:text-gray-600`, `hx:dark:text-gray-400`).

---

## 2. Content Sections & Writing Guidelines

### A. Courses (`content/courses/`)
- **Location**: `content/courses/<course-slug>/`
- **Structure**:
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

### B. Technical Guides (`content/guides/`)
- **Location**: `content/guides/<guide-slug>.md`
- **Structure**:
  - Clear, hierarchical Markdown headings (`##`, `###`).
  - Engaging hook & introduction with real-world analogies.
  - **AI / Tech Terms Glossary** table for complex terms.
  - Architectural breakdowns, ASCII workflow diagrams, and comparison tables.
  - Copy-pasteable CLI / code snippets and **Quick Revision Summary / Key Takeaways** at the end.
- **Frontmatter**:
  - `title`, `categories`, `tags`, `description`, `date`, `lastmod`, `images`, `author`.

### C. Practice & Interview Challenges (`content/practice/`)
- **Location**: `content/practice/<topic-slug>.md`
- **Structure**: Real-world interview questions, system design scenarios, coding challenges, microservices patterns, and detailed explanations.

---

## 3. Tech Stack & Repository Structure

- **SSG & Theme**: Hugo Extended + **Hextra** (`themes/hextra`)
- **Branding Assets (Synced with fincz.com)**:
  - Light Mode Logo: `static/images/fincz-logo-black.png`
  - Dark Mode Logo: `static/images/fincz-logo-white.png`
  - Favicon: `static/images/icons/favicon.ico`
- **Typography & Font**: **Plus Jakarta Sans** (Primary) & **JetBrains Mono** (Code) defined in `layouts/partials/custom/head-end.html`.
- **Layout Customizations**:
  - `layouts/partials/custom/footer.html`: Responsive 4-column footer using `hx:` classes.
  - `layouts/partials/custom/head-end.html`: Fonts, custom design tokens, hero gradients, and card styles.
- **Content Paths**:
  - `content/courses/`: Multi-module educational courses (`type: docs`)
  - `content/guides/`: Standalone in-depth technical guides & architectures
  - `content/practice/`: Coding, system design, and interview scenario tracks
  - `content/tools/`: Financial and developer tools/calculators
  - `content/pages/`: Static pages (about, contact, privacy-policy, terms)
- **Configuration**:
  - Centralized single config file: `config/_default/config.yaml`

---

## 4. Common Agent Workflows & Skills

- **Blog / Guide Creation**: Follow skill `.agents/skills/fincz-content-writer/SKILL.md`.
- **Course Planning & Creation**: Follow skill `.agents/skills/fincz-course-creator/SKILL.md`.
- **Workflow for New Courses**:
  1. Draft course plan and syllabus in `content/courses/<course-slug>-plan.md`.
  2. Confirm syllabus and module structure with user.
  3. Generate `_index.md`, `syllabus.md`, and module lesson files sequentially.
- **Building / Verification**: Test static builds with `hugo --gc --minify` (one-off, non-blocking command). Do not launch background watch/dev servers.
