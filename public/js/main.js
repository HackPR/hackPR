// set full window height
$(document).ready(function(){
  var height = $(window).height();
  $('.main_cover').css('min-height', height);
  $('.content_section').css('min-height',height);
  $('#history_div').css('min-height',height);
})



//fixing navbar
$(document).ready(function(){
	var device_height = $(window).height();
	$(window).bind('scroll', function() {
      if ($(window).scrollTop() > device_height) {
        $('#navbar').addClass('fixed');
       }
       else {
         $('#navbar').removeClass('fixed');
       }
    });
})

//changing element
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//change div on nav click
$('nav a').on('click', function() {
    var scrollAnchor = $(this).attr('href'),
        scrollPoint = $('#' + scrollAnchor).offset().top - 80;
    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);
    return false;

})

//change active class on nav elements
$(window).scroll(function() {
    var windscroll = $(window).scrollTop()+window.innerHeight;
    if (windscroll >= 100) {
        $('nav').addClass('fixed');
        $('.content_section').each(function(i) {
            if ($(this).position().top <= windscroll - 80) {
                $('nav li.active').removeClass('active');
                $('nav li').eq(i).addClass('active');
            }
        });
    } else {

        $('nav li.active').removeClass('active');
        $('nav li:first').addClass('active');
    }
}).scroll();




//main submit form
function submit(){
  console.log($('#email_address').val())
  $.ajax({
    url:'/hacker',
    type:'POST',
    data:  {'email':$('#email_address').val()},
    success: function(){
            console.log('OK');
    },
    error: function(){
            console.log('ERROR');
    },
    statusCode: {
      200: function(){
        console.log('pre-registro exitoso');
      },
    }
  })  
}