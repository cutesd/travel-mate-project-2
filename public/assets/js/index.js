$(document).ready(function () {

    $(".ifuser").hide();

    var user_obj;
    //
    $.get("/getuser")
        .then(res => {
            console.log("user",res);
            user_obj = res;
            $("#username").text(user_obj.username);
            $(".ifuser").show();
            $(".ifnouser").hide();
        });

    //
    $(".scrollButton").on("click", function (e) {
        e.preventDefault();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#searchTitle").offset().top
        }, 1000);
    });

    //
    $("#searchByLocation").on("click", function (e) {
        e.preventDefault();
        var citySearched = $("#citySearchInput").val().trim()
        console.log(citySearched)
        $.get("/api/city/" + citySearched).then(function (res) {
            console.log("hello")
            console.log(res.length)
            $(".card").remove();
            $(".errorMessage").remove();
            if (res.length > 0) {
                for (var i = 0; i <= res.length; i++) {
                    var _str = (res[i].about.length > 150) ? res[i].about.substr(0, 150) + "..." : res[i].about;
                    var card = $("<div>").addClass("col-sm-2 col-md-4 col-lg-3").append("<div class='card'> <a href='/users?member_id=" + res[i].id + "'><img class='card-img-top' src='" + res[i].profilePhoto + "' alt = 'user profile picture'></a> <div class = 'card-body'> <h5 class-'card-title'>" + res[i].name + "</h5> <p class='card-text'>" + _str + "</p> <a href='/users?member_id=" + res[i].id + "' class='btn btn-primary' id=profileBtn> View Profile </a> </div> </div>")
                    $("#results").append(card);
                };
            } else {
                $("#results").append("<h2 style='text-align: center;' class='errorMessage'>Sorry, nobody in " + citySearched + " is hosting with Travel Mate right now. Check back soon!");
            }
        });
    });


    $("#advSearch").on("click", function () {
        $(".form-inline").remove();
        $("#advSearch").remove();
        $("#searchTitle").remove();
        $("#titleHere").append("<h3 class='text-light text-shadow' id='searchTitle'>LOCATION</h3>")
        $("#titleHere").append("<input class='form-control mr-sm-2 w-search' type='search' placeholder='Location' aria-label='Search' id='locationSearchAdvInput'>")
        $("#titleHere").append("<h3 class='text-light text-shadow' id='searchTitle'>EXPERIENCE</h3>")
        $("#titleHere").append("<input class='form-control mr-sm-2 w-search' type='search' placeholder='Experience' aria-label='Experience' id='experienceSearchAdvInput'>")
        $("#titleHere").append("<br>")
        $("#titleHere").append("<button class='btn btn-outline-light my-2 my-sm-0' type='submit' id='advSearchBtn'>Search</button>")
    });

    $("body").on("click", "#advSearchBtn", function () {
        var counter = 0;
        console.log("Hello!");
        var advLocation = $("#locationSearchAdvInput").val();
        var advExperience = $("#experienceSearchAdvInput").val();
        $.get("/api/city/" + advLocation).then(function (res) {
            $(".card").remove();
            $(".errorMessage").remove();

            if (res.length > 0) {
                console.log("Rs.length" + res.length)
                for (var i = 0; i <= res.length; i++) {
                    console.log(res[i]);
                    var splitArray = res[i].activities.split(",")
                    if (advExperience === '') {
                        $("#results").append("<div class='card col-md-3' style='width: 18rem;'> <a href='/" + res[i].username + "'><img class='card-img-top' src='" + res[i].profilePhoto + "' alt = 'user profile picture'></a> <div class = 'card-body'> <h5 class-'card-title' style='text-align:center'>" + res[i].name + "</h5> <p class='card-text'>" + res[i].about + "</p> <a href='/" + res[i].username + "' class='btn btn-primary' id='profileBtn'> View Profile </a> </div> </div>")
                    } else {
                        console.log(splitArray)
                        for (var j = 0; j <= splitArray.length; j++) {
                            if (splitArray[j] == advExperience) {
                                counter++
                                console.log(advExperience);
                                console.log(splitArray[j]);
                                $(".errorMessage").remove();
                                $("#results").append("<div class='card col-md-3' style='width: 18rem;'> <a href='/" + res[i].username + "'><img class='card-img-top' src='" + res[i].profilePhoto + "' alt = 'user profile picture'></a> <div class = 'card-body'> <h5 class-'card-title' style='text-align:center'>" + res[i].name + "</h5> <p class='card-text'>" + res[i].about + "</p> <a href='/" + res[i].username + "' class='btn btn-primary' id='profileBtn'> View Profile </a> </div> </div>")
                            } else if (j === splitArray.length && counter === 0) {
                                $(".card").remove();
                                $(".errorMessage").remove();
                                $("#results").append("<h1 class='errorMessage' style='text-align:center;'>Sorry, no one in " + advLocation + " is offering a " + advExperience + " experience right now. Check back soon! </h1>")
                            }
                        }
                    }
                }
            } else {
                $(".errorMessage").remove();
                $("#results").append("<h1 class='errorMessage'> Sorry, no Travel Mates found in " + advLocation + ". Check back soon!");
            }
        })
    });
});




