// Constants to make my life easier
const groupId = 2687440; // Discover's group id


var xhttp = new XMLHttpRequest();

function getUserData() {
  var data = {};
  xhttp.open("GET","https://www.roblox.com/mobileapi/userinfo?t=" + Math.random(),true);
  var userInfoJson = xhttp.send();
  
  if (userInfoJson === null) { // Checks if userinfo was recieved and if not, sets logged out data
    print("Didn't get userinfo! Either no user is logged in or something isn't working right.");
    data = {loggedIn:false};
    loggedIn = false;
    return data;
  } else {
    loggedIn = true;
  }
  
  var uinfo = JSON.parse(userInfoJson); // Changes the JSON resopnse to a dictionary.
  
  userId = uinfo.UserID; // Sets the UserID value to the logged in user's.
  data.userId = uinfo.UserID;
  
  xhttp.open("GET", "https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=IsInGroup&t=" + Math.random(), true);
  var isInGroup = xhttp.send();
  
  xhttp.open("GET", "https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRank&t=" + Math.random(), true);
  var rankNumber = xhttp.send();
  
  // Gets a player's role in Discover
  xhttp.open("GET", "https://assetgame.roblox.com/Game/LuaWebService/HandleSocialRequest.ashx?method=GetGroupRole&t=" + Math.random(), true);
  var rankName = xhttp.send();
  
  // Turn data into a dictionary, then return it.
  return data;
}

function getUserPermissions(userData) {
  
}