# Book site (Astro + Starlight)

Static site for *I Built My Own Recruiter*. Chapters are authored in repo-root [`book/`](../book/); `bun run sync` copies them into Starlight with frontmatter.

Built with `base: '/recruiter'` so it lives at **https://braintrailz.com/recruiter/**.

## Commands

```bash
cd site
bun install
bun run dev      # sync + local preview (http://localhost:4321/recruiter/)
bun run build    # sync + static output → dist/
bun run preview  # serve dist/
```

## Deploy (DigitalOcean droplet via SCP)

Same pattern as braintrailz-com-site: build static HTML, SCP into `~/site/html/recruiter/` on the droplet. nginx serves it under the main `braintrailz.com` vhost.

**Production URL:** https://braintrailz.com/recruiter/

### One-time droplet setup (braintrailz-com-site)

Pull the nginx `location /recruiter/` block, then:

```bash
cd ~/site
mkdir -p html/recruiter
docker compose exec nginx nginx -t && docker compose exec nginx nginx -s reload
```

No extra DNS or cert — same host as braintrailz.com.

### GitHub Actions secrets / vars

Reuse the Braintrailz SSH credentials (do **not** set `DEPLOY_PATH` for this workflow — it hardcodes a flat `book-dist` staging dir so paths do not nest):

| Name | Type | Notes |
|------|------|--------|
| `DEPLOY_KEY` | secret | SSH private key |
| `DEPLOY_HOST` | variable | Droplet IP/host |
| `DEPLOY_USER` | variable | SSH user (home ≈ `~`) |
| `DEPLOY_KNOWN_HOSTS` | variable | `ssh-keyscan` output |

Remote target is fixed: `~/site/html/recruiter` (contents of the Starlight `dist/`).

Push to `main` (paths under `book/` or `site/`) or run **Deploy book site** manually.

### Manual one-shot from your laptop

```bash
cd site
bun run build
rsync -avz --delete dist/ ${DEPLOY_USER}@${DEPLOY_HOST}:site/html/recruiter/
```

## Theme

Custom CSS in `src/styles/custom.css` — slate night + Braintrailz blue accent (not default Starlight purple).
