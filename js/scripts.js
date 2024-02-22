$(function () {
    var btnUp = $('.up');
    var top = $(this).scrollTop();
    if (top>300)
        btnUp.fadeIn(500);
    else
        btnUp.fadeOut(500);
    $(document).on('scroll', function(){
        var top = $(this).scrollTop();
        if (top>300)
            btnUp.fadeIn(500);
        else
            btnUp.fadeOut(500);
    })
    btnUp.on('click',function(){
        $('html, body').animate(
            {scrollTop:0},500
        );
    })
});
