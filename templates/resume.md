# Resume Tailoring Template

Sanitized process from [Chapter 8](../book/08-resume-tailoring-at-scale.md). One base holds
the facts. Variants change emphasis, not history. Goal: a company-specific PDF you
*edit* in about fifteen minutes, not one you rebuild.

## Layout

```
resume-materials/
  base/
    yourname-base.pdf            # canonical facts
    yourname-base.md             # optional plain-text twin for agents
  company-applications/
    <company>/
      resume.pdf
      notes.md                   # role id, emphasis signals, date sent
```

## Rules

- Facts (employers, titles, dates, education) change only in the base.
- Variants select, reorder, and rephrase true bullets. They do not invent.
- Tailor after commit (Strong Yes / Yes). Maybes wait until they move up.
- Summary should match the outreach bridge for the same role.
- Keyword alignment only where the skill is real.

## Inputs per variant

| Input | Source |
|-------|--------|
| Base resume | `resume-materials/base/` |
| Role `id`, score, tier, notes | Morning TOON |
| JD / emphasis signals | Posting after commit |
| Track (fractional vs FTE) | Search shape |
| Outreach bridge (if sent) | Sent DM / voice pack |

## Steps

1. Confirm tier + commit (no resume work for idle Maybes).
2. List 3–5 emphasis signals from JD + TOON notes in `notes.md`.
3. Adjust summary/headline only; same person as the DM bridge.
4. Select and reorder bullets from the base inventory.
5. Keyword pass without lying.
6. Export to `company-applications/<company>/`.
7. Edit bar: ~10–15 minutes. If rebuilding, fix the base later.
8. Log file + date against the role `id`.

## `notes.md` skeleton

```md
# <Company> — resume variant

- role_id:
- title:
- score / tier:
- track: fractional | fte
- emphasis_signals:
  - 
  - 
  - 
- bullets_promoted:
  - 
- outreach_bridge_aligned: yes | no
- sent: YYYY-MM-DD
- file: resume.pdf
```

## Checklist before attach

- [ ] Strong Yes / Yes (or Maybe explicitly promoted)
- [ ] Summary matches outreach bridge
- [ ] Bullets from base only; nothing invented
- [ ] Dates / titles / employers match base
- [ ] Keywords true
- [ ] Track matches the req
- [ ] Saved under company folder; role `id` logged
- [ ] Edit-ready, not rewrite-needed
