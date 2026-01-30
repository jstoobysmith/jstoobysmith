---
layout: post
title:  "Good Lean code for Physics"
date:   2026-01-05
type: card-img-top
categories:
caption:
last-updated:
categories: CS
tag: CS
author: Joseph Tooby-Smith
card: card-1
---
As interactive theorem provers get increasingly popular, and as AI makes it easier to write correct, and compiling Lean code, I think it is important to distinguish good from bad correct Lean code in the context of physics.
This is naturally related to the question of how to detect ‘AI slop’ when it comes to Lean code in physics.

To me good Lean code for physics has, at least, the following features:
1.	Organized as API around key data structures
2.	Has no axioms
3.	Has short moules with a clear purpose
4.	Has good clear and concise documentation (not AI slop)
5.	Has concise proofs
6.	Uses existing formulizations where possible – doesn’t reproduce work already done
7.	Uses a fixed naming convention (following e.g. that of Mathlib)
8.	… probably many more
