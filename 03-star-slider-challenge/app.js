/*
Learning Objectives:
  1. Manipulate DOM elements based on user input.
  2. Dynamically create and delete elements based on slider values.
  3. Enhance understanding of event-driven programming.

Brief:
You're provided with a slider (ranging from 1 to 5) and an empty space to populate star icons. Your task is to create or remove stars dynamically based on the value of the slider.

Expected Outcomes:
  1. The number of star icons should match the slider's value.
  2. Adjusting the slider should immediately reflect the change in the number of star icons.
*/

// Place your plan and solution below!

//1.grab the slider.container
const sliderContainer = document.querySelector(".slider-container");


//2.grab the star-icon 

let starIcon = document.querySelector(".star-icon");

//3.attempt to change the value using js

let newVariable = document.querySelector(".star-icon").innerHTML="newtext";

//4. link the slider to the newVariable

function replaceStars(event) {

  starIcon.innerHTML = 
}

let newStars = addEventListener()

//function changeColor(event) {
  
  // event.target.value
  //grabCanvas.style.backgroundColor = event.target.value;
//}
// document.getElementById('id_element_in_html').innerHTML = `<li> ${somejsvar}</li>
console.log(newVariable);
//console.log(starIcon);
//change the display to a word - test

//can we just access the content of the star-icon
