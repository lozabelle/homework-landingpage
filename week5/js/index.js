// $( "#city-type" ).submit(function( event ) {
//   alert( "Handler for .submit() called." );
//   event.preventDefault();
// });

$('#submit-btn').click(function() {
  event.preventDefault();
  console.log("Getting city type!");

  var city = $("#city-type").val();
  console.log("The city is: " + city);

  var newYork = [ "New York", "New York City", "NYC", "Big Apple"];
  var sanFransisco =["San Francisco", "SF", "Bay Area"];
  var losAngeles =["Los Angeles", "LA", "LAX", "Hollywood"];
  var sydney =["Syd", "Sydney"];
  var austin=["Austin", "ATX"];

  if (newYork.indexOf(city) != -1) {
      $("body").css("background-image","url(./images/nyc.jpg)");
  } else if (sanFransisco.indexOf(city) != -1) {
      $("body").css("background-image","url(./images/sf.jpg)");
  } else if (losAngeles.indexOf(city) !=-1) {
      $("body").css("background-image","url(./images/la.jpg)");
  } else if (austin.indexOf(city) !=-1){
    $("body").css("background-image","url(./images/austin.jpg)");
  } else if (sydney.indexOf(city) !=-1) {
    $("body").css("background-image","url(./images/sydney.jpg)");
  } else {
    $("body").css("background-image", "url(./images/citipix_skyline.jpg)");
  }
});
