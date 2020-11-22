$('.header').load('./common_header.html');

$('.footer').load('./common_footer.html');
var timer = setInterval(() => {
   
    $('.commonHeader_top_inner .notice li').animate({
        top:-30
    },800)

    $('.commonHeader_top_inner .notice li').animate({
        top:0
    },30)    
}, 5000);

// 网易优选接口

   setTimeout(() => {
    $.ajax({
        url:'./../data/data.json',
        type:'get',
        dataType:'json',
        success:function(data){
           console.log(data)
           var jsonData = data[0].data.cateList
           console.log(jsonData)
           var i = 0
           for (const key in jsonData) {
               i++
               if (jsonData.hasOwnProperty(key)) {
                   const element = jsonData[key];
                   console.log(element.id,element.name)
                   var str ="<a href='#'  class='liA' index="+ i +" id="+element.id+">"+element.name+"</a>"
                   $('.main_nav .main_nav_ul').append("<li>"+str+"</li>")
                   console.log($('.main_nav .main_nav_ul'))
                 }
               }
           }
 
 
         
    })
 
   }, 2000);