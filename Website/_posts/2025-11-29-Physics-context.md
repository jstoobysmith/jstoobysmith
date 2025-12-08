---
layout: post
title:  "Physics and mathematics context"
date:   2025-11-29
type: card-img-top
categories:
caption:
last-updated:
categories: CS
tag: CS
author: Joseph Tooby-Smith
card: card-1
---
In some of my talks and papers I try and articulate how I view the difference between mathematics and physics, from the point of view of programs like Lean.

In both mathematics and physics there are definitions, equations, theorems and proofs. Each such result has its "mathematical context" - the mathematical structures that make it up and the way that those structures are arranged to make a mathematically well-defined statement. For example, the mathematical context of the statement 'F = m * a' is that it is a propositional equality between two vectors and a non-negative real number.

Mathematics is about the beauty or complexity of said the mathematical context, or the insights which the mathematical context gives you.

However in physics, each result carries, in addition to its mathematical context, physical context. For example in 'F = m * a', the vector 'F' describes a force, and 'a' an acceleration. Physics cares about both the physics context of a result and the mathematical context, and importantly, how they interact with one another.

To me this distinction between maths and physics clearly distinguishes them as distinct subjects, and goes against the "spectrum" between physics and maths that is sometimes portrayed. It explains why, for example, maths papers are split into definitions and theorems, whilst physics papers are written in prose.

Interactive theorem provers (ITPs) are built around the mathematical context of results, and they help us ensure that the mathematical context is correct. However, ITPs don't say anything about the physics context of results. In the project PhysLean, we are trying to include that physics context through organization, documentation, names of lemmas and theorems, and in the style of proves.
