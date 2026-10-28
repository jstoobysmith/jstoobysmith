---
layout: post
title:  "Formalization and corpus building"
date:   2026-10-28
type: card-img-top
categories:
caption:
last-updated:
categories: Physlib
tag: Physlib
author: Joseph Tooby-Smith
card: card-1
description: ""
---

About a year ago, within the Lean community, when people said that they were working on formalization, what they really meant is that they were working on two distinct activities. The first is formalization, in the sense of writing a result into an interactive theorem prover to check its mathematical correctness and consistency. The second is something I'm going to call corpus building: that is to create a provably human-friendly, human-trusted, high-quality corpus of knowledge, which happens to be written in an interactive theorem prover. These two were synonymous because the vast majority of formalization was done in the project Mathlib and its twins CSLib and Physlib; which combined the goals of formalization with corpus building.

Over recent months, we have seen a rise in fast and furious formalizations with the use of AI. The progress of these formalizations is incredible, and we have got to the point where it is essentially possible to formalize any result that you want to. Whilst these fast and furious formalizations have been pushing forward the frontier, the projects Mathlib, CSLib, and Physlib have remained the bastions of the corpus ideal and the slow and steady progress to build these, which is necessitated by its human-focused and quality requirements. 

These two activities complement one another. From a fast and furious formalization, you get the trust of the mathematical content and correctness of a result quickly. By building a corpus, you create a foundation which others can build on and reuse and which fast and furious formalizations can depend on all safe in the knowledge that the results in that have been checked and verified by a human, that they are of the best quality possible, that they can be looked at and read by a human, and that every design decision and implementation decision has been carefully thought through. These corpora are the place to store the very best results, the results which are of the right generality, the right scope, and are presented in the right way for humans. These corpora also have the benefit that they allow connections between results and dependencies on assumptions to be easily tracked and verified. They provide the solid foundation on which future discoveries can be built and understood. 

The distinction between these two activities should be manifest to anybody that has worked in a programming language before. For example, in Python, you have standard libraries like SciPy, which include the best-quality, best-thought-through results possible (even though anyone could, in theory, write many of the results in there themselves). What you get from using SciPy is compatibility, efficiency, and trust. 

Within the project Physlib, we have an interface between these AI fast-and-furious formalizations and the core project itself. This is called PhyslibAlpha, and it acts as a fuzzy halo to Physlib, which can be rapidly expanded and adapted without having to go through the stringent review processes that are involved with the main corpus. 