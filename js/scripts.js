// var divisable = function(i) {
//
  // countdown.forEach(function(count) {
  //   var divisable = function(countdown) {
      // if (countdown % 3) && (countdown % 15 !== 0) || (year % 400 === 0)) {
      //   return true;
      // } else {
      //   return false;
      // }
  //   };


$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var countdown = [];
    var userInput = parseInt($("input#number").val());
    for(i = 1; i <= userInput; i++) {
        countdown.push(i);
    }

    // countdown.forEach(function(count) {
      $.each(countdown,function(index,value){
          // this tests the value presently being "looked at" to see if it is divisible by 3, then sets the array item to "ping" if it is
          if(value % 15 === 0) {
            countdown[index] = 'Ping Pong';
          }
          if(value % 5 === 0 && value % 15 !== 0) {
            countdown[index] = 'pong';
          }
          if(value % 3 === 0 && value % 15 !== 0) {
            countdown[index] = 'ping';
          }
        });
        // just outputting to console
        // console.log(countdown);
      // });

      // if (i % 3)  {
      //   // countdown.replace(i);
      //   $(".ping").show();
      // }
      // var greeting1 = "ping"
      // if (i % 3)  {
      //   countdown.push(greeting1);
      // }

      $("#list").append("<li>" + countdown  + "</li>");

    // });
    // if (i % 3)  {
    //   $(".ping").show();
    // }
    $("#list").show();
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
