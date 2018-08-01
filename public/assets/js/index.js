var card = "<div class='card' style='width: 18rem;'> <img class='card-img-top' src='.../100px180/' alt='Card image cap'> <div class='card-body'> <h5 class='card-title'>Card title</h5> <p class='card-text'></p> <a href='#' class='btn btn-primary'>View Profile</a> </div> </div>";
$(document).ready(function() {
    $("#searchByLocation").on("click", function(event) {
        event.preventDefault();
        var citySearched = $("#citySearchInput").val().trim()
        console.log(citySearched)
        $.get("/api/city/"+citySearched).then(function(res) {
            console.log("hello")
            console.log(res.length)
            $(".card").remove();
            for (var i = 0; i <= res.length; i++){
                console.log(res[i])
                $("#results").slideDown("slow", function() {$("#results").append("<div class='card col-md-3' style='width: 18rem;'> <img class='card-img-top' src='" + res[i].profilePhoto + "' alt = 'user profile picture'> <div class = 'card-body'> <h5 class-'card-title'>" + res[i].name + "</h5> <p class='card-text'>" + res[i].aboutYou + "</p> <a href='localhost8080/" + res[i].userhandle + "' class='btn btn-primary'> View Profile </a> </div> </div>")})
                //$("#results").append("<div class='card col-md-3' style='width: 18rem;'> <img class='card-img-top' src='" + res[i].profilePhoto + "' alt = 'user profile picture'> <div class = 'card-body'> <h5 class-'card-title'>" + res[i].name + "</h5> <p class='card-text'>" + res[i].aboutYou + "</p> <a href='localhost8080/" + res[i].userhandle + "' class='btn btn-primary'> View Profile </a> </div> </div>")
            }
        });
    });

    $("#searchByExperience").on("click", function() {
        var experienceSearched = $("#experienceSearchInput").val().trim()
        $.get("/api/experiences/"+experienceSearched).then(function() {
            console.log(experienceSearched);
        })
    })
})