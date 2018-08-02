$("#mail").hide();
$("#calendar").hide();
$("#booking").hide();
$("#delete").hide();

$("#profB").on("click", function () {
    $('#mailB').removeClass('selected');
    $('#calendarB').removeClass('selected');
    $('#bookingB').removeClass('selected');
    $('#deleteB').removeClass('selected');
    $(this).addClass('selected');
    $("#profile").show();
    $("#mail").hide();
    $("#calendar").hide();
    $("#booking").hide();
    $("#delete").hide();
});
$("#mailB").on("click", function () {
    $('#profB').removeClass('selected');
    $('#calendarB').removeClass('selected');
    $('#bookingB').removeClass('selected');
    $('#deleteB').removeClass('selected');
    $(this).addClass('selected');
    $("#mail").show();
    $("#profile").hide();
    $("#calendar").hide();
    $("#booking").hide();
    $("#delete").hide();
});
$("#calendarB").on("click", function () {
    $('#mailB').removeClass('selected');
    $('#profB').removeClass('selected');
    $('#bookingB').removeClass('selected');
    $('#deleteB').removeClass('selected');
    $(this).addClass('selected');
    $("#calendar").show();
    $("#profile").hide();
    $("#mail").hide();
    $("#booking").hide();
    $("#delete").hide();
});
$("#bookingB").on("click", function () {
    $('#mailB').removeClass('selected');
    $('#profB').removeClass('selected');
    $('#calendarB').removeClass('selected');
    $('#deleteB').removeClass('selected');
    $(this).addClass('selected');
    $("#booking").show();
    $("#profile").hide();
    $("#mail").hide();
    $("#calendar").hide();
    $("#delete").hide();

});
$("#deleteB").on("click", function () {
    $('#mailB').removeClass('selected');
    $('#profB').removeClass('selected');
    $('#bookingB').removeClass('selected');
    $('#calendarB').removeClass('selected');
    $(this).addClass('selected');
    $("#delete").show();
    $("#profile").hide();
    $("#mail").hide();
    $("#calendar").hide();
    $("#booking").hide();

});


//get all the messages 
$.ajax({
    method: "GET",
    url: "/api/messages"
}).then(function(data){
    console.log(data);
});