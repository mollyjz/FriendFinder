var friendsData = require("../data/friends.js"); //pulling in friends data

var server = require("../../server.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
      res.json(friendsData);
      //to display a JSON of all possible friends!!!!!
      //res.sendFile(path.join(__dirname, "survey.html")); //the HTML file that will load  
  });

	app.post("/api/friends", function(req, res) {
		friendsData.push(req.body);
  });

}