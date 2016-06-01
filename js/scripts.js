// $(document).ready(function() {
//   $("#blanks form").submit(function() {
//     var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];
//
//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val();
//       $("." + blank).text(userInput).val();
//     });
//
//     $("#story").show();
//   });
// });


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var placeInput = $("input#place").val();
    var nounInput = $("input#noun").val();
    var ingverbInput = $("input#ingverb").val();
    var adverbInput = $("input#adverb").val();
    var person2Input = $("input#person2").val();
    var numberInput = $("input#number").val();

    $(".person1").text(person1Input);
    $(".place").text(placeInput);
    $(".noun").text(nounInput);
    $(".ingverb").text(ingverbInput);
    $(".adverb").text(adverbInput);
    $(".person2").text(person2Input);
    $(".number").text(numberInput);

    $("#story").show();

    event.preventDefault();
  });
});
