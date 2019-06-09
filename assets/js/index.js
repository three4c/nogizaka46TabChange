$(function () {
    $('.tab__item').on('click', function () {
        let index = $('.tab__item').index(this);
        $('.tab__item').removeClass('active');
        $(this).addClass('active');
        $('.content__item').removeClass('show').eq(index).addClass('show');
        $('.content__img').removeClass('moveLeft').eq(index).addClass('moveLeft');
        $('.content__ruby').removeClass('slide slide-ruby').eq(index).addClass('slide slide-ruby');
        $('.content__name').removeClass('slide slide-name').eq(index).addClass('slide slide-name');
        $('.content__text').removeClass('slide slide-text').eq(index).addClass('slide slide-text');
        if (index == 2) {
            $('.content__shop').addClass('moveRight');
        } else {
            $('.content__shop').removeClass('moveRight')
        }
        return false;
    })
})