/*

//need logic to create score for each answer!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var friends = [];

var responseScore; //????????????????????????????????????

$("#submit").on("click", function(event) {
    event.preventDefault();

    // GRAB OPTION VALUE AND PUSH TO SCORES --
    // $([value="1"]) etc.

    var newFriend = { //create new friend object
        name: $("#form-name").val().trim(),
        photoUrl: $("#photo-url").val().trim(),
        scores: []
    };

    friends.push(newFriend); //add new friend object to array
    console.log(friends);

    $.post("/api/friends", newFriend, function(data) { //routing js file determines whether table is available or now; if so, it returns data; if not, it doesn't
        if (data) {
            alert("Thanks for posting!"); //post worked; there were open tables so data came back
        } else {
            alert("Error!"); //post didn't work; there were no open tables so data did not come back?
        };
        console.log(data);
    });

    function calculateMatch() { //compare array of scores to those of other friends
        var scoreList = newFriend.scores;
        var scoreArray = scoreList.ToArray;
        for (var i=0; i<friends.length; i++) { //compare scores to those of each of the other friends
            for (var j=0; j<scoreArray.length; j++) {
                var diff = scoreArray[j] - friends[i].scores[j]; //calculate difference between each score for each friend
                var absDiff = Math.abs(diff); //get absolute value
                var diffArray = []; //array of differences
                diffArray.push(absDiff);
                for (var x=0; x<diffArray; x++) { //calculate sum of differences
                    var totalDifference;
                    totalDifference += diffArray[i]; //total compatibility differential
                    console.log(totalDifference); 
                    totalDifference.data("friendName", friends[i].name); //how to identify which friend this goes with????????????????????????????
                    var totalDifferenceArray = [];
                    totalDifferenceArray.push(totalDifference);
                    var min = Math.min.apply(Math, totalDifferenceArray);
                    var match = min.friendName; //?????????????????????????????????????
                    console.log("Your best match is " + match); //NEED MODAL WITH NAME & PHOTO!!!!!!!!!!!!!!1!!!!!!!!!!!!!!!!!!!!!!!!!
                    return match; //find lowest score in array and print name of friend
                }
            }
        }
    };
    calculateMatch();


    function clear() { //clear form
        $("#form-name").val("");
        $("#photo-url").val("");
    };
    clear();

});

*/