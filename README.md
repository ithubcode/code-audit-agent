<p align="center">
  <img src="media/banner.svg?v=2" alt="code-audit-agent banner" width="800">
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">
  <img alt="Platform" src="https://img.shields.io/badge/platform-OpenCode%20|%20Claude%20Code%20|%20Codex%20|%20Gemini-lightgrey">
</p>

<strong>code-audit-agent</strong> is an AI-powered subagent that analyzes your codebase for clean code violations, readability problems, technical debt, and framework anti-patterns. It runs as an isolated agent in OpenCode, Claude Code, Codex, and Gemini CLI — never modifying code, only reporting findings.

---

## Features

| | |
|---|---|
| 🔍 **14 audit categories** | From naming & legibility to dependency supply chain and accessibility |
| 🌐 **Multi-language** | TypeScript, JavaScript, Go, Python, Rust, Java — auto-detects your stack |
| 🧠 **Stack-aware** | NestJS, Next.js, Express, Django, FastAPI, Spring Boot, Gin — framework-specific checks |
| 📦 **Dual output** | Human-readable Markdown reports + SARIF v2.1 JSON for CI/CD pipelines |
| 📈 **Incremental scanning** | File hashing tracks changes — skips re-scanning untouched files |
| 🎯 **Configurable severity** | `--min-severity medium` — skip noise, focus on what matters |
| 🧪 **40+ example findings** | Each category includes before/after code examples |
| 🕒 **Evolution tracking** | Compares against previous reports to show trends |

## Supported Languages

```
TypeScript  JavaScript  Go  Python  Rust  Java
```

## Supported Frameworks

```
Backend:   NestJS · Next.js · Express · Fastify · Django · FastAPI · Spring Boot · Gin · Echo
Frontend:  React · Vue · Angular · Svelte · Solid
Mobile:    Flutter · React Native · Kotlin · Swift
Database:  Prisma · TypeORM · Drizzle · SQLAlchemy · GORM · JPA
Testing:   Jest · Vitest · pytest · Go test · JUnit · RSpec
```

## Installation

### OpenCode

Add to your `opencode.json` plugin array:

```json
{
  "plugin": [
    "code-audit-agent@git+https://github.com/ithubcode/code-audit-agent.git"
  ]
}
```

Restart OpenCode. The agent auto-registers via the plugin's config hook.

### Claude Code / Codex / Gemini CLI

See [INSTALL.md](INSTALL.md) for per-platform setup.

## Usage

```bash
# Full audit with default settings
@code-audit scan src/

# Focus on high-severity issues only
@code-audit scan src/ --min-severity high

# Specific module or layer
@code-audit scan src/api/ --min-severity medium

# Incremental — only new/changed files since last audit
@code-audit scan src/ --incremental
```

## Output

After each audit, two files are generated in `code-audit/`:

```
code-audit/
├── code-audit-2026-06-30.md      # Full Markdown report
├── code-audit-2026-06-30.json    # SARIF v2.1 compatible
└── code-audit-last-run.json      # Metadata for incremental scans
```

### Sample report

```
Code Quality Audit Report: my-project
Files analyzed: 47  |  Severity: 12 findings

  C02 [High]  Function exceeds 30 lines — src/api.ts:15
  C06 [Med]   Unnecessary `any` type — src/handler.ts:42
  C07 [Low]   Magic number 30000 — src/config.ts:8
  C13 [Med]   Unpinned dependency — package.json:12
```

## Categories

| Code | Category | Severity | What it catches |
|------|----------|----------|----------------|
| C01 | Naming & Legibility | High | Cryptic names, single-letter vars, misleading identifiers |
| C02 | Cognitive Complexity | High | Functions >30 lines, nesting >3, high cyclomatic complexity |
| C03 | DRY / Duplication | High | Repeated logic, copy-paste across files |
| C04 | SOLID Violations | High | God classes, interface bloat, mixed responsibilities |
| C05 | Error Handling | Medium | Swallowed errors, generic catches, silent failures |
| C06 | Typing & TypeScript | Medium | Unnecessary `any`, type assertions, missing unions |
| C07 | Magic Numbers/Strings | Low | Bare literals, repeated strings without constants |
| C08 | Structure & Organization | Medium | Files >300 lines, disorganized imports, circular deps |
| C09 | Comments | Low | Commented code, TODO without reference, stale comments |
| C10 | Performance | Medium | N+1 queries, missing indexes, unnecessary loops |
| C11 | Testing | Medium | Weak assertions, missing edge cases, impl-coupled tests |
| C12 | Framework Conventions | High | Stack-specific anti-patterns |
| C13 | Dependencies | Medium | Outdated packages, unpinned versions, missing lockfiles |
| C14 | Accessibility & i18n | Low | Missing aria/alt, hardcoded strings, keyboard gaps |

## Roadmap

- [ ] GitHub Actions integration (PR review comments via SARIF)
- [ ] Custom severity overrides per category
- [ ] `.codeauditrc` config file for project defaults
- [ ] Team dashboard for trend tracking across sprints

## License

MIT

---

<p align="center"><em>by <strong>ITHub</strong></em></p>
