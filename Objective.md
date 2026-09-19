# Objective: Restructure this Hugo Project

Restructure the existing Hugo project so it can become a professional learning platform at:

[https://learn.fincz.com/](https://learn.fincz.com/)

The project should remain Hugo-based and should not be migrated to another framework. you can change the theme if you find better than existing one, but first i will approve

## Target Structure

Separate the existing mixed content into clear categories:

### 1. Courses — Public

Structured learning programs such as:

* Claude Code
* Java Beginner
* Financial Literacy
* Future courses

### 2. Guides — Public

Evergreen educational/technical content such as:

* AI
* AI Agents
* MCP
* LangChain
* Vector Databases
* Prompt Engineering
* Developer Tools
* Java / Backend
* Other useful technical guides

### 3. Practice — Public

Hands-on learning material such as:

* Exercises
* Assignments
* Projects
* Quizzes
* Practice resources

### 4. Notes / Personal — Hidden

Keep personal study and documentation inside the same Hugo project, but separate it from the public learning platform.

Examples:

* Personal project documentation
* House/construction notes
* Appresal reviews etc
* Business notes

These Notes must remain directly accessible to me through their URLs, but:

* Do not show them in the main navigation.
* Do not show them in homepage/public content listings.
* Do not include them in public course/guide listings.
* Add `noindex, nofollow` to Notes pages.
* Exclude them from the sitemap where practical.
* Do not use robots.txt as a privacy mechanism.
* Do not add authentication at this stage.
* Understand that this is SEO/discovery hiding, not true security/privacy.

## Homepage Objective

Transform the current mixed personal/blog homepage into a clean learning-platform homepage focused on:

* Fincz Learn introduction
* Featured Courses
* Learning categories
* Featured Guides
* Practice/Projects
* Latest public learning content
* Author/About information

Personal Notes must not appear on the public homepage.

## Navigation Objective

Create a clean public navigation centered around:

* Courses
* Guides
* Practice
* Search, if already supported

Do not expose Personal Notes or personal projects in the main navigation.

## Content Classification Objective

Review existing content and classify it appropriately as:

* Course
* Guide
* Practice
* Personal Note
* Archive/Delete/Old Content

Do not delete useful existing content.

Preserve existing course material, exercises, code examples, and technical information.

Prefer reorganizing and improving the information architecture rather than rewriting everything.

## SEO Objective

Prepare the project for migration from:

[https://fincz-dev.pages.dev/](https://fincz-dev.pages.dev/)

to:

[https://learn.fincz.com/](https://learn.fincz.com/)

Ensure:

* Correct canonical URLs
* Proper sitemap behavior
* Proper robots/meta handling
* Public Courses and Guides remain indexable
* Personal Notes are `noindex,nofollow`
* Internal links remain valid
* Existing valuable public URLs are preserved where possible
* Any necessary URL changes are handled safely with redirects
* No redirect chains
* Metadata/title/description reflect "Fincz Learn" rather than a generic finance blog identity

## Design Objective

Use the existing Hugo theme/design as the foundation and improve it rather than unnecessarily replacing the entire UI.

The final experience should feel like:

* Modern
* Clean
* Fast
* Developer-friendly
* Learning-focused
* Mobile-friendly must
* SEO-friendly

The site should feel more like a professional documentation/learning platform than a traditional personal blog.

## Technical Objective

Keep the implementation simple:

* Hugo
* Existing Git workflow
* Existing Cloudflare Pages deployment
* Hugo-native features wherever possible

Do not introduce:

* Next.js
* Astro
* Database
* Authentication
* Payment gateway
* Custom LMS

unless there is a clear future requirement.

The current priority is content architecture, UX, SEO and validation—not building a complex LMS.

## Safety Objective

Do not blindly rename, move or delete content.

First inspect the existing project and understand its current structure.

Preserve content and existing valuable URLs wherever practical.

Avoid destructive changes.

The final result should provide a clean foundation for eventually turning Fincz Learn into a professional free → paid online learning platform.

## Long-Term Direction

The intended architecture is:

Fincz.com
→ Financial content and finance brand

learn.fincz.com
→ Public learning platform

Within learn.fincz.com:

Courses
→ Main educational products

Guides
→ Free SEO/discovery content

Practice
→ Hands-on learning

Notes
→ Personal study/documentation, hidden from public navigation and search

The immediate goal is not monetization or a complex LMS.

The immediate goal is to create a clean, professional, scalable learning-content platform from the existing Hugo project without losing existing content.
