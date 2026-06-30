# Installing code-audit-agent

## Prerequisites

- [OpenCode.ai](https://opencode.ai) installed

## Installation

Add to the `plugin` array in your `opencode.json` (global or project-level):

```json
{
  "plugin": [
    "code-audit-agent@git+https://github.com/ithubcode/code-audit-agent.git"
  ]
}
```

Restart OpenCode. The agent auto-registers at startup.

## Verify

Run the agent:

```
@code-audit scan src/ --min-severity medium
```

## Updating

OpenCode auto-updates plugins on restart. Pin a version:

```json
"code-audit-agent@git+https://github.com/ithubcode/code-audit-agent.git#v1.0.0"
```
