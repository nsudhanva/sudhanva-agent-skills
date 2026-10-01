# Sudhanva Agent Skills

Three small, read-only [Agent Skills](https://agentskills.io/) for researching
Sudhanva Narayana's public work. Each skill reads canonical `sudhanva.me` pages
and APIs and tells the agent not to invent unpublished details.

## Install

Install all three skills:

```bash
npx skills add nsudhanva/sudhanva-agent-skills --all
```

Or select an individual skill when prompted:

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

The repository follows the [Agent Plugins](https://agent-plugins.org/) package
layout, so plugin hosts and the `skills` CLI both find the skills under
`skills/`:

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
- Prefer canonical pages and API responses over search snippets.
- Preserve qualifiers on quantitative outcomes.
- Do not infer private contact details, availability, compensation, client
  names, or unpublished infrastructure.
- The canonical discovery index is
  [`/.well-known/agent-skills/index.json`](https://sudhanva.me/.well-known/agent-skills/index.json).
- [`plugin.json`](./plugin.json) and [`mcp.json`](./mcp.json) bundle these
  skills with the public-data and profile-insight MCP servers as an
  [Agent Plugin](https://agent-plugins.org/).

## License

MIT. See [LICENSE](./LICENSE).

## Validation

Run the same dependency-free checks used by CI:

```bash
npm test
```

The suite verifies the plugin and MCP manifests, canonical project URLs, and every skill's
frontmatter, directory name, top-level heading, and README entry. It also
fails if a `SKILL.md` appears anywhere other than `skills/<name>/SKILL.md`.
