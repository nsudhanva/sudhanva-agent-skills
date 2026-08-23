# Sudhanva Agent Skills

Three small, read-only [Agent Skills](https://agentskills.io/) for researching
Sudhanva Narayana's public work. Each skill uses canonical `sudhanva.me` pages
and APIs and includes explicit guidance against inventing unpublished details.

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

## Source and safety

- All referenced data is public and read-only.
- Prefer canonical pages and API responses over search snippets.
- Preserve qualifiers on quantitative outcomes.
- Do not infer private contact details, availability, compensation, client
  names, or unpublished infrastructure.
- The canonical discovery index is
  [`/.well-known/agent-skills/index.json`](https://sudhanva.me/.well-known/agent-skills/index.json).

## License

MIT. See [LICENSE](./LICENSE).
