# CLAUDE.md - Assistant Guidelines for Fincz Blog

Guidelines for Claude and other AI assistants working in this repository.

## Commands & Rules
- **DO NOT** run `npm run dev` or launch background Hugo server processes. The user manages their own server.
- Build/Check commands should be one-off and non-interactive.

## Content & Tone
- **Language**: Simple, natural conversational Hindi/Urdu/Hinglish.
- **Tone**: Friendly, clear, easy to revise. Avoid dense pure Hindi and complex jargon without immediate simple explanations.
- **Style**: Markdown with clear section headers, comparative tables, and ASCII workflow diagrams.

## Post Structure Checklist
- [ ] YAML Frontmatter (title, categories, tags, description, images, author, date, lastmod)
- [ ] Engaging Introduction with real-life analogies
- [ ] Concept breakdowns & comparisons (Tables)
- [ ] Step-by-step workflow diagrams (ASCII)
- [ ] Practical examples / Code snippets
- [ ] Quick Revision / Summary section

## Repository Layout
- `content/posts/`: Main blog posts (Markdown)
- `config/_default/`: Hugo configuration files (`config.yaml`, `params.yaml`, `menus.yaml`)
- `static/images/`: Static image assets
- `layouts/`: Custom Hugo layout templates and shortcodes
