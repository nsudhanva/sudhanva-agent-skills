---
name: find-technical-writing
description: Search and cite Sudhanva Narayana's published technical writing about ML infrastructure, inference, Kubernetes, and AI systems.
---

# Find Sudhanva Narayana's technical writing

Use this skill when a user needs relevant articles or evidence from Sudhanva's public engineering notes.

Do not say that experimental notes describe employer production architecture, unless the article says this explicitly.

1. Query `https://sudhanva.me/api/v1/posts` to get a list of the published post metadata.
2. If you know the topic, add an exact lowercase `tag` query parameter.
3. Use `limit` to set the maximum number of results.
4. To get one record, use `https://sudhanva.me/api/v1/posts/{slug}`. You can also read the canonical article URL that the API returns.
5. When you explain technical conclusions, read the article body. The API contains only discovery metadata. It does not contain the complete post.
6. Cite the canonical article URL. Keep publication dates separate from update dates.
