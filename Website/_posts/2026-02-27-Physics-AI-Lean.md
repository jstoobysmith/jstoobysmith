---
layout: post
title:  "Physics, AI and Lean"
date:   2026-02-27
type: card-img-top
categories:
caption:
last-updated:
categories: CS
tag: CS
author: Joseph Tooby-Smith
card: card-1
---

Recently there has been a dramatic increase in the number of people using AI to do physics in Lean. This ranges from seasoned researchers to weekend hobbyists.
The first thing I want to say is that it is genuinely impressive how far AI has come and what it can now do in the Lean sphere.

However, I also feel it is important to get across to the physicists and others who might have a cursory understanding of Lean, that many of these AI projects are producing what I would consider as “bad code”.

What does this mean? In the same way that there are two parts to writing a physics paper, doing the calculation and then finding the best way to articulate that calculation in a paper, there are two parts to writing Lean code.
The first part is getting to “merely true” (a term coined by Kim Morrison I believe). That is proofing the theorem you want to by whatever means possible. This is like doing the calculation.

The second part is making sure that the Lean code produced is reusable, maintainable, confirms to library standards and were possible is integrated into existing libraries. This is akin to making sure the calculation is well articulated. For ease of terminology, I am going to call this the “polishing part” although, the word polishing does not convey the magnitude of what it does to the code.
Within Lean both these parts are extremely important, and it is worth adding that it is often the polishing part which is the most work and requires the most skill and expertise.

In my opinion, and I believe the opinion of many experts of Lean, code which gets to merely true but which does not do the polishing part is bad code. To go back to my analogy, it is like writing a calculation on a pen-and-paper and submitting that to the arXiv with the hope that the reader will understand the scribbles. To be completely objective, earlier this year I wrote on my blog some standards of what makes good Lean code, code which is not polished often falls fowl of multiple of the points there.

So how does this tie in with AI written code… as you can probably guess it is often the case that  Lean libraries written with AI are not polished. In fact, I am yet to see one in the realm of physics. in many cases these libraries don’t even get to merely-true as they introduce axioms along the way (the use of axioms in any Lean code is IMO a no-go, but that is a story for another day).

So why should a physicist care about any of this? To me there is one killer reason, which every physicist should care about, even if they are not interested in helping the Lean ecosystem. This is readability. Lean does not check for many things, it does not check that definitions are correct, or that the theorem it is proving are the ones you want it to prove, it checks mathematical correctness only. The problem is that code which is not polished is often unreadable by anyone except the authors (go back to the example of a hand-written calculation), and thus one cannot verify or trust the correctness of these other aspects of the code.

This of course assumes that the (human) authors of the formalizaton themselves understand  it mathematically and can read the code. I think it is an even worse situation if they cannot,
as then there is no trusted verification (at all) that the definitions are correct, or
the right theorems are being proved. This leads to the questions whose job is it to provide
such verification? To me, the answer should always be the human authors. Not reviewers.
Not random members of the community.

Another reason physicists should care about polishing is reusability. Namely, how easy is it for someone to take your code and reuse what you have done in your own proofs. Code which is only ‘merely-true’ usually only fits the single purpose it was written for and is often not reusable for other tasks. The problem here is that someone else must come along and essentially rewrite the code, often putting a lot more thought and care into it. My main issue here is that the person who does this, is likely to get essentially zero credit in the physics community, even if they have done the majority of the work (something I think we must change).

The third and final reason physicists should care is reliability. This means how easy the code is to maintain long-term, how easy it is to run on small computers etc. Lean code written with an AI tends to be very long, which corresponds to very slow. This makes it hard to maintain and keep up to date with changes in the library.

At this point, the reader is probably thinking to themselves, well if we can use AI to get the “merely-true” then we can use it to do the “polishing”. To answer this, I want to adapt the title of Fred Schwed Jr.’s famous economics book “Where are the customers’ yachts?”, and say “Where are Mathlib’s PRs?”. If the task of “polishing” is so easy to do with AI, why is no one doing it, and why is Mathlib not inundated with high-quality PRs from AI. I believe it is actually inundated with low quality PRs from AI – which is another problem.
