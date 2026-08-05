# 7. From Match to Message: Outreach That Doesn't Sound Like a Robot

George Orwell, *Politics and the English Language* (1946):

> Never use a metaphor, simile, or other figure of speech which you are used to seeing in print.

Chapter 6 left you with a dual report: Strong Yes at the top of the HTML, the same roles addressable by `id` in the TOON. That is not the finish line. A scored match is worthless if the message that follows it reads like every other applicant who pasted "I'm excited to apply" into a portal. The hardest part of this system was not the scoring. It was teaching it to write like me: peer to peer, not applicant to gatekeeper.

This chapter is how a Strong Yes leaves the morning report and becomes a DM you would actually send. The bar is specific: a draft you *edit*, not one you *rewrite*. That distinction is the difference between a tool you use and a tool you trust.

Company names below are composites. The channel rules and the structural patterns are real; the labels are not.

---

## Why the match isn't the finish line

The morning handoff (chapter 5) is designed so coffee means decisions, not discovery. Strong Yes means outreach today. Yes means outreach this week. The report has already done the triage. What it has not done is put a human sentence in front of a human who can say yes.

Three failure modes kill scored matches after the report is perfect:

1. **Portal-first habit.** You scored an 88, then filed it through the ATS and waited. The decision-maker never saw you. The match died in a queue designed to filter volume, not to surface peers.
2. **Form-letter automation.** You asked an agent to "write outreach for everything Strong Yes" with no voice samples and no company-specific hook. The drafts arrived polished and empty. You rewrote every one, or worse, you sent them.
3. **Research theater before commitment.** You spent forty minutes building a dossier on a Maybe you were never going to DM. The Strong Yes from yesterday aged another day. The report's tier order was ignored.

The fix is a pipeline with a hard handoff: **score → commit → research just enough → draft → edit → send.** Research belongs in a company file *after* you commit to outreach, not in the morning skim (chapter 6). The TOON `id` is how you track whether you already sent something. Memory (chapter 9) assumes that field exists.

A great match plus a form letter equals nothing. A great match plus silence equals the same nothing, slower.

---

## Peer to peer, not applicant to gatekeeper

The tone shift is not cosmetic. It changes who you message, what you ask for, and whether anyone replies.

**Applicant-to-gatekeeper** sounds like this: excited to apply, passionate about the mission, attached resume for your consideration, looking forward to hearing from you. It addresses HR. It asks for a job. It signals that you already accepted the portal as the real conversation.

**Peer-to-peer** sounds like this: one specific thing you noticed, one proof point that maps to what they are building, one low-friction ask for a short call. It addresses the person who feels the pain (founder, CTO, hiring manager). It asks for a conversation. It signals that you are reaching across as someone who already does related work.

Channel rules that kept my pipeline honest:

- **LinkedIn DM first** for the decision-maker. If no response in five days, one email follow-up. Not a sequence of "just bumping this."
- **Never lead with HR or recruiting.** Find the person who owns the problem the role exists to solve.
- **For larger companies, DM and ATS in parallel.** The DM warms the inbound; the portal satisfies process. The DM is not a substitute for compliance theater when the company requires both.
- **One message per contact that counts.** Make the first one specific enough that a follow-up would be redundant noise.
- **Separate tracks when your search has two shapes.** Fractional outreach to a founder is a different message from FTE outreach to a CTO. Mixing them produces a draft that fits neither.

Who to find:

| Track | Primary contact | Why |
|-------|-----------------|-----|
| Fractional / advisory | Founder or CEO | They own the P&L and feel the engineering cost |
| Full-time leadership | CTO, VP Engineering, or named hiring manager | They feel the seat empty; HR feels the req open |

The peer frame also changes the ask. "Please consider my application" puts you under their process. "Worth a 15-minute call?" puts you in a conversation where dealbreakers (comp, remote, side role) can surface early, the way chapter 4's gated calls were supposed to work.

Orwell's point about ready-made phrases applies directly here. "Excited to apply," "passionate about your mission," and "I came across your posting" are dying metaphors of the job search. They are used to seeing them in print because every applicant uses them. Cut them.

---

## Capturing your voice

An agent cannot invent your voice from a rubric. It can approximate a tone if you feed it evidence of how you already write when you are not performing for a hiring portal.

What I feed the system before it drafts:

