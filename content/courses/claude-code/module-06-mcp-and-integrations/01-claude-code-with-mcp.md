---
title: "6.1 Claude Code with MCP"
categories: [ AI, Course ]
tags: [ClaudeCode, MCP, ModelContextProtocol, Integrations, PostgreSQL]
description: "Model Context Protocol (MCP) kya hai? Janein Claude Code ko Database, GitHub aur Browser tools se kaise connect karein."
date: 2026-09-18T08:00:00+05:30
lastmod: 2026-09-18T08:00:00+05:30
author: ahmad
type: docs
---

# 📘 **Module 6: MCP & Plugins — 6.1 Claude Code with MCP**

---

## 🎯 **Objective (Is Lesson Ka Maqsad)**
Is lesson ko complete karne ke baad aap:
- Samajh payenge ki **Model Context Protocol (MCP)** kya hai aur Anthropic ne ise kyu banaya.
- Claude Code CLI ko **PostgreSQL Database** aur **GitHub MCP servers** se connect kar sakenge.
- AI ko seedhe database queries chalane aur live browser automation ke powers de sakenge.

---

## 💡 **Real-Life Analogy (Aasan Misaal)**

> **Misaal (USB Type-C Cable):**  
> Pehle har device (phone, laptop, camera) ke liye alag charger cable lagti thi. Fir aaya **USB Type-C**, jisne ek standard banakar sabhi devices ko aapas me connect kar diya.  
> **Model Context Protocol (MCP)** AI ki duniya ka Type-C port hai! Chahe Database ho, Slack ho, GitHub ho ya Figma — MCP ke zariye koi bhi tool Claude Code se ek click me jud jata hai.

---

## 📖 **Key Terms & Glossary (Zaruri Alfaaz)**

| Term (Lafz) | Simple Meaning (Aasan Matlab) | Example (Misaal) |
| :--- | :--- | :--- |
| **MCP (Model Context Protocol)**| AI models ko external tools aur data se jodne ka open standard | Anthropic MCP Standard |
| **MCP Server** | Ek chhota program jo database ya API ke tools provide karta hai | `@modelcontextprotocol/server-postgres` |
| **MCP Client** | Claude Code CLI jo un tools ko use karta hai | Claude Code agent |
| **Tool Calling** | AI ka khud database me query chalana ya web page open karna | `read_query("SELECT * FROM users")` |

---

## 🌐 **MCP Architecture Diagram**

```text
                           +------------------------+
                           |    Claude Code CLI     |
                           |      (MCP Client)      |
                           +-----------┬------------+
                                       │
                ┌──────────────────────┼──────────────────────┐
                │ MCP Protocol (JSON-RPC Communication)       │
                ▼                      ▼                      ▼
    +──────────────────────+ +──────────────────────+ +──────────────────────+
    |    Postgres MCP      | |     GitHub MCP       | |    Puppeteer MCP     |
    |  - Inspect schema    | |  - Fetch Issue list  | |  - Open Web Browser  |
    |  - Run test queries  | |  - Create Pull Req   | |  - Take UI screenshot|
    +──────────┬───────────+ +──────────┬───────────+ +──────────┬───────────+
               │                        │                        │
               ▼                        ▼                        ▼
        [ PostgreSQL DB ]         [ GitHub.com ]          [ Chrome Browser ]
```

---

## 🛠️ **Claude Code Me MCP Server Kaise Setup Karein?**

Claude Code me MCP server configure karna bahut simple hai:

```bash
# PostgreSQL MCP server connect karna
claude mcp add postgresql npx -y @modelcontextprotocol/server-postgres postgresql://user:password@localhost:5432/mydb
```

Ya fir configuration file me add karein:

```json
{
  "mcpServers": {
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost:5432/mydb"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_your_token"
      }
    }
  }
}
```

---

## 💻 **MCP Ke Sath Real Prompts**

### 1. Database Schema Inspect Karna & Query Fix Karna
```text
> "Postgres database me 'orders' table ka schema check karo aur dekho pichhle 30 din me highest selling products kaun se hain. Query ko optimize karke backend controller me add karo."
```
Claude Code khud database se schema read karega, query verify karega aur code likh dega!

---

### 2. GitHub Issues Auto-Solve Karna
```text
> "GitHub repo me Issue #42 ko fetch karo. Usme bataye gaye bug ko reproduce karo, fix karo aur Pull Request create kar do."
```

---

## ⚠️ **Common Mistakes & Pro Tips (Bachne Wali Galtiyan)**

- ❌ **Galti:** Production database ka direct write access MCP server ko de dena.
- ✅ **Pro Tip:** Local development ya Staging database use karein, aur production ke liye hamesha **Read-Only** credentials dein.

---

## 📝 **Practice Challenge (Khud Sochien)**

1. Sochien agar Claude Code ke paas Database aur Browser dono ka MCP access ho, toh kya wo ek click me bug find karke browser me UI test bhi kar sakta hai?
2. MCP standard Copilot plugins se kyu better hai?

---

## 📌 **Quick Revision Summary (Mukhya Baatein)**

- MCP Anthropic ka banaya open-source standard hai jo AI ko external software se jodta hai.
- Isse Claude Code seedhe Database queries aur GitHub APIs chala sakta hai.
- Security ke liye hamesha restricted permissions wale database credentials use karein.

---

## 🧭 **Next Steps & Navigation**
- ⬅️ **Pichhla Module:** [Module 5: Skills & SubAgents](/courses/claude-code/module-05-skills-and-subagents/)
- ➡️ **Agla Lesson:** [6.2 Lifecycle Hooks](/courses/claude-code/module-06-mcp-and-integrations/02-lifecycle-hooks/)
