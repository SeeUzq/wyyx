$('.footer').load('./common_footer.html');
$('.header').load('./common_header.html');
$('.item_ul').on('click','.addDeal',function(){
    var val = $('.goodsNum').val()
    val++
    $('.goodsNum').val(val)
    if(val > 1){
        $('.deleteDeal').css('cursor','pointer')
    }else{
        $('.deleteDeal').css('cursor','not-allowed')
    }
})
$('.item_ul').on('click','.deleteDeal',function(){
   
    var val = $('.goodsNum').val()
   
    if(val < 2){
        $('.deleteDeal').css('cursor','not-allowed')
    }else{
        val--
        $('.goodsNum').val(val)
        $('.deleteDeal').css('cursor','pointer')
    }
})
