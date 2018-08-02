// creates account and goes to login page
$(document).ready(function () {

	//
	$("#create-account").click(function (e) {
		e.preventDefault();
		var newUser = {
			name: $("#name").val().trim(),
			email: $("#register-email").val().trim(),
			password: $("#password").val().trim(),
			username: $("#handle").val().trim(),
			location: $("#location").val().trim(),
			interests: $("#interests").val().trim(),
			activities: $("#activities").val().trim(),
			about: $("#aboutYou").val().trim(),
			profilePhoto: $("#profilePhoto").val().trim(),
			coverPhoto: $("#coverPhoto").val().trim(),
			//if host is checked then make key value of object true, otherwise make it false
			host: ($('input[name=optradio]:checked').val() === "host") ? true : false,
			//if hostee is checked then make key value of object true, otherwise make it false
			hostee: ($('input[name=optradio]:checked').val() === "hostee") ? true : false,
		};

		$.post("/api/signup", newUser)
			// on success, run this callback
			.then(function (data) {
				// log the data we found
				console.log(data);
				// tell the user we're adding their new profile with an alert window? - Do we need this?
				alert("Your account has been created!");
			});

	});
});