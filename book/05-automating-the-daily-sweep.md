# 5. Automating the Daily Sweep

David Allen, *Getting Things Done* (2001):

> Your mind is for having ideas, not holding them.

Once the rubric exists, the search can run without you. Mine runs three separate sweeps every morning before I'm awake, each tuned to a different slice of the market, because a single broad search buries the roles that actually fit under the roles that merely mention the right keywords. This chapter covers how to structure scheduled searches so they narrow instead of just repeat, and what to do with the results before you've had coffee.

The dealbreakers (chapter 2) and the rubric (chapter 4) are the judgment. The sweep is the delivery mechanism. Without a schedule, you go back to browsing. Without slices, the schedule just delivers the same noise faster.

---

## The search runs without you

The point of automation here is not speed. Speed without triage is LazyApply with a nicer wrapper (chapter 1). The point is that judgment happens cold, on a fixed cadence, against a fixed rubric, before appetite or fatigue gets a vote.

My sweeps fire before dawn. By the time I'm at the desk with coffee, the overnight work is already done: new postings pulled, dealbreakers applied, survivors scored, duplicates collapsed, results ranked into the four tiers from chapter 4. I do not open LinkedIn and "see what's out there." I open a report and decide what the tiers already decided.

That separation matters more than the tooling. You can run this with a cron job and a script, a scheduled agent session, saved searches with alerts, or a human assistant who follows a written checklist. The load-bearing pieces are the same:

1. **A clock.** Same time every day. Not "when I remember."
2. **A gate.** Dealbreakers before scoring. Failures never reach the rubric.
3. **A score.** Rubric applied to everything that cleared the gate.
4. **A handoff.** One artifact waiting for you, not forty tabs.

If any of those four is missing, you still have a search. You just don't have a system.

The overnight window is intentional. Scoring at 11pm after a thin day invites the same rationalization the rubric was built to prevent. Scoring at 6am, by a process that does not know how the market "felt" yesterday, keeps the number honest.

---

## Why three sweeps, not one

A single broad query feels efficient. It is not. Query `"VP Engineering" OR "Head of Engineering" remote AI` returns a pile sorted by keyword density and recency. The roles that actually match your criteria get buried under near-misses that share two buzzwords and none of the structure.

I learned this the hard way. Early versions of the system ran one mega-search. The morning report was forty to sixty postings. Half were hybrid dressed as remote. A third were "AI" meaning a ChatGPT plugin bolted onto a legacy product. The two or three that might have been real fits sat somewhere in the middle of a list I was already skimming too fast. Judgment fatigue (chapter 1) had just moved from the job board into my own report.

Three sweeps fixed the burial problem by slicing the market the way my criteria already sliced it:

| Sweep | Slice | What it's hunting | What it deliberately ignores |
|-------|-------|-------------------|------------------------------|
| **A: Title** | Leadership seats | VP / SVP / Head / Director of Engineering, with remote and comp signals | Domain-adjacent IC titles, fractional gigs |
| **B: Domain** | Craft match | Agent orchestration, AI-native platform, middleware / adapters, event-driven infra | Generic "AI startup" listings with no stack signal |
| **C: Shape** | Non-standard path | Fractional CTO, advisory, retained consulting at the right altitude | Full-time W-2 postings already covered by A |

Sweep A catches the obvious seats. Sweep B catches the roles whose titles don't say "VP" but whose work is exactly the craft I'm here to do. Sweep C covers a market that job boards treat as noise: fractional and advisory work that clears the same dealbreakers on different terms.

One query cannot do all three well. The ranking function of every job board optimizes for engagement, not for your rubric. When you ask one query to cover three intents, the board's ranker picks a compromise ranking that serves none of them. Three narrow queries, merged and deduped after scoring, beat one wide query every time I've measured it.

Three is not magic. It's the number of distinct intents my criteria actually have. If yours collapse to two, run two. If you honestly have five non-overlapping slices, run five and accept that the morning handoff gets longer. The failure mode is not "too many sweeps." The failure mode is one sweep pretending to be all of them.



---

## Narrowing vs. repeating

The difference between a useful multi-sweep system and an expensive way to see the same posting three times is query design.

**Narrowing** means each sweep has a job the others cannot do. Include terms, exclude terms, and title filters should make the result sets *mostly* disjoint before dedupe. Overlap is fine. Identity is not.

**Repeating** means Sweep B is Sweep A with one synonym swapped. You will score the same Greenhouse link twice, feel productive, and learn nothing.

A few rules that kept mine from collapsing into repetition:

**1. Name the intent in one sentence before you write the query.**
"Find leadership seats that clear remote + comp" is an intent. "Find AI jobs" is not. If you cannot finish the sentence "this sweep exists to catch ___ that the others will miss," delete the sweep.

