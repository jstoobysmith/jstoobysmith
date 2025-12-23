---
layout: post
title:  "Datastructures and physics"
date:   2025-12-15
type: card-img-top
categories:
caption:
last-updated:
categories: CS
tag: CS
author: Joseph Tooby-Smith
card: card-1
---
One of the things which I found interesting from formalising Wick's theorem (the precursor to Feynman diagrams), is how many of the 'complex' things physicists work with can be reduced to very simple data structures in computer science, and how the precise representation of the data structure we reduce them to can massively effect how easy it is to work with them or think about them.

Take for example, Wick contractions, which are often taught in a Master's level quantum field theory course. In computer science they essentially correspond to unordered pairings of indices in a list where each index is in at most one pair. There are lots of ways one could represent this data structure in a program like Lean, from inductive types based on the inductive definition of a list, to involutions from the indices of the list back to itself. After lots of trail and error the definition I ended up with is the one shown below. It may not be the prettiest definition in the world, but it was the one that was easiest to work with, and to build and API around.

![Wick Contraction](/assets/images/WickContraction.jpeg)
