# AGENTS.md - Fincz Blog Agent Guidelines

This repository contains the source code and content for the **Fincz Blog** website built with Hugo (theme: `hugo-theme-bootstrap`).

---

## 1. Project Rules & Constraints

1. **Do NOT run `npm run dev` or Hugo local server**: The user runs local dev servers on their own. Never start background dev servers or continuous watch commands.
2. **Simple Language (Conversational Hindi/Urdu)**:
   - Always keep the language natural and simple (daily spoken Hindi/Hinglish/Urdu).
   - Avoid overly difficult pure Hindi words (shuddh Hindi) and unnecessarily complex English jargon.
3. **No Unrequested Deletions**: Do not remove images, internal links, or key metadata unless explicitly instructed.

---

## 2. Article Writing & Updating Guidelines (SEO & Readability)

When writing or updating articles (especially technical or educational topics):

- **Structure**:
  - Use clear, hierarchical Markdown headings (`##`, `###`).
  - Add summary tables, text diagrams, and bullet points for easy revision and quick reference.
- **Introduction**:
  - Keep it engaging, direct, and keyword-rich.
  - Explain concepts with real-world analogies (e.g., Engine vs Chassis for LLM vs LangChain).
- **Core Sections**:
  - Include an **AI Terms / Glossary** table for complex terms.
  - Break down ecosystems (e.g., LangChain, LangGraph, LangSmith, LangServe, LCEL).
  - Add visual pipeline workflows (ASCII/text diagrams).
  - Include a **Quick Revision Summary / Key Takeaways** at the end.
- **Frontmatter**:
  - Ensure `title`, `categories`, `tags`, `description`, `date`, `lastmod`, `images`, and `author` are properly maintained.

---

## 3. Tech Stack & Repository Structure

- **SSG**: Hugo (`config/_default/config.yaml`, `layouts/`, `archetypes/`)
- **Content**: Located under `content/posts/`, `content/pages/`, etc.
- **Images/Media**: Static images in `static/images/` or `public/images/`.
- **Styling & Assets**: Bootstrap 5, PostCSS, FontAwesome (`assets/`).
- **Configuration**:
  - `config/_default/config.yaml`
  - `config/_default/params.yaml`
  - `config/_default/menus.yaml`

---

## 4. Common Agent Workflows

- **Creating a new post**: Place under `content/posts/<post-slug>.md` with proper YAML frontmatter.
- **Editing content**: Keep file structure intact, verify frontmatter dates (`lastmod`), and follow the simple Hindi/Urdu tone.
- **Building/Testing**: Run standard linting or non-blocking build checks if requested, but do not start dev servers.
