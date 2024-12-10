/*
Learning Objectives:
  1. Understand and utilize DOM element selection.
  2. Implement event listeners on buttons.
  3. Manipulate image attributes dynamically based on user interactions.

Brief:
You're provided with two images of a lightbulb: one turned on and one turned off. Your task is to implement the functionality to control the bulb's illumination. Use the 'Turn On' and 'Turn Off' buttons to switch the src attribute of the image tag, effectively lighting up or dimming the bulb.

Expected Outcomes:
  1. When the "Turn On" button is clicked, the lightbulb image should change to its 'on' state.✅
  2. When the "Turn Off" button is clicked, the lightbulb image should change to its 'off' state.
  3. The bulb's state should only change when the respective button is clicked.
*/

// Place your plan and solution below!

//Grab the turn of button
//grab the img src
//create a function in whcih, when the button is clicked the light turns on
//do this using a eventListener
//change the img src

const turnOn = document.getElementById("turnBulbOn");

const img = document.getElementById("lightbulb");

function handleClick() {

  img.src = "light-bulb-on.png";

}

turnOn.addEventListener("click",handleClick);

//grab the turn off button
//create a funtion in which, when the button is clicked the light turns off
//do this using a eventListener
//change the img src

const turnOff = document.getElementById("turnBulbOff");

function handleClickOff() {
  img.src = "light-bulb-off.png"
}

turnOff.addEventListener("click", handleClickOff);