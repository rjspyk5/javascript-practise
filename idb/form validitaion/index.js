console.log("object");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
// Submit Handle
const handleSubmit = () => {
  console.log("hello world");
};

submit.addEventListener("click", () => handleSubmit());
