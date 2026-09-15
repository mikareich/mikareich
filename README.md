# Mika Reich portfolio

Use Bun for installation and development:

```sh
bun install
bun run dev
bun run check
bun run build
```

Portfolio socials, projects, and skills live together in `src/app/config.ts`.
Pages are native Next.js `page.mdx` routes. YAML frontmatter compiles into the
page's `metadata` export; presentation is composed explicitly in MDX.

## Blog authoring

Create `src/app/blog/(posts)/my-post/page.mdx` to publish `/blog/my-post`:

```mdx
---
title: My post
description: A short summary
keywords: [nextjs, mdx]
openGraph:
  type: article
  publishedTime: "2026-09-14"
---

import { Suspense } from "react";
import Comments from "~/app/blog/_components/comments";
import { PostBody } from "~/app/blog/_components/post-body";
import { PostHero } from "~/app/blog/_components/post-hero";

<PostHero
  title={metadata.title}
  subtitle={metadata.description}
  tags={metadata.keywords}
  publishedAt={metadata.openGraph.publishedTime}
/>

<PostBody>

## Getting started

Write the article here. Leave blank lines around Markdown inside JSX wrappers.

### More detail

Subheadings become nested table-of-contents entries.

</PostBody>

<Suspense fallback="Loading Comments...">
  <Comments postId="/my-post" />
</Suspense>
```

### Metadata and discovery

- Required fields: nonblank `title` and `description`, at least one nonblank
  `keywords` entry, and `openGraph.publishedTime`.
- Always quote dates: `"2026-09-14"`, `"2026-09-14T12:30:00Z"`, or
  `"2026-09-14T14:30:00+02:00"`. Dates must exist on the calendar, and timestamps
  require seconds and a timezone. Date-only values are interpreted as UTC.
- `src/app/blog/(posts)/posts.ts` reads frontmatter on the server without
  evaluating MDX. It discovers posts automatically and sorts by publication
  timestamp, newest first, with the URL as a stable tie-breaker.
- Use ordinary static directory names. Nested paths such as `guides/my-post`
  produce `/blog/guides/my-post`. Dynamic segments, nested route groups,
  intercepting routes, parallel slots (`@slot`), and percent-encoded directory
  names are rejected. Private directories starting with `_` are skipped.
- A `page.mdx` directly inside `(posts)` is rejected because it conflicts with
  `/blog`. Metadata errors identify the file and field; malformed YAML identifies
  the file and preserves the parser error.
- Refresh `/blog` during development after adding, editing, or removing a post.
  There is no generated index or custom watcher. Production pages are prerendered
  during `bun run build`; publishing content changes requires a rebuild.

### Headings and comments

`rehype-slug` assigns Markdown heading IDs during compilation. The local
`src/lib/mdx/rehype-post-toc.mts` adapter runs afterward and uses
`@jsdevtools/rehype-toc` to generate the nested list from those exact IDs.
`PostBody` receives that list as its compiler-supplied `toc` prop and presents it
in the mobile collapsible and desktop sticky TOCs. Omit `toc` in authored MDX.
Use Markdown headings (`##` through `######`) inside `PostBody`; headings inside
nested JSX wrappers work, and headings outside the body still participate in
duplicate-ID numbering. React components' internal headings are not available
to the MDX compiler.

Comments are optional and require `DATABASE_URL` and the existing comments
database. Use a stable `postId` beginning with `/`, without the `/blog` prefix.
The existing article keeps `/unofficial-valorant-api` to retain its comments.
