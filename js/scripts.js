$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var countdown = [];
    var userInput = parseInt($("input#number").val());
    for(i = 1; i <= userInput; i++) {
        countdown.push(i);
    }

    // countdown.forEach(function(count) {
      $.each(countdown,function(index,value){
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

    countdown.forEach(function(count) {
      $("#list").append("<li>" + count + "</li>");
    });

    $("#list").show();
  
    event.preventDefault();
    });
  });
