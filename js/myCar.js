$('.footer').load('./common_footer.html');
$('.header').load('./common_header.html',function(){
// 遍历localstorage生成购物车列表
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
            var prevTotalPrice =(preP = preP ? preP : 0 )*element.num
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
            // console.log(li)
            // console.log(document.querySelector('.selected_ul'))
            document.querySelector('.item_ul').appendChild(li)
        });
            var chajian = Math.abs((allPrice -PrevllPrice)).toFixed(2)
            $('.needPArice .money strong').text(allPrice)
            $('.tot_price1 strong').text(PrevllPrice)
            $('.tot_price2 strong').text(chajian)
    }
});
// 购物车加减点击
console.log()
$('.item_ul')[0].onclick = function(){
    var target = event.target
    // console.log(target,$(target),$(target).siblings('.goodsNum'))
    // console.log(target)
    // 购物车加按钮
    if($(target).hasClass('addDeal')){
        var inp1 =$(target).siblings('.goodsNum')
        var parentLi = $(target).closest('.item_li')
        var val1 = inp1.val()
        val1++
        // console.log($(target).closest('.item_li'))
        console.log(val1)
        inp1.val(val1)
        if(val1 > 1){
            $(target).css('cursor','pointer')
        }else{
            $(target).css('cursor','not-allowed')
        }
        var liId = parentLi.attr('id')
        console.log(parentLi.attr('id'))
        goodsObj = JSON.parse(localStorage.getItem('goods'))
        console.log(goodsObj)
        $.each(goodsObj,function(index,item){
            if(item.id ===liId ){
                item.num = val1
            }
        })
        localStorage.setItem('goods',JSON.stringify(goodsObj))
        
    }
    // 购物车减按钮
    if($(target).hasClass('deleteDeal')){
        var inp2 =$(target).siblings('.goodsNum')
        var val2 = inp2.val()
        var parentLi2 = $(target).closest('.item_li')
        if(val2 < 2){
            $(target).css('cursor','not-allowed')
        }else{
            val2--
            inp2.val(val2)
            $(target).css('cursor','pointer')
        }
        var liId2 = parentLi2.attr('id')
        // console.log(parentLi2.attr('id'))
        goodsObj2 = JSON.parse(localStorage.getItem('goods'))
        // console.log(goodsObj2)
        $.each(goodsObj2,function(index,item){
            if(item.id ===liId ){
                item.num = val2
                return 
            }
        })
        localStorage.setItem('goods',JSON.stringify(goodsObj))
    }
    
    
} 
