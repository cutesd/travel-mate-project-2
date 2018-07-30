$(document).ready(function() {
    $("#searchByLocation").on("click", function(event) {
        event.preventDefault();
        var citySearched = $("#citySearchInput").val().trim()
        console.log(citySearched)
        $.get("/api/city/"+citySearched).then(function(res) {
            console.log("hello")
            $("#results").append("<h1> Hello World </h1>")
            for (var i = 0; i < res.length; i++){
                console.log(res)
                $("#results").append("<h1>" + res[i].name + "</h1>")
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