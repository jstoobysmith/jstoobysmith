/**
 *
 * Default slides:
 *
 */


function thankYouSlide() {
  return `
<section>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 70vh;">
    <h2
      style="font-family: 'Georgia', serif; color: #3a5a78; margin-bottom: 20px; text-align: center; font-weight: 600;">
      Thank You</h2>
    <div style="width: 100px; height: 4px; background-color: #27ae60; margin: 20px 0;"></div>
    <p style="font-family: 'Georgia', serif; color: #333; text-align: center; margin: 15px 0;">Joseph Tooby-Smith</p>
    <div style="margin-top: 40px; max-width: 600px; text-align: center;">
      <p style="font-size: 0.9em; color: #555;">
        <a href="https://josephtoobysmith.com"
          style="color: #27ae60; text-decoration: none; transition: color 0.3s ease;"
          onmouseover="this.style.color='#219653'" onmouseout="this.style.color='#27ae60'">josephtoobysmith.com</a>
      </p>
      <p style="font-size: 0.9em; color: #555; margin-top: 10px;">Questions?</p>
    </div>
  </div>
</section>`
}


/**

## Box functions

*/

// Variation 1: Modern Gradient Style
function modernBox(number, text) {
  return `
    <div style="display: flex; align-items: center; margin-bottom: 25px;">
      <div
        style="min-width: 60px; height: 60px; background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); border-radius: 10px; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 15px rgba(37, 117, 252, 0.3);">
        <span style="color: white; font-weight: bold; font-size: 1.5em;">${number}</span>
      </div>
      <div
        style="margin-left: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #2575fc; border-radius: 0 8px 8px 0; flex-grow: 1; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
        <span style="font-size: 1.1em;">${text}</span>
      </div>
    </div>`;
}


function modernBoxAppear(number, text) {
  let box = modernBox(number, text);
  return `<div class="fragment fade-in">${box}</div>`;
}

function modernBoxList(items, startNumber = 1) {
  return items.map((item, index) => modernBoxAppear(startNumber + index, item)).join('');
}


// Variation 2: Minimalist Style
function minimalBox(number, text) {
  return `
    <div style="display: flex; align-items: center; margin-bottom: 25px;">
      <div
        style="min-width: 50px; height: 50px; border: 2px solid #333; display: flex; justify-content: center; align-items: center;">
        <span style="color: #333; font-weight: bold; font-size: 1.5em;">${number}</span>
      </div>
      <div
        style="margin-left: 15px; padding: 12px 20px; border-bottom: 2px solid #333; flex-grow: 1;">
        <span style="font-size: 1.1em; color: #333;">${text}</span>
      </div>
    </div>`;
}

function minimalBoxAppear(number, text) {
  return `
    <div class="fragment fade-in" style="display: flex; align-items: center; margin-bottom: 25px;">
      <div
        style="min-width: 50px; height: 50px; border: 2px solid #333; display: flex; justify-content: center; align-items: center;">
        <span style="color: #333; font-weight: bold; font-size: 1.5em;">${number}</span>
      </div>
      <div
        style="margin-left: 15px; padding: 12px 20px; border-bottom: 2px solid #333; flex-grow: 1;">
        <span style="font-size: 1.1em; color: #333;">${text}</span>
      </div>
    </div>`;
}
// Variation 3: Card Style
function cardBox(number, text) {
  return `
    <div style="display: flex; background-color: white; border-radius: 12px; padding: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); margin-bottom: 25px;">
      <div
        style="min-width: 50px; height: 50px; background-color: #ff6b6b; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 20px;">
        <span style="color: white; font-weight: bold; font-size: 1.3em;">${number}</span>
      </div>
      <div style="display: flex; align-items: center; flex-grow: 1;">
        <span style="font-size: 1.1em; color: #444;">${text}</span>
      </div>
    </div>`;
}

