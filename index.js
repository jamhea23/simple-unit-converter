let convertBtn = document.getElementById("convert-btn");

// console.log(convertBtn)

let inputEl = document.getElementById("input");

// console.log(inputEl)
let initialValue = 1;

let lengthValueMessage = `${initialValue} meter = 3.281 feet | ${initialValue} foot = 0.304 meters`;
let volumeValueMessage = `${initialValue} liter = 0.264 gallons | ${initialValue} gallon = 3.785 liters`;
let massValueMessage = `${initialValue} kilogram = 2.204 pounds | ${initialValue} pound = 0.453 kilograms`;

let resultLength = document.getElementById("result-length");
let resultVolume = document.getElementById("result-volume");
let resultMass = document.getElementById("result-mass");

resultLength.textContent = lengthValueMessage;
resultVolume.textContent = volumeValueMessage;
resultMass.textContent = massValueMessage;

function getValue() {
  let inputNum = inputEl.value;
  console.log(inputNum);

  let metersToFeet = inputNum * 3.281;
  let feetToMeters = inputNum * 0.304;
  let litersToGallons = inputNum * 0.264;
  let gallonsToLiters = inputNum * 3.785;
  let kilogramsToPounds = inputNum * 2.204;
  let poundsToKilograms = inputNum * 0.453;

  if (inputNum == 1) {
    //Length (Meters/Feet)
    resultLength.textContent = `${inputNum} meter = ${metersToFeet.toFixed(
      3
    )} feet | ${inputNum} foot = ${feetToMeters.toFixed(3)} meters`;
    //Volume (Liters/Gallons)
    resultVolume.textContent = `${inputNum} liter = ${litersToGallons.toFixed(
      3
    )} gallons | ${inputNum} gallon = ${gallonsToLiters.toFixed(3)} liters`;
    //Mass (Kilograms/Pounds)
    resultMass.textContent = `${inputNum} kilogram = ${kilogramsToPounds.toFixed(
      3
    )} pounds | ${inputNum} pound = ${poundsToKilograms.toFixed(3)} kilograms`;
  } else if (inputNum == "") {
    return null;
  } else {
    resultLength.textContent = `${inputNum} meters = ${(
      inputNum * 3.281
    ).toFixed(3)} feet | ${inputNum} feet = ${(inputNum * 0.304).toFixed(
      3
    )} meters`;
    resultVolume.textContent = `${inputNum} liters = ${(
      inputNum * 0.264
    ).toFixed(3)} gallons | ${inputNum} gallons = ${(inputNum * 0.3785).toFixed(
      3
    )} liters`;
    resultMass.textContent = `${inputNum} kilograms = ${(
      inputEl.value * 2.204
    ).toFixed(3)} pounds | ${inputNum} pounds = ${(
      inputEl.value * 0.453
    ).toFixed(3)} kilograms`;
  }
}

function reset() {
  inputEl.value = "";
}

convertBtn.addEventListener("click", function () {
  getValue();
  reset();
});
