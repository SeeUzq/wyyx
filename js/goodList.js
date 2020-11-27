$('.fixBoxLeft').load('./fixLeft.html');
$('.fixBoxRight').load('./fixRight.html');
$('.header').load('./common_header.html',function(){
     $.ajax({
        dataType :'json',
        url:'./../data/foodList.json',
        type:'get',
        success:function(data){
            // console.log(data)
            var goodsList = data.categoryItemList
             //遍历数据，生成样式结构 
            $.each(goodsList,function(index,item){
                // if(index >= 2){
                //     return
                // }

                var divStr = ''
                // item.category.name是a标签
                $('.allSort').append("<a href='#' class='sortA sameA'>"+item.category.name+"</a>")
                var lists = item.itemList
                var liStrAll = ''
                $.each(lists,function(ind,val){
                    // console.log(ind)
                    // console.log(val)
                    var price =val.counterPrice? ("<span class='prevPrice'><span class='doll'>￥</span>"+val.counterPrice+"</span>") :''
                    var  counterPrice = val.counterPrice?val.counterPrice:''
                    var obj = [{
                                "data_name":val.name,
                                "_src":val.listPicUrl,
                                "nowP":val.retailPrice,
                                "preP":counterPrice}]
                    var jsonObj = JSON.stringify(obj)
                    if(!val.listPromBanner){
                        var str = `<li class="item" data_id= '${val.id}'   data='${jsonObj}' >
                        <div class="item_inner">
                            <div class="item_top">
                                <div class="imgDiv">
                                    <a href="#" class="imgs_a">
                                        <img src="${val.listPicUrl}" class="showImg">
                                        <img src="${val.scenePicUrl}" class="hiddenImg">
                                    </a>
                                </div>
                            </div>
                            <div class="item_bottom">
                                
                                <h4 class="introduce">${val.name}</h4>
                                <div class="price">
                                    <span class="nowPrice"><span class="doll">￥</span>${val.retailPrice}</span>
                                    ${price}</div>
                                <div class="title">
                                    <div class="line"></div>
                                    <div class="title_content">${val.simpleDesc}</div>
                                </div>
                            </div>
                        </div>
                        <div class="addMyCar">+</div>
                    </li>
                        `
                    
                    }else{
                        var str = `<li class="item" data_id= '${val.id}'   data='${jsonObj}' >
                        <div class="item_inner">
                            <div class="item_top">
                                <div class="imgDiv">
                                    <a href="#" class="imgs_a">
                                        <img src="${val.listPicUrl}" class="showImg">
                                        <img src="${val.scenePicUrl}" class="hiddenImg">
                                    </a>
                                </div>
                                <div class="bottomRedLine clearfix">
                                    <div class="promTitle">
                                        <span class="span1">${val.listPromBanner.promoTitle}</span>
                                        <span class="span2">${val.listPromBanner.promoSubTitle}</span>
                                    </div>
                                    <div class="promContent">${val.listPromBanner.content}</div>
                                </div>
                            </div>
                            <div class="item_bottom">
                                <div class="tags"><span class="someSpan">${val.promTag}</span></div>
                                <h4 class="introduce">${val.name}</h4>
                                <div class="price">
                                    <span class="nowPrice"><span class="doll">￥</span>${val.retailPrice}</span>
                                    ${price}</div>
                                <div class="title">
                                    <div class="line"></div>
                                    <div class="title_content">${val.simpleDesc}</div>
                                </div>
                            </div>
                        </div>
                        <div class="addMyCar">+</div>
                    </li>
                        `
                    }                    
                  
                    liStrAll += str
                })
                var divStr = `
                <div class="titleH">
                    <h2 class="itemHeader">${item.category.name}</h2>
                    <p class="introduce">${item.category.frontDesc}</p>
                </div>
                <ul class="itemLists clearfix">
                ${liStrAll}
                </ul>`
                var div = $('<div class="goodsListItem" ><div>') 
                div.addClass('goodsListItem')
                div.html(divStr)
                $('.goodsList').append(div)
            })
            // 鼠标进入，图片切换
            $('.goodsList').on('mouseenter','li',function(){
                var _this = this
                var $this = $(this)
                $this.find('.imgs_a .showImg').css('display','none')
                $this.find('.imgs_a .hiddenImg').css('display','block')
            })
             // 鼠标进出，图片切换
            $('.goodsList').on('mouseleave','li',function(){
                var _this = this
                var $this = $(this)
                $this.find('.imgs_a .showImg').css('display','block')
                $this.find('.imgs_a .hiddenImg').css('display','none')
            })

            // 点击跳转商品详情页
            $('.goodsList').on('click','.item_inner',function(){
                    window.open('./../goods.html')
            })
            $('.goodsList').on('click','.addMyCar',function(){
                alert('成功加入购物车')
                var parent = this.parentElement
                var data_id = parent.getAttribute('data_id')
                var data_massage = parent.getAttribute('data')
                console.log(data_id)
                console.log(data_massage)
              
                var good1 = [{
                    "id":data_id,
                    "data":data_massage,
                    "num":1
                    }]
                var str = JSON.stringify(good1)
                if(!localStorage.getItem('goods')){
                    localStorage.setItem('goods',str)
                }else{
                    var goodObj = JSON.parse(localStorage.getItem('goods'));
                    console.log(goodObj)
                    var flag = true 
                    var i = 0
                   for (const key in goodObj) {
                       console.log(key)
                      var element = goodObj[key]
                      console.log(element.id === data_id)
                     if(element.id === data_id){
                        flag = false //表示购物车有此商品
                        i = key
                     }
                   }
                   if(!flag){//表示购物车有此商品
                    goodObj[i].num ++
                    localStorage.setItem('goods',JSON.stringify(goodObj))
                    }else{
                    var goodNew = {
                        "id":data_id,
                        "data":data_massage,
                        "num":1
                        }
                        goodObj.push(goodNew)
                        console.log(goodObj)
                        localStorage.setItem('goods',JSON.stringify(goodObj))

                    }
                }
              })

        }
    })


});

$('.footer').load('./common_footer.html');

