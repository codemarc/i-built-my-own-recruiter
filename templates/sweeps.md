# Daily Sweeps (Template)

Sanitized sweep worksheet from [Chapter 5](../book/05-automating-the-daily-sweep.md).
Replace the intents, includes, and excludes with yours. Start with one sweep;
add more only when you can name an intent the existing ones miss.

## Sweep definitions

| Sweep | Intent (one sentence) | Include signals | Exclude signals | Schedule |
|-------|-----------------------|-----------------|-----------------|----------|
| A | *(e.g., leadership seats that clear remote + seniority)* | *(titles, location filters, seniority)* | *(intern, junior, non-eng, hybrid-only)* | *(e.g., 5:00 local daily)* |
| B | *(e.g., domain/craft matches titles alone will miss)* | *(stack, domain, problem-space terms)* | *(generic buzzwords, pure title dupes of A)* | *(same window or staggered)* |
| C | *(optional: fractional / advisory / non-W2 path)* | *(fractional, interim, advisory, retained)* | *(full-time W-2 already covered by A)* | *(…)* |

## Pipeline (every run)

1. Pull new postings per sweep.
2. Apply hard dealbreakers ([`dealbreakers.md`](dealbreakers.md)). Failures archive; do not score.
3. Score survivors with the rubric ([`rubric.md`](rubric.md)).
4. Deduplicate across sweeps (prefer canonical ATS URL; keep higher-confidence record).
5. Emit one ranked report for the morning handoff ([`report-schema.toon`](report-schema.toon)).

## Morning handoff ritual

- [ ] Open the report only (no raw job boards "to double-check").
- [ ] Act on Strong Yes today.
- [ ] Queue Yes for this week.
- [ ] Leave Maybe on the watchlist unless something external changed.
- [ ] Do not renegotiate rubric weights mid-coffee.

## Weekly overlap check

| Week of | % of B also in A | % of C also in A/B | Action if overlap is high |
|---------|------------------|--------------------|---------------------------|
| | | | Tighten includes/excludes; don't add volume |

## Notes

- Three is not required. Distinct intents are.
- Excludes matter as much as includes.
- Thin across *all* sweeps for a sustained stretch → [Chapter 10](../book/10-when-the-market-goes-quiet.md), not "run harder."
