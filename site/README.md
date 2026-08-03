# Book site (Astro + Starlight)

Static site for *I Built My Own Recruiter*. Chapters are authored in repo-root [`book/`](../book/); `bun run sync` copies them into Starlight with frontmatter.

## Commands

```bash
cd site
bun install
bun run dev      # sync + local preview
bun run build    # sync + static output → dist/
bun run preview  # serve dist/
```

## Deploy (Cloudflare Pages)

**Production URL:** https://recruiter.braintrailz.com

### Go-live checklist

1. Create the GitHub repo `codemarc/i-built-my-own-recruiter`, commit, and push `main`.
2. In Cloudflare → create Pages project `i-built-my-own-recruiter` (or let Actions create it on first deploy).
3. Add GitHub Actions secrets on that repo:
   - `CLOUDFLARE_API_TOKEN` — token with **Cloudflare Pages** edit permission
   - `CLOUDFLARE_ACCOUNT_ID`
4. Push to `main` or run the **Deploy book site** workflow.
5. Cloudflare → Pages → Custom domains → `recruiter.braintrailz.com` + DNS CNAME to the Pages hostname.

### Local one-shot deploy (after `wrangler login` or with env vars)

```bash
cd site
bun run build
bunx wrangler pages deploy dist --project-name=i-built-my-own-recruiter
```

### Dashboard build settings (if not using Actions)

| Setting | Value |
|--------|--------|
| Root directory | `site` |
| Build command | `bun install && bun run build` |
| Output directory | `dist` |

## Theme

Custom CSS in `src/styles/custom.css` — slate night + Braintrailz blue accent (not default Starlight purple).
