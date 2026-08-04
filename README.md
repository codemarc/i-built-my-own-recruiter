# I Built My Own Recruiter

### A field guide to running your job search like a software project

**Premise:** One engineer's system for scoring, sweeping, and outreach automation, built over an active search and open-sourced so anyone can fork it for theirs. Part memoir, part manual. Every chapter ships as a standalone blog post and doubles as a chapter in this repo's `book/` folder.

**Read online:** [braintrailz.com/recruiter](https://braintrailz.com/recruiter/) — Braintrailz pillar three (Mission-Driven Projects).

---

## Table of Contents

| # | Chapter | Site |
|---|---------|------|
| 0 | [Preface — Why This Exists](book/00-preface.md) | [Read](https://braintrailz.com/recruiter/book/00-preface/) |
| 1 | [The Problem With Job Boards](book/01-the-problem-with-job-boards.md) | [Read](https://braintrailz.com/recruiter/book/01-the-problem-with-job-boards/) |
| 2 | [Define Your Dealbreakers Before You Define Your Search](book/02-define-your-dealbreakers.md) | [Read](https://braintrailz.com/recruiter/book/02-define-your-dealbreakers/) |
| 3 | [Define What "Great" Looks Like — Between the Nos and the Points](book/03-define-what-great-looks-like.md) | [Read](https://braintrailz.com/recruiter/book/03-define-what-great-looks-like/) |
| 4 | [Building the Scoring Rubric](book/04-building-the-scoring-rubric.md) | [Read](https://braintrailz.com/recruiter/book/04-building-the-scoring-rubric/) |
| 5 | [Automating the Daily Sweep](book/05-automating-the-daily-sweep.md) | [Read](https://braintrailz.com/recruiter/book/05-automating-the-daily-sweep/) |
| 6 | [Machine Format, Human Format](book/06-machine-format-human-format.md) | [Read](https://braintrailz.com/recruiter/book/06-machine-format-human-format/) |
| 7 | [From Match to Message](book/07-from-match-to-message.md) | [Read](https://braintrailz.com/recruiter/book/07-from-match-to-message/) |
| 8 | [Resume Tailoring at Scale](book/08-resume-tailoring-at-scale.md) | [Read](https://braintrailz.com/recruiter/book/08-resume-tailoring-at-scale/) |
| 9 | [Teaching the System to Remember](book/09-teaching-the-system-to-remember.md) | [Read](https://braintrailz.com/recruiter/book/09-teaching-the-system-to-remember/) |
| 10 | [When the Market Goes Quiet](book/10-when-the-market-goes-quiet.md) | [Read](https://braintrailz.com/recruiter/book/10-when-the-market-goes-quiet/) |
| 11 | [What the Recruiter Can't Do](book/11-what-the-recruiter-cant-do.md) | [Read](https://braintrailz.com/recruiter/book/11-what-the-recruiter-cant-do/) |
| 12 | [Fork It — Building Your Own in a Weekend](book/12-fork-it.md) | [Read](https://braintrailz.com/recruiter/book/12-fork-it/) |
| 13 | [Closing — Paying It Forward](book/13-closing-paying-it-forward.md) | [Read](https://braintrailz.com/recruiter/book/13-closing-paying-it-forward/) |

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

- **Reading:** [braintrailz.com/recruiter](https://braintrailz.com/recruiter/), or start at the [preface](book/00-preface.md) in git and go in order.
- **Forking:** [Chapter 12](book/12-fork-it.md) is the build guide. The minimum viable system is a rubric, one scheduled sweep, and one report format — see [`templates/`](templates/).
- **Adapting:** every template is sanitized. Replace the placeholder dealbreakers, weights, and voice samples with your own.
- **Site local:** `cd site && bun install && bun run dev`

## License

[MIT](LICENSE) — fork freely. Attribution appreciated but not required beyond the license notice.
