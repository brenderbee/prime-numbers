// Business Logic
function prime(number) {
  var totalNumbers = [];
  var primeNumbers = [2, 3, 5, 7];

  for (var i = 0; i <= number; i++){
    totalNumbers.push(i);
    }

  for (var j = 2; j < totalNumbers.length; j++) {
    if (j%2 !== 0 && j%3 !==0 && j%5 !== 0 && j%7 !==0) {
      primeNumbers.push(j);
    }
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
