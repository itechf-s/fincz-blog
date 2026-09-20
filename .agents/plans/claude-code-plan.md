# Claude Code Complete Master Course: Plan & Syllabus

> **Course Path:** `content/courses/claude-code/`  
> **Target Audience:** Beginners to Advanced Developers (Zero to Pro-Level)  
> **Language & Tone:** Simple Conversational Hindi/Hinglish (Daily spoken tone, no shuddh Hindi jargon)  
> **Source Inspiration:** CampusX Agentic Coding using Claude Code Playlist (15 Comprehensive Modules)

---

## 🎯 Course Overview & Architecture

Claude Code terminal me chalne wala Anthropic ka official autonomous AI agent hai jo sirf code snippets suggest nahi karta, balki poore codebase ko read karta hai, terminal commands run karta hai, tests pass karwata hai, aur git workflow ko autonomously manage karta hai.

Ye course **Beginner (Setup & Basics)** se shuru hokar **Advanced (Custom Subagents, MCP, Hooks, Plugins, Spec-Driven Development)** tak har aspect ko cover karega.

---

## 📚 Proposed Course Modules & Chapter Breakdown

```text
content/courses/claude-code/
├── _index.md                                    # Course Landing Page
├── syllabus.md                                  # Complete Course Curriculum
├── module-01-foundations/                       # Module 1: Introduction & Architecture
│   ├── _index.md
│   ├── 01-agentic-coding-vs-vibe-coding.md      # Vibe Coding vs Agentic Coding (No vibe coding)
│   ├── 02-what-is-claude-code.md                # Architecture, Terminal Tool vs Copilot
│   └── 03-installation-and-setup.md             # Node.js, CLI Install, Anthropic API Key, Free tier
├── module-02-core-workflow/                     # Module 2: Everyday CLI & Navigation
│   ├── _index.md
│   ├── 01-slash-commands-mastery.md             # /help, /clear, /cost, /doctor, /compact, /init
│   ├── 02-making-code-changes.md                # Editing files, diff review, executing bash
│   └── 03-multimodal-image-context.md           # Passing screenshots & UI mockups as context
├── module-03-context-and-memory/                # Module 3: Context Window & CLAUDE.md
│   ├── _index.md
│   ├── 01-context-window-management.md          # Token optimization, /compact, auto-summarization
│   └── 02-claude-md-the-master-file.md          # CLAUDE.md structure, project memory, rules
├── module-04-development-workflows/             # Module 4: Spec-Driven Dev & Planning Modes
│   ├── _index.md
│   ├── 01-spec-driven-development.md            # Writing specs, PRD-to-Code workflow
│   ├── 02-plan-mode-and-ultraplan.md            # Plan mode, reasoning loops, Ultraplan
│   └── 03-custom-slash-commands.md              # Writing custom slash commands in .claude/commands
├── module-05-skills-and-subagents/              # Module 5: Extending Agent Intelligence
│   ├── _index.md
│   ├── 01-claude-code-skills.md                 # Creating and using Skills (SKILL.md)
│   ├── 02-built-in-subagents.md                 # Subagent architecture, token & cost reduction
│   └── 03-custom-subagents.md                   # Creating custom worker agents (e.g. Test, QA, Docs)
├── module-06-mcp-and-integrations/              # Module 6: MCP, Hooks & Automation
│   ├── _index.md
│   ├── 01-claude-code-with-mcp.md               # Model Context Protocol, connecting databases & APIs
│   ├── 02-lifecycle-hooks.md                    # Pre-tool, post-tool lifecycle hooks
│   └── 03-plugins-and-ecosystem.md              # Claude Code plugins, extensions & best practices
└── module-07-production-projects/               # Module 7: Hands-on Real-World Projects
    ├── _index.md
    ├── 01-building-fullstack-app.md             # End-to-end Fullstack App building with Claude Code
    └── 02-automated-debugging-and-testing.md    # Fixing real repo bugs, automated test writing & Git PRs
```

---

## 📋 Detailed Module Syllabus & Learning Outcomes

### 🔹 Module 1: Foundations & Setup (Zero Level)
- **1.1 Agentic Coding vs Vibe Coding:** AI Chatbot vs Autocomplete vs Autonomous Agentic Loop (Observation -> Thought -> Action -> Feedback).
- **1.2 Claude Code Architecture:** How it interacts directly with your bash terminal, file system, and git tree.
- **1.3 Setup & Configuration:** Installing `@anthropic-ai/claude-code`, configuring API keys, setting up cost limits, and running free credits/tiers.

### 🔹 Module 2: Core Workflow & Code Changes
- **2.1 Slash Commands Mastery:** Complete reference guide to built-in commands (`/help`, `/init`, `/compact`, `/cost`, `/doctor`, `/review`, `/pr`).
- **2.2 Making Code Changes & Diffs:** How Claude inspects files, creates targeted diffs, and asks for approval before destructive commands.
- **2.3 Adding Images as Context:** Passing wireframes, bug screenshots, and UI designs directly into terminal prompts.

### 🔹 Module 3: Context Window & CLAUDE.md Memory
- **3.1 Context Window Management:** Managing token limits, avoiding hallucination, understanding when to use `/compact` and `/clear`.
- **3.2 `CLAUDE.md` — The Project Brain:** Creating project-level instructions, build scripts, coding standards, and architectural rules.

### 🔹 Module 4: Advanced Engineering Workflows
- **4.1 Spec-Driven Development (SDD):** Generating requirements/specifications before writing code, deterministic execution.
- **4.2 Plan Mode & Ultraplan Mode:** Deep reasoning before execution, multi-step dependency graphs, safe review before action.
- **4.3 Custom Slash Commands:** Creating project-specific commands in `.claude/commands/` (e.g., `/test-all`, `/deploy-staging`).

### 🔹 Module 5: Skills & SubAgents Architecture
- **5.1 Claude Code Skills:** Packaging domain logic, reference docs, and scripts into reusable modular skills.
- **5.2 Built-in SubAgents:** Delegating research, codebase search, and heavy exploration to isolated sub-agents to save main context and token cost.
- **5.3 Custom SubAgents:** Building specialized autonomous workers (e.g., `Security-Auditor`, `Database-Optimizer`, `Unit-Tester`).

### 🔹 Module 6: MCP, Hooks & Plugins
- **6.1 Claude Code + Model Context Protocol (MCP):** Connecting Claude Code to external tools, Postgres databases, browser automation, and GitHub APIs.
- **6.2 Lifecycle Hooks:** Configuring pre-command and post-command hooks for linting, security scanning, and automated logging.
- **6.3 Plugins & Notes:** Installing community plugins, configuring global settings, and ultimate cheatsheet.

### 🔹 Module 7: Real-world Capstone Projects
- **7.1 Fullstack SaaS Project:** Building and deploying a project completely via Claude Code terminal workflows.
- **7.2 Legacy Code Refactoring & Testing:** Giving Claude Code a legacy repo, generating test suites, fixing bugs, and creating Pull Requests automatically.

---

## 🛠️ Content Writing Standards for each Lesson
- **Glossary Table:** Key terms with simple Hinglish meanings.
- **ASCII Flow Diagrams:** Step-by-step terminal and architecture workflows.
- **Hands-on Terminal Commands:** Real copy-pasteable commands and prompt examples.
- **Common Mistakes & Gotchas:** What mistakes beginners make and how to avoid token wastage.
- **Quick Revision Summary:** Key takeaways at the end of each page.
