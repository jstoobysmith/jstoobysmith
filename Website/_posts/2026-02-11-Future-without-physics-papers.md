---
layout: post
title:  "A future without physics papers?"
date:   2026-02-11
type: card-img-top
categories:
caption:
last-updated:
categories: CS
tag: CS
author: Joseph Tooby-Smith
card: card-1
---
A future without Physics papers?

One could envision a future where we no longer have a need for physics papers. With results from physics being written directly into the interactive theorem prover Lean and projects like PhysLean, with the guarantee of mathematical correctness that is thereby given.

But one should be careful. To echo a message I recently posted on the Lean Zulip: Lean does not verify the physics context of results, it does not verify that “this is main-stream physics”, that “quantum mechanics corresponds to the real world”, or that “this is interest to the community”, it only verifies the correctness of mathematics, and that really is it.

The reason we have journals is to verify all these things collectively, and we do that via the concept of proof by authority or verification by trusted source. The trusted source here being the journal and the peer-review process, who say “yes this is correct both mathematically and physically, and it is of interest to the community”.

In a future without physics papers and a focus on building PhysLean and other Lean libraries, we would need a way include such a verification of this ‘physics context’ directly in the project. My idea here is to use the concept of cryptographically secure digital signatures so that trusted authorities (similar to journals) can sign individual results in Lean projects to verify by authority the parts that Lean does not itself verify.
