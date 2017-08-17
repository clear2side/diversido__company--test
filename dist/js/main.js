// nav list accordeon
$('.nav__item').on('click', function () {
  $this = $(this);
  if (!$this.hasClass('active') && !$('.nav').hasClass('collapse')) {
    $this.addClass('active').siblings().removeClass('active');
  } else {
    $this.removeClass('active');
  }
});

// header trigger
$('.header__roll').on('click', function () {
  $(this).toggleClass('active');
  if (!$(this).hasClass('active')) {
    $('.header__roll--icon.close').addClass('active').siblings().removeClass('active');
    $('.nav, .header, .content__wrap').addClass('collapse');
    if ($('.nav__item').hasClass('active')) {
      $('.nav__item').removeClass('active');
    }
  } else {
    $('.header__roll--icon.open').addClass('active').siblings().removeClass('active');
    $('.nav, .header, .content__wrap').removeClass('collapse');
  }
});

// media 550px
if (matchMedia) {
  const mq = window.matchMedia("(min-width: 550px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (!mq.matches) {
    $('.nav, .header, .content__wrap').addClass('collapse').find('.header__roll').toggleClass('active').find('.header__roll--icon.close').toggleClass('active').siblings('.header__roll--icon.open').toggleClass('active');
  } 
}

$('.another__header--roll').on('click', function () {
  $('.nav').toggleClass('collapse__tablets').toggleClass('collapse')
  $(this).toggleClass('collapse__tablets').find('.header__roll--icon.close').toggleClass('active').siblings('.header__roll--icon.open').toggleClass('active');
})

// button icon trigger
function triggerButton() {
  $(this).toggleClass('active').find('.header__roll--icon.close').toggleClass('active').siblings('.header__roll--icon.open').toggleClass('active');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYXYgbGlzdCBhY2NvcmRlb25cclxuJCgnLm5hdl9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAkdGhpcyA9ICQodGhpcyk7XHJcbiAgaWYgKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykgJiYgISQoJy5uYXYnKS5oYXNDbGFzcygnY29sbGFwc2UnKSkge1xyXG4gICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAkdGhpcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIGhlYWRlciB0cmlnZ2VyXHJcbiQoJy5oZWFkZXJfX3JvbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgJCgnLmhlYWRlcl9fcm9sbC0taWNvbi5jbG9zZScpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5uYXYsIC5oZWFkZXIsIC5jb250ZW50X193cmFwJykuYWRkQ2xhc3MoJ2NvbGxhcHNlJyk7XHJcbiAgICBpZiAoJCgnLm5hdl9faXRlbScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAkKCcubmF2X19pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICAkKCcuaGVhZGVyX19yb2xsLS1pY29uLm9wZW4nKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcubmF2LCAuaGVhZGVyLCAuY29udGVudF9fd3JhcCcpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZScpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBtZWRpYSA1NTBweFxyXG5pZiAobWF0Y2hNZWRpYSkge1xyXG4gIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiA1NTBweClcIik7XHJcbiAgbXEuYWRkTGlzdGVuZXIoV2lkdGhDaGFuZ2UpO1xyXG4gIFdpZHRoQ2hhbmdlKG1xKTtcclxufVxyXG5cclxuZnVuY3Rpb24gV2lkdGhDaGFuZ2UobXEpIHtcclxuICBpZiAoIW1xLm1hdGNoZXMpIHtcclxuICAgICQoJy5uYXYsIC5oZWFkZXIsIC5jb250ZW50X193cmFwJykuYWRkQ2xhc3MoJ2NvbGxhcHNlJykuZmluZCgnLmhlYWRlcl9fcm9sbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuaGVhZGVyX19yb2xsLS1pY29uLmNsb3NlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCcuaGVhZGVyX19yb2xsLS1pY29uLm9wZW4nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSBcclxufVxyXG5cclxuJCgnLmFub3RoZXJfX2hlYWRlci0tcm9sbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcubmF2JykudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlX190YWJsZXRzJykudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlJylcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjb2xsYXBzZV9fdGFibGV0cycpLmZpbmQoJy5oZWFkZXJfX3JvbGwtLWljb24uY2xvc2UnKS50b2dnbGVDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJy5oZWFkZXJfX3JvbGwtLWljb24ub3BlbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxufSlcclxuXHJcbi8vIGJ1dHRvbiBpY29uIHRyaWdnZXJcclxuZnVuY3Rpb24gdHJpZ2dlckJ1dHRvbigpIHtcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuaGVhZGVyX19yb2xsLS1pY29uLmNsb3NlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCcuaGVhZGVyX19yb2xsLS1pY29uLm9wZW4nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
