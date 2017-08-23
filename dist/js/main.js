// nav list accordeon
$('.nav__item').on('click', function () {
  $(this).addClass('active').siblings().removeClass('active');

});

// header trigger
$('.header__roll').on('click', function () {
  $(this).toggleClass('active');
  if (!$(this).hasClass('active')) {
    $('.header__roll--icon.close').addClass('active').siblings().removeClass('active');
    $('.nav, .header, .content__wrap').addClass('collapse');
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
  $('.nav').toggleClass('collapse__tablets').toggleClass('collapse');
  $(this).toggleClass('collapse__tablets').find('.header__roll--icon.close').toggleClass('active').siblings('.header__roll--icon.open').toggleClass('active');
  if ($('.nav').hasClass('collapse__tablets')) {
    $('.content__wrap').addClass('collapse__tablets');
  } else {
    $('.content__wrap').removeClass('collapse__tablets');
  }
})

// button icon trigger
function triggerButton() {
  $(this).toggleClass('active').find('.header__roll--icon.close').toggleClass('active').siblings('.header__roll--icon.open').toggleClass('active');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuYXYgbGlzdCBhY2NvcmRlb25cclxuJCgnLm5hdl9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbn0pO1xyXG5cclxuLy8gaGVhZGVyIHRyaWdnZXJcclxuJCgnLmhlYWRlcl9fcm9sbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAkKCcuaGVhZGVyX19yb2xsLS1pY29uLmNsb3NlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLm5hdiwgLmhlYWRlciwgLmNvbnRlbnRfX3dyYXAnKS5hZGRDbGFzcygnY29sbGFwc2UnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnLmhlYWRlcl9fcm9sbC0taWNvbi5vcGVuJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgJCgnLm5hdiwgLmhlYWRlciwgLmNvbnRlbnRfX3dyYXAnKS5yZW1vdmVDbGFzcygnY29sbGFwc2UnKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gbWVkaWEgNTUwcHhcclxuaWYgKG1hdGNoTWVkaWEpIHtcclxuICBjb25zdCBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNTUwcHgpXCIpO1xyXG4gIG1xLmFkZExpc3RlbmVyKFdpZHRoQ2hhbmdlKTtcclxuICBXaWR0aENoYW5nZShtcSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFdpZHRoQ2hhbmdlKG1xKSB7XHJcbiAgaWYgKCFtcS5tYXRjaGVzKSB7XHJcbiAgICAkKCcubmF2LCAuaGVhZGVyLCAuY29udGVudF9fd3JhcCcpLmFkZENsYXNzKCdjb2xsYXBzZScpLmZpbmQoJy5oZWFkZXJfX3JvbGwnKS50b2dnbGVDbGFzcygnYWN0aXZlJykuZmluZCgnLmhlYWRlcl9fcm9sbC0taWNvbi5jbG9zZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnLmhlYWRlcl9fcm9sbC0taWNvbi5vcGVuJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH1cclxufVxyXG5cclxuJCgnLmFub3RoZXJfX2hlYWRlci0tcm9sbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcubmF2JykudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlX190YWJsZXRzJykudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlJyk7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnY29sbGFwc2VfX3RhYmxldHMnKS5maW5kKCcuaGVhZGVyX19yb2xsLS1pY29uLmNsb3NlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCcuaGVhZGVyX19yb2xsLS1pY29uLm9wZW4nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XHJcbiAgaWYgKCQoJy5uYXYnKS5oYXNDbGFzcygnY29sbGFwc2VfX3RhYmxldHMnKSkge1xyXG4gICAgJCgnLmNvbnRlbnRfX3dyYXAnKS5hZGRDbGFzcygnY29sbGFwc2VfX3RhYmxldHMnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgJCgnLmNvbnRlbnRfX3dyYXAnKS5yZW1vdmVDbGFzcygnY29sbGFwc2VfX3RhYmxldHMnKTtcclxuICB9XHJcbn0pXHJcblxyXG4vLyBidXR0b24gaWNvbiB0cmlnZ2VyXHJcbmZ1bmN0aW9uIHRyaWdnZXJCdXR0b24oKSB7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykuZmluZCgnLmhlYWRlcl9fcm9sbC0taWNvbi5jbG9zZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygnLmhlYWRlcl9fcm9sbC0taWNvbi5vcGVuJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
