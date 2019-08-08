$('.menu').hover(function() {
    $('.menu-list').show();
})
$('.menu-list').on('mouseleave', function() {
    $(this).hide();
})
$('.swiper-wrapper').swiper({
    imgList: ['./src/img/1.jpg', './src/img/2.jpg', './src/img/3.jpg'],
    isResize: true
})