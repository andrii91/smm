$(document).ready(function () {
  $('.head-img img').click(function () {
    var destination = $(".program").offset().top - 0;
    $("body,html").animate({
      scrollTop: destination
    }, 500);
  });

  $('.accordion-title ').click(function () {
    $(this).toggleClass('active');
    $(this).parent().find('.accordion-content').slideToggle();
  });

  var countAll = 0,
    count = 0;

  function systemInterval() {
    $('.system-you .system-item').removeClass('active');
    $('.system-concurents .system-item').removeClass('active');
    $('.system-steps .item').removeClass('active');
    $('.answers-list li').removeClass('active');
    countAll = $('.system-you .system-item').length;
    $($('.system-you .system-item')[count]).addClass('active');
    $($('.system-concurents .system-item')[count]).addClass('active');
    $($('.system-steps .item')[count]).addClass('active');
    $($('.answers-list li')[count]).addClass('active');

    count += 1;
    if (count == countAll) {
      count = 0;
    }

  }

  var sInterval = setInterval(systemInterval, 3000);

  $('.modal-btn').click(function (e) {
    e.preventDefault;
    $('#' + $(this).data('modal')+' h4').text($(this).text());

    $('#' + $(this).data('modal')).show('400');
    $('.overlay').show('400');
    $('#' + $(this).data('modal')).animate({
      opacity: 1,
    }, 400);
    $('body').addClass('overl-h');
  });
  $('.overlay, .popup__close').click(function () {
    $('body').removeClass('overl-h');
    $('.modal').hide('400');
    $('.overlay').hide('400');
    $('.modal').animate({
      opacity: 0,
    }, 400);
  });

});