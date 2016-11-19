var DATE_OF_HACKATHON = 'January 13, 2017 19:00:00 PST';
var dateOfHackathon = Date.parse(DATE_OF_HACKATHON);

var SECOND = 1000;
var MINUTE = SECOND * 60;
var HOUR = MINUTE * 60;
var DAY = HOUR * 24;
var WEEK = DAY * 7;

// Cache the jQuery lookups
var $weeks;
var $days;
var $hours;
var $minutes;
var $seconds;

var $weeksText;
var $daysText;
var $hoursText;
var $minutesText;
var $secondsText;

var $timerContainer;

$(document).ready(function() {
  $weeks = $('.weeks');
  $days = $('.days');
  $hours = $('.hours');
  $minutes = $('.minutes');
  $seconds = $('.seconds');

  $weeksText = $('.weeks-text');
  $daysText = $('.days-text');
  $hoursText = $('.hours-text');
  $minutesText = $('.minutes-text');
  $secondsText = $('.seconds-text');

  $timerContainer = $('.timer');

  timer();
});

function timer() {
  // Grab the date and time that is current when
  // the function runs
  var curDate = new Date();

  // Get the timeleft until HackUCI by taking the date
  // of the hackathon and subtracting it by the current date
  var timeLeft = dateOfHackathon - curDate;

  // If current time is less than time of the hackathon...
  // This will stop the timer as well
  if (timeLeft <= 0) {
    $timerContainer.text('HackUCI is LIVE!');

    return;
  }

  var weeksLeft = Math.floor(timeLeft / WEEK);
  var daysLeft = Math.floor(timeLeft % WEEK / DAY);
  var hoursLeft = Math.floor(timeLeft % DAY / HOUR);
  var minutesLeft = Math.floor(timeLeft % HOUR / MINUTE);
  var secondsLeft = Math.floor(timeLeft % MINUTE / SECOND);

  var weeksText = ' weeks, ';
  var daysText = ' days, ';
  var hoursText = ' hours, ';
  var minutesText = ' minutes, and ';
  var secondsText = ' seconds \'til';

  if (!weeksLeft) {
    weeksLeft = '';
    weeksText = '';
  } else if (weeksLeft === 1) {
    weeksText = ' week, ';
  }

  if (!daysLeft && !weeksLeft) {
    daysLeft = '';
    daysText = '';
  } else if (daysLeft === 1) {
    daysText = ' day, ';
  }

  if (!hoursLeft && !daysLeft && !weeksLeft) {
    hoursLeft = '';
    hoursText = '';
  } else if (hoursLeft === 1) {
    hoursText = ' hour, ';
  }

  if (!minutesLeft && !hoursLeft && !daysLeft && !weeksLeft) {
    minutesLeft = '';
    minutesText = '';
  } else if (minutesLeft === 1) {
    minutesText = ' minute, ';
  }

  if (secondsLeft === 1) {
    secondsText = ' second \'til';
  }

  // Set the values using jQuery
  $weeks.text(weeksLeft);
  $days.text(daysLeft);
  $hours.text(hoursLeft);
  $minutes.text(minutesLeft);
  $seconds.text(secondsLeft);

  $weeksText.text(weeksText);
  $daysText.text(daysText);
  $hoursText.text(hoursText);
  $minutesText.text(minutesText);
  $secondsText.text(secondsText);

  // Run the function again after 1 second
  setTimeout(timer, 1000);
}