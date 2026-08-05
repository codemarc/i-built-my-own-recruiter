# 9. Teaching the System to Remember

George Santayana, *The Life of Reason* (1905):

> Those who cannot remember the past are condemned to repeat it.

Chapter 8 closed the loop from outreach to resume: same story, logged against the role `id`, no blank-page rewrite. That only works if the system still knows what happened last Tuesday. A search that runs for months needs memory, not just automation. What have you already applied to. What got declined and why. What pattern keeps showing up in roles you reject. Without that layer, every morning sweep is a clever amnesiac: fast at finding roles, useless at learning from them.

This chapter is how context survives across weeks. The goal is a system that gets smarter about your search, not just faster at repeating it.

Company names below are composites. The state fields and the feedback loop are real; the labels are not.

---

## Automation without memory just repeats

Speed without memory is chapter 1's volume trap in a nicer jacket. The overnight sweep will happily resurface the same Greenhouse posting under a new LinkedIn mirror, the same company that ghosted you after a Strong Yes DM, and the same shape of role you have already scored a 40 three times for the same reason.

What amnesia looks like in practice:

1. **Re-application theater.** You send a second DM (or a second portal packet) because the morning report treated a known company as new. Trust with the contact dies. Your own confidence dies faster.
2. **Contradiction drift.** Round-two conversation references a resume variant that no longer matches what you sent in round one, because you re-tailored from a cold base and forgot which bullets went out.
3. **Pattern blindness.** You keep rejecting "hybrid dressed as remote" and "AI meaning a plugin bolted onto a legacy product," but the query and the rubric never absorb the pattern. The gate does the same work every night. You pay attention tax every morning.
4. **False progress.** The report looks busy. Counts are up. Nothing moved. You are measuring motion, not learning.

The dual report (chapter 6) already assumed stable `id`s so an agent could ask "did we outreach?" Memory is that question made durable. Outreach logging (chapter 7) and resume logging (chapter 8) are inputs. This chapter is the store and the recall.

Allen's line from chapter 5 still applies: your mind is for having ideas, not holding them. The memory layer is where the search puts the decisions so your mind can stay on judgment.

---

## What's worth remembering

Not everything. A dump of every scored role forever is a second job board. Memory earns its keep when each record answers a question you will actually ask next week.

| Record type | What to store | Question it answers next sweep |
|-------------|----------------|--------------------------------|
| **Applied / outreached** | Role `id`, company, title, URL, score, tier, channel, date sent, contact | Did we already touch this? |
| **Declined (by you)** | Role `id`, reason code + one line, date | Why did we walk? Should the gate learn it? |
| **Declined (by them)** | Role `id`, stage reached, their reason if known, date | Do not re-pitch. Soft-block the company for N days? |
| **Ghosted** | Role `id`, last touch date, follow-up sent? | One bump max, then archive |
| **Watchlist / Maybe aged** | Role `id`, original score, revisit-after date | Ignore until the date or an external change |
| **Contact** | Name, role, channel, last message summary | Who did we talk to, and what did we claim? |
| **Resume variant sent** | Path, role `id`, date | Which story is already in their inbox? |
| **Rejection pattern** | Tag (e.g. `hybrid-as-remote`, `comp-floor-miss`, `no-blt-tolerance`) + count | Is this a one-off or a query/rubric smell? |

Reason codes beat novels. One line of prose is enough for a human reread. The code is what the overnight gate and the weekly audit can count.

Examples of useful reason codes:

- `dealbreaker-remote`: hybrid or onsite failed the gate
- `dealbreaker-comp`: below floor, or equity-only when cash is required
- `dealbreaker-side-role`: no tolerance for the active company
- `shape-mismatch`: pure org manager, no builder seat
- `domain-costume`: "AI" in the title, none in the work
- `culture-miss`: failed the culture criteria you already wrote down
- `duplicate`: same req, new URL
- `their-no`: they passed; note stage if you know it
- `ghosted`: one bump done, no reply; archive
- `ghost-job`: aggregator live, employer careers empty or filled (chapter 10)
- `self-pass-after-call`: cleared paper, failed the conversation

What not to store as load-bearing memory:

- Every Maybe you never opened
- Mood notes ("felt weird") with no code
- Full JD text for roles you will never revisit (keep the URL; fetch again if needed)
- Secrets in plain text you would not want in a forked repo (keep live search state private; sanitize before publish)

The sanitized field list lives in [`templates/memory.md`](../templates/memory.md). Steal the schema; replace the codes with yours.

---

## The memory layer

Where state lives matters less than whether it is **writable after every decision** and **readable before every sweep**. Git-friendly files, a small SQLite DB, a TOON append-only log, a private spreadsheet: all fine. The failure mode is "I'll remember" or "it's in my sent folder."

