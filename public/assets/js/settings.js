$(document).ready(function () {

    var areas = ["profile", "mail", "calendar"];
    var menuItems = ["profileB", "mailB", "calendarB"];

    $("#mail").hide();
    $("#calendar").hide();

    getMail("inbox");
    getMail("sent");


    $("#profileB").on("click", function (e) {
        btnClick("profile");
    });

    $("#mailB").on("click", function (e) {
        btnClick("mail");
    });

    $("#calendarB").on("click", function (e) {
        btnClick("calendar");
    });

    function btnClick(id) {
        areas.forEach(area => {
            $("#" + area).hide();
        });
        menuItems.forEach(item => {
            $("#" + item).removeClass("selected");
        });

        $("#" + id).show();
        $("#" + id + "B").addClass("selected");

    }


    //get all the messages 
    function getMail(mb) {

        var _mailbox = (mb === "sent") ? $(".sentMessages-tbody") : $(".messages-tbody");

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
