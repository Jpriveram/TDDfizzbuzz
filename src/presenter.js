import {generarCadena}  from "./FizzBuzz.js";
const numinput = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = parseInt(numinput.value);

  div.innerHTML = "<p>" + generarCadena(num) + "</p>";
});