A layout that stayed honest for me:

```
search-memory/
  roles.toon          # one @role block per known posting (status + history)
  patterns.toon       # rejection tags with counts and last_seen
  contacts.toon       # people you've messaged, keyed by company + name
  decisions.md        # optional human journal for weekly review
```

Minimum fields on a remembered role (extends chapter 6's report `id`):

```
@role
id:sample-014
company:Northwind Robotics
title:VP Engineering
url:https://example.com/jobs/nw-vpe
score:88
tier:Strong Yes
status:outreched
channel:linkedin-dm
contact:Jordan Lee
sent:2026-07-12
resume:company-applications/northwind/resume.pdf
outcome:ghosted
outcome_date:2026-07-20
reason_code:ghosted
notes:one bump sent 2026-07-17; archive
@/role
```

### Write path (after coffee decisions)

1. **Outreach sent** → `status:outreched`, channel, contact, date, link to draft or resume if any.
2. **You decline** → `status:declined-self`, reason code, one-line note. Do this the same day. Delayed journaling is how codes get vague.
3. **They decline or ghost** → update outcome. Ghost after your one allowed bump becomes `ghosted`, not eternal Maybe.
4. **Pattern bump** → if the reason code has shown up repeatedly, increment `patterns.toon` (or equivalent). Do not wait for a quarterly retrospective.

### Read path (before / during the overnight sweep)

1. **Dedupe against memory, not only against today's batch.** Same company + similar title within a window, or same canonical URL, collapses to the existing `id`.
2. **Suppress known outcomes.** `their-no`, `ghosted`, `declined-self` with a hard reason should not reappear as fresh Strong Yes candidates. Soft reasons (`comp-undisclosed`) may reappear if the posting changed; note the prior touch.
3. **Surface open loops separately.** Outreached-with-no-outcome older than five days belongs on a follow-up list, not mixed into new discovery.
4. **Feed pattern counts into the weekly audit.** That is the bridge to chapter 10. Memory without review is a graveyard. Review without codes is vibes.

### Rules that protect the layer

1. **Stable `id`s forever.** Rematerializing the same req under a new id breaks everything chapter 6 warned about.
2. **Status is explicit.** Do not overload `tier` to mean both "score bucket" and "pipeline stage." Tier is the rubric. Status is the search CRM.
3. **Write back to the machine file, not only the HTML.** Editing the pretty page is how twins diverge (chapter 6).
4. **Private by default.** Live memory has real names and outcomes. The public repo gets schemas and redacted examples, not your funnel.

If you are forking this weekend (chapter 12), start with a single `roles` file and four statuses: `new`, `outreched`, `declined-self`, `closed`. Grow contacts and patterns when the simple file starts lying to you.

---

## Getting smarter, not just faster

Memory that only prevents double-applies is hygiene. Memory that changes the next sweep is leverage.

### Feedback into the gate and the rubric

| Signal from memory | Action |
|--------------------|--------|
| Same reason code dominates declines for two weeks | Tighten dealbreaker query filters or add an exclude (chapter 5) |
| High scores keep failing on one soft criterion after calls | Reweight that dimension or promote it to a dealbreaker (chapters 2–4) |
| One sweep's unique yield is mostly `duplicate` / already-seen | That sweep is repeating; redesign includes/excludes |
| Strong Yes outreach → repeated ghost | Review voice, contact choice, or role class (chapters 7 and 10) |
| Resume contradictions caught in interviews | Base inventory or logging failed (chapter 8); fix the write path |

### Weekly thirty-minute review (not optional if the search is active)

1. Count new roles scored vs prior week.
2. Count by outcome: outreached, their-no, self-pass, ghosted.
3. List the top three reason codes.
4. Decide one concrete change: query, gate, weight, or voice rule. Write it down. Or decide "no change" on purpose.
5. Age out Maybes past their revisit date.

This is also where thin markets show up as data instead of mood. Eight quiet mornings with healthy memory (few new `id`s, not just few Strong Yes) is chapter 10's input. Without memory, quiet feels like bad luck. With memory, quiet is a measurable yield problem.

### What "smarter" is not

- Not auto-raising scores because you are lonely for a yes.
- Not deleting dealbreakers because a hot company failed one.
- Not keeping every closed role in the morning HTML so you can ruminate.
- Not building a full ATS product before you have thirty remembered decisions.

When the layer works, the morning report stops asking you the same questions. Discovery stays overnight. Decisions stay in coffee. Learning happens on a weekly clock. The next failure mode is different: the machine is healthy, the market is not. That is chapter 10.

---

*Next: [When the Market Goes Quiet →](10-when-the-market-goes-quiet.md)*
