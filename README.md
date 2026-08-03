# I Built My Own Recruiter

### A field guide to running your job search like a software project

**Premise:** One engineer's system for scoring, sweeping, and outreach automation, built over an active search and open-sourced so anyone can fork it for theirs. Part memoir, part manual. Every chapter ships as a standalone blog post and doubles as a chapter in this repo's `book/` folder.

---

## Table of Contents

| # | Chapter | Post |
|---|---------|------|
| 0 | [Preface — Why This Exists](book/00-preface.md) | — |
| 1 | [The Problem With Job Boards](book/01-the-problem-with-job-boards.md) | — |
| 2 | [Define Your Dealbreakers Before You Define Your Search](book/02-define-your-dealbreakers.md) | — |
| 3 | [Building the Scoring Rubric](book/03-building-the-scoring-rubric.md) | — |
| 4 | [Automating the Daily Sweep](book/04-automating-the-daily-sweep.md) | — |
| 5 | [Machine Format, Human Format](book/05-machine-format-human-format.md) | — |
| 6 | [From Match to Message](book/06-from-match-to-message.md) | — |
| 7 | [Resume Tailoring at Scale](book/07-resume-tailoring-at-scale.md) | — |
| 8 | [Teaching the System to Remember](book/08-teaching-the-system-to-remember.md) | — |
| 9 | [When the Market Goes Quiet](book/09-when-the-market-goes-quiet.md) | — |
| 10 | [What the Recruiter Can't Do](book/10-what-the-recruiter-cant-do.md) | — |
| 11 | [Fork It — Building Your Own in a Weekend](book/11-fork-it.md) | — |
| 12 | [Closing — Paying It Forward](book/12-closing-paying-it-forward.md) | — |

Fill in the **Post** column with the published URL as each chapter goes live.

---

## Repo Structure

```
i-built-my-own-recruiter/
├── README.md              # premise + TOC, links each chapter to its post
├── book/                  # one markdown file per chapter; each publishes as-is
├── templates/             # sanitized rubric, TOON schema, outreach template
└── examples/              # redacted sample reports
```

## How to Use This Repo

- **Reading:** start at the [preface](book/00-preface.md) and go in order, or jump to the chapter that maps to the problem you have right now.
- **Forking:** [Chapter 11](book/11-fork-it.md) is the build guide. The minimum viable system is a rubric, one scheduled sweep, and one report format — see [`templates/`](templates/).
- **Adapting:** every template is sanitized. Replace the placeholder dealbreakers, weights, and voice samples with your own.

## License

[MIT](LICENSE) — fork freely. Attribution appreciated but not required beyond the license notice.
