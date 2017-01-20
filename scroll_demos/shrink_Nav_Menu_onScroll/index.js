$(document).ready(function() {
  $("#notification-icon").click(function(){
    $('.alert-box').css({"display":"block"});
  });
  $("#close_noti").click(function(){
    $('.alert-box').css({"display":"none"});
  });

});

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
    $('.alert-box').css({"top":"40px"});
  } else {
    $('nav').removeClass('shrink');
      $('.alert-box').css({"top":"60px"});
  }

});