function cardBoxAppear(number, text) {
  return `
    <div class="fragment fade-in" style="display: flex; background-color: white; border-radius: 12px; padding: 15px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); margin-bottom: 25px;">
      <div
        style="min-width: 50px; height: 50px; background-color: #ff6b6b; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 20px;">
        <span style="color: white; font-weight: bold; font-size: 1.3em;">${number}</span>
      </div>
      <div style="display: flex; align-items: center; flex-grow: 1;">
        <span style="font-size: 1.1em; color: #444;">${text}</span>
      </div>
    </div>`;
}
// Variation 4: Dark Theme
function darkBox(number, text) {
  return `
    <div style="display: flex; align-items: center; margin-bottom: 25px;">
      <div
        style="min-width: 60px; height: 60px; background-color: #414444ff; border-radius: 12px; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">
        <span style="color: #00cec9; font-weight: bold; font-size: 1.5em;">${number}</span>
      </div>
      <div
        style="margin-left: 20px; padding: 15px; background-color: #414444ff; border-left: 4px solid #00cec9; border-radius: 0 8px 8px 0; flex-grow: 1; box-shadow: 2px 2px 5px rgba(0,0,0,0.2);">
        <span style="font-size: 1.1em; color: #dfe6e9;">${text}</span>
      </div>
    </div>`;
}

// Variation 5: Colorful Timeline Style
function timelineBox(number, text) {
  const colors = ['#2980b9', '#6c5ce7', '#8b4513', '#a0522d', '#3498db'];
  const color = colors[(number - 1) % colors.length];

  return `
    <div style="position: relative; padding-left: 70px; margin-bottom: 30px; min-height: 60px;">
      <div style="position: absolute; left: 0; top: 0; width: 60px; height: 60px; background-color: ${color}; border-radius: 50%; display: flex; justify-content: center; align-items: center; z-index: 2;">
        <span style="color: white; font-weight: bold; font-size: 1.5em;">${number}</span>
      </div>
      <div style="position: absolute; left: 30px; top: 60px; bottom: -30px; width: 2px; background-color: ${color}; z-index: 1;"></div>
      <div style="padding: 15px; background-color: white; border-left: 4px solid ${color}; border-radius: 8px; box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
        <span style="font-size: 1.1em;">${text}</span>
      </div>
    </div>`;
}

function timelineBoxAppear(number, text) {
  let box = timelineBox(number, text);
  return `<div class="fragment fade-in">${box}</div>`;
}

function timelineBoxList(items, startNumber = 1) {
  return items.map((item, index) => timelineBoxAppear(startNumber + index, item)).join('');
}

// Variation 6: Numbered boxes

function numberedBox(number, text) {
  const colors = ['#4ca1af', '#af774c'];
  const color = colors[(number - 1) % colors.length];
  return `
    <div style="display: flex; align-items: center; margin-bottom: 25px;">
      <div
        style="min-width: 60px; height: 60px; background-color:${color}; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
        <span style="color: white; font-weight: bold; font-size: 1.5em;">${number}</span>
      </div>
      <div
        style="margin-left: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid ${color}; border-radius: 0 8px 8px 0; flex-grow: 1; box-shadow: 2px 2px 5px rgba(0,0,0,0.1);">
        <span style="font-size: 1.1em;">${text}</span>
      </div>
    </div>`;
}


function numberedBoxAppear(number, text) {
  let box = numberedBox(number, text);
  return `<div class="fragment fade-in">${box}</div>`;
}

function numberedBoxList(items, startNumber = 1) {
  return items.map((item, index) => numberedBoxAppear(startNumber + index, item)).join('');
}

function halfBox(number, text) {
  const colors = ['#4ca1af', '#af774c'];
  const color = colors[(number - 1) % colors.length];
  return `
  <div style="display: flex; align-items: center; margin-bottom: 25px;">
        <div
        style="min-width: 60px; height: 60px; background-color: ${color}; border-radius: 50%; display: flex; justify-content: center; align-items: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
        <span style="color: white; font-weight: bold; font-size: 1.5em;">${number}</span>
        </div>
        <div
        style="margin-left: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid ${color}; border-radius: 0 8px 8px 0; flex-grow: 1; box-shadow: 2px 2px 5px rgba(0,0,0,0.1);">
        <span style="font-size: 0.6em;">${text}</span>
        </div>
      </div>`

}

