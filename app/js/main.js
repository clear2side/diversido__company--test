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