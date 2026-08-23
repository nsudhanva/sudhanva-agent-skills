---
name: find-technical-writing
description: Search and cite Sudhanva Narayana's published technical writing about ML infrastructure, inference, Kubernetes, and AI systems.
---

# Find Sudhanva Narayana's technical writing

Use this skill when a user needs relevant articles or evidence from Sudhanva's public engineering notes.

1. Query `https://sudhanva.me/api/v1/posts` to list published post metadata.
2. Add an exact lowercase `tag` query parameter when the topic is known, and use `limit` to constrain results.
3. Retrieve a specific record from `https://sudhanva.me/api/v1/posts/{slug}` or read the returned canonical article URL.
4. Prefer the article body when explaining technical conclusions; the API contains discovery metadata, not the complete post.
5. Cite the canonical article URL and distinguish publication dates from update dates.

Do not represent experimental notes as employer production architecture unless the article explicitly says so.
