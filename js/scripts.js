var pingPong = function(userInput) {

  var countdown = [];

  for (i = 0; i <= userInput; i++) {
      if(i % 15 === 0) {
        countdown[i] = 'Ping Pong';
      } else if(i % 5 === 0) {
        countdown[i] = 'pong';
      } else if(i % 3 === 0) {
        countdown[i] = 'ping';
      } else {
        countdown.push(i);
      }
    }
    return countdown;
};

$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var userInput = parseInt($("input#number").val());
    var funcPingPong = pingPong(userInput);

    for (var i = 1; i < funcPingPong.length; i++ ) {
          $('#list').append('<li>' + funcPingPong[i] + '</li>');
        };

    $("#list").show();

    event.preventDefault();
    });
  });
