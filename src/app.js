/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault(); // detiene tu comportamiento predeterminado del formulario e interpretado mi codigo

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
    let msgLabel = document.getElementById("accept");
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
  console.log("Hello Rigo from the console!");
};
