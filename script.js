
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

  $(messageContent).text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
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

// search test

function search() {
  var me = $(this);
  var content = me.val().toLowerCase();

  var chatList = $(".allChat > .chat");
  chatList.removeClass("hidden");

  for (var i = 0; i < chatList.length; i++) {
    var chat = $(".allChat > .chat").eq(i);
    var usernameElement = $(".allChat > .chat:eq("+i+") > .chat-text > .username");
    var username = usernameElement.text().toLowerCase();
    if (!username.includes(content)) {
      chat.addClass("hidden")
    }
  }
}

//  init function

function init() {
  var txt = $("#myTxt");
  txt.keyup(txtEnterEvent); //  trigger func event

  var input = $(".search > input");
  input.keyup(search);
}

$(document).ready(init);













































// FInish
