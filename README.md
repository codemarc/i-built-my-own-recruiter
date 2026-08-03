# I Built My Own Recruiter

### A field guide to running your job search like a software project

**Premise:** One engineer's system for scoring, sweeping, and outreach automation, built over an active search and open-sourced so anyone can fork it for theirs. Part memoir, part manual. Every chapter ships as a standalone blog post and doubles as a chapter in this repo's `book/` folder.

**Read online:** [recruiter.braintrailz.com](https://recruiter.braintrailz.com) — Braintrailz pillar three (Mission-Driven Projects).

---

## Table of Contents

| # | Chapter | Site |
|---|---------|------|
| 0 | [Preface — Why This Exists](book/00-preface.md) | [Read](https://recruiter.braintrailz.com/book/00-preface/) |
| 1 | [The Problem With Job Boards](book/01-the-problem-with-job-boards.md) | [Read](https://recruiter.braintrailz.com/book/01-the-problem-with-job-boards/) |
| 2 | [Define Your Dealbreakers Before You Define Your Search](book/02-define-your-dealbreakers.md) | [Read](https://recruiter.braintrailz.com/book/02-define-your-dealbreakers/) |
| 3 | [Building the Scoring Rubric](book/03-building-the-scoring-rubric.md) | [Read](https://recruiter.braintrailz.com/book/03-building-the-scoring-rubric/) |
| 4 | [Automating the Daily Sweep](book/04-automating-the-daily-sweep.md) | [Read](https://recruiter.braintrailz.com/book/04-automating-the-daily-sweep/) |
| 5 | [Machine Format, Human Format](book/05-machine-format-human-format.md) | [Read](https://recruiter.braintrailz.com/book/05-machine-format-human-format/) |
| 6 | [From Match to Message](book/06-from-match-to-message.md) | [Read](https://recruiter.braintrailz.com/book/06-from-match-to-message/) |
| 7 | [Resume Tailoring at Scale](book/07-resume-tailoring-at-scale.md) | [Read](https://recruiter.braintrailz.com/book/07-resume-tailoring-at-scale/) |
| 8 | [Teaching the System to Remember](book/08-teaching-the-system-to-remember.md) | [Read](https://recruiter.braintrailz.com/book/08-teaching-the-system-to-remember/) |
| 9 | [When the Market Goes Quiet](book/09-when-the-market-goes-quiet.md) | [Read](https://recruiter.braintrailz.com/book/09-when-the-market-goes-quiet/) |
| 10 | [What the Recruiter Can't Do](book/10-what-the-recruiter-cant-do.md) | [Read](https://recruiter.braintrailz.com/book/10-what-the-recruiter-cant-do/) |
| 11 | [Fork It — Building Your Own in a Weekend](book/11-fork-it.md) | [Read](https://recruiter.braintrailz.com/book/11-fork-it/) |
| 12 | [Closing — Paying It Forward](book/12-closing-paying-it-forward.md) | [Read](https://recruiter.braintrailz.com/book/12-closing-paying-it-forward/) |

---

## Repo Structure

```
i-built-my-own-recruiter/
├── README.md              # premise + TOC
├── book/                  # source of truth — one markdown file per chapter
├── templates/             # sanitized rubric, TOON schema, outreach template
├── examples/              # redacted sample reports
└── site/                  # Astro + Starlight reader (builds from book/)
```

## How to Use This Repo

- **Reading:** [recruiter.braintrailz.com](https://recruiter.braintrailz.com), or start at the [preface](book/00-preface.md) in git and go in order.
- **Forking:** [Chapter 11](book/11-fork-it.md) is the build guide. The minimum viable system is a rubric, one scheduled sweep, and one report format — see [`templates/`](templates/).
- **Adapting:** every template is sanitized. Replace the placeholder dealbreakers, weights, and voice samples with your own.
- **Site local:** `cd site && bun install && bun run dev`

## License

[MIT](LICENSE) — fork freely. Attribution appreciated but not required beyond the license notice.
