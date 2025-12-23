---
layout: post
title:  "Axiomization vs Formalization"
date:   2025-12-02
type: card-img-top
categories:
caption:
last-updated:
categories: CS
tag: CS
author: Joseph Tooby-Smith
card: card-1
---
Since this keeps coming up in different scenarios, I thought it was worth writing something about
(this is also discussed in one of my papers):

Formalizing results from physics in to Lean or another ITP does not necessarily imply the axiomization of those results. If it did, the amount of material one could formalize into an ITP from physics would be extremely limited.
In the same way that a physics paper does not necessarily need to start with an axiomization of the area of physics,
a formalization does not either. As long as the starting point is well-defined and can be mathematically formulated,
then we are good - and you still get a lot of the benefits from Lean.

It is this approach which allows us in PhysLean to formalize areas related to quantum field theory,
the Higgs boson, high-level results in classical mechanics and special relativity etc. We pick a starting point, and then derive results from that starting point - just as a physics paper does. Those starting points
can be interconnected to each other, and
could be refactored, and moved further and further back
until I meets an axiomization (or multiple), if indeed possible.
