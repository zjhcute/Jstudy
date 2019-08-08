setTimeout(function() {
    $('.wrapper').removeClass('active');
},100)
$('.items').on('click', function() {
    $('.content').addClass('click-items');
    $(this).addClass('items-active');
})
$('.close').on('click', function(e) {
    e.stopPropagation();
    $('.content').removeClass('click-items');
    $('.items-active').removeClass('items-active');
})
