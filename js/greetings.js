// id = login-form
const loginForm = document.querySelector("#login-form"); // document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); // document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_TAG = "name";

function onLoginSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_TAG, loginInput.value);
}

function showGreetings() {
    greeting.innerText = `Hello, ${localStorage.getItem("name")}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit); // press enter or button

const savedUserName = localStorage.getItem(USERNAME_TAG);

if(savedUserName == null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.onsubmit = onLoginSubmit;
} else {
    // show greetings
    showGreetings();
}