1. **Five to ten real messages I actually sent** (or would send). Cold DMs, founder notes, peer intros. Not cover letters from 2019 unless they still sound like you.
2. **Standing identity blocks**, not improvised bios. I keep crystallized self-description in one place ([`templates/identity-narratives.md`](../templates/identity-narratives.md) in this repo's sanitized form) so the draft pulls a known bridge line instead of inventing a new autobiography every morning.
3. **Voice rules written as constraints.** Direct. Concrete. No applicant fluff. Prefer established metaphors you already own over fresh poetry. If your public writing has a house style (no em dashes, short paragraphs, evidence over enthusiasm), put that in the prompt as law, not as a vibe.
4. **Track and role shape.** Fractional vs FTE. Builder vs pure manager. The same person can be both across a search; the draft cannot blur them in one paragraph.

What makes a draft sound like you (checklist I use when evaluating the first generated pass):

- **Hook is specific and true.** A funding note, a product detail, a post they wrote, a domain overlap you actually have. Not "impressed by your growth."
- **Bridge is one proof point.** The single most relevant fact about you for *this* role. Not a resume summary.
- **Ask is low-friction and concrete.** Time-boxed call, not "would love to explore opportunities."
- **Sign-off is human and brief.** Name, maybe one link. Not a signature block that looks like a press kit.
- **Nothing you would be embarrassed to have forwarded.** If it reads like it was written *for* LinkedIn instead of *to* a person, rewrite the hook.

If the system keeps producing polite generic prose, the failure is almost never "the model is bad at writing." The failure is missing samples, missing identity blocks, or a prompt that still asks for a cover letter.

---

## Editing, not rewriting

Trust has a measurable threshold.

**Rewrite** means the structure is wrong, the voice is wrong, or the hook could belong to anyone. You keep the contact name and start over. That is not leverage. That is a fancy blank page.

**Edit** means you change a clause, swap the proof point, tighten the ask, fix a fact. Two to five minutes. You would send 80% of the words as written.

Until most Strong Yes drafts clear the edit bar, do not scale outreach automation. You will either send garbage or spend the morning doing the work you tried to automate. Both recreate judgment fatigue in a new costume.

Practical calibration loop:

1. Generate a draft from TOON role + contact + voice pack.
2. Edit as if you were about to hit send.
3. Save the *sent* version back into the voice samples (or into a "accepted edits" folder).
4. After ten cycles, look at what you keep changing. Those deltas become prompt rules or template constraints.
5. When you routinely change only the hook's specific observation and one bridge clause, the voice capture is done enough.

The same bar applies to you on a tired evening. If you cannot edit a draft in five minutes because you do not trust it, do not send a "good enough" rewrite at midnight. Queue it. The tier said outreach today; it did not say outreach half-asleep.

---

## The outreach template

The sanitized structure lives in [`templates/outreach.md`](../templates/outreach.md). Steal the bones; replace the voice.

### Structure

1. **Hook** — one specific, true observation about them or the company. No flattery boilerplate.
2. **Bridge** — why you, in one line. The single most relevant proof point. Prefer a block from your identity narratives over a fresh bio.
3. **Ask** — low-friction, concrete. A conversation, not a job.
4. **Sign-off** — human, brief.

### Draft skeleton

```
{first_name} —

{specific observation that proves you actually looked}.

{one line on why your background maps to what they're building}.

{low-friction ask — "worth a 20-min call?" not "please consider my application"}.

— {your name}
```

(Yes, the skeleton uses a short dash before the name. That is a sign-off convention, not an excuse to fill the body with clause-breaking dashes.)

### Composite example (Strong Yes, FTE track)

Contact: technical co-founder / CEO at a payments-adjacent company. Role: Head of Engineering. Score: 88. Notes from the TOON: founder-led, hands-on scope, tolerates active side role.

> Jordan — I'm a co-founder building AI-native systems for restaurant and hospitality operations. "Agent-powered commerce" is not a phrase I picked up from your blog. It is what I have been shipping for the past year and a half.
>
> Saw the Head of Engineering opening. I architect and ship production agent systems, and I have been doing it at the payments and ops intersection your product lives in.
>
> Worth a 15-minute call to see if there is a fit?
>
> — Alex

What to notice: the hook names a real overlap, the bridge is one capability claim tied to their domain, the ask is a call, there is no "I'm excited to apply," and the active side company is disclosed as identity rather than hidden as a risk. Dealbreaker conversations (remote, comp split, side-role tolerance) belong on that call, not in paragraph four of the DM.

### Composite example (Yes, fractional track)

Contact: founder hiring a fractional CTO. Score: 71. Notes: solid fit, comp near floor, clarify cash on first touch.

> Sam — I saw Homefield is open to a fractional CTO. That structure fits how I work: I am already building on the side in an adjacent vertical, and I look for engagements where I own architecture and execution, not slideware.
>
> Your stack matches what I build daily. Before we go further: what does monthly cash look like for a 10–20 hour week? Happy to jump on a short call if the numbers clear.
>
> — Alex

What to notice: the peer move includes the dealbreaker early when the score already flagged it. That is chapter 2 and chapter 4 showing up inside the message, not after three interviews.

### Inputs the drafter should receive every time

| Input | Source |
|-------|--------|
| Role `id`, company, title, URL, score, tier, notes | Morning TOON (chapter 6) |
| Contact name + why this person | Short research after commit |
| Track (fractional vs FTE) | Your search shape |
| Hook material | One true observation from the JD, site, or their writing |
| Bridge line | Identity narratives / voice pack |
| Open gates | Dealbreakers still unknown (comp, remote, side role) |

### Customization checklist before send

- [ ] First name correct
- [ ] Hook is specific and true (you actually looked)
- [ ] Bridge is one proof point, not a resume
- [ ] Track matches the contact (do not mix fractional pitch into an FTE seat)
- [ ] Contact is the decision-maker, not HR
- [ ] Ask is a conversation with a time box
- [ ] You would only *edit*, not rewrite, before hitting send

When the draft clears that list, send it. Log the send against the role `id`. Then stop. The system earned the morning by getting you to a message that sounds like you. Chapter 8 is what happens when the conversation continues and you need a resume that matches the same story without starting from a blank page every time.

---

*Next: [Resume Tailoring at Scale →](08-resume-tailoring-at-scale.md)*
