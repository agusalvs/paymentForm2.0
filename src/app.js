/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", enviarDatos);
  // form.addEventListener("submit", ccVal);

  //función para validar tarjeta de crédito
  //fuente: https://www.w3schools.blog/credit-card-validation-javascript-js

  // function ccVal(cardNumber) {
  //   console.log(cardNumber);
  //   let regexMasterCard = /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
  //   let regexAmex = /^3[47][0-9]{13}$/;
  //   let regexVisa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  //   let regexMaestro = /^(5018|5081|5044|5020|5038|603845|6304|6759|676[1-3]|6799|6220|504834|504817|504645)[0-9]{8,15}$/;

  //   if (
  //     cardNumber.value.match(
  //       /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
  //     ) ||
  //     cardNumber.value.match(regexAmex) ||
  //     cardNumber.value.match(regexVisa) ||
  //     cardNumber.value.match(regexMaestro)
  //   ) {
  //     return true;
  //   } else {
  //     alert("Please enter a valid credit card number.");
  //     return false;
  //   }
  // }

  // función para lograr que el valor del credit card # sea solo numerico
  // fuente: https://bbbootstrap.com/snippets/credit-card-checkout-formatted-input-51353295

  //For Card Number formatted input
  let cardNum = document.getElementById("cardNumber");
  cardNum.onkeyup = function(e) {
    if (this.value == this.lastValue) return;
    let caretPosition = this.selectionStart;
    let sanitizedValue = this.value.replace(/[^0-9]/gi, "");
    let parts = [];

    for (let i = 0, len = sanitizedValue.length; i < len; i += 4) {
      parts.push(sanitizedValue.substring(i, i + 4));
    }

    for (let i = caretPosition - 1; i >= 0; i--) {
      let c = this.value[i];
      if (c < "0" || c > "9") {
        caretPosition--;
      }
    }
    caretPosition += Math.floor(caretPosition / 4);

    this.value = this.lastValue = parts.join(" ");
    this.selectionStart = this.selectionEnd = caretPosition;
  };

  function enviarDatos(e) {
    e.preventDefault(); // detiene tu comportamiento predeterminado del formulario e interpreta mi codigo

    //obtengo el elemento por el id, obtengo el elemento de la alerta y devuelvo el valor del elemento.
    let card = document.getElementById("cardNumber");
    let alertCard = document.getElementById("alertCard");
    console.log(card.value);
    let cvc = document.getElementById("cvc");
    console.log(cvc.value);
    let amount = document.getElementById("amount");
    console.log(amount.value);
    let firstName = document.getElementById("firstName");
    console.log(firstName.value);
    let lastName = document.getElementById("lastName");
    console.log(lastName.value);
    let city = document.getElementById("city");
    console.log(city.value);
    let state = document.getElementById("state");
    console.log(state.value);
    let zip = document.getElementById("zip");
    console.log(zip.value);
    let radios = document.getElementById("radios");
    console.log(radios.value);
    let accept = document.getElementById("accept");
    console.log(accept.value);
    let message = document.getElementById("message");
    console.log(message.value);

    //evalúo si el valor del input es vacío, de ser así hago que cambie de color y remuevo el d-none de la alerta para que se visualice la alerta.
    if (card.value === "") {
      card.classList.add("bg-danger", "bg-opacity-25");
      alertCard.classList.remove("d-none");
    }
    if (cvc.value === "") {
      cvc.classList.add("bg-danger", "bg-opacity-25");
    }
    if (amount.value === "") {
      amount.classList.add("bg-danger", "bg-opacity-25");
    }
    if (firstName.value === "") {
      firstName.classList.add("bg-danger", "bg-opacity-25");
    }
    if (lastName.value === "") {
      lastName.classList.add("bg-danger", "bg-opacity-25");
    }
    if (city.value === "") {
      city.classList.add("bg-danger", "bg-opacity-25");
    }
    if (state.value === "Pick a state") {
      state.classList.add("bg-danger", "bg-opacity-25");
    }
    if (zip.value === "") {
      zip.classList.add("bg-danger", "bg-opacity-25");
    }
    if (
      radio1.value === "" ||
      radio2.value === "" ||
      radio3.value === "" ||
      radio4.value === ""
    ) {
      radios.classList.replace("bg-danger", "bg-opacity-25");
    }
    if (message.value === "") {
      message.classList.add("bg-danger", "bg-opacity-25");
    }
  }
  console.log("Hello TA!");
};
