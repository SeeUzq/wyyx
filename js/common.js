
var common = async function(){
    $('.header').load('./common_header.html');
    $('.footer').load('./common_footer.html');
    // 导航栏数据拿取
    await $.ajax({
            url:'./../data/data.json',
            type:'get',
            dataType:'json',
            async:true,
            success:function(data){
               var jsonData = data[0].data.cateList
               var i = 0
               for (var  key in jsonData) {
                   i++
                   if (jsonData.hasOwnProperty(key)) {
                       var  element = jsonData[key];
                    //    console.log(element)//element是获得每一个导航栏的值li下每一页的
                       var strA ="<a href='#'  class='liA' index="+ i +" id="+element.id+">"+element.name+"</a>"
                     
                       var li = $("<li class ='morePage this_li clearfix lis_"+i+"'>"+strA+"</li>")
                       $('.main_nav .main_nav_ul').append(li)
                        var subCateGroupList = element.subCateGroupList
                        var listDiv = $('<div class="list_items clearfix"><div>')
        
                        for (var valKey in subCateGroupList) {//val是每一页中的一列
                            if (subCateGroupList.hasOwnProperty(valKey)) {
                                var values = subCateGroupList[valKey];
                                var categoryList =values.categoryList
                                var strAll = "<dt>"+values.name+"</dt>"
                                for (var sampleKey in categoryList) {//sample是每一列的每一各商品
                                    if (categoryList.hasOwnProperty(sampleKey)) {
                                        var samples = categoryList[sampleKey];
                                    //    console.log(samples)
                                       var str = "<dd id='"+samples.id+"'><a href='#'><img src='"+samples.bannerUrl+"'title = '"+samples.frontName+"'><span >"+samples.name+"</a></dd>"
                                        strAll +=str
                                    }
                                }
                               var dl = $("<dl class='list_items_dl'>"+strAll+"</dl>")
        
                               $(listDiv).append(dl)
                            }
                        }
                        $(li).append(listDiv)
        
        
                     }
                   }
                   var lastLis = $("<li class ='morePage  lis_yx'> <a href='#'  class='liA liA_last'>为你严选</a></li><li class ='morePage clearfix lis_zc'> <a href='#'  class='liA liA_last'>众筹</a></li>")
                   $('.main_nav .main_nav_ul').append(lastLis)
                }    
        });
    await function(){
        var newUl = $('.main_nav_ul').clone('ture')
        newUl.addClass('new')
        newUl.children()
        $('.main_nav_in2').append(newUl) 
        $('.new .lis_zc').remove()
        $('.new .lis_yx').remove()

    }()
    //导航栏吸顶事件
    await setInterval(function(){
        $('.commonHeader_top_inner .notice li').animate({
            top:-30
        },800)
    
        $('.commonHeader_top_inner .notice li').animate({
            top:0
        },30)    
    }, 5000);
    window.onscroll = await function(){
        var top = document.documentElement.scrollTop || document.body.scrollTop
        $('.main_nav_box2').css('display','none')
        if(top >= 176){
            $('.main_nav_box2 ').css('display','block')
            $('.main_nav_box2').css('position','fixed')
            $('.main_nav_box2').css('top','0')
            $('.main_nav_box2').css('height','50')
        }  
    }
    // 新平首发点击事件
    await $(".em_1").click(function(){
        $(".em_2").get(0).style.color = '#333'
        this.style.color = '#b4a078'
        $(".em_1").css('border-bottom','2px solid #b4a078')
        $(".em_2").css('border-bottom','2px solid transparent')
        $('.em_1_div').css('display','block')
        $('.em_2_div').css('display','none')
    });
    await $(".em_2").click(function(){
            $(".em_1").get(0).style.color = '#333'
            this.style.color = '#b4a078'
            $(".em_2").css('border-bottom','2px solid #b4a078')
            $(".em_1").css('border-bottom','2px solid transparent')
            $('.em_2_div').css('display','block')
            $('.em_1_div').css('display','none')
        });
    // 轮播图点击事件
    await $('.newSamples .click_right').click(function(){
        var next = $('.newProductsLists')[0] 
        // console.log(next)
        var x = next.scrollLeft
        x += 1100
        
        maxL = document.querySelectorAll('.newProducts_ul li').length * 275
        if(maxL - x <= 1100){
            next.scrollLeft = x-1100

        }else{
            next.scrollLeft = x
        }
        
    });
    await $('.newSamples .click_left').click(function(){
        var next = $('.newProductsLists')[0] 
        var x = next.scrollLeft
        x -= 1100
        next.scrollLeft = x
    });
    // 轮播图
    await function animateImg(){
    var imgIndex = 0
    var imgWith = 367
    var scrollLeft = 0
    var lis = document.querySelectorAll('.animateImgs_ul li')
    var maxNum = lis.length
    $('.animateImgs_ul')[0].width = (maxNum+1) * imgWith 
    
    $('.animateImgs_ul').append($('.animateImgs_ul li:first').clone(true))
    $('.animateImgs_ul').append($('.animateImgs_ul li:first').next().clone(true))
    var eleJ = $('.animateImgs')
    var ele = $('.animateImgs')[0]
    function next(){
            scrollLeft = eleJ.scrollLeft()
            imgIndex++
            if(imgIndex >= maxNum){
                imgIndex = 0
                ele.scrollLeft = 0
            }else{
                ele.scrollLeft = (imgWith +scrollLeft)
            }

    }
    function prev(){
        scrollLeft = eleJ.scrollLeft()
        imgIndex--
        if(imgIndex <= 0){
            imgIndex = maxNum
            ele.scrollLeft = maxNum *(maxNum -1)
        }else{
            ele.scrollLeft = ( scrollLeft -imgWith)
        }

        }
    //    next()
    function moveNext(){
        timer = setInterval(function(){
            next()
        }, 3000);
    }
    moveNext()
    $('.animateImgs_inner .click_right').click(function(){
        clearInterval(timer);
        next();
        moveNext()
        });


        $('.animateImgs_inner .click_left').click(function(){
        clearInterval(timer);
        prev()
        moveNext()
        });


    }();

}();





