$('.footer').load('./common_footer.html');
$('.header').load('./common_header.html',function(){
    myCarNum()
// 遍历localstorage生成购物车列表
    if(!localStorage.getItem('goods')){
        $('.myCar_inner').css('display','block')
        $('.someCar_outer').css('display','none')
    }else{
        $('.myCar_inner').css('display','none')
        $('.someCar_outer').css('display','block')
        var allPrice = 0
        // var PrevllPrice = 0
        var goodsObj = JSON.parse( localStorage.getItem('goods')) 
        goodsObj.forEach(function(element,index) {
            var dataObj = JSON.parse(element.data)[0]
            var id = JSON.parse(element.id)
            var {data_name,_src,nowP,preP} = dataObj
            var totalPrice =nowP*element.num
            // var prevTotalPrice =(preP = preP ? preP : 0 )*element.num
            // allPrice += totalPrice
            // PrevllPrice += prevTotalPrice
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
            document.querySelector('.item_ul').appendChild(li)
        });
        totalSum()
            
    }
});

// 购物车加减点击
$('.item_ul')[0].onclick = function(){
    var target = event.target
    // 购物车加按钮
    if($(target).hasClass('addDeal')){
        var inp1 =$(target).siblings('.goodsNum')
        var parentLi = $(target).closest('.item_li')
        var val1 = inp1.val()
        val1++
        console.log(val1)
        inp1.val(val1)
        if(val1 > 1){
            $(target).css('cursor','pointer')
        }else{
            $(target).css('cursor','not-allowed')
        }
        var liId = parentLi.attr('id')
        // console.log(parentLi.attr('id'))
        var goodsObj = JSON.parse(localStorage.getItem('goods'))
        // console.log(goodsObj)
        $.each(goodsObj,function(index,item){
            if(item.id ===liId ){
                item.num = val1
            }
        })
        localStorage.setItem('goods',JSON.stringify(goodsObj))
        totalSum()
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
        goodsObj2 = JSON.parse(localStorage.getItem('goods'))
        $.each(goodsObj2,function(index,item){
            if(item.id ===liId2 ){
                item.num = val2
                return 
            }
        })
        localStorage.setItem('goods',JSON.stringify(goodsObj2))
      
    }
    totalSum()
} 
// 计算商品总和优惠前价格
function totalSum(){
    var allPrice3 = 0
    var PrevllPrice3 = 0
    var goodsObj3 = JSON.parse( localStorage.getItem('goods')) 
    goodsObj3.forEach(function(element,index) {
        var dataObj = JSON.parse(element.data)[0]
        var {data_name,_src,nowP,preP} = dataObj
        var totalPrice =nowP*element.num
        var prevTotalPrice =(preP = preP ? preP : 0 )*element.num
        allPrice3 += totalPrice
        PrevllPrice3 += prevTotalPrice
    });
        var chajian = Math.abs((allPrice3 -PrevllPrice3)).toFixed(2)
        $('.needPArice .money strong').text(Math.abs((allPrice3)).toFixed(2))
        $('.tot_price1 strong').text(PrevllPrice3)
        $('.tot_price2 strong').text(chajian)
}

// 购物车操作
$(function(){
    var myCarObj ={
        init : function(){
            this.cacheElement()
            this.bindEvent()
        },
        cacheElement:function(){
            this.$all = $('.allSelects .allInput')
            this.$hasSekected = $('.selectedInput')
        },
        bindEvent:function(){
            var _this = this;
           // 删除一类商品
           $('.item_ul').on('click','.itemdiv .delete',function (){
            // 删除点击点击按钮对应的父元素
            var liId = $(this).closest('.item_li ').attr('id')
            $(this).closest('.item_li ').remove()
            var goodsObj = JSON.parse(localStorage.getItem('goods'))
            $.each(goodsObj,function(index,item){
                if(item.id ===liId ){
                    goodsObj.splice(index,1) 
                    // console.log(goodsObj)
                    return false
                }
            })
            localStorage.setItem('goods',JSON.stringify(goodsObj))
            totalSum()
            myCarNum()
            if(goodsObj.length < 1){
                localStorage.removeItem('goods')
            }
            hasGoods()
           
            })
            // 移入收藏夹
            $('.item_ul').on('click','.itemdiv .addStar',function(){
                alert('收藏成功')
            })   
            // 全选按钮
            $('.someCar').on('click','.allSelects .allInput',function(){
                console.log(this.checked)
                var _this = this
                if(!this.checked){//取消全选
                    // console.log(11111111111)
                    // console.log($('.item_li .item1 input'))
                    $('.item_li .item1 input').prop('checked',false)
                    $('.selectedInput').prop('checked',false)

                }else if(this.checked){//全选
                    $('.item_li .item1 input').prop('checked',true)
                    console.log($('.selectedInput'))
                    $('.selectedInput').prop('checked',true)
                }    
                
               
            })
            // 单选按钮
            $('.someCar').on('click','.item_li .item1 input',function(){
                var target = event.target
               _this.changeAll()
               _this.hasSelected()
            })
            // 批量删除
            $('.someCar').on('click','.deleteMore',function(){  
                var goodsObj = JSON.parse(localStorage.getItem('goods'))
                var lis = $('.item_li .item1 input')
                // console.log(lis)
                var i = 0;
                var len = JSON.parse(localStorage.getItem('goods'))
                for(var index = 0;index <len.length;index++){
                        if ($(lis[index]).prop('checked')) {
                            // console.log(goodsObj)
                            // console.log(lis)
                            var liId = $(lis[index]).closest('.item_li ').attr('id')
                            goodsObj.splice( index- i,1) 
                            // console.log(index- i)
                            $(lis[index]).closest('.item_li').remove()
                            localStorage.setItem('goods',JSON.stringify(goodsObj))
                            i++
                            totalSum()
                            myCarNum()
                        }
                }
                if(goodsObj.length < 1){
                    localStorage.removeItem('goods')
                }
                _this.hasSelected()
                hasGoods();
            })
        },
        changeAll:function(){
                var _this = this
                // 判断是否要勾选全部
                var flag = true
                $('.item_li .item1 input').each(function (index,ele){ 
                  if (!$(ele).prop('checked')) {
                    // 去掉全选
                    _this.$all.prop('checked',false)
                    flag = false
                    return false
                  }
                })
                if (flag) {// 勾选全部
                  _this.$all.prop('checked',true)
                }
                if ($('.item_li .item1 input').length <= 0) {
                  _this.$all.prop('checked',false)
                  _this.$hasSekected.prop('checked',false)
                }
                
        },
        hasSelected:function(){
            var _this = this
                // 判断是否要勾选全部
            var flag = true
            $('.item_li .item1 input').each(function (index,ele){
                if ($(ele).prop('checked')) {
                    _this.$hasSekected.prop('checked',true)
                    flag = false
                    return false
                }
            })
            if(flag){
                _this.$hasSekected.prop('checked',false)
            }



        }
    } 
    myCarObj.init()
})



function hasGoods(){
    if(!localStorage.getItem('goods')){
        $('.myCar_inner').css('display','block')
        $('.someCar_outer').css('display','none')
    }else{
        $('.myCar_inner').css('display','none')
        $('.someCar_outer').css('display','block')
    }
}
function myCarNum(){
    if(localStorage.getItem('goods')){  
    var goodsObj = JSON.parse(localStorage.getItem('goods'))
    $('.myCarNum').text(goodsObj.length)
}
}