$(document).ready(function(){
  $(".button-collapse").sideNav();
  $("#myBtn").click(function(){
    $("#myModal").modal();
  });
  $(".hack-logo").hide();
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    console.log(sectionID);
    scrollToID('#' + sectionID, 750);
  });
  start_countdown();
});

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 ) - 8;
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}



DEADLINE = 'November 22 2015 11:00:00 GMT-08:00';

update_ahmed = function(){
    var time_remaining = getTimeRemaining(DEADLINE);
    $("#ahmed").html(//'days: ' + time_remaining.days + ':' +
                      //'hours: '+
                      ('0' + time_remaining.hours).slice(-2) +
                      ': ' + ('0' + time_remaining.minutes).slice(-2) +
                      ': ' + ('0' + time_remaining.seconds).slice(-2));
    if(time_remaining.total <=0){
      clearInterval(timeInterval);
    }
  };

function start_countdown(){
  //clockk = $("#ahmed");
  //clock.innerHTML = "HI";
  $("#ahmed").addClass("ahmed");
  if(getTimeRemaining(DEADLINE).total > 0){
    update_ahmed();
    var timerInterval = setInterval(update_ahmed, 1000);
  }
}

function change(){
  if(document.body.scrollTop != 0){
    document.getElementById('nav-bar').classList.remove('unscrolled');
    $(".hack-logo").fadeIn();
  }
  if(document.body.scrollTop == 0){
    document.getElementById('nav-bar').classList.add('unscrolled');
    $(".hack-logo").fadeOut();
  }
  // console.log('changed');
};

function scrollToID(id, speed){
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
}

var imgList = document.getElementsByClassName("raining-img");
function removeClass(){
  for(i=0; i<imgList.length; i++)
    imgList[i].style.visibility = "visible";
}

function anteaster() {
  $('body').html('<div id="anteater-arena" tabindex="0"></div>');

  var mySnakeBoard = new SNAKE.Board({
    boardContainer: "anteater-arena",
    fullScreen: true
  });
}