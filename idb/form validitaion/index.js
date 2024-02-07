const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

// new Window
const newWindow = (arr) => {
  const newWindow = window.open("", "", "width=300,height=400");
  // create div for showing data
  const newDivForNewWindow = document.createElement("div");
  // added styled on new created div
  newDivForNewWindow.style.border = "1px solid black";
  newDivForNewWindow.style.padding = "1rem";
  newDivForNewWindow.style.margin = "1rem";
  newDivForNewWindow.style.textAlign = "center";
  // added new html and append data on new div
  for (const el of arr) {
    const h6 = document.createElement("h6");
    h6.innerText = `
   ${el[0]} : ${el[1]}
    `;
    newDivForNewWindow.appendChild(h6);
  }
  // append new div in new window as child
  newWindow.document.body.appendChild(newDivForNewWindow);
};

// Submit Handle
const handleSubmit = () => {
  if (firstName.value === "") {
    return (firstName.style.border = "1px solid red");
  }

  newWindow([
    ["Name", `${firstName.value} ${lastName.value}`],
    ["Email", email.value],
    ["Password", password.value],
  ]);
};

submit.addEventListener("click", () => handleSubmit());
