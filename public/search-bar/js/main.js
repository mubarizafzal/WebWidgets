
console.log("ello");

$("document").ready(function() {
  $("#container").append("<p class='temp'>hello</p>");
  $("#container").append("<p>hello</p>");
  $("#container").append("<p>hello</p>");
  $("#container").append("<p class='temp2'>hello</p>");
    // also there is .prepend()
    // adding a class name with single brackets and using it to affect the css in the next tag
  
  $(".temp").css("color", "red");
  $("p:not(.temp)").css("color","blue");

  $(".temp2").html("bye");
  $(".temp2").html("<p>bye</p>");
  $(".temp2").text("<p>bye</p>"); // now treated as plaintext
    // replacing the html, retains the tag it is within and its class
    
  $("#container").append("<h3 class='clicker'>Click on the screen!</h3>");

  $("document").ready(function () {
    $("#container").on("click", doSome);
  });

  function doSome (evt) {
    $(".clicker").html("<h3>I changed!</h3>");
  }
  

});