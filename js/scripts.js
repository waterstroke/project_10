// var divisable = function(i) {
//
//   countdown.forEach(function(count) {
//     var greeting;
//       if (i % 3)  {
//         greeting = "ping"
//       }

//       //  else if {
//       //  (i % 5 === "pong")
//       // }
//       //  else if{
//       //  (i % 15 === "ping pong"))
//       // }
//       //  else



$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var countdown = [];
    var userInput = parseInt($("input#number").val());
    for(i = 1; i <= userInput; i++) {
        countdown.push(i);
    }

    countdown.forEach(function(count) {
      // divisable();
      $("#list").append("<li>" + count + "</li>");

    });

    event.preventDefault();
    });
  });


  // $("form").hide();
  //








// document.getElementById('#list').innerHTML = countdown;

 // $(".sentence").text(allCaps);
 // var countdown = [];
 // var userInput = parseInt(prompt("enter number"));
 // //     console.log = countdown
 // for(i = 0; i <= userInput; i++) {
 //   countdown.push(i);
 // }