/**
 ## Quote boxes

 */

// Variation 1: Classic Style
function classicQuote(quote) {
  return `
    <div style="margin: 30px auto; padding: 25px; border-left: 5px solid #e0e0e0; background-color: #fdfdfd; max-width: 80%;">
      <p style="font-family: 'Georgia', serif; font-style: italic; font-size: 1em; color: #444; margin: 0 0 15px 0; line-height: 1.6;">${quote}</p>
    </div>`;
}

// Variation 2: Modern Minimalist
function modernQuote(quote) {
  return `
    <div style="margin: 30px auto; padding: 30px; background-color: white; border-radius: 8px; box-shadow: 0 6px 25px rgba(0,0,0,0.08); max-width: 80%;">
      <p style="font-family: 'Inter', sans-serif; font-size: 1.25em; color: #333; margin: 0 0 20px 0; line-height: 1.5;">${quote}</p>
    </div>`;
}

// Variation 3: Artistic with Background Quote Mark
function artisticQuote(quote) {
  return `
    <div style="position: relative; margin: 40px auto; padding: 30px; background-color: #f7f9fc; border-radius: 10px; max-width: 80%;">
      <div style="position: absolute; top: 10px; left: 15px; font-size: 8em; color: rgba(0, 0, 0, 0.05); font-family: 'Times New Roman', serif; z-index: 1; user-select: none;">“</div>
      <div style="position: relative; z-index: 2;">
        <p style="font-family: 'Playfair Display', serif; font-size: 1.4em; color: #3a3a3a; margin: 0 0 15px 0; line-height: 1.6;">${quote}</p>
      </div>
    </div>`;
}

// Variation 4: Dark Theme Quote
function darkThemeQuote(quote) {
  return `
    <div style="margin: 30px auto; padding: 25px; background-color: #2d3436; border-left: 5px solid #00b894; border-radius: 5px; max-width: 80%;">
      <p style="font-family: 'Roboto', sans-serif; font-size: 1.2em; color: #dfe6e9; margin: 0 0 15px 0; line-height: 1.6;">“${quote}”</p>
    </div>`;
}

// Variation 5: Highlighted Text Style
function highlightQuote(quote) {
  return `
    <div style="margin: 30px auto; padding: 20px; text-align: center; max-width: 80%;">
      <p style="font-family: 'Montserrat', sans-serif; font-weight: 600; font-size: 1.5em; color: #333; margin: 0 0 15px 0; line-height: 1.5; background: linear-gradient(180deg, rgba(255,255,255,0) 60%, #fdcb6e 60%); display: inline;">${quote}</p>
    </div>`;
}
/**

## Title slides

*/

function titleSlideBoxed(text) {
  return `
    <section>
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 80vh;">
    <div style="width: 80%; max-width: 1000px; padding: 50px; text-align: center; border: 2px solid #666; border-radius: 10px; box-shadow: 0 15px 40px rgba(0,0,0,0.2); background-color: white;">
      <h1 style="font-family: 'Playfair Display', Georgia, serif; font-size: 2em; color: #333; margin-bottom: 20px; letter-spacing: 1px; text-transform: uppercase; font-weight: 700; text-shadow: 2px 2px 4px rgba(0,0,0,0.15);">${text}</h1>
    </div>
  </div>
  </section>`
}

/**

## Overview slides

 */

