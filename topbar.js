// Wait until done loading
window.onload = function () {

var greetingtext = document.getElementById('greeting');
var logo = document.getElementById('logo-navbar');
setGreeting(greetingtext);

// Color change when not scrolled to top of page
$(window).scroll(function () {
   if ($(this).scrollTop() > 50) {
      $(document.getElementById("navbar")).addClass('scrolled');
   }
  if ($(this).scrollTop() < 50) {
     $(document.getElementById("navbar")).removeClass('scrolled');
   }
});

// Change what is shown based on screen size
$(window).resize(function() {
  if ($(window).width() < 950) {
    greetingtext.style = "display: none;";
    
    if ($(window).width() < 780) {
      logo.src = "discoverlogosmall.png";
    } else {
      logo.src = "discoverlogo.png";
    }
  } else {
  greetingtext.style = "display: unset;";
  logo.src = "discoverlogo.png";
 }
});

// Random greeting messages
function setGreeting(obj) {
  var greetings = ["Call him Geeism.",
    "I can't even get here without buying a boat.",
    "totally not bots",
    "Super big brain",
    "I hate when TechnologicalByte steals my shampoo",
    "petition to add <strike>screebshare</strike> screenshare to servers on discord",
    "you need admin to get admin",
    "It can't be a funny voicechat convo without TechnologicalByte's mic breaking.",
    "y u do dis",
    "i do logic about 85% of the time",
    "What will Roblox's next logo look like?"];
  var min=0;
  var max=greetings.length;
  var random =Math.floor(Math.random() * (max - min)) + min;
  var greeting = greetings[random];
  obj.innerHTML = greeting;
}

};