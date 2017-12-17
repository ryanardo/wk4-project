$(document).ready(function() {
  window.mdc.autoInit();
  $("#greeting-form").submit(function(event) {
    event.preventDefault();
    var firstName = $("#first-name").val();
    var lastName =  $("#last-name").val();

    var greetingOutput = function(firstname, lastname) {
      $("#greeting").text(firstname + " " + lastname);
    };

    greetingOutput(firstName, lastName);

  });
});
