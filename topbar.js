$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
         $(document.getElementById("navbar")).addClass('scrolled');
      }
      if ($(this).scrollTop() < 50) {
         $(document.getElementById("navbar")).removeClass('scrolled');
      }
   });
});


// Random greeting messages
function setGreeting(obj) {
  var greetings = ["Call him Geeism.",
    "I can't even get here without buying a boat.",
    "totally not bots",
    "Super big brain",
    "I hate when TechnologicalByte steals my shampoo",
    "we are so inspired by the millions of incredible <strike>Apple</strike> Roblox developers",
    "petition to add <strike>screebshare</strike> screenshare to servers on discord",
    "you need admin to get admin",
    "It can't be a funny voicechat convo without TechnologicalByte's mic breaking.",
    "<strike>DontLuck2 di...</strike> <strong>HEY!</strong>",
    "y u do dis",
    "i do logic about 85% of the time",
    "What will Roblox's next logo look like?"];
  var min=0;
  var max=greetings.length;
  var random =Math.floor(Math.random() * (max - min)) + min;
  var greeting = greetings[random];
  obj.innerHTML = greeting;
}
 // Set greeting messages.