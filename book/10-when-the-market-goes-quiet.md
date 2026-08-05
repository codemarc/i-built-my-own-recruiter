# 10. When the Market Goes Quiet — Recognizing and Fixing a Thin Sweep

John Maynard Keynes (attributed; the line survives because the habit does not):

> When the facts change, I change my mind. What do you do, sir?

Eight runs in a row with almost nothing worth pursuing is not a sign to work harder. It is a signal the rubric or the search itself needs recalibrating. This chapter is the most uncomfortable one to write, because it is about the system telling you something you do not want to hear: that a role class you have been chasing might be structurally thin, that half the "open" roles were never live, and that persistence is not the same as strategy.

Chapter 9 gave you the data to see the quiet. This chapter is what to do when the data says the well is dry, or when the well was a prop.

Most company labels in the diagnostic examples are composites. The ghost-job audit below uses real counts from a live verification run; the named firms are from that public write-up.

---

## Reading a thin sweep

A thin morning is not the same as a thin streak.

**Thin morning:** zero Strong Yes, maybe one Yes, a short Maybe list. Happens. Markets have quiet days. Memory is healthy. Queries are fine. Drink the coffee, clear the open loops, leave the boards alone.

**Thin streak:** roughly a week or more of mornings where *new unique yield* is near zero across every sweep, not just where Strong Yes is rare. The distinction matters. You can have plenty of new garbage and still feel "busy." Thin means the machine is not finding new roles that clear the gate, or everything that clears scores into Do Not Pursue / low Maybe.

Use memory counts (chapter 9), not vibes:

| Signal | Healthy quiet day | Thin streak |
|--------|-------------------|-------------|
| New unique `id`s / day | Some (even if low tier) | Near zero for many days |
| Strong Yes | 0–2 | 0 for a week+ *and* Yes is empty |
| Top reason codes | Mixed | One or two codes dominate, or "nothing new" |
| Sweep overlap | Stable | Irrelevant because nothing arrives |
| Your behavior | Follow the handoff | Renegotiate rubric mid-coffee, reopen boards |

Eight quiet runs is a rule of thumb, not scripture. If your market normally yields five scored survivors a day and you get zero for four days, you are already in streak territory. If your market is naturally sparse (fractional seats, niche domain), look at weeks, not days. The load-bearing test: **has yield collapsed relative to your own baseline, with memory proving the collapse is not "already seen"?**

What thin is not:

- One bad Monday after a holiday week
- A week where you paused the sweep
- A week where you raised a dealbreaker and forgot you raised it (that is a gate change, not a market change)
- Emotional thinness: you have Yes roles and cannot bring yourself to DM (that is chapter 7 / chapter 11, not a sweep problem)

What thin can hide:

- **Ghost volume.** Aggregators still show titles, fresh post dates, and "actively hiring" chrome for roles that are filled, frozen, or never real on the employer's own careers page. Your sweep looks busy. Your coffee list is a prop. That is the next section's problem, and it is not fixed by lowering the rubric.

---

## Ghost jobs: when the market was never on

Before you rewrite dealbreakers or mourn a role class, ask a nastier question: **how many of the postings were actually open?**

I ran that experiment on the title family everyone treats as the hottest hire in the market: senior "AI Director" seats. Not skimmed. Verified, one at a time, against the employer's own site.

**One week:** 18 postings checked. **16 were already dead.** Live on the aggregator. Gone, filled, or never present on the careers page that counts.

