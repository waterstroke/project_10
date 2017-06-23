$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var countdown = [];
    var UserInput = $("input#number").val()
    for(i = 0; i <= userInput; i++) {
        countdown.push(i);
    }
     $(".form-group").text(countdown);
//This is the sort loop after sorting. it displays the results.
    countdown.forEach(function(count) {
//We are taking the countdown input and making the
//list inside of java script not html
    $("#list").append("<li>" + count + "</li>");
  });

  $("form").hide();

  $("#list").show();

    event.preventDefault();
  });
 });


 // $(".sentence").text(allCaps);
 // var countdown = [];
 // var userInput = parseInt(prompt("enter number"));
 // //     console.log = countdown
 // for(i = 0; i <= userInput; i++) {
 //   countdown.push(i);
 // }
