// set full window height
$(document).ready(function(){
  var height = $(window).height();
  $('.main_cover').css('min-height', height);

  // $('.content_section').css('min-height',height);


  $('#go_to_content').click(function(){
    $('#content').css('margin-top', -20);
  })
})



//fixing navbar
$(document).ready(function(){
	var device_height = $(window).height();
	$(window).bind('scroll', function(){
    if ($(window).scrollTop() > device_height){
      $('#navbar').addClass('fixed');
      $('#content').css('margin-top', 80);
     }
     else{
      $('#navbar').removeClass('fixed');
      $('#content').css('margin-top', 0);
    }
    $('.menu_offset').each(function(){
      var scrollTop     = $(window).scrollTop();
      var elementOffset = $(this).offset().top;
      var distance      = (elementOffset - scrollTop);
      $(this).removeClass('.active');
      if(distance <= 40 && distance > 0){
        var current = $(this).attr('id');
        var nav = $('.'+current+'_nav').attr('href');
        console.log(nav);
        $(current+'_nav').addClass('.active');
      }
    })
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


$( 'nav a' ).on('click', function(event) {
    event.preventDefault();
    var target = "#" + $(this).data('target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 2000);
});


//main submit form

$(document).ready( function () {
  $('#fake_button').on('click', function (event) {
    
    event.preventDefault();

      $.ajax({
        url: '/hacker',
        type: 'POST',
        data:  {'email':$('#email_address').val()},
        statusCode: {
          200 : function (data){
             console.log('Registry succeeded');
          },
          404 :  function (data) {
            console.log('Resource was not found.')
          },
          204 : function (data) {
            console.log('Invalid parameters');
          }
      }
    });
  });
});