function threeOverview(text1, text2, text3) {
  return `

  <div style="perspective: 1000px; width: 100%; height: 400px; position: relative;">
    <!-- Floating cards in 3D space -->
    <div style="position: absolute; left: 20%; top: 50%; transform: translate(-50%, -50%) rotateY(-15deg) rotateX(5deg);
                width: 250px; height: 300px; background: linear-gradient(135deg, #4ca1af 0%, #2c3e50 100%);
                border-radius: 15px; padding: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.3);
                color: white; text-align: center; transition: all 0.3s ease;"
      onmouseover="this.style.transform='translate(-50%, -50%) rotateY(-5deg) rotateX(0deg) scale(1.05)'; this.style.boxShadow='0 20px 40px rgba(0,0,0,0.4)'"
      onmouseout="this.style.transform='translate(-50%, -50%) rotateY(-15deg) rotateX(5deg)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.3)'">
      <h3 style="margin-top: 40px; font-size: 1.5em; color: #ffffff;">I</h3>
      <div style="width: 40px; height: 4px; background-color: #ffffff; margin: 15px auto;"></div>
      <p style="font-size: 0.7em;">${text1}</p>
      <div
        style="position: absolute; bottom: 20px; width: 80%; left: 10%; height: 3px; background: rgba(255,255,255,0.3);">
      </div>
    </div>

    <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
                width: 250px; height: 300px; background: linear-gradient(135deg, #af774c 0%, #8b4513 100%);
                border-radius: 15px; padding: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.3);
                color: white; text-align: center; z-index: 10; transition: all 0.3s ease;"
      onmouseover="this.style.transform='translate(-50%, -50%) scale(1.05)'; this.style.boxShadow='0 20px 40px rgba(0,0,0,0.4)'"
      onmouseout="this.style.transform='translate(-50%, -50%)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.3)'">
      <h3 style="margin-top: 40px; font-size: 1.5em; color: #ffffff;">II</h3>
      <div style="width: 40px; height: 4px; background-color: #ffffff; margin: 15px auto;"></div>
      <p style="font-size: 0.9em;">${text2}</p>
      <div
        style="position: absolute; bottom: 20px; width: 80%; left: 10%; height: 3px; background: rgba(255,255,255,0.3);">
      </div>
    </div>

    <div style="position: absolute; left: 80%; top: 50%; transform: translate(-50%, -50%) rotateY(15deg) rotateX(5deg);
                width: 250px; height: 300px; background: linear-gradient(135deg, #27ae60 0%, #134e5e 100%);
                border-radius: 15px; padding: 20px; box-shadow: 0 15px 35px rgba(0,0,0,0.3);
                color: white; text-align: center; transition: all 0.3s ease;"
      onmouseover="this.style.transform='translate(-50%, -50%) rotateY(5deg) rotateX(0deg) scale(1.05)'; this.style.boxShadow='0 20px 40px rgba(0,0,0,0.4)'"
      onmouseout="this.style.transform='translate(-50%, -50%) rotateY(15deg) rotateX(5deg)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.3)'">
      <h3 style="margin-top: 40px; font-size: 1.5em; color: #ffffff;">III</h3>
      <div style="width: 40px; height: 4px; background-color: #ffffff; margin: 15px auto;"></div>
      <p style="font-size: 0.9em;">${text3}</p>
      <div
        style="position: absolute; bottom: 20px; width: 80%; left: 10%; height: 3px; background: rgba(255,255,255,0.3);">
      </div>
    </div>
  </div>`
}

/**
 *
 * Scroll boxes
 *
 * */

function scrollBox(text) {
  return `
    <div
        style="flex: 0 0 320px; margin: 0 15px; padding: 25px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.08); border-left: 5px solid #27ae60;">
        <p style="font-family: 'Georgia', serif; margin-bottom: 0;">${text}</p>
      </div>`
}


/**
 *
 * Rotating Wheel
 *
 */
