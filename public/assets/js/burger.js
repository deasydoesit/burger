$(function() {

  function gifAnimate() {
    var state = $(".gif").attr("data-state");
    if (state == "still") {
      var animate = $(".gif").attr("data-animate");
      $(".gif").attr("src", animate);
      $(".gif").attr("data-state", "animate");
    } else {
      var still = $(".gif").attr("data-still");
      $(".gif").attr("src", still);
      $(".gif").attr("data-state", "still");
    }
  };

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger").val().trim(),
    };
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        location.reload();
      }
    );
  });

  $(".devour").on("click", function() {
    gifAnimate();
    var id = $(this).data("id");
    setTimeout(function() {
      $.ajax("/api/burgers/" + id, {
        type: "PUT"
      }).then(
        function() {
          location.reload();
        }
      );
    }, 1000);
  });

});
