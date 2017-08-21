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

  $('.content__wrap').toggle();
})

// button icon trigger
function triggerButton() {
  $(this).toggleClass('active').find('.header__roll--icon.close').toggleClass('active').siblings('.header__roll--icon.open').toggleClass('active');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5hdiBsaXN0IGFjY29yZGVvblxyXG4kKCcubmF2X19pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICR0aGlzID0gJCh0aGlzKTtcclxuICBpZiAoISR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiAhJCgnLm5hdicpLmhhc0NsYXNzKCdjb2xsYXBzZScpKSB7XHJcbiAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgICR0aGlzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gaGVhZGVyIHRyaWdnZXJcclxuJCgnLmhlYWRlcl9fcm9sbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAkKCcuaGVhZGVyX19yb2xsLS1pY29uLmNsb3NlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLm5hdiwgLmhlYWRlciwgLmNvbnRlbnRfX3dyYXAnKS5hZGRDbGFzcygnY29sbGFwc2UnKTtcclxuICAgIGlmICgkKCcubmF2X19pdGVtJykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICQoJy5uYXZfX2l0ZW0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgICQoJy5oZWFkZXJfX3JvbGwtLWljb24ub3BlbicpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICQoJy5uYXYsIC5oZWFkZXIsIC5jb250ZW50X193cmFwJykucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNlJyk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIG1lZGlhIDU1MHB4XHJcbmlmIChtYXRjaE1lZGlhKSB7XHJcbiAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDU1MHB4KVwiKTtcclxuICBtcS5hZGRMaXN0ZW5lcihXaWR0aENoYW5nZSk7XHJcbiAgV2lkdGhDaGFuZ2UobXEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBXaWR0aENoYW5nZShtcSkge1xyXG4gIGlmICghbXEubWF0Y2hlcykge1xyXG4gICAgJCgnLm5hdiwgLmhlYWRlciwgLmNvbnRlbnRfX3dyYXAnKS5hZGRDbGFzcygnY29sbGFwc2UnKS5maW5kKCcuaGVhZGVyX19yb2xsJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLmZpbmQoJy5oZWFkZXJfX3JvbGwtLWljb24uY2xvc2UnKS50b2dnbGVDbGFzcygnYWN0aXZlJykuc2libGluZ3MoJy5oZWFkZXJfX3JvbGwtLWljb24ub3BlbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9XHJcbn1cclxuXHJcbiQoJy5hbm90aGVyX19oZWFkZXItLXJvbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgJCgnLm5hdicpLnRvZ2dsZUNsYXNzKCdjb2xsYXBzZV9fdGFibGV0cycpLnRvZ2dsZUNsYXNzKCdjb2xsYXBzZScpXHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnY29sbGFwc2VfX3RhYmxldHMnKS5maW5kKCcuaGVhZGVyX19yb2xsLS1pY29uLmNsb3NlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCcuaGVhZGVyX19yb2xsLS1pY29uLm9wZW4nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcblxyXG4gICQoJy5jb250ZW50X193cmFwJykudG9nZ2xlKCk7XHJcbn0pXHJcblxyXG4vLyBidXR0b24gaWNvbiB0cmlnZ2VyXHJcbmZ1bmN0aW9uIHRyaWdnZXJCdXR0b24oKSB7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykuZmluZCgnLmhlYWRlcl9fcm9sbC0taWNvbi5jbG9zZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnLmhlYWRlcl9fcm9sbC0taWNvbi5vcGVuJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
