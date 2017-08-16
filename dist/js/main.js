// nav list accordeon
$('.nav__item').on('click', function () {
  $this = $(this);
  if (!$this.hasClass('active') && !$('.nav').hasClass('collapse')) {
    $this.addClass('active').siblings().removeClass('active');
  } else {
    $this.removeClass('active');
  }
});

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

function triggerButton() {
  $('.header__roll').toggleClass('active').find('.header__roll--icon.close').toggleClass('active').siblings('.header__roll--icon.open').toggleClass('active');
}

function WidthChange(mq) {
  if (!mq.matches) {
    // $('.nav, .header, .content__wrap').addClass('collapse');

    // $('.header__roll').on('click', function () {
    // $('.nav').toggleClass('collapse__tablets').toggleClass('collapse')
    // });

  } else {
    // $('.nav, .header, .content__wrap').addClass('collapse');
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmF2IGxpc3QgYWNjb3JkZW9uXHJcbiQoJy5uYXZfX2l0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgJHRoaXMgPSAkKHRoaXMpO1xyXG4gIGlmICghJHRoaXMuaGFzQ2xhc3MoJ2FjdGl2ZScpICYmICEkKCcubmF2JykuaGFzQ2xhc3MoJ2NvbGxhcHNlJykpIHtcclxuICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJHRoaXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH1cclxufSk7XHJcblxyXG4kKCcuaGVhZGVyX19yb2xsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIGlmICghJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICQoJy5oZWFkZXJfX3JvbGwtLWljb24uY2xvc2UnKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAkKCcubmF2LCAuaGVhZGVyLCAuY29udGVudF9fd3JhcCcpLmFkZENsYXNzKCdjb2xsYXBzZScpO1xyXG4gICAgaWYgKCQoJy5uYXZfX2l0ZW0nKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuICAgICAgJCgnLm5hdl9faXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgJCgnLmhlYWRlcl9fcm9sbC0taWNvbi5vcGVuJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLm5hdiwgLmhlYWRlciwgLmNvbnRlbnRfX3dyYXAnKS5yZW1vdmVDbGFzcygnY29sbGFwc2UnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gbWVkaWEgNTUwcHhcclxuaWYgKG1hdGNoTWVkaWEpIHtcclxuICBjb25zdCBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTUwcHgpXCIpO1xyXG4gIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcclxuICBXaWR0aENoYW5nZShtcSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJCdXR0b24oKSB7XHJcbiAgJCgnLmhlYWRlcl9fcm9sbCcpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuaGVhZGVyX19yb2xsLS1pY29uLmNsb3NlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCcuaGVhZGVyX19yb2xsLS1pY29uLm9wZW4nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFdpZHRoQ2hhbmdlKG1xKSB7XHJcbiAgaWYgKCFtcS5tYXRjaGVzKSB7XHJcbiAgICAvLyAkKCcubmF2LCAuaGVhZGVyLCAuY29udGVudF9fd3JhcCcpLmFkZENsYXNzKCdjb2xsYXBzZScpO1xyXG5cclxuICAgIC8vICQoJy5oZWFkZXJfX3JvbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAkKCcubmF2JykudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlX190YWJsZXRzJykudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlJylcclxuICAgIC8vIH0pO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gJCgnLm5hdiwgLmhlYWRlciwgLmNvbnRlbnRfX3dyYXAnKS5hZGRDbGFzcygnY29sbGFwc2UnKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
