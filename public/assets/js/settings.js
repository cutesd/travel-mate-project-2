$(document).ready(function () {

    $("#mail").hide();
    $("#calendar").hide();
    $("#booking").hide();
    $("#delete").hide();

    getMail("inbox");
    getMail("sent");


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


    //get all the messages 
    function getMail(mb) {

        var _mailbox = (mb === "sent") ? $(".sentMessages-tbody"): $(".messages-tbody");

        $.get("/api/messages?getall=" + mb)
            .then(data => {
                console.log(data);

                for (var i = 0; i < data.length; i++) {
                    _mailbox.prepend(`<tr class="unread selected">
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
                    <a href="#" class="pull-left mr-2">
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
            });
    }
    //
    //
    // end
});
