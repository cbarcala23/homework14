$(document).ready(function() {
    
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);
    $.ajax({
      method: "PUT",
      url: "/burgers/" + burger_id
    }).then(function(data) {
      // reload page to display devoured burger in proper column
      location.reload();
    });

  });
});



// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function () {
//   event.preventDefault();

//   var burger_id = $(this).children(".burger_id").val();
//   console.log(burger_id);
//   $.ajax({
//     method: "PUT",
//     url: "/burgers/" + burger_id
//   }).then(function (data) {
//     // reload page to display devoured burger in proper column
//     location.reload();
//   });

// });

// $(".create-form").on("submit", function (event) {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();

//   var newburger = {
//     burger_name: $("#bu").val().trim(),
//     devoured: 0
//   };

//   // Send the POST request.
//   $.ajax("/api/burgers", {
//     type: "POST",
//     data: newburger
//   }).then(
//     function () {
//       console.log("created new burger");
//       // Reload the page to get the updated list
//       location.reload();
//     }
//   );
// });
//   });