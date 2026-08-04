# Dealbreakers Worksheet (Template)

Sanitized template from [Chapter 2](../book/02-define-your-dealbreakers.md). Replace the
example rules with your own. A **hard** dealbreaker auto-rejects; a **soft** one docks points
in the rubric instead.

| Dealbreaker | Rule (machine-checkable) | Hard or soft? |
|-------------|--------------------------|---------------|
| Comp floor | `base >= $___` | hard |
| Location / arrangement | `remote == true AND relocation == false` | hard |
| Disclosure / constraints | `tolerates_active_side_role == true` | hard |
| Culture fit | `___` *(one-line invariant)* | soft → hard if repeated |
| Role shape | `hands_on == true` | soft |

## Guidelines

- Phrase every rule so a machine can return true/false — no vibes.
- Keep hard dealbreakers few. Everything else belongs in the rubric.
- Revisit after a thin sweep (see [Chapter 10](../book/10-when-the-market-goes-quiet.md)).