function rotatingWheel(items) {
  const uniqueId = `wheel-${Math.random().toString(36).substring(2, 9)}`;
  const itemCount = items.length;
  const angle = 360 / itemCount;
  const radius = 150; // Adjust this for barrel curvature

  const itemsHtml = items.map((item, i) => `
    <div class="wheel-item" style="transform: rotateX(${i * angle}deg) translateZ(${radius}px);">
      ${item}
    </div>
  `).join('');

  return `
    <style>
      #${uniqueId} .wheel-container {
        perspective: 1000px;
        width: 750;
        height: 150px;
        position: relative;
        margin: 50px auto;
        border: 2px solid #ccc;
        border-radius: 10px;
        overflow: hidden;
        background: #f9f9f9;
      }
      #${uniqueId} .wheel {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        transition: transform 0.5s;
        transform: translateZ(-${radius}px) rotateX(0deg);
      }
      #${uniqueId} .wheel-item {
        position: absolute;
        width: 100%;
        height: 150px;
        line-height: 150px;
        text-align: center;
        font-size: 1.2em;
        color: #333;
        background: rgba(255, 255, 255, 0.8);
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        backface-visibility: hidden;
      }
      #${uniqueId} .wheel-controls {
        text-align: center;
        margin-top: 10px;
      }
      #${uniqueId} .wheel-btn {
        padding: 8px 16px;
        font-size: 1em;
        cursor: pointer;
        background-color: #414444ff;
        color: white;
        border: none;
        border-radius: 5px;
        margin: 0 5px;
      }
       #${uniqueId} .wheel-btn:hover {
        background-color: #00cec9;
       }
    </style>
    <div id="${uniqueId}">
      <div class="wheel-container">
        <div class="wheel">
          ${itemsHtml}
        </div>
      </div>
      <div class="wheel-controls">
        <button class="wheel-btn" onclick="rotateWheel('${uniqueId}', -1)">▲</button>
        <button class="wheel-btn" onclick="rotateWheel('${uniqueId}', 1)">▼</button>
      </div>
    </div>
    <script>
      if (typeof window.wheelStates === 'undefined') {
        window.wheelStates = {};
      }
      window.wheelStates['${uniqueId}'] = {
        currentIndex: 0,
        angle: ${angle},
        itemCount: ${itemCount}
      };

      if (typeof window.rotateWheel === 'undefined') {
        window.rotateWheel = function(id, direction) {
          const state = window.wheelStates[id];
          if (!state) return;

          state.currentIndex += direction;

          const wheelElement = document.querySelector(\`#\${id} .wheel\`);
          const rotation = -state.currentIndex * state.angle;
          wheelElement.style.transform = \`translateZ(-${radius}px) rotateX(\${rotation}deg)\`;
        }
      }
    </script>
  `;
}


function longBarChangeingText (items) {
  const itemHTML = items.map(item => `<div class="fragment fade-in-then-out" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%;">
      <p>${item}</p>
    </div>`).join('');
  return `<div style="margin: 20px auto; padding: 20px; border: 2px solid #4ca1af; border-radius: 10px; background-color: #f2f9fa; width: 70%; text-align: center; position: relative; min-height: 60px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    ${itemHTML}

  </div>`
}



/**
 * Fetches code from a given URL and injects it into a specified container element
 * as a formatted code slide for Reveal.js. It handles syntax highlighting via
 * RevealHighlight and displays an error message if the fetch fails.

Useage :
 <pre id="lean-slide" style="border: 2px solid #ccc; padding: 15px; border-radius: 5px; width: 90%;"></pre>
  <script>
    makeCodeSlide(
      "lean-slide",
      "https://raw.githubusercontent.com/HEPLean/PhysLean/master/PhysLean/Electromagnetism/Basic.lean"
    );
  </script>
 */
function makeCodeSlide(containerId, url, lang = "lean", fontSize = "0.8em") {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(text => {
      const codeBlock = document.getElementById(containerId);
      const urlShort = url.replace("https://raw.githubusercontent.com/HEPLean/PhysLean/master/PhysLean", "..");
      codeBlock.innerHTML =
        `<code data-trim data-noescape class="language-${lang}" style="font-size: ${fontSize} !important;">`
        + text + `</code><p style="font-size: 0.6em; margin: 0; text-align: center;"><a href="${url}" style="color: inherit; text-decoration: none;">${urlShort}</a></p>`;

      // Highlight just this code block
      const codeEl = codeBlock.querySelector("code");
      if (window.RevealHighlight) {
        RevealHighlight().hljs.highlightElement(codeEl);
      }
    })
    .catch(error => {
      const codeBlock = document.getElementById(containerId);
      codeBlock.textContent = `Error loading code from URL:\n${url}\n\nDetails: ${error}`;
      console.error("Error loading text:", error);
    });
}


