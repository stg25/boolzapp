
//  add SENT message to chat

function addMessageSent() {

  //  recreate div "message" linked to div father "wrapper"
  var message = document.createElement("div");
  var messageLayout = document.createElement("p");
  var messageContent = document.createElement("span");
  var messageDetail = document.createElement("small");
  var wrapper = $(".myMain")

  //  add class to message
  $(message).addClass("message sent")

  //  internal text
  $(messageContent).text("message sent");
  $(messageDetail).text("02:43");

  //  add "message" to "wrapper"
  messageContent.append(messageDetail);
  messageLayout.append(messageContent);
  message.append(messageLayout);
  wrapper.append(message);
}

//  add RECEIVED message to chat

function addMessageReceived() {

  var message = document.createElement("div");
  var messageLayout = document.createElement("p");
  var messageContent = document.createElement("span");
  var messageDetail = document.createElement("small");
  var wrapper = $(".myMain")

  $(message).addClass("message received")

  $(messageContent).text("message received");
  $(messageDetail).text("02:44");

  messageContent.append(messageDetail);
  messageLayout.append(messageContent);
  message.append(messageLayout);
  wrapper.append(message);
}

//  understand which button has pressed

function txtEnterEvent(e) { //  e return which button has been pressed
  var keyPressed = e.which;

  if (keyPressed == 13) { //  13 is the same as "enter"
    addMessageSent();
    setTimeout(addMessageReceived, 1000)
  }
}

//  init function

function init() {
  var txt = $("#myTxt");
  txt.keyup(txtEnterEvent); //  trigger func event
}

$(document).ready(init);
