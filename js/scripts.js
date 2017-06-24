// var divisable = function(i) {
//
  // countdown.forEach(function(count) {
  //   var divisable = function(countdown) {
  //     if (countdown % 3)  {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };


$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var countdown = [];
    var userInput = parseInt($("input#number").val());
    for(i = 1; i <= userInput; i++) {
        countdown.push(i);
    }

    countdown.forEach(function(count) {
      var greeting1 = "ping"
      if (i % 3)  {
        countdown.push(greeting1);
      }
      // var result = leapYear(year);
      if (countdown === 3){
        alert("ping");
      }

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
