var card = "<div class='card' style='width: 18rem;'> <img class='card-img-top' src='.../100px180/' alt='Card image cap'> <div class='card-body'> <h5 class='card-title'>Card title</h5> <p class='card-text'></p> <a href='#' class='btn btn-primary'>View Profile</a> </div> </div>";
$(document).ready(function () {
    $("#searchByLocation").on("click", function (event) {
        event.preventDefault();
        var citySearched = $("#citySearchInput").val().trim()
        console.log(citySearched)
        $.get("/api/city/" + citySearched).then(function (res) {
            console.log("hello")
            console.log(res.length)
            $(".card").remove();
            $(".errorMessage").remove();
            if (res.length > 0) {
                for (var i = 0; i <= res.length; i++) {
                    console.log(res[i])
                    $("#results").append("<div class='card col-md-3' style='width: 18rem;'> <img class='card-img-top' src='" + res[i].profilePhoto + "' alt = 'user profile picture'> <div class = 'card-body'> <h5 class-'card-title'>" + res[i].name + "</h5> <p class='card-text'>" + res[i].aboutYou + "</p> <a href='localhost8080/" + res[i].userhandle + "' class='btn btn-primary'> View Profile </a> </div> </div>")
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
        $("#titleHere").append("<button class='btn btn-outline-secondary my-2 my-sm-0' type='submit' id='advSearchBtn'>Search</button>")
    });

    $("body").on("click", "#advSearchBtn", function () {
        console.log("Hello!");
        var advLocation = $("#locationSearchAdvInput").val();
        var advExperience = $("#experienceSearchAdvInput").val();
        $.get("/api/city/" + advLocation + "/" + advExperience).then(function (res) {
            $(".card").remove();
            $(".errorMessage").remove();
            if (res.length > 0) {
                for (var i = 0; i <= res.length; i++) {
                    console.log(res[i])
                    $("#results").append("<div class='card col-md-3' style='width: 18rem;'> <img class='card-img-top' src='" + res[i].profilePhoto + "' alt = 'user profile picture'> <div class = 'card-body'> <h5 class-'card-title'>" + res[i].name + "</h5> <p class='card-text'>" + res[i].aboutYou + "</p> <a href='localhost8080/" + res[i].userhandle + "' class='btn btn-primary'> View Profile </a> </div> </div>")
                };
            } else {
                $("#results").append("<h2 style='text-align: center;' class='errorMessage'>Sorry, nobody in " + advLocation + " is offering a " + advExperience + " experience right now");
            }
        });
    });
});
