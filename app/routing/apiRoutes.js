var friendsArray = require("../data/friends.js");

module.exports = function(app) {
  // Return all friends found in friends.js as JSON
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

    // Receive user details (name, photo, scores)
    var user = req.body;
    var userInfo = user.scores;
    var userDiff= 0;

    // parseInt for scores
    for(var i = 0; i < friendsArray.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend match is the first friend but result will be whoever has the minimum difference in scores
    // var bestFriendIndex = 0;
    // var minimumDifference = 50;

    // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
    //  whatever the difference is, add to the total difference
    for(var i = 0; i < friendsArray.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friendsArray[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friendsArray[i].scores[j]);
        totalDifference += difference;
      }

      // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons
      if(userDiff < newFriend.difference) {
        newFriend.name = friendsArray[i].name;
        newFriend.photo = friendsArray[i].photo;
        newFriend.difference = userDiff;
      }
    }

    // after finding match, add user to friend array
    friendsArray.push(user);
    res.json(newFriend);
  });
};