function myIFrame(url, height = "100%") {
  return `
  <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0;">
    <iframe src="${url}"
      style="position: absolute; top: 0; left: 0; width: 100%; height: ${height}; border: 4px solid #666; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);"
      allowfullscreen>
    </iframe>
  </div>`
}

/**
 * Lean file display
 *
*/

let leanFiles = [];
fetch('https://api.github.com/repos/HEPLean/PhysLean/git/trees/master?recursive=1')
  .then(response => response.json())
  .then(data => {
    leanFiles = data.tree.filter(file => file.path.endsWith('.lean')).map(file => file.path);
    // You can now use the leanFiles array
    // For example, log it to the console:
    // console.log(leanFiles);
  })
  .catch(error => console.error('Error fetching repository tree:', error));
function renderLeanFiles() {

  const container = document.getElementById('lean-files-container');

  function buildFileTree(files) {
    const tree = {};
    files.forEach(path => {
      const parts = path.split('/');
      let currentLevel = tree;
      parts.forEach((part, index) => {
        if (index === parts.length - 1) { // It's a file
          if (!currentLevel._files) {
            currentLevel._files = [];
          }
          currentLevel._files.push({ name: part, path: path });
        } else { // It's a directory
          if (!currentLevel[part]) {
            currentLevel[part] = {};
          }
          currentLevel = currentLevel[part];
        }
      });
    });
    return tree;
  }

  function createHtmlTree(node) {
    const ul = document.createElement('ul');
    ul.style.listStyleType = 'none';
    ul.style.paddingLeft = '10px'; /* Removed indent */
    ul.style.marginLeft = '0px'; /* Added margin reset */

    // Sort directories first, then files
    const sortedKeys = Object.keys(node).sort((a, b) => {
      if (a === '_files') return 1;
      if (b === '_files') return -1;
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });

    for (const key of sortedKeys) {
      if (key === '_files') {
        node._files.sort((a, b) => a.name.localeCompare(b.name)).forEach(file => {
          const li = document.createElement('li');
          li.textContent = file.name;
          li.style.paddingLeft = '5px';
          li.style.cursor = 'pointer'; // Indicate it's clickable
          li.style.marginLeft = '0px'; /* Added margin reset */

          // Add click event listener
          li.onclick = function () {
            const filePath = file.path;
            if (filePath) {
              const rawUrl = `https://raw.githubusercontent.com/HEPLean/PhysLean/master/${filePath}`;
              makeCodeSlide("EM-slide-1", rawUrl, "lean", "0.6em");
            } else {
              console.error('File path not found for', file.name);
            }
          };
          ul.appendChild(li);
        });
      } else {
        const li = document.createElement('li');
        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = key;
        summary.style.cursor = 'pointer';
        details.appendChild(summary);
        details.appendChild(createHtmlTree(node[key]));
        li.appendChild(details);
        ul.appendChild(li);
      }
    }
    return ul;
  }

  if (leanFiles && leanFiles.length > 0) {
    const fileTree = buildFileTree(leanFiles);
    const htmlTree = createHtmlTree(fileTree);
    container.innerHTML = ''; // Clear previous content
    container.appendChild(htmlTree);
  } else {
    container.textContent = 'Loading Lean files...';
    // Retry after a short delay if leanFiles isn't populated yet
    setTimeout(renderLeanFiles, 500);
  }
}


function simpleCodeBlock(code) {
  return `<div style="display: flex; justify-content: center; max-width: 90%; margin: 0 auto;">
    <pre>
        <code data-trim data-noescape class="language-lean" style="font-size: 1em !important;">
                  ${code}
                </code>
                      </pre>
  </div>`;}
