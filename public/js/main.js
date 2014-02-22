// set full window height
$(document).ready(function(){
  var height = $(window).height();
  $('.main_cover').css('min-height', height);

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
      if(distance <= 46 && distance > 0){
        var current = $(this).attr('id');
        var nav = $('.'+current+'_nav').attr('href');
        $('.active').removeClass('active');
        $('.'+current+'_nav').addClass('active');
      }
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        $('.active').removeClass('active');
        $('.contact_nav').addClass('active');
      }
    })
  });
})

//changing element
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
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


// $( 'nav a' ).on('click', function(event) {
//     event.preventDefault();
//     var target = "#" + $(this).data('target');
//     $(this).addClass('active');
//     $('html, body').animate({
//         scrollTop: $(target).offset().top
//     }, 2000);
// });


//main submit form

$(document).ready( function () {
  $('#fake_button').on('click', function (event) {
    event.preventDefault();
    if(validateEmail($('#email_address').val())){
      $.ajax({
        url: '/hacker',
        type: 'POST',
        data:  {'email':$('#email_address').val()},
        statusCode: {
          200 : function (data){
             console.log('Registry succeeded');
             $('#current_email').text($('#email_address').val());
             $('#success_modal').click();
             $('#email_address').val(' ');
          },
          404 :  function (data) {
            console.log('Resource was not found.')
          },
          204 : function (data) {
            console.log('Invalid parameters');
          }
      }
    });
  }
  else{
    alert('Incorrect Email');
  }
  });
});


$('#email_address').on('input',function(){
    var input = $(this).val();
    valid_email = validateEmail(input);
}) 

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 