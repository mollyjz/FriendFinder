var path = require("path");
var friends = require("../data/friends.js"); //pulling in friends data

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {  //when get request received, return JSON of friends already entered
      //console.log("hello") //ok
      res.json(friends);
    });

	app.post("/api/friends", function(req, res) { //once post request is received by server...
    //console.log("hi"); //ok
    friends.push(req.body);  //push new form data
 
//		var newUserName = req.body.name; //this is for the new user being submitted
//		var newUserPhoto = req.body.image;
    var newUserScores = req.body.scores;
    console.log("new user's scores: " + newUserScores)

    for (var i=0; i<friends.length - 1; i++) { //compare array of scores to those of each other friend saved
      var scoreArray = friends[i].scores; //other friends' score arrays
      console.log("scoreArray: " + scoreArray); //only logs for first friend in list?????????????????????????!!!!!!!!!! SO NOT PERMANENTLY PUSHING NEW FRIENDS TO PAGE/DB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      var totalDifference = 0;
      var totalDifferenceArray = [];

      var diffArray = [];

      for (var j=0; j<scoreArray.length; j++) { //loop through each question to calculate difference in score
          
        var diff = parseInt(newUserScores[j]) - parseInt(scoreArray[j]);
        console.log("DIFF IS: " + diff)
        var absDiff = Math.abs(diff); //get absolute values
        console.log("absDiff is " + absDiff);
        diffArray.push(absDiff); //push each difference in score to array
        console.log("diffArray: " + diffArray); //ok
        totalDifference = function() {
          for (var x=0; x<scoreArray.length; x++) {
            var sum;
            sum += sum[x];
            return sum;  
          }
        } //????????????????????????????????????????????????????///////////////////////////
        console.log("total diff: " + totalDifference); ////////ERROR!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        //totalDifference.data("friendName", friends[i].name); //match total diff with friend name
        totalDifferenceArray.push(totalDifference);
        totalDifferenceArray.sort();
        //var match = totalDifferenceArray[0].friendName; //does it still have the friendName attribute???????????????????????????????????
        //console.log("Your best match is " + match + "!"); //this shouldn't be inside for-loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    }
  
    }



  });

}