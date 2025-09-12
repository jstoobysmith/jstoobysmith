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

// Original function retained for compatibility
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
