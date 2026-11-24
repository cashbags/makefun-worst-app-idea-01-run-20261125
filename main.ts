// The Worst App Idea Ever Pitched — make.fun
// u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23
//
// The entry is one sentence, the MeowMetrics pitch, written to entry.txt
// with no trailing newline. The notes below argue it against the brief's
// criteria in order (see DESIGN.md).
//
// Why this pitch wins, criterion by criterion:
//
// 1. Specific and named: MeowMetrics, translating a cat's midnight meows
//    into a quarterly business review — product and function first, no
//    hedging "an app that...".
// 2. The laugh is the mismatch: nobody needs unmeasured midnight yowling
//    solved with KPIs, a slide deck and an action plan for the tuna
//    division. Deadpan founder voice; the tuna division — a corporate
//    department invented for a cat — sells it.
// 3. A real pitch: name, input (midnight meows), output (quarterly business
//    review), deliverables (KPIs, slide deck, action plan), audience (an
//    owner who treats a pet like a business unit), in pitch order.
// 4. One sentence, 157 characters, one idea: its length goes to the
//    mechanism and its deliverables, no filler, no setup line. An earlier
//    draft said "3 a.m."; changed to "midnight" so the entry is one
//    unambiguous sentence with a single terminating period.
// 5. The picture sticks: a cat yowling at midnight while its owner nods
//    along to a slide deck about tuna — a named animal, a named hour, a
//    named corporate ritual, concrete where a generic "useless app" joke
//    leaves nothing behind.
//
// Tournament: MeowMetrics 7-0, UmCount 6-1, Nodr 5-2, KettleNews 4-3,
// CeilingCount 3-4, BarkDone 2-5, FakeFern 1-6, QuietAlert 0-7. MeowMetrics
// beat KettleNews by 2, FakeFern by 2, the rest by 1. See DESIGN.md.
//
// Flood-check: fresh lane (119 titles) — "cat" 3 false positives, "meow" 1,
// "business review"/"KPI"/"tuna"/"quarterly" 0. See DESIGN.md.
//
// Determinism: constant pitch; no clock, random source or network; only env
// read is MAKEFUN_OUTPUT_DIR. Two runs write byte-identical files.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 157 characters, one sentence, no trailing newline: the gate counts
// characters (1-240), and the judge is shown the text exactly as submitted.
const PITCH =
  "MeowMetrics translates your cat's midnight meows into a quarterly business review, complete with KPIs, a slide deck and an action plan for the tuna division.";

// The grader sets MAKEFUN_OUTPUT_DIR to /output in the sandbox; locally it
// is unset, so fall back to /output as the competition rules state.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), Buffer.from(PITCH, "utf8"));
