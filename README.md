# code-audit-agent

AI-powered code quality auditing agent for OpenCode, Claude Code, Codex, and Gemini CLI.

Audits your codebase for:
- **Naming & Legibility** — cryptic names, misleading identifiers
- **Cognitive Complexity** — long functions, deep nesting, high cyclomatic complexity
- **DRY Violations** — duplicated logic, copy-paste patterns
- **SOLID Violations** — god classes, interface bloat, mixed responsibilities
- **Error Handling** — swallowed errors, generic catches, missing edge cases
- **TypeScript Issues** — unnecessary `any`, type assertions, missing discriminated unions
- **Magic Numbers/Strings** — bare literals without named constants
- **Structure & Organization** — large files, disorganized imports
- **Comments** — commented code, TODO without context
- **Performance** — N+1 queries, missing indexes, unnecessary loops
- **Testing** — weak assertions, missing edge cases, implementation-coupled tests
- **Framework Conventions** — framework anti-patterns per detected stack
- **Dependencies** — outdated packages, unpinned versions
- **Accessibility & i18n** — missing labels, hardcoded strings

**Output:** Markdown reports + SARIF JSON for CI/CD integration.
**Languages:** TypeScript, JavaScript, Go, Python, Rust, Java (auto-detected).
**Stack-aware:** NestJS, Next.js, Express, Django, FastAPI, Spring Boot patterns.
