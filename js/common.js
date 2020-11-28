
var common = async function(){
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
    await $('.main_nav_ul ').on('click','.lis_3',function(){
        window.open('./goodsList.html','_blank')
    })
    await setInterval(function(){
        $('.commonHeader_top_inner .notice li').animate({
            top:-30
        },800)
    
        $('.commonHeader_top_inner .notice li').animate({
            top:0
        },30)    
    }, 5000);
      // 左右固定定位栏 //导航栏吸顶事件
       
    var nav =await  function (){
        var newUl = $('.main_nav_ul').clone('ture')
        newUl.addClass('new')
        newUl.children()
        $('.main_nav_in2').append(newUl) 
        $('.new .lis_zc').remove()
        $('.new .lis_yx').remove()

    }()
    window.onscroll = await function(){
        var top = document.documentElement.scrollTop || document.body.scrollTop
        $('.main_nav_box2').css('display','none')
        var prevTop = $('.hotForm').scrollTop
        if(top >= 176){
            $('.main_nav_box2 ').css({'display':'block','position':'fixed','top':'0','height':'50'})
        }  
        if(top >596){
            $('.hotForm').css({'position':'fixed','top':'70px'})
            $(' .fixRight_outer').css({'position':'fixed','top':'70px'})
        }else{
            $('.hotForm').css({'position':'absolute','top':'635px'})
            $(' .fixRight_outer').css({'position':'absolute','top':'635px'})
        }
    }  
    myCarNum();  
}();
function myCarNum(){
    if(localStorage.getItem('goods')){  
    var goodsObj = JSON.parse(localStorage.getItem('goods'))
    $('.myCarNum').text(goodsObj.length)
}
};