Examples from that run ([public write-up](https://www.linkedin.com/posts/codemarc_jobsreport-aihiring-ghostjobs-activity-7490364661993877504-2QlR)):

- NTT Data's "Generative AI Consulting Director" still live on LinkedIn the day I checked. Their own careers page said it had been filled.
- KPMG running the same play on an "Enterprise Architect, Risk Portfolio" listing: everywhere except the one place that matters.
- Alvarez & Marsal and Grant Thornton posting senior "AI Director" titles for weeks that neither close nor fill. That is not a search funnel. That is inventory theater.

Across a longer window, **8 of my last 10 verification passes** came back with **5 or fewer real roles out of 10**. Same role class every time: the titles the discourse calls hottest. Official labor headlines can say the market is cooling. They cannot tell you how much of the heat was never on.

### What this does to a "thin" diagnosis

| What you see without verification | What it actually is |
|-----------------------------------|---------------------|
| Sweep pulls 15 AI leadership titles | Maybe 2–3 still open on employer sites |
| "Market is full, my rubric is too picky" | Market was staged; rubric never got a fair sample |
| Quiet streak after you raised standards | You stopped scoring ghosts; yield was fake before |
| Busy morning, zero Strong Yes | Correct: dead reqs should not clear as live opportunities |

Thin streak protocol without a live check will make you soften constraints to chase props. That is the opposite of strategy.

### The verification rule

**Stop trusting the post date on the aggregator.** Open the company's own careers (or Greenhouse/Ashby/Lever canonical). If the req is not there, move on. Log it.

Reason code for memory (chapter 9): `ghost-job` or `dead-on-employer-site`. Count those codes weekly the same way you count `dealbreaker-remote`. If ghosts dominate a title family, you do not have a personal failure. You have a contaminated source.

I do not eyeball this at scale. I built an agent that verifies every posting live, in the browser, against the employer's own page, every run. That is the only reason a number like "2 of 18" is trustworthy enough to act on. You can start manual: for every Strong Yes and Yes before outreach, sixty seconds on the careers page. Automate when the manual check keeps saving you from DMing a filled seat.

Put verification **before** outreach (chapter 7) and **before** resume variants (chapter 8). A Strong Yes on a dead posting is not a Strong Yes. It is a scoring error upstream of tone.

Add this to the overnight pipeline when you can:

1. Pull candidates (chapter 5).
2. Gate dealbreakers.
3. **Verify live against employer canonical URL.** Failures archive with `ghost-job`; they never reach the coffee HTML as actionable.
4. Score survivors.
5. Emit the dual report (chapter 6).

Until step 3 exists, your thin-streak reviews are partly measuring aggregator lag and staffing-brand theater. Fix the input before you rewrite your identity.

---

## Rubric problem or search problem?

Do not touch both sides at once. Diagnose first.

### Ask in this order

1. **Is the overnight run actually running?** Schedule failures look like thin markets. Check timestamps on the report before you rewrite your life.
2. **Is memory suppressing everything?** Over-aggressive company blocks or broken dedupe can hide real new reqs. Spot-check one board manually for a known-good query. If the board has fresh fits and your report does not, the bug is in dedupe/memory/query, not in "the market."
3. **Are the "open" roles actually open?** Spot-verify a sample against employer careers pages. If most fail, you have ghost contamination, not a rubric crisis. Fix verification before you touch weights.
4. **Are dealbreakers rejecting a flood?** If the gate logs are full and the scored list is empty, the market has volume and your floor is doing its job. That can still be "thin for you." Decide whether the floor is still true (chapter 2).
5. **Are survivors plentiful but scores clustered low?** Rubric / criteria problem. The search is finding candidates; your definition of great is failing them, or the weights are wrong for this market.
6. **Are all sweeps empty at the source after live verification?** Search problem or structural thinness. Queries, platforms, geography assumptions, or the role class itself.

| Observation | Likely side | First move |
|-------------|-------------|------------|
| Aggregator full, employer site empty for most pulls | Ghost jobs / source quality | Verify-live step; reason code `ghost-job`; do not soften the floor |
| Gate rejects most pulls (remote, comp, side-role) | Dealbreakers vs market | Re-read hard vs soft; do not silently soften mid-week |
| Many scored 45–65, almost none above 70 | Criteria / weights | Revisit chapter 3 paragraphs and chapter 4 weights |
| Platform returns little even before the gate | Query / slice design | Redesign includes/excludes (chapter 5) |
| One sweep healthy, others dead | Slice intent | Fix or kill the dead sweep; do not "run harder" |
| Manual board check finds fits the sweep misses | Automation bug | Repair query, filters, or connectors |
| Live-verified board check also empty for your floor | Role class / market | Read the next section before you cope |

Write the diagnosis in `decisions.md` (or your journal) before you edit weights. Heat-of-the-moment reweights are how Strong Yes becomes "whatever arrived today."

---

## The uncomfortable signal

Sometimes the system is working, verification is clean, and the answer is still ugly: **the role class you are hunting is structurally thin at your constraints.**

Do this only after ghosts are filtered. Otherwise you will diagnose "AI Director is structurally thin" when the honest sentence is "AI Director on LinkedIn was 16/18 already dead."

Examples of structural thinness (composites, patterns I hit):

- Remote-only + cash floor at the top of the band + active side-company tolerance + hands-on leadership. Each constraint is reasonable. The intersection is a small set.
- Fractional CTO seats that pay real monthly cash, not advisory equity theater. The title is common. The terms are not.
- "AI-native platform" leadership that is not a costume over a legacy roadmap. Volume of titles is high. Volume of real seats is low. Ghost volume makes this look denser than it is until you verify.

Persistence here looks virtuous. It is often avoidance. You keep running the same three sweeps because changing the search feels like giving up on the identity you wrote into the criteria. The rubric was supposed to protect you from desperation. It can also protect a fantasy.

How to tell structural thinness from a temporary dip (after live verification):

1. **Baseline vs peers.** People in adjacent searches (same level, looser constraints) still see *verified* flow. You do not. Constraint intersection is the suspect.
2. **Time.** Multiple weeks of honest sweeps, healthy automation, memory proving "not already seen," employer-site checks agreeing. Not three sad days.
3. **Near-miss autopsy.** The roles that almost clear fail the same one or two constraints every time. That is information about the market's shape, not a streak of bad luck.
4. **Counterfactual.** If you temporarily imagine dropping one hard constraint, does a real cluster appear on canonical careers pages? If yes, you have a trade-off to face, not a query to tweak.
5. **Ghost rate.** If `ghost-job` is the dominant reason code, fix the source. Do not call that structural thinness yet.

You do not have to drop the constraint. You do have to name the trade-off in writing. "I will wait" is a strategy. "I will wait while pretending the market is full" is not.

---

## Persistence vs. strategy

Persistence is keeping the cadence: sweep runs, coffee handoff, outreach when Strong Yes appears, weekly memory review. Strategy is changing the machine when the evidence says the target moved or was never dense enough.

### Recalibration moves (pick one primary change per review)

**Search-side**

- Add or harden **live employer verification** before scoring or outreach. Prefer canonical careers URLs over aggregator mirrors.
- Retarget a sweep's intent (chapter 5). Kill a redundant slice. Add a slice that names a real adjacent market (different title family, same craft).
- Widen platform coverage carefully (second job board, company career pages for a short target list). Widening without intent is chapter 1 again. Prefer pages you can verify.
- Adjust timing (some fractional and exec seats cluster mid-week; measure before you mythologize).

**Judgment-side**

- Soften a *soft* preference, never a hard dealbreaker, unless you are explicitly rewriting dealbreakers after sober review (chapter 2).
- Reweight rubric dimensions to match what "great" means *now* (chapters 3–4). Careers move. Criteria that were honest in March can be costume in August.
- Split tracks more honestly. If fractional is where cash and tolerance clear, stop letting an empty FTE sweep define your mood.

**Identity-side (the hard one)**

- Admit the intersection is rare and extend runway / parallel plans without burning the system.
- Change the role class on purpose (still hands-on, different altitude or domain) and rewrite criteria paragraphs to match.
- Pause outbound discovery and run a named experiment for two weeks (e.g. warm intros only) without calling it a failure of the rubric.

### What not to do

- Lower the tier bar so Maybes become Strong Yes and you can feel productive (chapters 5 and 7).
- Bulk-apply to recover volume (chapter 1), especially volume you have not verified live.
- Rewrite the rubric every morning from the gut (chapter 5 handoff rule).
- Add five new sweeps that are synonyms of the old ones.
- Treat quiet as a character flaw. Quiet is data. Fake volume is also data.
- Soften dealbreakers because an aggregator still shows eighteen "hot" titles that fail the careers-page check.

### A simple streak protocol

1. Confirm automation and memory are healthy.
2. Sample-verify this week's pulls against employer sites. Count `ghost-job`.
3. Label the streak day count and top reason codes (including ghosts).
4. Diagnose: ghosts vs gate vs rubric vs search vs structural.
5. Make **one** written change.
6. Run another five to eight mornings before the next change.
7. If still thin *after* verification is clean, revisit structural thinness explicitly with a human you trust (chapter 11), not only with the report.

The labor market is not only cooling. Some of it was staged. The system earned the right to bring you that news in numbers, not vibes. Your job is to answer with strategy, not with volume. When you have done that honestly, the next chapter is the other half of honesty: what this recruiter will never do for you, no matter how good the memory and the calibration get.

---

*Next: [What the Recruiter Can't Do →](11-what-the-recruiter-cant-do.md)*
