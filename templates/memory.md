# Memory layer (sanitized)

Companion to [Chapter 9](../book/09-teaching-the-system-to-remember.md).
Replace codes, paths, and status names with yours. Keep live data out of public forks.

## Statuses (minimum)

| Status | Meaning |
|--------|---------|
| `new` | Scored, no outreach yet |
| `outreched` | DM / email / portal sent |
| `declined-self` | You passed (use reason_code) |
| `closed` | Their no, ghosted after bump, or withdrawn |

## Reason codes (starter set)

- `dealbreaker-remote`
- `dealbreaker-comp`
- `dealbreaker-side-role`
- `shape-mismatch`
- `domain-costume`
- `culture-miss`
- `duplicate`
- `their-no`
- `ghosted`
- `ghost-job` / `dead-on-employer-site` (aggregator live, employer careers empty or filled)
- `self-pass-after-call`

## Role record (TOON-shaped)

```
@role
id:
company:
title:
url:
score:
tier:
status:
channel:
contact:
sent:
resume:
outcome:
outcome_date:
reason_code:
notes:
@/role
```

## Weekly review checklist

- [ ] New `id`s this week vs last
- [ ] Outcomes: outreached / their-no / self-pass / ghosted
- [ ] Top three reason codes
- [ ] One change (query, gate, weight, voice) or explicit no-change
- [ ] Age out Maybes past revisit date
