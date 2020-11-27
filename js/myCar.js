$('.footer').load('./common_footer.html');
$('.header').load('./common_header.html',function(){
    if(!localStorage.getItem('goods')){
        $('.myCar_inner').css('display','block')
        $('.someCar_outer').css('display','none')
    }else{
        $('.myCar_inner').css('display','none')
        $('.someCar_outer').css('display','block')
        var allPrice = 0
        var PrevllPrice = 0
        var goodsObj = JSON.parse( localStorage.getItem('goods')) 
        goodsObj.forEach(function(element,index) {
            var dataObj = JSON.parse(element.data)[0]
            var id = JSON.parse(element.id)
            var {data_name,_src,nowP,preP} = dataObj
            var totalPrice =nowP*element.num
            var prevTotalPrice =preP*element.num
            allPrice += totalPrice
            PrevllPrice += prevTotalPrice
            var str = `<li class="item_li clearfix" id='${id}' index ='${index}'>
            <div class="itemdiv item1">
                <input type="checkbox">
            </div>
            <div class="itemdiv item2">
                <a href="#" class="itemImg"><img src="${_src}" ></a>
            </div>
            <div class="itemdiv item3">
                <a href="#" class="introduce">${data_name}</a>
                <p class="type"></p>
            </div>
            <div class="itemdiv item4">
                ￥<span>${nowP}</span>
            </div>
            <div class="item5 itemdiv  ">
               <div class="numDiv">
                   <div class="deleteDeal">
                       <i class="jian line"></i>
                     </div>
                     <input type="text" class="goodsNum" value="${element.num}">
                     <div class="addDeal">
                         <i class="line"></i>
                         <i class="jia"></i>
                     </div>
               </div>
           </div>
           <div class="item6 itemdiv ">￥<span>${totalPrice}</span></div>
           <div class="item7 itemdiv ">
               <a href="#" class="addStar">移入收藏夹</a>
               <a href="#" class="delete">删除</a>
           </div>
        </li>`
            var li = $('<div>'+str+'</div>')[0]
            console.log(li)
            console.log(document.querySelector('.selected_ul'))
            document.querySelector('.item_ul').appendChild(li)
        });
            var chajian = allPrice -PrevllPrice
            $('.needPArice .money strong').text(allPrice)
            $('.tot_price1 strong').text(PrevllPrice)
            $('.tot_price2 strong').text(chajian)
    }
});
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


