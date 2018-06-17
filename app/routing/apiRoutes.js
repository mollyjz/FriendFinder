var path = require("path");
var friends = require("../data/friends.js"); //pulling in friends data

module.exports = function(app) {

//NONE OF MY GET OR POST REQUESTS ARE WORKING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  app.get("/api/friends", function(req, res) {  //when get request received, return JSON of friends already entered
      console.log("hello") // NOTHING ///////////////////////////////////////////////////////////
      res.json(friends);
    });

	app.post("/api/friends", function(req, res) { //once post request is received by server...
    console.log("hi"); // NOTHING ////////////////////////////////////////////////////////////////
    friends.push(req.body);  //push new form data
 
//		var newUserName = req.body.name; //this is for the new user being submitted
//		var newUserPhoto = req.body.image;
		var newUserScores = req.body.scores;

    for (var i=0; i<friends.length; i++) { //compare array of scores to those of each other friend saved
      var scoreArray = friends[i].scores; //other friends' score arrays
      console.log(scoreArray);
      var diffArray = [];
      var totalDifference = 0;
      var totalDifferenceArray = [];
  
      for (var j=0; j<scoreArray.length; j++) { //loop through each question to calculate difference in score
        var diff = parseInt(newUserScores[j]) - parseInt(scoreArray[j]);
        var absDiff = Math.abs(diff); //get absolute values
        console.log(absDiff);
        diffArray.push(absDiff); //push each difference in score to array
        console.log(diffArray); // all 0 because there's nothing in friends array!!!!!!!!!!!!!!
        //var totalDifference = diffArray.reduce(function(total, amount) {
          ///////////////////////////////////////////
          var totalDifference = function() {
            for (var x=0; x<scoreArray.length; x++) {
              var sum;
              sum += sum[x];
              return sum;  
            }
          }
          console.log(totalDifference);
          ///////////////////////////////////////////
            //return total + amount; //calculate sum of score differences
            //console.log(totalDifference);
        //});
        $(totalDifference).data("friendName", friends[i].name); //match total diff with friend name
        totalDifferenceArray.push(totalDifference);
        totalDifferenceArray.sort();
        var match = totalDifferenceArray[0].friendName; //does it still have the friendName attribute???????????????????????????????????
        console.log("Your best match is " + match + "!"); //this shouldn't be inside for-loop!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    }
  
    }



  });

}