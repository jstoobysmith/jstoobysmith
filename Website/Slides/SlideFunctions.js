

function physLeanTitleSlide (talkSpec) {

  return `<section style="color: #333;">
  <div style="position: absolute; top: 20px; left: 20px;">
    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://josephtoobysmith.com/Slides/${talkSpec}.html"
      alt="QR Code to Slides" style="border: 2px solid #666; border-radius: 8px; padding: 5px;">
    <div style="font-size: 12px; text-align: center; margin-top: -30px; color: #666;">Scan for slides</div>
  </div>
    <img src="Images/PhysLeanLogo.jpeg" style="border: 4px solid #666; border-radius: 15px; padding: 15px; max-width: 400px; margin: 20px auto; display: block; background-color: white; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transform: rotate(-3deg); transition: transform 0.3s ease;"
    onmouseover="this.style.transform='rotate(3deg)'"
    onmouseout="this.style.transform='rotate(-3deg)'">
    <p>Digitalizing physics into Lean 4</p>
    <p><small><span id="current-date"></span></small></p>
    <script>
      document.getElementById('current-date').textContent = new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    </script>
    <p><small>Joseph Tooby-Smith, University of Bath</small></p>

    <p><small>Slides at: https://josephtoobysmith.com/Slides/${talkSpec}.html</small></p>
</section>`
}


function blueScreenOfDeath () {
  return `
  <section data-background-color="#000080">
    <div style="font-family: 'Courier New', Courier, monospace; color: white; text-align: left; font-size: 24px; padding: 20px;">
      <p>A problem has been detected and Windows has been shut down to prevent damage to your computer.</p>

      <p>PAGE_FAULT_IN_NONPAGED_AREA</p>

      <p>If this is the first time you've seen this Stop error screen, restart your computer. If this screen appears again, follow these steps:</p>

      <p>Check to make sure any new hardware or software is properly installed. If this is a new installation, ask your hardware or software manufacturer for any Windows updates you might need.</p>

      <p>If problems continue, disable or remove any newly installed hardware or software. Disable BIOS memory options such as caching or shadowing. If you need to use Safe Mode to remove or disable components, restart your computer, press F8 to select Advanced Startup Options, and then select Safe Mode.</p>

      <p>Technical information:</p>

      <p>*** STOP: 0x00000050 (0xFD3094C2, 0x00000001, 0xFBFE7617, 0x00000000)</p>
    </div>
  </section>
  <section>`
}

