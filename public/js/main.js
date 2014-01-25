
function submit(){
    document.getElementById("hidden_submit").click();
}

$(document).ready(function(){
	var device_height = $(window).height();
	$(window).bind('scroll', function() {
		// console.log($(window).scrollTop() >= device_height);
      if ($(window).scrollTop() > device_height) {
        $('#navbar').addClass('fixed');
       }
       else {
         $('#navbar').removeClass('fixed');
       }
    });
})


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

$(document).ready(function(){
	var height = window.innerHeight;
	$('#main').css('height', height);
	$('.content_section').css('min-height',height);
})


$('nav a').on('click', function() {
    var scrollAnchor = $(this).attr('href'),
        scrollPoint = $('#' + scrollAnchor).offset().top - 80;
    $('body,html').animate({
        scrollTop: scrollPoint
    }, 500);

    return false;

})


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