AOS.init({
    duration: 1200,
})

$(function() {
    $('.navscroll').hide();
    $('.navfixed').show();
    $(function() {
      $(window).scroll(function() {
        if($(this).scrollTop() > 100) {
          $('.navscroll').fadeIn();
        }
        else {
          $('.navscroll').fadeOut();
        }
      });
    });
  
  if( window.location.href.indexOf("#contact-us") > -1 ) {
    $('.modal-mortgage').modal('hide');
  }

  $('.navbar-mortgage a[href^="#"]').click(function() {
    $('.navbar-toggle').trigger('click');
  });

  $('#totop').click(function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
  });

  $('#myCarousel').carousel({
    interval: 10000
  });

  $('#carousel-placedetails').carousel({
    interval: false
  }).on('slide.bs.carousel', function () {
    document.getElementById('player').src = document.getElementById('player').src;
  });

  

  $('.carousel-photos li').click(function() {
    $('.embed-responsive-item').each(function(index) {
      $(this).attr('src', $(this).attr('src'));
      return false;
    });
  });
  $('.place-details').on('hidden.bs.modal', function() {
    $('.embed-responsive-item').each(function(index) {
      $(this).attr('src', $(this).attr('src'));
      return false;
    });
  } );
});

//HEADER OPACITY SCROLL
var headersite = document.getElementById('headersite');
(function(){

  var throttle = function(type, name, obj){
    var obj = obj || window;
    var running = false;
    var func = function(){
      if (running){ return; }
      running = true;
      requestAnimationFrame(function(){
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };
  
  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function(){
    headersite.style.opacity = 1 - (window.pageYOffset / headersite.offsetHeight);
})

//BTN TO TOP
window.onscroll = function() { scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        $('#btntotop').fadeIn();
    } else {
        $('#btntotop').fadeOut();
    }
}

document.getElementById('inputphone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});
document.getElementById('contact-inputphone').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});