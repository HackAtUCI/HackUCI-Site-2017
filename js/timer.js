var DATE_OF_HACKATHON = 'January 13, 2017 19:00:00 PDT';
var SECOND = 1000;
var MINUTE = SECOND * 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;

$(document).ready(function() {
  setInterval(timer, 1000)
});

function timer() {
  var $days = $('.days');
  var $hours = $('.hours');
  var $minutes = $('.minutes');
  var $seconds = $('.seconds');

  var curDate = new Date();
  var timeLeft = Date.parse(DATE_OF_HACKATHON) - curDate;

  var daysLeft = Math.floor(timeLeft / DAY);
  var hoursLeft = Math.floor(timeLeft % DAY / HOUR);
  var minutesLeft = Math.floor(timeLeft % HOUR / MINUTE);
  var secondsLeft = Math.floor(timeLeft % MINUTE / SECOND);

  $days.text(daysLeft);
  $hours.text(hoursLeft);
  $minutes.text(minutesLeft);
  $seconds.text(secondsLeft);
}