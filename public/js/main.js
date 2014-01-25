
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
	$('.content_section').css('height',height-100);
})