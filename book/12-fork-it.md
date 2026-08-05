# 12. Fork It — Building Your Own in a Weekend

Andrew Hunt and David Thomas, *The Pragmatic Programmer* (1999):

> Don't live with broken windows.

Everything in this book is meant to be copied. This chapter is the build guide: the minimum viable version of the system (rubric, one scheduled sweep, one report format) you can stand up in a weekend, plus the repo structure so you can grow it the same way I did, one chapter at a time.

Chapter 3's owl applies to the build too. Rubric, one scheduled sweep, one report format: those are the circles. Do not wait for the full machine before you run the first morning. Draw what you know. Fork the rest.

Broken windows, in this context, are the places you still browse without a rule: unsigned dealbreakers, a score you could not repeat twice, a morning with no artifact. Fix those before you add outreach automation or a memory database. A small honest system beats a large costume.

---

## The minimum viable system

Three pieces. If any one is missing, you do not have the system yet. You have notes.

| Piece | Job | Done when |
|-------|-----|-----------|
| **Rubric** | Repeatable judgment | You can score the same posting twice and land near the same number (chapter 4) |
| **One scheduled sweep** | Delivery without browsing | Something runs without you and produces candidates for the gate (chapter 5) |
| **One report format** | Handoff for coffee | You open one artifact and decide; you do not reopen forty tabs (chapter 6) |

Dealbreakers and criteria are inputs to the rubric. They are not optional philosophically. For the weekend build, they can be a filled worksheet rather than a polished essay. Voice packs, resume pipelines, and memory layers are **growth**, not MVP.

What MVP explicitly excludes:

- Three sweeps on day one
- Auto-send outreach
- Perfect HTML theming
- A public blog about the system
- Matching my stack (TOON, Bun, agents). Use a spreadsheet and calendar alerts if that is what you will actually run on Monday.

Steal method, not costume. The templates in [`templates/`](../templates/) are sanitized starting points. Replace every placeholder with your constraints.

---

## Weekend build plan

### Friday night (optional, thirty minutes)

Skim chapters 1–2. Write raw dealbreaker bullets while you are annoyed enough to be honest. Do not build yet.

### Saturday: judgment

**Morning: dealbreakers (chapter 2)**

1. Open [`templates/dealbreakers.md`](../templates/dealbreakers.md).
2. Fill hard nos until each one is machine-checkable (or honestly marked "ask on first call").
3. Separate soft preferences so you do not pretend they are hard.

**Afternoon: criteria + rubric (chapters 3–4)**

1. Open [`templates/criteria.md`](../templates/criteria.md). Rank what "great" looks like in paragraph form for a few dimensions. Incomplete is fine. Circles first.
2. Open [`templates/rubric.md`](../templates/rubric.md). Assign weights that sum to 100. Define tier cutoffs (Strong Yes / Yes / Maybe / Do Not Pursue).
3. **Pressure test:** pick three real postings (one obvious no, one maybe, one you want). Score them cold. If you cannot explain a score in one line, fix the dimension definitions before you automate anything.

Saturday exit criteria: a dealbreaker list and a rubric you would defend to a skeptical friend.

### Sunday: delivery

**Morning: one sweep (chapter 5)**

1. Open [`templates/sweeps.md`](../templates/sweeps.md). Write **one** intent sentence. One include list. One exclude list. One schedule.
2. Implement the thinnest runner that works for you: saved search + morning alarm, cron + script, scheduled agent, or a human checklist with a clock. The clock is mandatory.
3. Run it once today on purpose. Fix the query until the raw pull is not absurd.

**Afternoon: one report (chapter 6)**

1. Decide machine format (TOON from [`templates/report-schema.toon`](../templates/report-schema.toon), or JSON, or a sheet with stable columns including `id`).
2. Decide human format (HTML page, markdown summary, or a sorted sheet view). Dual is ideal; one solid format beats two abandoned ones on weekend one.
3. Produce one real report from today's run. Score through the gate. Put Strong Yes at the top.
4. Practice the coffee ritual once: fifteen minutes, tiers only, no raw-board "double-check."

Sunday exit criteria: tomorrow morning, something will be waiting, and you know what you will do with it.

