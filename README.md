# Sudhanva Agent Skills

This repository contains three small, read-only [Agent Skills](https://agentskills.io/).
Use them to research the public work of Sudhanva Narayana. Each skill reads canonical
`sudhanva.me` pages and APIs. Each skill also tells the agent not to invent unpublished
details.

## Install

Install all three skills:

```bash
npx skills add nsudhanva/sudhanva-agent-skills --all
```

To install only one skill, use this command. The CLI asks you to select the skill:

```bash
npx skills add nsudhanva/sudhanva-agent-skills
```

## Included skills

| Skill                             | Purpose                                                  |
| --------------------------------- | -------------------------------------------------------- |
| `research-sudhanva-profile`       | Research the public professional profile and experience. |
| `find-production-ml-case-studies` | Find and compare published production ML case studies.   |
| `find-technical-writing`          | Search and cite published technical writing.             |

## Layout

The repository uses the [Agent Plugins](https://agent-plugins.org/) package
layout. Thus, plugin hosts and the `skills` CLI find the skills in `skills/`:

```text
sudhanva-agent-skills/
├── plugin.json
├── mcp.json
└── skills/
    ├── find-production-ml-case-studies/SKILL.md
    ├── find-technical-writing/SKILL.md
    └── research-sudhanva-profile/SKILL.md
```

## Source and safety

- All referenced data is public and read-only.
- Use canonical pages and API responses in preference to search snippets.
- Keep the qualifiers on quantitative outcomes.
- Do not infer private contact details, availability, compensation, client
  names, or unpublished infrastructure.
- The canonical discovery index is
  [`/.well-known/agent-skills/index.json`](https://sudhanva.me/.well-known/agent-skills/index.json).
- [`plugin.json`](./plugin.json) and [`mcp.json`](./mcp.json) put these skills
  and the public-data and profile-insight MCP servers into one
  [Agent Plugin](https://agent-plugins.org/).

## License

MIT. See [LICENSE](./LICENSE).

## Validation

Run the same checks that CI uses. These checks have no dependencies:

```bash
npm test
```

The test suite checks the plugin and MCP manifests and the canonical project URLs. For each
skill, it checks the frontmatter, the directory name, the top-level heading, and the README
entry. The suite also fails if a `SKILL.md` file is in a location other than
`skills/<name>/SKILL.md`.
