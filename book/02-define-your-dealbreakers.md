# 2. Define Your Dealbreakers Before You Define Your Search

Polonius, *Hamlet* (Act 1, Scene 3):

> This above all: to thine own self be true,  
> And it must follow, as the night the day,  
> Thou canst not then be false to any man.

Before I wrote a single line of automation, I wrote down what would make me say no. Comp floor. Remote only. Full disclosure of an active co-founder role I wasn't giving up. Culture that wouldn't survive contact with me. Most people skip this step because it feels like paperwork. It's the opposite: dealbreakers are the only part of the system a machine can apply perfectly, every time, with zero fatigue. This chapter is the worksheet.

Job boards sell you aspiration. Dealbreakers protect you from negotiating against yourself. If you don't write the nos first, every "interesting" posting will quietly move the floor: a little less remote, a little less pay, a little more theater. Polonius was giving career advice. He just didn't know it.

---

## Why dealbreakers come first

Chapter 1 named the disease: judgment fatigue. The cure starts here, not with a scraper.

A dealbreaker is binary. Pass or fail. No partial credit, no "maybe if they sweetened equity." That is what makes it machine-checkable, and what makes it fatigue-proof. On day one of a search you can still feel the difference between a hard no and a stretch. On day forty you can't. The list you write cold is the list that still works when you're tired, hungry, and one complimentary "we'd love your thoughts" away from lowering your standards.

Dealbreakers also come before the search because search *shape* follows constraint. If you need remote and a disclosed side project, you are not browsing the same universe as someone who will relocate for a pure W-2. Writing that down early stops you from building a pipeline full of roles you already know you'll decline after three interviews.

Soft preferences belong in the criteria (chapter 3) and get weighted by the rubric (chapter 4). Hard nos belong here. Keep the hard list short. If everything is a dealbreaker, nothing is.

---

## The four categories

Mine fell into four buckets. Yours might too. Steal the buckets; rewrite the contents.

**1. Compensation.** Not vibes. A number. Base salary floor, and optionally a target and a "strong yes" band above it. Title inflation does not pay rent. If the posting hides comp, treat that as unknown — not as a pass. Unknown means you don't score until you know.

**2. Location / arrangement.** Remote only. No relocation. No hybrid that pretends to be flexible until the third week. If a role requires a city you won't live in, it fails before the rubric opens.

**3. Disclosure / constraints.** The thing you will not hide and will not quit. For me that was an active co-founder role on the side. For you it might be a book, a care obligation, a consulting practice, or a hard stop on travel. If the company needs a fiction to hire you, the dealbreaker already failed — even if the offer looks good.

**4. Culture.** Harder to check from a JD, easier to smell in a careers page and a first call. Founder-led vs. committee-led. Merit vs. theater. Thin process vs. process as product. Culture often starts soft (dock points) and graduates to hard once you've seen the pattern twice. Write the rule anyway: "would I survive contact with this place as myself?" If the honest answer is no, don't schedule the onsite to find out politely.

Role shape — builder vs. pure org manager — sat next to culture for me. I kept it soft at first: dock the score if the job is all people-ops and no craft. You can promote it to hard once you've wasted enough cycles on titles that sound senior and feel empty.

---

## Writing a dealbreaker a machine can check

"Good comp" is not a dealbreaker. `base >= $230K` is.

"Remote-friendly" is not a dealbreaker. `remote == true AND relocation == false` is.

"They seem chill about side projects" is not a dealbreaker. `tolerates_active_side_role == true` is — and you verify it in conversation, not from the About page.

The test: could a tired person, or a script, return true or false without inventing a story? If the rule needs a paragraph of excuses, it belongs in the rubric as a scored dimension, not on the hard list.

A few patterns that work:

| Fuzzy (useless) | Machine-checkable |
|-----------------|-------------------|
| Competitive salary | `base >= $X` |
| Flexible location | `remote == true` |
| Work-life balance | `oncall_required == false` *(or your real rule)* |
| Mission-aligned culture | Keep soft — score it; don't auto-reject on slogans |
| Senior IC / hands-on | `hands_on == true` (soft until proven) |

Hard dealbreakers auto-reject. Soft ones dock a dimension when you score. Do not pretend a soft preference is hard just because you're angry at the market today. Revisit the list after a thin week (chapter 10) — sometimes the floor moves for good reasons, and sometimes you're just lonely for a yes.

---

## Know thyself, then write it down

The clarity interview people run with AI — target titles, industries, what you love, what you hate, culture, flexibility — is useful. I ran a version of it. Two things came out of it, and they belong in two different chapters. The short list of things that, if false, end the conversation — that's *this* chapter, the dealbreakers. The ranked list of what "great" actually looks like for you, category by category, with a paragraph per definition — that's the next chapter. Don't confuse either with a mood board. Dealbreakers filter. Criteria feed the rubric. Both are engineering constraints, not aspirational listicles.

Aspiration without a no-list is how you get false to yourself first, then false to every hiring manager who senses the mismatch. To thine own self be true is not a LinkedIn tattoo. It is an engineering constraint: declare the invariants before you optimize.

Write the list when you are not attached to a specific company. Calibrate on roles you can walk away from. If a posting only looks good after you quietly delete a dealbreaker, you didn't find a match. You found a rationalization.

---

## The worksheet

Fill this in before you build anything else. A sanitized copy lives in [`templates/dealbreakers.md`](../templates/dealbreakers.md). Replace the blanks with your numbers and your constraints — not mine.

| Dealbreaker | Rule (machine-checkable) | Hard or soft? |
|-------------|--------------------------|---------------|
| Comp floor | `base >= $___` | hard |
| Location / arrangement | `remote == true AND relocation == false` | hard |
| Disclosure / constraints | `tolerates_active_side_role == true` | hard |
| Culture fit | `___` *(your invariant in one line)* | soft → hard if repeated |
| Role shape | `hands_on == true` | soft |

Guidelines that saved me from a twenty-item religion:

- Phrase every rule so a machine can return true/false — no vibes.
- Keep hard dealbreakers few. Everything else belongs in the rubric.
- Revisit after a thin sweep. Change the rule in writing, not in the heat of one posting.
- If you catch yourself rewriting a dealbreaker to keep a role alive, archive the role. Keep the dealbreaker.

Once the nos are durable, chapter 3 ranks what "great" looks like and chapter 4 turns those criteria into points. That's where you decide what to chase. This chapter only decides what never gets a vote.

---

*Next: [Define What "Great" Looks Like →](03-define-what-great-looks-like.md)*
