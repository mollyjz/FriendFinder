var path = require("path");
var friends = require("../data/friends.js"); //pulling in friends data

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {  //when get request received, return JSON of friends already entered
      //console.log("hello") //ok
      res.json(friends);
    });

	app.post("/api/friends", function(req, res) { //once post request is received by server...
    //console.log("hi"); //ok
    
    var bestMatch = {
      name: "",
      photo: "",
      diff: 100,  
    }
 
    var newUserScores = req.body.scores;
    console.log("new user's scores: " + newUserScores)

    for (var i=0; i<friends.length - 1; i++) { //compare array of scores to those of each other friend saved
      var scoreArray = friends[i].scores; //other friends' score arrays
      
      var totalDifference = 0;

      console.log("scoreArray: " + scoreArray);

      //var totalDifferenceArray = [];
      var diffArray = [];

      for (var j=0; j<scoreArray.length; j++) { //loop through each question to calculate difference in score

        totalDifference += Math.abs(parseInt(newUserScores[j]) - parseInt(scoreArray[j])); //adding difference between each question's score to calculate total score differential

        if (totalDifference <= bestMatch.diff) { //if diff is lower than that of current best match...
          bestMatch.name = friends[i].name; //that friend is best match, so assign name,
          bestMatch.photo = friends[i].photo; //photo,
          bestMatch.diff = totalDifference; //and score differential
        }

      }
      
    }
    friends.push(req.body);  //push new form data
    //console.log(bestMatch);

    res.json(bestMatch); //post best match as JSON object
  });

}