---
layout: post
title:  "An idea: Maintained and unmaintained files"
date:   2026-06-05
type: card-img-top
categories:
caption:
last-updated:
categories: CS
tag: CS
author: Joseph Tooby-Smith
card: card-1
---

There are three recurring friction points in Physlib.

- Academics typically want to work privately until they are ready to announce a result, for example alongside a paper submission. This sits awkwardly with Physlib's preference for small, incremental pull requests, and discourages contributions.
- People often have physics formalizations they would like to share, but do not want to take through the full review process required for the core library.
- People may want to formalize a specific paper or experiment with a formalization idea, without restructuring it to fit the API structure of Physlib.

I think all three problems have a common solution: introduce two tiers of Lean files within Physlib.

**Maintained files** are the existing files and similar new ones. They have been carefully reviewed, and we commit to keeping them up to date with new versions of Lean and Mathlib.

**Unmaintained files** would receive a lighter check, closer to the arXiv model: the content should be mainstream physics, not duplicate anything already in Physlib, sit in a sensible part of the library, be reasonably readable, and build successfully. Beyond that, no maintenance is promised. If such a file breaks in a future version of Lean or Mathlib or an update to Physlib, we simply record the last commit in which it built as the last known working version.

To make the distinction visible in the directory listing, unmaintained files could be prefixed with `zombie_`, which has the convenient side effect of placing them at the bottom of each directory.

Unmaintained status would propagate: any file that imports an unmaintained file would itself be considered unmaintained.

People could still use this as a route into the core library. Work could start in the unmaintained tier and be moved to the maintained tier later, once it is ready for full review.

A note on terminology: "maintained" does not mean perfect. Maintained files may still need refactoring or improvement; the only claim is that we take responsibility for keeping them working.

This is still a proposal — but if people are supportive, it seems worth pursuing.


(AI was used to improve wording and grammer of this post.)
