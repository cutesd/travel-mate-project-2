$("#mail").hide();
$("#calendar").hide();
$("#booking").hide();
$("#delete").hide();
var postAgain=false;
$("#inboxC").on("click",function() {

    $(".sentMessages-tbody").hide();
    $(".messages-tbody").hide();
if(!postAgain){
    myFunction();  
    postAgain=true
}  
    $(".messages-tbody").show();


});
var postAgain2=false;

$("#sentC").on("click",function() {
    $(".messages-tbody").hide();
    if(!postAgain2){
    myFunction2();
    postAgain2=true
    }
    $(".sentMessages-tbody").show();

});

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
function myFunction() {
$.ajax({
    method: "GET",
    url: "/api/messages?getall=inbox" // TODO: filter with userid?
}).then(function(data){
    
    // console.log(data);
    for(var i=0; i<data.length; i++){
        // console.log(data[i].msg);
        console.log(data[i]);
        // if(data[i]==="id"){
        //     console.log(data[i])
        // }
    $(".messages-tbody").append(`<tr class="unread selected">
        <td>
            <div class="ckbox ckbox-theme">
                <input id="checkbox1" type="checkbox" checked="checked" class="mail-checkbox">
                <label for="checkbox1"></label>
            </div>
        </td>
        <td>
            <a href="#" class="star star-checked">
                <i class="fa fa-star"></i>
            </a>
        </td>
        <td>
            <div class="media">
                <a href="#" class="pull-left">
                    <img alt="..." src="${data[i].User.profilePhoto}" class="media-object">
                </a>
                <div class="media-body">
                    <h4 class="text-primary">${data[i].User.name}</h4>
                    <p class="email-summary">
                        ${data[i].msg}
                    </p>
                    <span class="media-meta">${data[i].createdAt}</span>
                </div>
            </div>
        </td>
    </tr>`);
    }
    // loop through all of our users messages 
    // and append them
});

}

function myFunction2() {
    $.ajax({
        method: "GET",
        url: "/api/messages?getall=sent" // TODO: filter with userid?
    }).then(function(data){
        // console.log(data);
        for(var i=0; i<data.length; i++){
            // console.log(data[i].msg);
            console.log(data[i]);
            // if(data[i]==="id"){
            //     console.log(data[i])
            // }
        
        $(".sentMessages-tbody").append(`<tr class="unread selected">
            <td>
                <div class="ckbox ckbox-theme">
                    <input id="checkbox1" type="checkbox" checked="checked" class="mail-checkbox">
                    <label for="checkbox1"></label>
                </div>
            </td>
            <td>
                <a href="#" class="star star-checked">
                    <i class="fa fa-star"></i>
                </a>
            </td>
            <td>
                <div class="media">
                    <a href="#" class="pull-left">
                        <img alt="..." src="${data[i].User.profilePhoto}" class="media-object">
                    </a>
                    <div class="media-body">
                        <h4 class="text-primary">${data[i].User.name}</h4>
                        <p class="email-summary">
                            ${data[i].msg}
                        </p>
                        <span class="media-meta">${data[i].createdAt}</span>
                    </div>
                </div>
            </td>
        </tr>`);
        }
        // loop through all of our users messages 
        // and append them
    });
    }