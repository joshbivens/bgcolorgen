// Select our page's elements
// -- Div 1
const div1 = document.querySelector(".div1");
const color1 = div1.children[0];

// -- Div 2
const div2 = document.querySelector(".div2");
const color2 = div2.children[0];

// Misc
const container = document.querySelector(".container");
const gradientInfo = document.querySelector(".gradient-info");
const button = document.querySelector("button");

// Create list of hex values with starting and ending values
const gradients = [
  {
    start: "#4CA2CD",
    end: "#67B26F"
  },
  {
    start: "#EE0979",
    end: "#FF6A00"
  },
  {
    start: "#F3904F",
    end: "#3B4371"
  },
  {
    start: "#43C6AC",
    end: "#F8FFAE"
  },
  {
    start: "#16BFFD",
    end: "#CB3066"
  },
  {
    start: "#FF5F6D",
    end: "#FFC371"
  },
  {
    start: "#004FF9",
    end: "#FFF94C" 
  }
];

// So we want to pick one of the gradients at random
const random = (xs) => xs[Math.floor(Math.random() * xs.length)];

// Event Handlers
button.addEventListener("click", handleClick);

function handleClick() {
  setNewColors(gradients);
}

function setNewColors(arr) {
  // Cache random new color
  let newColors = random(arr);
  // Use it values to populate a linear-gradient
  let gradient = `linear-gradient(to right, ${newColors.start}, ${newColors.end})`;
  // Set bg and text properties
  container.style.background = gradient;
  gradientInfo.innerHTML = gradient;
  div1.style.background = `${newColors.start}`;
  color1.innerHTML = `${newColors.start}`
  div2.style.background = `${newColors.end}`;
  color2.innerHTML = `${newColors.end}`
}