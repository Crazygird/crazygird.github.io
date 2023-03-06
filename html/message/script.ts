const messages = document.getElementById("messages");
const textbox = document.getElementById("textbox");
const button = document.getElementById("button");
const username = document.getElementById("username");

button.addEventListener("click", function() {
  const newMessage = document.createElement("li");
  const sanitizedUsername = DOMPurify.sanitize(username.value);
  const sanitizedTextbox = DOMPurify.sanitize(textbox.value);
  newMessage.innerHTML = sanitizedUsername.concat(": ", sanitizedTextbox);
  messages.appendChild(newMessage);
  textbox.value = "";

  const fs = require("fs");
  // Load existing data from the file
  const data = fs.readFileSync("data.json");
  // Parse the JSON data
  const jsonData = JSON.parse(data);
  // Add new data to the JSON object
  jsonData.newData = newMessage.innerHTML;
  // Convert the updated JSON object to a string
  const updatedData = JSON.stringify(jsonData);
  // Write the updated data to the file
  fs.writeFileSync("data.json", updatedData);
});
