# 8. Resume Tailoring at Scale

Andrew Hunt and David Thomas, *The Pragmatic Programmer* (1999):

> Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.

Chapter 7 left you with a DM you would actually send: peer to peer, edit not rewrite, logged against the role `id`. That conversation does not stay in LinkedIn forever. When the founder asks for a resume, or when a larger company requires the portal in parallel with the DM, you need a document that tells the *same* story the outreach already told. Not a generic PDF from 2024. Not a blank-page rewrite that burns ninety minutes and invents a slightly different career each time.

This chapter is the middle path: one base resume as source of truth, and a repeatable process for producing company-specific versions fast enough that tailoring stops being the bottleneck. The bar matches outreach. A variant you *edit*, not one you *rebuild*.

Company names below are composites. The file layout and the process constraints are real; the labels are not.

---

## The two failure modes

Resume work in an active search fails in two opposite ways. Both feel productive. Both break the system.

**1. Generic-everything.** One PDF for every Strong Yes. Same summary, same bullet order, same keywords regardless of whether the seat is fractional CTO or VP Engineering at a payments company. The ATS may or may not parse it. The human who opens it after your sharp DM gets a document that could belong to anyone with your title history. The outreach said one proof point. The resume said twelve, unsorted. Trust leaks.

Chapter 1's bulk-apply tools are this failure mode with a subscription. They "tailor" by stuffing JD keywords into a template until the document is both generic *and* dishonest-looking. Recruiters notice. So do you, when you reread what got sent.

**2. Hand-craft-everything.** Every application starts from a blank page or a heavy rewrite. You move dates, invent framing, spend an evening on a Maybe that will never get a reply. By week five you are exhausted, the versions disagree with each other, and you cannot remember which story went to which company. Judgment fatigue (chapter 1) moved from the job board into Word.

The middle path rejects both. Facts live once. Emphasis moves. Invention is forbidden.

| Failure mode | What it optimizes for | What it actually costs |
|--------------|----------------------|------------------------|
| Generic-everything | Speed and sameness | Mismatch with outreach; weak human read; keyword luck |
| Hand-craft-everything | Perfection per company | Time, inconsistency, burnout; Maybes get the same effort as Strong Yes |

If your morning is spent rewriting resumes instead of sending the DMs the report already ranked, the resume process is the bottleneck. Fix the process. Do not lower the tier bar so you have fewer documents to write.

---

## Base resume as source of truth

Hunt and Thomas were talking about software. The same rule applies to a search artifact you will regenerate dozens of times: **one canonical resume holds the facts.** Everything company-specific is a derivative. You never "fix" a date or a title only in the Company A folder. You fix the base, then regenerate or re-derive.

What belongs in the base:

- **Identity block** that matches your standing narratives ([`templates/identity-narratives.md`](../templates/identity-narratives.md) when you keep one): who you are in one tight paragraph, not a costume per posting.
- **Employment history with locked facts:** company names, titles, date ranges, locations or remote, education. These do not drift between variants.
- **A full bullet inventory** of true accomplishments. More than you will print for any single company. The base can be slightly long; variants are curated, not invented.
- **Skills and stack** stated honestly. No "expert in X" because one JD mentioned X and you read a blog post once.

What belongs only in a variant:

- **Headline / summary emphasis** for this track and this domain (fractional vs FTE; agents vs platform vs payments-adjacent).
- **Bullet selection and order** for the roles that matter to *this* JD.
- **Keyword surface** that already exists in your inventory, promoted into the summary or a skills line because the JD uses that language.
- **Optional one-line bridge** that mirrors the outreach proof point, so DM and PDF do not disagree.

File layout that kept me honest:

```
resume-materials/
  base/
    yourname-base.pdf          # or .docx / source you actually edit
    yourname-base.md           # optional plain-text twin for agents
  company-applications/
    company-a/
      resume.pdf
      notes.md                 # which role id, which bullets moved, date sent
    company-b/
      ...
```

Rules that protect the base:

1. **Derivatives never become the new base** unless you deliberately promote a lasting improvement (a clearer bullet you want everywhere). One-off flattery for a single JD stays in that company folder.
2. **Track variants can share a base** if the facts are the same. Fractional and FTE usually need different *summaries*, not different employment histories.
3. **Side roles and active companies get disclosed the way your dealbreakers require.** If the search assumes BLT-style tolerance, the base should not hide the thing you will disclose on the first call. Surprises belong in interviews you should not reach.

The base is the knowledge. The variant is the view. Confuse them and you are back to hand-crafting.

---

## A repeatable tailoring process

Inputs every time. No vibes-only pass:

| Input | Source |
|-------|--------|
| Base resume | Your canonical file |
| Role `id`, company, title, URL, score, tier, notes | Morning TOON (chapter 6) |
| JD text (or the parts that survived scoring) | Posting / company file after commit |
| Track (fractional vs FTE) | Your search shape |
| Outreach bridge already sent (if any) | Voice pack / sent DM |

