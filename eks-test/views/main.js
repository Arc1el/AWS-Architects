const cube = document.getElementById("cube");

// Change the cube's color randomly every second
setInterval(() => {
  const randomColor = `rgb(${getRandomInt(0, 255)}, ${getRandomInt(0, 255)}, ${getRandomInt(0, 255)})`;
  cube.style.backgroundColor = randomColor;
}, 1000);

// Move the cube randomly when the mouse is over it
cube.addEventListener("mouseover", () => {
  const rotationX = getRandomInt(-10, 10);
  const rotationY = getRandomInt(-10, 10);
  const rotationZ = getRandomInt(-10, 10);
  cube.style.transform += `rotateX(${rotationX}deg) rotateY(${rotationY}deg) rotateZ(${rotationZ}deg)`;
});

// Utility function to get a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
