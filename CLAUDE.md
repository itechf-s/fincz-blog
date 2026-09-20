# CLAUDE.md - Assistant Guidelines for Fincz Learn Platform

Guidelines for Claude and other AI assistants working in this repository (`https://learn.fincz.com/`).

## Commands & Rules
- **DO NOT** run `npm run dev` or launch background Hugo server processes (`hugo server`). The user manages their own dev server.
- Build & validation commands must be one-off and non-interactive:
  ```bash
  hugo --gc --minify
  ```
- **Hextra Class Prefixing**: Always use the `hx:` prefix for Tailwind CSS utilities in custom layouts/partials (e.g., `hx:grid`, `hx:gap-8`, `hx:text-sm`).

## Content & Tone
- **Language**: Simple, natural conversational Hindi/Urdu/Hinglish (रोज़मर्रा की बोलचाल वाली ज़बान).
- **Tone**: Friendly, clear, practical, easy to understand and revise. Avoid dense pure Hindi (*shuddh Hindi*) and unnecessary complex English jargon without immediate simple explanations.
- **Visuals**: Structured Markdown with clear headings, comparative tables, and ASCII workflow diagrams.

---

## 1. Course Structure Checklist (`content/courses/`)
- [ ] Course Directory: `content/courses/<course-slug>/`
- [ ] Course Landing Page: `_index.md` (`type: docs`)
- [ ] Full Syllabus Page: `syllabus.md` (`type: docs`)
- [ ] Modules: `module-XX-<name>/_index.md`
- [ ] Lessons: `YY-<lesson-slug>.md`
- [ ] **Lesson Pedagogical Structure**:
  - [ ] 🎯 Objective / Goals (मक़सद)
  - [ ] 💡 Real-Life Analogy (आसान मिसाल)
  - [ ] 📖 Key Terms & Glossary Table (ज़रूरी अल्फ़ाज़)
  - [ ] ⚙️ Core Concepts & ASCII Diagrams
  - [ ] 💻 Hands-on Commands & Code Examples
  - [ ] ⚠️ Common Mistakes & Gotchas (बचने वाली गलतियाँ)
  - [ ] 📝 Practice Exercise (खुद करके देखें)
  - [ ] 📌 Quick Revision Summary (मुख्य बातें)
  - [ ] 🧭 Navigation Links (पिछला / अगला Lesson)
- [ ] Frontmatter includes `type: docs` and `categories: [ <Category>, Course ]`

---

## 2. Technical Guide Structure Checklist (`content/guides/`)
- [ ] Frontmatter (`title`, `categories`, `tags`, `description`, `images`, `author`, `date`, `lastmod`)
- [ ] Engaging Introduction with real-life analogies
- [ ] AI / Technical Terms Glossary table
- [ ] Architectural breakdowns & comparisons (Tables)
- [ ] Step-by-step workflow diagrams (ASCII)
- [ ] Copy-pasteable CLI / Code snippets
- [ ] Quick Revision / Summary section

---

## 3. Practice & Interview Tracks (`content/practice/`)
- [ ] Real-world scenario-based questions & answers
- [ ] Code implementation and edge-case breakdowns
- [ ] System design and microservices patterns

---

## Repository Layout
- `content/courses/`: Comprehensive multi-module courses (`type: docs`)
- `content/guides/`: Technical guides and architecture deep-dives
- `content/practice/`: Practice Q&A and coding challenges
- `content/pages/`: Static pages (about, contact, privacy, terms)
- `config/_default/config.yaml`: Central Hugo & Hextra site configuration
- `layouts/partials/custom/`: Custom header tokens (`head-end.html`) and footer grid (`footer.html`)
- `static/images/`: Brand logos (`fincz-logo-black.png`, `fincz-logo-white.png`) & article assets
- `.agents/skills/`: Agent skills (`fincz-content-writer`, `fincz-course-creator`)
