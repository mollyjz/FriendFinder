var path = require("path");
var friends = require("../data/friends.js"); //pulling in friends data

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {  //return JSON of friends already entered
      res.json(friends);
    });

	app.post("/api/friends", function(req, res) { //once post request is received by server...
    
    var bestMatch = { //current best match
      name: "",
      photo: "",
      diff: 100,  
    }
 
    var newUserScores = req.body.scores; //array of scores for user most recently entered

    for (var i=0; i<friends.length - 1; i++) { //compare array of scores to those of each other friend saved
      var scoreArray = friends[i].scores; //other friends' score arrays      
      var totalDifference = 0; //initial value
      console.log("scoreArray: " + scoreArray);

      for (var j=0; j<scoreArray.length; j++) { //loop through each question to calculate difference in score
        totalDifference += Math.abs(parseInt(newUserScores[j]) - parseInt(scoreArray[j])); //calculating total score differential for that friend

        if (totalDifference <= bestMatch.diff) { //if diff is lower than that of current best match...
          bestMatch.name = friends[i].name; //that friend is best match, so assign name,
          bestMatch.photo = friends[i].photo; //photo,
          bestMatch.diff = totalDifference; //and score differential
        }

      }
      
    }
    friends.push(req.body);  //push new form data

    res.json(bestMatch);
  });

}