// creates account and goes to login page
$(document).ready(function () {
	$("#create-account").click(function () {
		event.preventDefault();
		console.log("hello");
		var newUser = {
			name: $("#name").val().trim(),
			email: $("#register-email").val().trim(),
			password: $("#password").val().trim(),
			confirmPassword: $("#confirmPassword").val().trim(),
			handle: $("#handle").val().trim(),
			location: $("#location").val().trim(),
			interests: $("#interests").val().trim(),
			activities: $("#activities").val().trim(),
			aboutYou: $("#aboutYou").val().trim(),
			profilePhoto: $("#profilePhoto").val().trim(),
			coverPhoto: $("#coverPhoto").val().trim(),
			host: ($('input[name=optradio]:checked').val() === "host") ? true : false,
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

		// empty each input box by replacing the value with an empty string
		// $("#name").val("");
		// $("#register-email").val("");
		// $("#password").val("");
		// $("#confirmPassword").val("");
		// $("#handle").val("");
		// $("#location").val("");
		// $("#interests").val("");
		// $("#activities").val("");
		// $("#aboutYou").val("");
		// $("#profilePhoto").val("");
		// $("#coverPhoto").val("");
		// $("#host").val("");
		// $("#hostee").val("");

	});
});