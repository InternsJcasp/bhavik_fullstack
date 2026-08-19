// Event Capturing Kya Hai?
// Simple Definition: Event ko target tak pahunchne se PEHLE hi pakad lena.

// Phase 1: Capturing (Top → Bottom)
// HTML → BODY → DIV → BUTTON
// (Upar se niche, event "capture" karte hue aa raha hai)

// Phase 2: Target (Actual Element)
// BUTTON pe event pahuncha
// (Yahan actual click hua)

// Phase 3: Bubbling (Bottom → Top) ← Default yehi use hota
// BUTTON → DIV → BODY → HTML
// (Niche se upar, event "bubble" karte hue ja raha hai)

// HTML:
{
  /* <div id="grandparent">
    <div id="parent">
        <button id="child">Click Me</button>
    </div>
</div> */
}

const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// CAPTURING PHASE (top → bottom)
grandparent.addEventListener(
  "click",
  () => {
    console.log("1. Grandparent - Capturing");
  },
  true,
); // ← true = capturing

parent.addEventListener(
  "click",
  () => {
    console.log("2. Parent - Capturing");
  },
  true,
);

// TARGET PHASE
child.addEventListener("click", () => {
  console.log("3. Child - Target Phase");
});

// BUBBLING PHASE (bottom → top)
parent.addEventListener("click", () => {
  console.log("4. Parent - Bubbling");
});

grandparent.addEventListener("click", () => {
  console.log("5. Grandparent - Bubbling");
});

// BUTTON CLICK KARNE PE OUTPUT:
// 1. Grandparent - Capturing
// 2. Parent - Capturing
// 3. Child - Target Phase
// 4. Parent - Bubbling
// 5. Grandparent - Bubbling