**2. Give each sweep include terms *and* exclude terms.**
Sweep A includes title patterns for VP / Head / Director and excludes "intern," "junior," "account executive." Sweep B includes stack and domain terms and excludes pure title matches already owned by A when the title is generic. Sweep C includes "fractional," "advisory," "retained," "interim CTO" and excludes full-time W-2 language. Excludes are how you stop the board's synonym expansion from turning three queries back into one.

**3. Put dealbreakers in the query where the platform allows, and in the gate everywhere else.**
Remote-only belongs in the saved search when the filter is real. Comp floor often cannot. Side-role tolerance almost never can. Whatever the platform cannot filter, the overnight gate still must. A sweep that "finds" fifty hybrid roles for the gate to reject is not a sweep. It's a waste of tokens and attention.

**4. Deduplicate after scoring, not before.**
Same company, two URLs (LinkedIn mirror + Ashby canonical) should collapse to one scored role. Deduping before scoring invites you to keep whichever copy arrived first, which is often the worse-written one. Score both if they arrive separately, then keep the higher-confidence record and note the duplicate.

**5. Measure overlap weekly.**
If more than about a third of Sweep B's hits are already in Sweep A's output for several days running, B is repeating. Tighten B's includes or expand its excludes until the unique yield comes back. Chapter 10 covers what to do when *all* sweeps go thin. This rule is the earlier, quieter version: one sweep going redundant while the others stay healthy.

Concrete example of narrowing that worked. Sweep B used to include the bare term `"AI"`. Yield was huge and almost useless. Changing the includes to `"agent orchestration" OR "AI platform" OR "LLM infrastructure" OR "middleware" OR adapter` and excluding `"prompt engineer"` and `"AI content"` cut volume by roughly 70% and raised the share of roles that cleared 70 on the rubric. Same schedule. Same rubric. Different query shape. The sweep got narrower and the morning list got shorter and better.

---

## The morning handoff

What should be waiting when you sit down:

- **A single report**, not a folder of raw links. Dual format comes in chapter 6; for now the requirement is one artifact you can skim.
- **Dealbreaker failures already archived.** You should not spend coffee time reading roles that failed remote or comp. Those are logs, not decisions.
- **Scored survivors ranked by tier.** Strong Yes at the top. Yes next. Maybe on a watchlist section. Do Not Pursue out of sight unless you're auditing the gate.
- **Duplicates collapsed.** One row per company-role, with the canonical URL.
- **A one-line rationale per role.** Not a novel. The dimension that drove the score, or the dealbreaker that killed it.

What you do with coffee (fifteen to twenty minutes, not an hour):

1. **Read the Strong Yes tier.** If anything is there, that is today's outreach work (chapter 7). Do not browse past it "just to see."
2. **Scan the Yes tier.** Schedule outreach for the week. Note anything that needs a clarifying question before a DM (comp undisclosed, side-role silence, role-shape ambiguity).
3. **Ignore Maybe unless something external changed.** Watchlist means watchlist. Reopening Maybes every morning recreates browsing.
4. **Do not renegotiate the rubric mid-coffee.** If a 71 feels like it should be an 85, write the feeling and move on. Revisit weights on a thin-streak review (chapter 10), not on a single exciting title.

The handoff is the whole point of running the search while you sleep. If you wake up and immediately open the raw job boards "to double-check," you have unpaid the automation. The report is the input. Your job in the morning is decisions and outreach, not discovery.

A good morning has zero to three roles that need action. A morning with fifteen "maybes" you feel obliged to re-litigate is a sweep design problem, a rubric problem, or both. It is not a sign you need to work harder before breakfast.

---

## The worksheet

Write the sweeps before you schedule them. A sanitized copy lives in [`templates/sweeps.md`](../templates/sweeps.md). Replace the slice names and query shapes with yours.

| Sweep | Intent (one sentence) | Include signals | Exclude signals | Schedule |
|-------|-----------------------|-----------------|-----------------|----------|
| A | *what only this sweep catches* | *titles, filters* | *what A must not pull* | *daily time* |
| B | *…* | *…* | *…* | *…* |
| C | *…* | *…* | *…* | *…* |

Rules that kept mine honest:

- **Start with one sweep if you're forking this weekend** (chapter 12). Add the second when the first is boringly reliable. Add the third when you can name an intent the first two miss.
- **Intent before query.** If the one-sentence intent is fuzzy, the query will be too.
- **Excludes are mandatory.** Includes without excludes drift back into one mega-search.
- **Handoff ritual in writing.** "Coffee, Strong Yes first, no raw boards" is a rule. "I'll just peek" is how the system dies.
- **Audit overlap weekly.** Redundant sweeps are worse than missing sweeps: they create false confidence.
- **Never score tired and attached.** That is what the overnight run is for.

The rubric decides what a role is worth. The sweep decides whether you see it in time, without drowning in everything else. Chapter 6 is what that morning artifact should look like so both you and a future agent can pick it up cold.

---

*Next: [Machine Format, Human Format →](06-machine-format-human-format.md)*
