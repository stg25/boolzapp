
//  add SENT message to chat

function addMessageSent() {

  //  recreate div "message" linked to div father "wrapper"
  var message = document.createElement("div");
  var messageLayout = document.createElement("p");
  var messageContent = document.createElement("span");
  var messageDetail = document.createElement("small");
  var wrapper = $(".myChat.selected")

  var chatInput = $("#myTxt");
  var chatVal = chatInput.val();

  //  add class to created div message
  $(message).addClass("message sent");

  //  internal message text
  $(messageContent).text(chatVal);
  $(messageDetail).text(time);

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
  var wrapper = $(".myChat.selected")

  $(message).addClass("message received")

  $(messageContent).text("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  $(messageDetail).text(time);

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
    clearInput();
    setTimeout(addMessageReceived, 1000)
  }
}

//  clear input function

function clearInput() {
  var input = $("#myTxt");
  input.val("");
}

//  time function with night hours zero accrocchio

function time() {
  var date = new Date();
  // var time = date.getHours() + ":" + date.getMinutes();
  var hour = date.getHours();
  if (hour < 10 ) {
    hour = "0" + hour
  }
  var minute = date.getMinutes();
  if (minute < 10 ) {
    minute = "0" + minute
  }
  var time = hour + ":" + minute
  return time
}

// user search function

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

//  change chat function

function changeChat() {
  var me = $(this);
  var meIndex = me.index();

  // chat
  var myChat = $(".myChat");
  myChat.removeClass("selected");

  var selectedMyChat = myChat.eq(meIndex);
  selectedMyChat.addClass("selected")

}


//  init function

function init() {
  // reply function
  var txt = $("#myTxt");
  txt.keyup(txtEnterEvent); //  trigger func event

  // search function
  var input = $(".search > input");
  input.keyup(search);

  // change chat function
  var chat = $(".chat");
  chat.click(changeChat)

}

$(document).ready(init);
