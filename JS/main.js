/****
 * Get Text Button
 */
let getTextButton = document.getElementById("getText");
let clearButton = document.getElementById("clearButton");
let dataTextArea = document.getElementById("dataContent");

let getUsersButton = document.getElementById("getUsers");
// Set event listener on the Get Text Button

getTextButton.addEventListener("click", getText);

clearButton.addEventListener("click", clearTextArea);

getUsersButton.addEventListener("click", getUsers);

function getText() {
  fetch("sample.txt")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      dataTextArea.value = data;
    })
    .catch((error) => {
      {
        console.log(error);
      }
    });
}

function clearTextArea() {
  dataTextArea.value = "";
}

function getUsers() {
  fetch("users.json")
    .then((response) => {
      response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
