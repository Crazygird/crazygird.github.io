
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var username = document.getElementById("username")

button.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = username.value.concat(": ",textbox.value);
     messages.appendChild(newMessage);
     textbox.value = "";
});
