import Mathlib



























def MyNat : Type := by sorry

namespace MyNat

def add : MyNat → MyNat → MyNat := by sorry

def mul : MyNat → MyNat → MyNat := by sorry

lemma add_assoc (a b c : MyNat) : add (add a b) c = add a (add b c) := by sorry

theorem ring_eq (a b c d : ℤ) :  a + b * c + d * c - a = (b + d) * c := by
  sorry



/-!

import Mathlib

inductive MyNat : Type
  | zero : MyNat
  | succ : MyNat → MyNat

namespace MyNat

def add : MyNat → MyNat → MyNat
  | .zero, a => a
  | .succ b, a => .succ (MyNat.add b a)


def mul : MyNat → MyNat → MyNat
  | .zero, a => .zero
  | .succ b, a => add (a) (mul b a)

lemma add_assoc (a b c : MyNat) : add (add a b) c = add a (add b c) := by
    intro a b c
    induction a with
    | zero =>
      rfl
    | succ n ih =>
      change add (add n.succ b) c = add n.succ (add b c)
      simp only [add, succ.injEq]
      exact ih


theorem ring_eq (a b c d : MyNat) :  a + b * c + d * c - a = (b + d) * c := by
  noncomm_ring
-/
