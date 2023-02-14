
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var username = document.getElementById("username")

button.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = username.value.concat(": ",textbox.value);
     messages.appendChild(newMessage);
     textbox.value = "";
     const fs = require('fs');

// Load existing data from the file
let data = fs.readFileSync('data.json');

// Parse the JSON data
let jsonData = JSON.parse(data);

// Add new data to the JSON object
jsonData.newData = newMessage.innerHTML;

// Convert the updated JSON object to a string
let updatedData = JSON.stringify(jsonData);

// Write the updated data to the file
fs.writeFileSync('data.json', updatedData);

});


