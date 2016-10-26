$(document).ready(function(){
  $(".button-collapse").sideNav();
  $("#contact-btn").click(function(){
    $('#contact-modal').openModal();
  });
  $("#contact-close-btn").click(function(){
    $('#contact-modal').closeModal();
  });
  $(".hack-logo").hide();
  $(".hack-logo").css("opacity", "1");
  $("#mobile-logo").hide();
  $("#mobile-logo").css("opacity", "1");
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    // console.log(sectionID);
    scrollToID('#' + sectionID, 750);
  });
});



function change(){
  if(document.body.scrollTop != 0){
    document.getElementById('nav-bar').classList.remove('unscrolled');
    $(".hack-logo").fadeIn();
    $("#mobile-logo").fadeIn();
  }
  if(document.body.scrollTop == 0){
    document.getElementById('nav-bar').classList.add('unscrolled');
    $(".hack-logo").fadeOut();
    $("#mobile-logo").fadeOut();
  }
  // console.log('changed');
};

function scrollToID(id, speed){
  var offSet = 50;
  var targetOffset = $(id).offset().top - offSet;
  var mainNav = $('#main-nav');
  $('html,body').animate({scrollTop:targetOffset}, speed);
}
