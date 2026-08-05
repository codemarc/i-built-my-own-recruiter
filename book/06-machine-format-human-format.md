# 6. Machine Format, Human Format: Why Every Report Ships Twice

Frederick P. Brooks Jr., *The Mythical Man-Month* (1975):

> Show me your flowcharts and conceal your tables, and I shall continue to be mystified. Show me your tables, and I won't usually need your flowcharts; they'll be obvious.

Chapter 5 left you with a morning handoff: one ranked artifact waiting when you sit down with coffee. This chapter is what that artifact looks like when it has to serve two readers at once. Every report my system produces comes out twice: once as structured data an agent can reason over, once as a page a human can skim in ninety seconds. That is not redundancy. It is two audiences with two different jobs, generated from one source of truth.

The dealbreakers and the rubric are judgment. The sweep is delivery. Dual format is continuity: how yesterday's decisions stay usable tomorrow, by you or by something working on your behalf, without reopening forty tabs.

---

## Two audiences, two jobs

The human job is triage under a clock. Fifteen to twenty minutes. Strong Yes first. Yes queued. Maybe left alone. Do Not Pursue out of sight unless you are auditing the gate. That job wants hierarchy, typography, and a short path from score to action. It does not want a wall of keys.

The machine job is different. An agent (or a script, or next week's version of you prompting an agent) needs fields it can filter, sort, compare, and feed into the next step: outreach draft, memory update, resume variant. That job wants stable keys, explicit tiers, and no layout chrome. It does not want to scrape your HTML.

If you only ship HTML, every automation starts with a parse. If you only ship JSON or TOON, every morning starts with a mental render. Both are tax. The convention that killed the tax for me: **one scoring pass, two emitters.** Same roles, same scores, same one-line notes. Different wrappers.

| Audience | Artifact | Job | Failure mode if missing |
|----------|----------|-----|-------------------------|
| You, with coffee | HTML page | Decide and act in under twenty minutes | You reopen boards "to double-check" |
| Agent / script / future-you | TOON (or equivalent) | Filter, draft, remember, compare across days | You re-explain the search from scratch every session |

Brooks was talking about software design. The same rule applies to a search report: show the table (the structured facts), and the flowchart of what to do next becomes obvious. Hide the facts inside a pretty page with no twin, and even you will be mystified by Thursday.

---

## TOON for machines

I use **TOON** (Token Oriented Object Notation): `@section` / `@/section` delimiters and `key:value` lines. It is compact enough to paste into an agent context, readable enough to diff in git, and boring enough that the schema stays stable when the HTML theme changes.

### Why TOON shows up in this book at all

This chapter could have said "use JSON" and moved on. I am naming TOON on purpose.

**I am a techie writing as a techie.** Codemarc is how I show up: builder first, career-advice voice second. The machine half of the dual report is not a garnish for people who "also code." It is how I already think. If you are forking this system, you deserve the format I actually hand to agents, not a watered-down paraphrase that hides the Why.

**Learning in public means teaching the Why, not only the What.** A search report that ships as opaque HTML teaches you to skim. A report that also ships as structured sections teaches you (and anyone watching) *why* the fields exist: stable ids for memory, tiers for action, one-line notes so the score is auditable later. The dual format is pedagogy baked into the artifact. Fork the files and you inherit the reasoning, not just the costume.

**The name is a feature.** "TOON" sounds a little ridiculous. That is useful. Funny names stick. They also give image models and illustrators something to latch onto: cartoons, comic panels, a little owl with a clipboard, *and* tunes (earworms, a theme song for the morning report). Cartoon *or* tune: either association beats a solemn acronym nobody remembers. When you are learning in public, memorable beats solemn. If a generator maps "toon" to a visual or a sonic gag that helps someone remember "machine format vs human format," the joke paid rent.

None of that makes TOON mandatory for your fork. It makes my choice legible. Steal the dual-audience rule. Keep JSON Lines or YAML if that is what your agents already eat. Keep the name if the joke helps you teach.

A minimal morning report looks like the sample in [`examples/sample-report.toon`](../examples/sample-report.toon). The schema lives in [`templates/report-schema.toon`](../templates/report-schema.toon). The load-bearing pieces:

```
@meta
generated:2026-08-03
sweep:daily
count:3
@/meta

@role
id:sample-001
company:Northwind Robotics
title:VP Engineering
url:https://example.com/jobs/nw-vpe
comp_base:275000
remote:true
score:88
tier:Strong Yes
dealbreakers_passed:true
notes:Founder-led, hands-on scope, tolerates active side role. Outreach today.
@/role
```

**Why these fields, and not a novel.**

- **`id`:** stable handle for memory (chapter 9) and for "did we already outreach?"
- **`url`:** canonical ATS link after dedupe (chapter 5). Not the LinkedIn mirror if you have both.
- **`score` + `tier`:** the number and the action band from chapter 4. Agents should key off both; humans mostly key off tier.
- **`dealbreakers_passed`:** so a failed gate can still appear in an audit log without pretending it was scored for pursuit.
- **`notes`:** one line. The dimension that drove the score, or the dealbreaker that killed it. Not a research essay.

You can grow the schema later: per-dimension breakdowns, contact names, score deltas, sweep source (`A` / `B` / `C`). My live match report grew that way. The forkable minimum does not need to. **Add a field when a downstream step needs it twice.** Until then, keep the block small enough that an agent can hold a full morning in one context window.

TOON is a convention, not a religion. JSON Lines, YAML, SQLite: any durable structured form works if (1) keys are stable, (2) one record equals one company-role, and (3) the HTML is generated *from* it, not edited beside it. I stick with TOON because it matches how I already hand reports to agents elsewhere, because `@role` blocks are easy to append and easy to grep, and because naming the format in public is part of how I teach it.

What TOON is not: a substitute for the rubric. Dumping fifty unscored URLs into `@role` blocks is still browsing. The machine format only earns its keep after the gate and the score have already run.

---

## HTML for humans

The HTML twin is the thing you actually open with coffee. Same data. Different job: **scan, decide, stop.**

Requirements that kept mine from becoming a dashboard cosplay:

1. **One page.** Not a folder of per-company files. Not a Notion database you browse. One URL or one local file for that morning.
2. **Tier order, not company alphabet.** Strong Yes at the top. Yes next. Maybe collapsed or below the fold. Dealbreaker failures in an "archived" section you only open when auditing.
3. **Score and one-line note adjacent to the title.** If you have to click to learn why it is an 88, the format failed.
4. **Canonical link once.** Click through only when you have already decided the tier deserves time.
5. **Ninety-second skim for a thin morning.** Zero to three action items. If the page takes five minutes just to orient, the sweep or the rubric is wrong, not the CSS.

A redacted twin of the sample TOON lives in [`examples/sample-report.html`](../examples/sample-report.html). Open it in a browser. The point is not the styling. The point is that the human page and the machine file agree on every score and every note.

What I deliberately leave out of the morning HTML:

- Full JD paste. That is what the URL is for.
- Long research dumps. Research belongs in a company file after you commit to outreach (chapter 7), not in the skim surface.
- Charts, heatmaps, "insights." Those recreate judgment fatigue with nicer fonts.
- Editable fields in the report itself. Decisions write back to the TOON (or to memory), then you regenerate. Editing only the HTML is how the twins diverge.

The HTML is a view. The TOON is the record. Treat them that way and you stop arguing with yesterday's formatting.

---

## Why a search of one still needs both

"I'm not building an agent platform. I'm just looking for a job." Fair. You still have two audiences.

**Audience one is tired-you.** Morning-you and evening-you are not the same operator. The structured file is how morning-you inherits evening-you's scores without renegotiating them. When the market goes quiet (chapter 10), you will want to ask: which Maybes aged out, which Yes roles already got a DM, which companies came back under a new title. That is a query over records, not a feeling over browser history.

**Audience two is future-agent-you.** Even a search of one eventually prompts: "draft outreach for everything Strong Yes from this week," or "what did we already decide about Company A?" If the only artifact is HTML, every prompt starts with paste-and-hope. If the only artifact is a private spreadsheet with columns that drifted weekly, every prompt starts with schema archaeology. Dual format is cheap insurance against both.

Continuity is the product. The report is not a souvenir of the overnight run. It is the baton. Chapter 9 (memory) and chapter 7 (outreach) both assume you can point at a role by `id` and trust the last score. That trust is a format decision made here.

A practical test: could someone (or something) who has never seen your tabs pick up *yesterday's* report and correctly answer (1) what needs outreach today, (2) what is on the watchlist, and (3) what already failed a dealbreaker? If yes, the formats are doing their job. If no, you still have a search diary, not a system.

---

## Setting up the dual-format convention

Generate both from one source. Never hand-maintain two lists.

**Minimum pipeline (fits the weekend build in chapter 12):**

1. Sweep pulls postings.
2. Dealbreakers gate; failures marked `dealbreakers_passed:false` (and usually omitted from the human "action" sections).
3. Rubric scores survivors into tiers.
4. Dedupe to one record per company-role.
5. **Emit TOON** (append or rewrite the daily file).
6. **Render HTML from the TOON** (script, agent, or template; does not matter as long as HTML is downstream).
7. Open the HTML for coffee. Let agents read the TOON.

**Rules that kept the twins honest:**

- **TOON is canonical.** If they disagree, fix the generator, not the page by hand.
- **Same `notes` string in both.** Rewriting the rationale only in HTML is how you lose the reason you scored a 71.
- **Date stamp in `@meta`.** "Which morning is this?" should never be a mystery.
- **Stable `id`s across days.** Rematerializing the same Greenhouse role under a new id breaks memory and outreach tracking.
- **Archive, don't delete, gate failures** if you want to audit false rejects. Hide them from the skim; keep them in the machine file or a side log.
- **Start with both emitters even if one feels unused.** The unused one is usually the one you need on week three.

If you truly can only ship one artifact this weekend, ship the structured file and a *ugly* HTML render of it. Pretty can wait. A second hand-maintained markdown table cannot. Two sources of truth is how the system dies quietly.

Sanitized starting points:

| File | Role |
|------|------|
| [`templates/report-schema.toon`](../templates/report-schema.toon) | Field list for one `@role` block |
| [`examples/sample-report.toon`](../examples/sample-report.toon) | Machine twin, three roles |
| [`examples/sample-report.html`](../examples/sample-report.html) | Human twin, same three roles |

Fork the schema. Replace company names with yours only after a real scored morning. The first useful report is the one that changes what you do with coffee, not the one that looks like a product launch.

The sweep decides whether you see a role in time. The dual report decides whether that sighting is still usable tomorrow. Chapter 7 is what happens when a Strong Yes leaves the report and becomes a message that sounds like you.

---

*Next: [From Match to Message →](07-from-match-to-message.md)*
