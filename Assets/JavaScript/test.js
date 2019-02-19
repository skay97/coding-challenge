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


$("button").on("click", function () {
    $("#welcome-container").hide();
    $("img").show();
    $(".instructions").toggle();
    $(".number-container").addClass("num-container")
})

var reset = function () {
    $(".number-container").empty();
    var newNumber = rand13()
    $(".number-container").append(`Your lucky number is: ${newNumber}!`)
}

$("img").on("click", function () {
    reset();
})