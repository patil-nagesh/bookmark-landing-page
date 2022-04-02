"use strict";
/* Mobile Menu */

const menu = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const mobileNav = document.querySelector(".mobile");

menu.addEventListener("click", () => {
  mobileNav.classList.remove("hidden");
});

close.addEventListener("click", () => {
  mobileNav.classList.add("hidden");
});

/* Contact Form */

const emailField = document.getElementById("email");
const button = document.getElementById("btnSubmit");
const response = document.getElementById("response");

button.addEventListener("click", function (e) {
  e.preventDefault();
  const email = emailField.value;
  if (validateEmail(email)) {
    response.classList.remove("error");
    response.classList.add("success");
    response.innerHTML = "Thank You";
    setTimeout(function () {
      document.getElementById("myForm").reset();
      response.innerHTML = "";
      response.classList.remove("success");
    }, 5000);
  } else if (email) {
    response.classList.add("error");
    response.innerHTML = "The email address is not formatted correctly";
  } else {
    response.classList.add("error");
    response.innerHTML = "The input field is empty..";
  }
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
