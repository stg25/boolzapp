
//  add SENT message to chat

function addMessage() {
  // takes input val
  var myMessage = $("#myTxt").val();

  // create element data oblejct
  var data = {

    messageSent: myMessage,
    time: time,
    messageReceived: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat"
  };

  // first step: takes HTML content
  var template = $("#message-template").html();

  // second step: handlebar works
  var compiled = Handlebars.compile(template);

  //third step: gives the data to HTML
  var finalHTML = compiled(data);

  // fourth step: append to HTML
  var container = $(".myChat.selected");
  container.append(finalHTML);
}

//  understand which button has pressed

function txtEnterEvent(e) { //  e return which button has been pressed
  var keyPressed = e.which;

  if (keyPressed == 13) { //  13 is the same as "enter"
    addMessage();
    clearInput();
    updateChatTime();
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
  var time = date.getHours() + ":" + date.getMinutes();
  var hour = date.getHours();
  if (hour < 10 ) {
    hour = "0" + hour;
  }
  var minute = date.getMinutes();
  if (minute < 10 ) {
    minute = "0" + minute;
  }
  var time = hour + ":" + minute;
  return time;
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
  selectedMyChat.addClass("selected");

}

//  show dropdown message menu

function showDropdown() {
  var me = $(this);
  var myDropdown = me.find(".myDropdown");

  myDropdown.toggleClass("hidden");
}


//  delete message sent

function deleteMessage() {
  var me = $(this);
  var message = me.closest(".message")

  message.remove();
}

function updateChatTime() {
  var me = $(".myChat.selected");
  var meIndex = me.index() - 1; // index 0 = always HTML myHeader

  var chat = $(".chat");
  chat.removeClass("selected");

  var selectedChat = chat.eq(meIndex);
  selectedChat.addClass("selected");

  var myTime = $(".myChat.selected > .message:last-child.received small").html();
  var myTimeContainer = $(".chat.selected > .when > span");

  myTimeContainer.text(myTime);
}

// Update chat info

function updateChatInfo() {
  var me = $(this);
  var username = me.find(".username").text();
  var myUsernameContainer = $("")
}

//  init function

function init() {

  //dynamic selector
  var doc = $(document);

  // reply function
  doc.on("keyup", "#myTxt", txtEnterEvent);

  // dropdpwn message menu show
  doc.on("click", ".message", showDropdown);

  // delete message
  doc.on("click", ".myDelete", deleteMessage)

  // change chat on click + sub updateChatUsername()
  doc.on("click", ".chat", changeChat);

  // search function
  doc.on("keyup", ".search > input", search);

  // change username
  doc.on("click", ".chat", updateChatInfo);
}

$(document).ready(init);
