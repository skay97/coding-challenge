// rand11 function is a black box that is implemented solely for test purposes
function rand11() {
    var random = Math.floor(Math.random() * 11) + 1;
    return random;
  }
  
  function rand13() {
    // var newRandom stores numbers from a range of 1-121
    var newRandom = 11 * rand11() + rand11() - 11;
    // If the number generated is less than 118, the number will be divded by 13 and its remainder will be added by 1 to provide a final range of 1-13. Otherwise, a new number is generated and is run through the process again
    return newRandom < 118 ? (newRandom % 13) + 1 : rand13();
  }
  // rand13 function is called to present final output
  rand13();
  
  // on button click welcome container is hidden and crystal ball is shown. A new class is also added for styling purposes to the number-container
  $("button").on("click", function() {
    $("#welcome-container").hide();
    $("#imageCrystal").show();
    $(".instructions").toggle();
    $(".number-container").addClass("num-container");
  });
  
  // reset function empties the container and let user click on the crystal ball multiple times
  var reset = function() {
    $(".number-container").empty();
    var newNumber = rand13();
    // lucky number is appended into the number-container element
    $(".number-container").append(`Your lucky number is: ${newNumber}!`);
  };
  // reset function is called when user clicks the crystal ball image
  $("#imageCrystal").on("click", function() {
    reset();
  });