### Ordered checklist (steal this)

1. **Dealbreakers:** fill out the worksheet ([Ch. 2](02-define-your-dealbreakers.md), [`templates/dealbreakers.md`](../templates/dealbreakers.md)).
2. **Criteria:** rank what "great" looks like ([Ch. 3](03-define-what-great-looks-like.md), [`templates/criteria.md`](../templates/criteria.md)).
3. **Rubric:** adapt the 100-point rubric ([Ch. 4](04-building-the-scoring-rubric.md), [`templates/rubric.md`](../templates/rubric.md)).
4. **One sweep:** schedule a single search ([Ch. 5](05-automating-the-daily-sweep.md), [`templates/sweeps.md`](../templates/sweeps.md)).
5. **One report:** pick a format and ship it ([Ch. 6](06-machine-format-human-format.md), [`templates/report-schema.toon`](../templates/report-schema.toon), [`examples/`](../examples/)).

If you finish early, do **not** start auto-outreach. Score five more postings by hand to calibrate. Broken windows first.

---

## Repo structure to grow into

```
your-recruiter/
├── README.md              # your premise, your constraints (not mine)
├── book/                  # optional: notes, one file per lesson learned
├── templates/             # dealbreakers, criteria, rubric, sweeps, schema, voice
├── examples/              # redacted reports you are willing to learn from
├── search-memory/         # private: roles, patterns, contacts (chapter 9)
└── resume-materials/      # private: base + company-applications (chapter 8)
```

This repo's public layout is the teaching twin:

```
i-built-my-own-recruiter/
├── README.md
├── book/                  # the field guide
├── templates/             # sanitized worksheets
├── examples/              # redacted sample reports
└── site/                  # reader build (optional for your fork)
```

Rules for your fork:

- **Private for live search state.** Public for method. Do not publish real contact outcomes.
- **Templates are yours once copied.** Edit until they sound like your floor, not my biography.
- **One commit message per lesson** when something breaks and you fix it. That becomes chapter-shaped later if you want to teach.

---

## Growing it one chapter at a time

Add surface area when the MVP is boringly reliable, not when you are anxious.

| When you feel this | Add this | Chapter |
|--------------------|----------|---------|
| Strong Yes exists but messages sound like a portal | Voice samples + outreach template; edit bar before any auto-draft | [7](07-from-match-to-message.md), [`templates/outreach.md`](../templates/outreach.md) |
| Conversations ask for a PDF and you blank-page every time | Base resume + company folder process | [8](08-resume-tailoring-at-scale.md), [`templates/resume.md`](../templates/resume.md) |
| You re-touch companies or forget why you passed | Memory file with statuses and reason codes | [9](09-teaching-the-system-to-remember.md), [`templates/memory.md`](../templates/memory.md) |
| One sweep buries distinct intents | Second, then third sweep with real excludes | [5](05-automating-the-daily-sweep.md) |
| Yield collapses for a week+ | Thin-streak protocol; one written change | [10](10-when-the-market-goes-quiet.md) |
| You want the machine to take the call | Stop. Re-read limits. | [11](11-what-the-recruiter-cant-do.md) |

Growth anti-patterns:

- Building memory before you have twenty real decisions to remember
- Styling the HTML report before the scores are trustworthy
- Adding sweeps to cope with loneliness for a Strong Yes
- Copying my identity narratives instead of writing your own

### First-week operating rhythm

| Day | Focus |
|-----|-------|
| Mon | First real overnight handoff; follow the coffee ritual |
| Tue–Thu | Score, decide, send only what clears Strong Yes / planned Yes |
| Fri | Thirty-minute review: what to fix in query or rubric (one change) |
| Weekend | Optional: add outreach voice **or** rest. Not both feature-sprawl and burnout |

You will know the fork worked when a quiet Tuesday still produces a report you trust, and a loud Tuesday does not return you to tab hell. The circles were enough to start. The owl gets drawn in motion.

When you have something worth sharing, or you want help drawing the next circle, chapter 13 is the door.

---

*Next: [Closing — Paying It Forward →](13-closing-paying-it-forward.md)*
