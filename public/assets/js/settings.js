$(document).ready(function () {

    var areas = ["profile", "mail", "calendar", "rate"];
    var menuItems = ["profileB", "mailB", "calendarB", "rateB"];
    let star_arr = [0, 0, 0, 0, 0];
    var userId;

    $("#mail").hide();
    $("#calendar").hide();
    $("#rate").hide();

    getMail("inbox");
    getMail("sent");


    $("#profileB").on("click", function (e) {
        btnClick("profile");
    });

    $("#mailB").on("click", function (e) {
        btnClick("mail");
    });

    $("#rateB").on("click", function (e) {
        btnClick("rate");
        getAllRatings($(this).data("id"));
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

    // Show all ratings
    function getAllRatings(id) {
        console.log("get all ratings", id)
        $.get("/api/ratings?user_id=" + id, function (res) {
            for (var i = 0; i < res.length; i++) {
                console.log(res[i]);
                addRating(res[i]);
            }
            setStarRating();
        });
    }

    function addRating(obj) {
        let card = $("<div>").addClass("card mb-2");
        let header = $("<div>").addClass("card-header text-muted").text(obj.UserName + " wrote:");
        card.append(header);
        let title = $("<h6>").addClass("card-title pt-4 px-4").append(`<div class="d-inline" id="sr` + obj.id + `"></div>&nbsp;&nbsp;` + obj.title);
        card.append(title);
        let body = $("<div>").addClass("card-body pt-0").text(obj.text);
        card.append(body);
        //
        $("#ratings-container").prepend(card);
        $("#sr" + obj.id).starRating({
            starSize: 20,
            initialRating: obj.stars,
            readOnly: true
        });
        populateArr(Math.floor(obj.stars));
    }

    function populateArr(idx) {
        star_arr[idx - 1]++;
    }

    function getAvg() {
        //(5*252 + 4*124 + 3*40 + 2*29 + 1*33) / (252+124+40+29+33) = 4.11
        let _weighted = 0;
        let _sum = 0;
        for (var i = 0; i < star_arr.length; i++) {
            _weighted += (star_arr[i] * (i + 1));
            _sum += star_arr[i];
        }
        return _weighted / _sum;
    }

    function setStarRating() {
        $(".memberRating").starRating({
            starSize: 25,
            initialRating: getAvg(),
            readOnly: true
        });
    }



    //
    //
    // end
});
