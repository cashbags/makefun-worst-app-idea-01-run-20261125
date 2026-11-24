# Design — The Worst App Idea Ever Pitched

Entry: **MeowMetrics** — 157 chars, one sentence, no trailing newline.
Competition: `u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23`, $2, deadline 26 Nov 2026 23:50 WIB.

## Rubric (judge's brief, in order)

1. Names a specific app and what it uselessly does, in one sentence.
2. Funny: absurd logic, deadpan confidence, or a problem nobody has matched with its app.
3. Sounds like a real pitch: name, what it does, who it is for.
4. One clean sentence, no padding, no second idea.
5. A vivid, specific picture, not a generic joke.

## Tournament (pairwise self-judge, exact rubric)

MeowMetrics 7-0, UmCount 6-1, Nodr 5-2, KettleNews 4-3, CeilingCount 3-4, BarkDone 2-5, FakeFern 1-6, QuietAlert 0-7. MeowMetrics beat KettleNews by 2, FakeFern by 2, the rest by 1.

## Candidates (verbatim)

- **MeowMetrics** (157): "MeowMetrics translates your cat's midnight meows into a quarterly business review, complete with KPIs, a slide deck and an action plan for the tuna division."
- **KettleNews** (172): "KettleNews turns your kettle's whistle into a breaking-news alert, with live coverage, expert analysis and a push notification the moment your water reaches a rolling boil."
- **QuietAlert** (191): "QuietAlert sends you a push notification every time your house goes quiet, so you can finally relax knowing nothing is happening, delivered instantly, in real time, to the phone in your hand."
- **CeilingCount** (194): "CeilingCount counts the ceiling tiles above your bed, saves your progress to the cloud and syncs it across devices, so you can pick up exactly where you left off staring at the ceiling at 3 a.m."
- **Nodr** (166): "Nodr hires a stranger to nod at you approvingly while you work from home, with premium tiers for slow, thoughtful nods and a monthly report on how validated you felt."
- **FakeFern** (198): "FakeFern reminds you to water your plastic plants every Tuesday, tracks their fake growth in centimetres and alerts you when they look thirsty, because even plants that cannot die deserve a routine."
- **UmCount** (167): "UmCount counts every 'um' you say, emails a weekly report to your mother and charges $2.99 a month for the premium tier, which adds a disappointed sigh after each one."
- **BarkDone** (167): "BarkDone notifies you the moment your neighbour's dog stops barking, with a detailed report on how long it barked, why it barked and what it might bark about tomorrow."

## Flood-check (119 live entry titles, 25 Nov 2026)

"cat": only inside Certificate/Notification/certificate (3 false positives, no real cat entry). "meow": only inside "homeowner" (Doorbellr, 1 false positive). "business review", "KPI", "tuna", "quarterly": 0 each. Fresh lane.

Note: an earlier draft used "3 a.m."; changed to "midnight" so the entry is one unambiguous sentence with a single terminating period.

## Determinism

The pitch is a constant in `main.ts` (Node 22, stdlib only). No clock, random source or network; only env read is `MAKEFUN_OUTPUT_DIR` (fallback `/output`). Two runs, two directories: byte-identical 157-byte files.
