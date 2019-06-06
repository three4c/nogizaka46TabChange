$(function () {
  $('.tab__item').on('click', function () {
    let index = $('.tab__item').index(this);
    $('.tab__item').removeClass('active');
    $(this).addClass('active');
    $('.content__item').removeClass('show').eq(index).addClass('show');
    $('.content__img').removeClass('move').eq(index).addClass('move');
    return false;
  })
})
