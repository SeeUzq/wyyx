$('.header').load('./common_header.html');

$('.footer').load('./common_footer.html');
var timer = setInterval(function(){
   
    $('.commonHeader_top_inner .notice li').animate({
        top:-30
    },800)

    $('.commonHeader_top_inner .notice li').animate({
        top:0
    },30)    
}, 5000);

// 网易优选接口

   setTimeout(function(){
    $.ajax({
        url:'./../data/data.json',
        type:'get',
        dataType:'json',
        success:function(data){
           var jsonData = data[0].data.cateList
           var i = 0
    
           for (var  key in jsonData) {
               i++
               if (jsonData.hasOwnProperty(key)) {
                   var  element = jsonData[key];
                //    console.log(element)//element是获得每一个导航栏的值li下每一页的
                   var strA ="<a href='#'  class='liA' index="+ i +" id="+element.id+">"+element.name+"</a>"
                 
                   var li = $("<li class ='morePage clearfix lis_"+i+"'>"+strA+"</li>")
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
           
 
         
    })
 
   }, 0);

