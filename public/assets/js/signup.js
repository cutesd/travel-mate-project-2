$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("form.signup");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");

  function interestsList() {
    var _arr = [];
    for (let i = 1; i <= 17; i++) {
      if ($("#cb" + i).is(':checked'))
        _arr.push($("#cb" + i).val());
    }
    return _arr.join(",");
  }

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    var userData = {
      name: $("input#name-input").val().trim(),
      username: $("input#username-input").val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      location: $("input#location-input").val().trim(),
      about: $("textarea#about-input").val().trim(),
      interests: interestsList(),
      activities: $("textarea#activities-input").val().trim(),
      profilePhoto: $("input#profpic-input").val().trim(),
      coverPhoto: $("input#cover-input").val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(userData) {
    $.post("/api/signup", userData).then(function (data) {
      window.location.replace(data);
      // If there's an error, handle it by throwing up a boostrap alert
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err);
    $("#alert").fadeIn(500);
  }
});
