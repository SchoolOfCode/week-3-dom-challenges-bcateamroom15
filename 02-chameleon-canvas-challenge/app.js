/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!
//1. Grab the canvas object using getElementbyId
const grabCanvas = document.getElementById("canvas");

//2. Grab the colour from the colour picker as an input
const grabColorPicker = document.getElementById("colorPicker");

//3. Function which takes colour as input and changes the canvas to that colour
// we need to access the color property of the canvas
//change the css property of the .canvas object
function changeColor(event) {
  grabColorPicker.addEventListener("input", );
  // event.target.value
  grabCanvas.style.backgroundColor = event.target.value
}
//4. Call the function with addEventListener


// We need to access the css property background-color
//How do we do this?
const canvasStyle = getComputedStyle(grabCanvas);
console.log(canvasStyle);
console.log(canvasStyle.backgroundColor);


//can we log the color property of colorPicker
// console.log("colorPicker");
// console.log(grabColorPicker)
// const colorPickerValue = getComputedStyle(grabColorPicker);
// console.log(colorPickerValue);

// console.log(addEventListener("input", grabColorPicker));
// console.log(changeColor())

// console.log(colorPicker.addEventListener("input", grabColorPicker))
// grabColorPicker.value
//it's a number!

console.log(changeColor())