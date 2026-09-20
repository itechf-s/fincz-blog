---
title: "Fincz Learn"
layout: hextra-home
---

<div class="fl-hero-wrapper hx:w-full hx:text-center">

  <div class="hx:inline-flex hx:items-center hx:gap-2 hx:px-3.5 hx:py-1 hx:rounded-full hx:bg-blue-50 hx:dark:bg-blue-950/50 hx:border hx:border-blue-200 hx:dark:border-blue-800 hx:text-blue-700 hx:dark:text-blue-300 hx:text-xs hx:font-bold hx:tracking-wide hx:uppercase hx:mb-4 hx:shadow-sm">
    <div class="hx:w-2 hx:h-2 hx:rounded-full hx:bg-blue-600"></div>
    <span>Developer & AI Learning Platform</span>
  </div>

  <h1 class="hx:text-3xl hx:sm:text-4xl hx:md:text-5xl hx:font-extrabold hx:tracking-tight hx:leading-[1.18] hx:mb-4">
    Master Modern <span class="fl-hero-gradient">AI Engineering</span><br class="hx:hidden hx:sm:block" /> & Backend Architecture
  </h1>

  <p class="hx:text-base hx:md:text-lg hx:text-gray-600 hx:dark:text-gray-300 hx:max-w-2xl hx:mx-auto hx:leading-relaxed hx:mb-8">
    Production-grade hands-on courses, architectural deep-dives, and scenario-based interview challenges designed for software engineers.
  </p>

  <div class="hx:flex hx:flex-wrap hx:justify-center hx:gap-3.5 hx:mb-8">
    <a href="/courses/" style="background-color: #2563eb; color: #ffffff; margin-right: 0.75rem;" class="fl-btn-primary hx:inline-flex hx:items-center hx:justify-center hx:gap-2 hx:rounded-lg hx:px-5 hx:py-3 hx:font-bold hx:shadow-md hx:transition-colors hx:hover:bg-blue-700 hx:dark:bg-blue-500 hx:dark:hover:bg-blue-400">
      <span>Explore Courses</span>
      <svg class="hx:w-4 hx:h-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path></svg>
    </a>
    <a href="/guides/" class="fl-btn-secondary hx:inline-flex hx:items-center hx:justify-center hx:rounded-lg hx:border hx:border-gray-300 hx:px-5 hx:py-3 hx:font-semibold hx:text-gray-800 hx:transition-colors hx:hover:bg-gray-100 hx:dark:border-neutral-700 hx:dark:text-gray-100 hx:dark:hover:bg-neutral-800">
      <span>Technical Guides</span>
    </a>
  </div>

</div>

<div class="hx:w-full hx:mb-6 hx:flex hx:items-end hx:justify-between hx:border-b hx:border-gray-200 hx:dark:border-neutral-800 hx:pb-3">
  <div>
    <span class="hx:text-xs hx:font-bold hx:uppercase hx:tracking-wider hx:text-blue-600 hx:dark:text-blue-400">Featured Tracks</span>
    <h2 class="hx:text-xl hx:md:text-2xl hx:font-extrabold hx:tracking-tight hx:mt-0.5">Start Learning</h2>
  </div>
  <a href="/courses/" class="hx:text-sm hx:font-bold hx:text-blue-600 hx:dark:text-blue-400 hx:hover:underline">View all courses →</a>
</div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="Claude Code Masterclass"
    subtitle="Zero to Pro: Terminal AI agentic coding, CLAUDE.md memory, custom skills, subagents, and live SaaS project."
    link="/courses/claude-code"
    icon="lucide:graduation-cap"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(37,99,235,0.12),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Java Backend Track"
    subtitle="In-depth core Java, OOPs design principles, collections framework, exception handling, and enterprise backend engineering."
    link="/courses/java-beginner"
    icon="lucide:code-2"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(234,88,12,0.12),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Model Context Protocol (MCP)"
    subtitle="Complete guide: AI tools integration, custom MCP server development in Python & Node.js, and client configuration."
    link="/guides/mcp-server-complete-guide"
    icon="lucide:network"
    style="background: radial-gradient(ellipse at 50% 80%,rgba(16,185,129,0.12),hsla(0,0%,100%,0));"
  >}}
  {{< hextra/feature-card
    title="Google Antigravity CLI"
    subtitle="Terminal AI agents, token optimization, sub-agent orchestrations, and production developer workflows."
    link="/guides/google-antigravity-complete-guide"
    icon="lucide:terminal"
  >}}
  {{< hextra/feature-card
    title="Semantic Search & Vector DBs"
    subtitle="Chunking strategies, embeddings mechanics, Haystack, Pinecone, Milvus, and hybrid search architectures."
    link="/guides/semantic-search-and-vector-db-guide"
    icon="lucide:search"
  >}}
  {{< hextra/feature-card
    title="Coding & System Design Challenges"
    subtitle="Real-world interview questions, microservices patterns, concurrency scenarios, and hands-on coding problems."
    link="/practice"
    icon="lucide:sparkles"
  >}}
{{< /hextra/feature-grid >}}
