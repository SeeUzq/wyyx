$('.indexMain').load('./indexMain.html');
// $.getScript('./js/')
window.onload = function(){
        $(".em_1").click(function(){
            $(".em_2").get(0).style.color = '#333'
            this.style.color = '#b4a078'
            $(".em_1").css('border-bottom','2px solid #b4a078')
            $(".em_2").css('border-bottom','2px solid transparent')
            $('.em_1_div').css('display','block')
            $('.em_2_div').css('display','none')
        });
        $(".em_2").click(function(){
            $(".em_1").get(0).style.color = '#333'
            this.style.color = '#b4a078'
            $(".em_2").css('border-bottom','2px solid #b4a078')
            $(".em_1").css('border-bottom','2px solid transparent')
            $('.em_2_div').css('display','block')
            $('.em_1_div').css('display','none')
        });

    $('.newSamples .click_right').click(function(){
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
    $('.newSamples .click_left').click(function(){
        var next = $('.newProductsLists')[0] 
        // console.log(next)
        var x = next.scrollLeft
        x -= 1100
        next.scrollLeft = x
    });

    // 轮播图
    (function(){
       var imgIndex = 0
       var imgWith = 367
       var scrollLeft = 0
       var lis = document.querySelectorAll('.animateImgs_ul li')
      
       var maxNum = lis.length
       $('.animateImgs_ul')[0].width = (maxNum+1) * imgWith 

        console.log($('.animateImgs_ul li:first'))
        console.log($('.animateImgs_ul li:first').next())
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
    var timer
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

    
})()
  






// 保留这个括号
}
