// Business Logic



// User-Interface Logicd
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputMaxNumber = parseInt($("#maxnumber").val());


    $("#result").append("<li>" + output + "</li>");
  });
});
