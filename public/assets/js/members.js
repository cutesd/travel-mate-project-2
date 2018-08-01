$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.name);
    $(".member-email").text(data.email);
    $(".member-location").text(data.location);
    $(".member-profile").text(data.profilePhoto);
    $(".member-cover").text(data.coverPhoto);
    $(".member-interests").text(data.interests);
  });
});
