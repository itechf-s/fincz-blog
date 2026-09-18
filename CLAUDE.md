# CLAUDE.md - Assistant Guidelines for Fincz Blog

Guidelines for Claude and other AI assistants working in this repository.

## Commands & Rules
- **DO NOT** run `npm run dev` or launch background Hugo server processes. The user manages their own dev server.
- Build/Check commands should be one-off and non-interactive.

## Content & Tone
- **Language**: Simple, natural conversational Hindi/Urdu/Hinglish (रोज़मर्रा की बोलचाल वाली ज़बान).
- **Tone**: Friendly, clear, practical, easy to revise. Avoid dense pure Hindi (*shuddh Hindi*) and complex jargon without immediate simple explanations.
- **Style**: Markdown with clear section headers, comparative tables, and ASCII workflow diagrams.

---

## 1. Post Structure Checklist (`content/posts/`)
- [ ] YAML Frontmatter (`title`, `categories`, `tags`, `description`, `images`, `author`, `date`, `lastmod`)
- [ ] Engaging Introduction with real-life analogies
- [ ] AI Terms / Glossary table
- [ ] Concept breakdowns & comparisons (Tables)
- [ ] Step-by-step workflow diagrams (ASCII)
- [ ] Practical examples / Code snippets
- [ ] Quick Revision / Summary section

---

## 2. Course Structure Checklist (`content/courses/`)
- [ ] Course Directory: `content/courses/<course-slug>/`
- [ ] Course Landing Page: `_index.md` (`type: docs`)
- [ ] Full Syllabus Page: `syllabus.md` (`type: docs`)
- [ ] Modules: `module-XX-<name>/_index.md`
- [ ] Lessons: `YY-<lesson-slug>.md`
- [ ] **Lesson Structure**:
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

## Repository Layout
- `content/posts/`: Main blog posts (Markdown)
- `content/courses/`: Comprehensive multi-module courses (`type: docs`)
- `config/_default/`: Hugo configuration files (`config.yaml`, `params.yaml`, `menus.yaml`)
- `static/images/`: Static image assets (Sync with `public/images/`)
- `layouts/`: Custom Hugo layout templates and shortcodes
- `.agents/skills/`: Custom agent skills (`fincz-content-writer`, `fincz-course-creator`)