You tailor **after** you commit to outreach (or to ATS-in-parallel), not for every Maybe on the watchlist. Strong Yes today. Yes this week. Maybes do not get a custom PDF until something moves them up. That is the same triage discipline as chapter 5 and chapter 7. Tailoring a 55 because you are anxious is hand-craft-everything in costume.

### Steps

1. **Confirm the tier and the commit.** If you would not send the DM, do not open the base. Resume work follows commitment, not curiosity.
2. **Pull three to five emphasis signals** from the JD and the TOON notes. Examples: "hands-on architecture," "agent orchestration," "Series B platform," "fractional 10–20 hrs," "payments / commerce adjacency." Write them as a short list in `notes.md` before you touch bullets.
3. **Rewrite only the summary (and maybe the headline)** so it leads with the overlap that matches those signals. One paragraph. Same person as the outreach bridge. No new autobiography.
4. **Select and reorder bullets** from the base inventory. Promote the three to six that prove the signals. Demote or drop true-but-irrelevant lines for this seat. Do not fabricate metrics. Do not move dates.
5. **Keyword pass without lying.** If the JD says "event-driven" and your base already has event-driven work under a different phrase, align the language. If you do not have the skill, do not add it. ATS stuffing that a human can falsify in five minutes is worse than a clean miss.
6. **Export the variant** into `company-applications/<company>/`. Keep the source if you use markdown or docx; keep the PDF you will attach.
7. **Edit bar: ten to fifteen minutes.** Same trust threshold as chapter 7. If you are rebuilding sections from scratch, the base inventory is incomplete or you are over-fitting a Maybe. Stop and fix the base later; do not invent under deadline.
8. **Log against the role `id`.** What file went out, when, for which posting. Chapter 9 assumes this exists so you do not resend a stale variant or contradict yourself in round two.

### What "tailoring" is not

- Not a new career arc per company.
- Not dropping an active side company because this JD might frown (if your dealbreakers require disclosure, disclose).
- Not running a bulk tool that rewrites every bullet into JD paraphrase.
- Not spending an hour on formatting while the Strong Yes DM still sits unsent.

### Composite example (emphasis, not invention)

Base inventory includes (among other true bullets): shipped agent orchestration for restaurant ops; payments-adjacent integrations; led platform architecture for a multi-product suite; fractional advisory for two seed teams.

**Company D, Head of Engineering, score 88.** TOON notes: founder-led, hands-on, agent-powered commerce, tolerates active side role. Outreach already used the agent/commerce overlap.

Variant moves:

- Summary leads with agent systems at the ops/commerce intersection (mirrors the DM).
- Bullets: agent orchestration and payments-adjacent work rise; pure advisory bullets shrink.
- Skills line promotes the stack words the JD uses that you already own.
- Side company stays named; the seat's notes already cleared that gate.

Same facts. Different lens. Under fifteen minutes once the base inventory exists.

### Checklist before you attach

- [ ] Tier was Strong Yes or Yes (or a Maybe that explicitly moved up)
- [ ] Summary matches the outreach bridge (no second persona)
- [ ] Bullets selected from base inventory only; nothing invented
- [ ] Dates, titles, employers unchanged from base
- [ ] Keywords aligned only where true
- [ ] Track matches (fractional summary not pasted onto an FTE req)
- [ ] File saved under the company folder; role `id` logged
- [ ] You would only *edit*, not rebuild, if you reread it once more

The sanitized process lives in [`templates/resume.md`](../templates/resume.md). Steal the steps; replace the inventory with yours.

---

## When tailoring stops being the bottleneck

You will know the process works when resume work is no longer the reason a Strong Yes ages a day.

**Operational definition.** From "committed to outreach / ATS" to "PDF attached or ready" in about fifteen minutes for a normal Yes, maybe twenty for a messy JD. Most of that time is judgment (which bullets), not typing. If you routinely need an hour, either the base inventory is thin (you are writing from memory under stress) or you are customizing roles that should not get a variant yet.

**Same edit bar as outreach.** When the first generated or first-pass variant is 80% sendable, the system is earning its keep. When every company forces a ground-up rewrite, you do not have a tailoring pipeline. You have a writing hobby attached to a job search.

**Where time should go instead.** Sending the DM. Logging the send. Doing the short research that feeds the hook. Taking the call where dealbreakers get spoken out loud (chapter 2, chapter 4). Memory hygiene so you do not re-tailor for a company that already declined you (chapter 9).

**Failure modes that sneak back in:**

- Tailoring Maybes "just in case" until the folder is full and the Strong Yes is still waiting.
- Letting company variants diverge on facts (title drift, date "fixes") so the base is no longer authoritative.
- Automating generation without an edit pass, then discovering in an interview that the PDF claimed a stack you do not run.
- Perfecting typography while the portal deadline passes.

When the middle path holds, the morning report still decides *whether*. The outreach chapter decides *what you say*. This chapter decides *what you attach* without restarting the career narrative from zero. The next failure mode is amnesia: applying twice, contradicting a prior variant, or forgetting why you declined. That is chapter 9's job.

---

*Next: [Teaching the System to Remember →](09-teaching-the-system-to-remember.md)*
