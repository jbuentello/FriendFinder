var friendsArray = require("../data/friends.js");

module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = {
      name:"",
      photo:"",
      difference:20000000
    }
    console.log(req.body.scores);

    
    var user = req.body;
    var userInfo = user.scores;
    var userDiff= 0;
   
    for(var i = 0; i < friendsArray.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friendsArray[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friendsArray[i].scores[j]);
        totalDifference += difference;
      }
      

      
      if(userDiff < newFriend.difference) {
        newFriend.name = friendsArray[i].name;
        newFriend.photo = friendsArray[i].photo;
        newFriend.difference = userDiff;
      }
    }


    friendsArray.push(user);
    res.json(newFriend);
  });
};