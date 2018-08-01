$(document).ready(function () {

    var contactForm = $("#contactForm");
    var subject = $("#inputSubject");
    var message = $("#inputMessage");
    var success = $("#msg-success");

    success.hide();

    $(contactForm).on("submit", function (e) {
        e.preventDefault();
        // Wont submit the post if we are missing a body, title, or author
        if (!subject.val().trim() || !message.val().trim()) {
            return;
        }
        // Constructing a newPost object to hand to the database
        var newMessage = {
            subject: subject.val().trim(),
            msg: message.val().trim(),
            UserId: parseInt($("#userId").data("id")),
            recipient: parseInt($("#recipient").data("id"))
        };
        console.log(newMessage);
        submitPost(newMessage);
        //
        subject.val('');
        message.val('');
    });

    // Submits a new msg and brings user to blog page upon completion
    function submitPost(msg) {
        $.post("/api/messages", msg, function (res) {
            //   window.location.href = "/blog";
            console.log(res);
            success.show();
            contactForm.hide();
        });
    };

    
});
