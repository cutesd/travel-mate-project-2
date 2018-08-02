$(document).ready(function () {

    var contactForm = $("#contactForm");
    var subject = $("#inputSubject");
    var message = $("#inputMessage");
    var msgSuccess = $("#msg-success");
    //
    let rateArea = $("#rating-area");
    let rateDisplay = $("#ratings-display");
    var rateSuccess = $("#rate-success");
    let rateForm = $("#rateForm");
    let rateTitle = $("#ratingTitle");
    let rateText = $("#ratingText");
    let rateStar = $(".userRatesMember");

    let star_arr = [0, 0, 0, 0, 0];
    let mID;

    msgSuccess.hide();
    rateSuccess.hide();
    rateArea.hide();

    //
    var url = window.location.search;
    if (url.indexOf("?member_id=") !== -1) {
        mID = url.split("=")[1];
        getAllRatings(mID);
    }

    rateStar.starRating({
        starSize: 25,
        callback: function (currentRating, $el) {
            console.log(currentRating, $el);
        }
    });

    $("#openRatings").on("click", function (e) {
        e.preventDefault();
        rateArea.show();
        rateDisplay.hide();
        $(this).hide();
    });

    $(rateForm).on("submit", function (e) {
        e.preventDefault();
        if (!rateTitle.val().trim() || !rateText.val().trim()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newData = {
            stars: rateStar.starRating('getRating'),
            title: rateTitle.val().trim(),
            text: rateText.val().trim(),
            UserId: parseInt($("#userId").data("id")),
            MemberId: parseInt($("#memberId").data("id")),
            MemberName: $("#memberName").data("name")
        };
        console.log(newData);
        createNew("ratings", newData);
        //
        rateTitle.val('');
        rateText.val('');
        rateArea.hide();
        rateDisplay.show();
        rateSuccess.show();
    });

    $(contactForm).on("submit", function (e) {
        e.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        if (!subject.val().trim() || !message.val().trim()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newData = {
            subject: subject.val().trim(),
            msg: message.val().trim(),
            UserId: parseInt($("#userId").data("id")),
            recipient: parseInt($("#recipient").data("id"))
        };
        console.log(newData);
        createNew("messages", newData);
        //
        subject.val('');
        message.val('');
    });

    // Submits a new data and brings user to blog page upon completion
    function createNew(model, data) {
        $.post("/api/" + model, data, function (res) {
            //   window.location.href = "/blog";
            console.log(res);
            if (model === "messages") {
                msgSuccess.show();
                contactForm.hide();
            } else {
                addRating(res);
                setStarRating();
            }
        });
    };

    // Show all ratings
    function getAllRatings(id) {
        $.get("/api/ratings?member_id=" + id, function (res) {
            for (var i = 0; i < res.length; i++) {
                addRating(res[i]);
            }
            setStarRating();
        });
    }

    function addRating(obj) {
        let card = $("<div>").addClass("card mb-2");
        let header = $("<div>").addClass("card-header text-muted").text(obj.MemberName + " wrote:");
        card.append(header);
        let title = $("<h6>").addClass("card-title pt-4 px-4").append(`<div class="d-inline" id="sr` + obj.id + `"></div>&nbsp;&nbsp;` + obj.title);
        card.append(title);
        let body = $("<div>").addClass("card-body pt-0").text(obj.text);
        card.append(body);
        //
        rateDisplay.prepend(card);
        $("#sr" + obj.id).starRating({
            starSize: 20,
            initialRating: obj.stars,
            readOnly: true
        });
        populateArr(Math.floor(obj.stars));
    }

    function populateArr(idx) {
        star_arr[idx-1]++;
    }

    function getAvg() {
        //(5*252 + 4*124 + 3*40 + 2*29 + 1*33) / (252+124+40+29+33) = 4.11
        let _weighted = 0;
        let _sum = 0;
        for (var i = 0; i < star_arr.length; i++) {
            _weighted += (star_arr[i] * (i + 1));
            _sum += star_arr[i];
        }
        console.log(star_arr, _weighted, _sum);
        console.log(_weighted/_sum);
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
    // END

});