function crowdStrikeStory() {
  let story = blueScreenOfDeath ();

  story +=`
  <!-- Story 1: The Crowd strike incident
    There data set change to include a bit of data of length 15, which was placed
      into an array of size 14. Cost $5.4 billion dollars -->
  <section data-auto-animate>
    <div style="display: flex; align-items: center; justify-content: space-between; margin: 30px auto; max-width: 90%;">
      <div
        style="flex: 1; background-color: #f8f5f2; padding: 30px; border-radius: 8px; border-left: 5px solid #3a5a78; box-shadow: 0 6px 12px rgba(0,0,0,0.08);">
        <h2
          style="font-family: 'Georgia', serif; color: #3a5a78; margin-bottom: 20px; text-align: center; font-weight: 600;">
          Story 1</h2>
        <h3 style="font-family: 'Georgia', serif; color: #333; text-align: center; line-height: 1.4;">
          CrowdStrike incident
        </h3>
      </div>
      <div style="flex: 1; text-align: center; margin-left: 40px;">
        <img src="./Images/BugInCodeChatGPT.png" alt="Bug in code illustration"
          style="max-width: 100%; max-height: 400px; border-radius: 6px; box-shadow: 0 8px 16px rgba(0,0,0,0.15); transition: transform 0.3s ease;"
          onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
      </div>
    </div>
  </section>

  <!-- Story 2: The arXiv paper hep-ph/0512212. -->
  <section data-auto-animate>
    <div style="text-align: center; margin: 20px auto; max-width: 90%;">
      <div
        style="background-color: #f8f5f2; padding: 15px; border-radius: 5px; border-left: 3px solid #3a5a78; box-shadow: 0 3px 6px rgba(0,0,0,0.08);">
        <h2 style="font-family: 'Georgia', serif; color: #3a5a78; margin-bottom: 10px; font-size: 0.9em;">Story 2: The
          arXiv paper hep-ph/0512212</h2>
        <!-- Equations will appear and then disappear -->
        <div style="position: relative; height: 40px; margin: 10px 0;">
          <p class="fragment fade-in-then-out" data-fragment-index="1"
            style="position: absolute; width: 100%; margin: 0; font-size: 0.8em; text-align: left;">$E = A_1 + A_2 + A_3
            + \\ldots + A_n$</p>
          <p class="fragment fade-in-then-out" data-fragment-index="2"
            style="position: absolute; width: 100%; margin: 0; font-size: 0.8em; text-align: left;">$E = A_1 + A_2 + A_3
            + \\ldots + A_n + B_1 + B_2$</p>
          <p class="fragment fade-in-then-out" data-fragment-index="3"
            style="position: absolute; width: 100%; margin: 0; font-size: 0.8em; text-align: left;">$E = A_1 + A_2 + A_3
            + \\ldots + A_n$</p>
          <p class="fragment fade-in" data-fragment-index="4"
            style="position: absolute; width: 100%; margin: 0; font-size: 0.8em; text-align: left;">$E = A_1 + A_2 + A_3
            + \\ldots + A_n + B_1 + B_2$</p>
        </div>
      </div>
    </div>
    <div style="position: relative; height: 700px; margin: 0 auto;">
      <!-- Images with fragment classes to control appearance -->
      <img src="./Images/arxiv_0512212/first.png" alt="First version" class="fragment fade-in" data-fragment-index="1"
        style="position: absolute; left: 50%; transform: translateX(-50%); top: 0; z-index: 1;
      max-width: 100%; max-height: 400px; border-radius: 6px; box-shadow: 0 8px 16px rgba(0,0,0,0.15);">
      <img src="./Images/arxiv_0512212/second.png" alt="Reply" class="fragment fade-in" data-fragment-index="2" style="position: absolute; left: 50%; transform: translateX(-50%); top: 100px; z-index: 2;
      max-width: 100%; max-height: 400px; border-radius: 6px; box-shadow: 0 8px 16px rgba(0,0,0,0.15);">
      <img src="./Images/arxiv_0512212/third.png" alt="Reply to reply" class="fragment fade-in" data-fragment-index="3"
        style="position: absolute; left: 50%; transform: translateX(-50%); top: 200px; z-index: 3;
      max-width: 100%; max-height: 400px; border-radius: 6px; box-shadow: 0 8px 16px rgba(0,0,0,0.15);">
      <img src="./Images/arxiv_0512212/fourth.png" alt="Reply to reply to reply" class="fragment fade-in"
        data-fragment-index="4" style="position: absolute; left: 50%; transform: translateX(-50%); top: 300px; z-index: 4;
      max-width: 100%; max-height: 400px; border-radius: 6px; box-shadow: 0 8px 16px rgba(0,0,0,0.15);">
    </div>
  </section>

<section>
  <h3 style="font-family: 'Georgia', serif; color: #3a5a78">
    Different Manifestations of the Same Problem
  </h3>
  <p>Not helped by the following...</p>
  <div style="display: flex; justify-content: center; max-width: 90%; margin: 0 auto;">
    <textarea placeholder="Something like latex or MS word..."
      style="width: 100%; height: 400px; padding: 15px; border: 2px solid #ddd; border-radius: 6px; font-size: 1.1em; box-sizing: border-box; resize: vertical; font-family: 'Georgia', serif; box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);"></textarea>
  </div>
</section>

<section>
  <script>
    document.write(classicQuote('What if there was a way to guarantee your code, problem sets,or papers are correct?'));
  </script>
</section>

<!-- Different manifestations of common solution: Correct by construction. -->
<section data-auto-animate>
  <div
    style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 40px; border-radius: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.12); margin: 0 auto; max-width: 90%;">
<p>Use an </p>
    <p >Interactive theorem provers</p>
    <p style="font-size:0.5em;">"A programming language in which you can write mathematical definitions, theorems and their proofs,
    as well as computer functions,
    and correctness is guaranteed by construction."</p>
</section>

<!-- The different proof assistants. -->
<section>
  <section data-auto-animate></section>
  <h2 style="font-family: 'Georgia', serif; color: #3a5a78; text-align: center; margin-bottom: 30px;">Popular ITPs</h2>

  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 100px; margin: 0 auto; max-width: 90%;">
    <!-- Coq -->
    <div style="flex: 1; min-width: 250px; background: linear-gradient(to right, #2c3e50 0%, #2c3e50 5px, #f8f9fa 5px, #f8f9fa 100%);
          padding: 25px; border-radius: 10px; box-shadow: 0 6px 16px rgba(0,0,0,0.1); transition: transform 0.3s ease;"
      onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
      <h3
        style="margin-top: 0; color: #2c3e50; font-weight: 600; border-bottom: 2px solid rgba(44, 62, 80, 0.2); padding-bottom: 10px;">
        Rocq</h3>
    </div>

    <!-- Isabelle -->
    <div style="flex: 1; min-width: 250px; background: linear-gradient(to right, #8e44ad 0%, #8e44ad 5px, #f8f9fa 5px, #f8f9fa 100%);
          padding: 25px; border-radius: 10px; box-shadow: 0 6px 16px rgba(0,0,0,0.1); transition: transform 0.3s ease;"
      onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
      <h3
        style="margin-top: 0; color: #8e44ad; font-weight: 600; border-bottom: 2px solid rgba(142, 68, 173, 0.2); padding-bottom: 10px;">
        Isabelle/HOL</h3>
    </div>

    <!-- Lean -->
    <div style="flex: 1; min-width: 250px; background: linear-gradient(to right, #27ae60 0%, #27ae60 5px, #f8f9fa 5px, #f8f9fa 100%);
          padding: 25px; border-radius: 10px; box-shadow: 0 6px 16px rgba(0,0,0,0.1); transition: transform 0.3s ease;"
      onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
      <h3
        style="margin-top: 0; color: #27ae60; font-weight: 600; border-bottom: 2px solid rgba(39, 174, 96, 0.2); padding-bottom: 10px;">
        Lean</h3>
    </div>

    <!-- Agda -->
    <div style="flex: 1; min-width: 250px; background: linear-gradient(to right, #e74c3c 0%, #e74c3c 5px, #f8f9fa 5px, #f8f9fa 100%);
          padding: 25px; border-radius: 10px; box-shadow: 0 6px 16px rgba(0,0,0,0.1); transition: transform 0.3s ease;"
      onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
      <h3
        style="margin-top: 0; color: #e74c3c; font-weight: 600; border-bottom: 2px solid rgba(231, 76, 60, 0.2); padding-bottom: 10px;">
        Agda</h3>
    </div>
  </div>
</section>
<!-- An example of Lean. -->
<section>
  <h2>An example of Lean</h2>
  <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0;">
    <iframe
      src="https://live.lean-lang.org/#codez=JYWwDg9gTgLgBAWQIYwBYBtgCMBQf8GFHEAmApgGaICeAcinAFxwAq1YZTAvHFtXAGdoUangB2SEGQFgkAY04I6KPOSpISJJjXrxASYQ6GBpbu69+QqCNWU4IAK7ptJo4f1uzfQcNE50ZEBAkOA0SAH0kASE5OAAKYKw4GOYXGABKbVC4rISMmJ4c7M1eJIzGHi9LETg8NDJoALgoYDEAczCyAEdskpitZkASQjK4ELgAahKAKiTxuC1pmIBaUZ5YxImSDIXPURGq3zwAekWAQjxQSFhEFAxsc7ESezkYYAA3RWV4ZjYOHBGAHzgAC8yFAIM5Pn84ICBE9kh5jJCcBIpDJ5B9dDZ1MUUp84IjTASVAC4AA6EFggA0KwAfCEoYDSbC5DEsNTglw6Uy4XFUqSsokkGl8Go7I4IYSEW4GWSKRB2XBObLQRAZdyWbwFUqsvEMrEHE5BcK/AEgiFNBEohAYvFehKUMMdYUsHlFeatMF4sVEnIyhVdiM4C0YGDRj6oSMWo9nsAIGJRgB3YBoCPQ4EqxU01MjKAUdCpmE8+PAVCZ7NJVBINqcJ3FMTq1mugp1htFLQ+4WBwMCC5wOPofgAbVC1OZclJLQAVgBRToAXXLZAAHvJ4CX8HUGiAmi12l0ej65vb0tpRhNEtsNnBtssOXF1nMtjNyuYoWI43IIIEws02jhFocOBAA"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 4px solid #666; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"
      allowfullscreen>
    </iframe>
  </div>
  <div style="text-align: center; margin-top: 10px; font-size: 0.6em; color: #666;">
    View at: https://<span style="color: #333;">josephtoobysmith</span>.<span style="color: #555;">com</span>/<span
      style="color: #777;">Slides</span>/<span style="color: #999;">Bath2026</span>.<span
      style="color: #555;">html</span>
  </div>
</section>

<section>
  <h3 style="font-family: 'Georgia', serif; color: #3a5a78; margin-bottom: 20px;">How Lean Works</h3>
  <div
    style="background: linear-gradient(to right, #27ae60 0%, #27ae60 5px, #f8f5f2 5px, #f8f5f2 100%);
              padding: 25px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.08); max-width: 90%; margin: 0 auto;">
    <ul style="list-style-type: none; padding-left: 5px; margin: 0;">
      <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
        <span style="position: absolute; left: 0; color: #27ae60;">•</span> Define types by their terms
      </li>
      <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
        <span style="position: absolute; left: 0; color: #27ae60;">•</span> Create new types from existing ones
      </li>
      <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
        <span style="position: absolute; left: 0; color: #27ae60;">•</span> Propositions as types
      </li>
      <li style="margin-bottom: 10px; padding-left: 20px; position: relative;">
        <span style="position: absolute; left: 0; color: #27ae60;">•</span> Proofs are terms of proposition types
      </li>
      <li style="padding-left: 20px; position: relative;">
        <span style="position: absolute; left: 0; color: #27ae60;">•</span> Uses axioms like function extensionality
      </li>
    </ul>
  </div>
</section>

<section>
  <h3 style="font-family: 'Georgia', serif; color: #3a5a78; margin-bottom: 30px;">Advantages of ITPs</h3>

  <script>
    document.write(timelineBox('1', 'Correctness'));
    document.write(timelineBox('2', 'Tactic Automation'));
    document.write(timelineBox('3', 'Searchable'));
    document.write(timelineBox('4', 'Reusable'));
    document.write(timelineBox('5', 'Executable'));
  </script>
</section>

`
  return story;
}

function AIExampleSlides() {
  return `
  <section>
  <h2 style="font-family: 'Georgia', serif; color: #3a5a78; margin-bottom: 20px; text-align: center; font-weight: 50;">
    An example of AI</h2>
<section>
    <script>
    document.write(simpleCodeBlock(\`
import Mathlib

inductive MyNat : Type
  | zero : MyNat
  | succ : MyNat → MyNat

namespace MyNat

def add : MyNat → MyNat → MyNat
  | .zero, a => a
  | .succ b, a => .succ (MyNat.add b a)


lemma add_assoc (a b c : MyNat) : add a (add b c) = add (add a b) c := by
  sorry\`));
    </script>
</section>
<section>
  <script>
    document.write(myIFrame("https://demo.projectnumina.ai"));
  </script>
</section>
<section>
  <script>
    document.write(simpleCodeBlock(\`
import Mathlib

theorem ineq (N : Nat) (a : ℝ) (n : Fin N) :
    -Real.pi / a ≤ 2 * Real.pi / (a * ↑N) * (↑↑n - ↑(N / 2)) := by
  sorry\`));
  </script>
</section>
<section>
  <script>
  document.write(myIFrame("https://demo.projectnumina.ai"));
  </script>
</section>
</section>`
}
