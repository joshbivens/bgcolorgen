// Select our page's elements
const container = document.querySelector('.container');
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const button = document.querySelector('button');

// Create list of hex values with starting and ending values
const gradients = [
  {
    start: "#4ca2cd",
    end: "#67B26F"
  },
  {
    start: "#ee0979",
    end: "#ff6a00"
  },
  {
    start: "#F3904F",
    end: "#3B4371"
  },
  {
    start: "#3a6186",
    end: "#89253e"
  },
  {
    start: "#16BFFD",
    end: "#CB3066"
  },
];

// So we want to pick one of the gradients at random
let random = (xs) => xs[Math.floor(Math.random() * xs.length)];

// Now we want to apply the new hex values to our bg and divs
container.style.background = `linear-gradient(to bottom, ${random(gradients).start}, ${random(gradients).end})`;