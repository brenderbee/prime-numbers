// Business Logic
function prime(number) {
  var primeNumbers = [0, 1];

  for (var i = 2; i <= number; i++){
    primeNumbers.push(i);
    }

  return primeNumbers;
}


// User-Interface Logicd
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var inputMaxNumber = parseInt($("#maxnumber").val());

    var output = prime(inputMaxNumber);

    output.forEach(function(item) {
      $("#result").append("<li>" + item + "</li>");
    });
  });
});
