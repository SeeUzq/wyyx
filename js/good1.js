$('.footer').load('./common_footer.html');
$('.fixBoxRight').load('./fixRight.html');
$('.header').load('./common_header.html',function(){
  myCarNum()
    // 商品数量增减
    $('.detaliHD_info').on('click','.addDeal',function(){
        var val = $('.goodsNum').val()
        val++
        $('.goodsNum').val(val)
        if(val > 1){
            $('.deleteDeal').css('cursor','pointer')
        }else{
            $('.deleteDeal').css('cursor','not-allowed')
        }
    })
    $('.detaliHD_info').on('click','.deleteDeal',function(){
       
        var val = $('.goodsNum').val()
       
        if(val < 2){
            $('.deleteDeal').css('cursor','not-allowed')
        }else{
            val--
            $('.goodsNum').val(val)
            $('.deleteDeal').css('cursor','pointer')
        }
    })
    
    $('.detaliHD').on('click','.list_li',function(){
        var index = this.getAttribute('index')
        var src = "./img/big"+(Number(index) + 1)+".webp"
        $('.view .thumbImg')[0].src=src
        $('.big .thumbImg')[0].src=src
    })
    $('.view').on('mouseenter',function(){
            $('.mask').css('display','block')
            $('.big').css('display','block')
    })
    $('.view').on('mousemove',function(){
        var _this =$(this)[0]
        var mask = $('.mask')[0]
        var big = $('.big')[0]
        var bigImg = $('.bigImg')[0]
            $('.mask').css('display','block')
            $('.big').css('display','block')
            amplification(event,_this,mask,big,bigImg)
         
    })
    $('.view').on('mouseleave',function(){
        $('.mask').css('display','none')
        $('.big').css('display','none')
    })



});
function amplification(e,minBox,mask,maxBox,maxImg){
    // 计算msk的定位坐标
    var maskLeft = e.pageX - offset(minBox).left - mask.clientWidth/2
    var maskTop = e.pageY - offset(minBox).top - mask.clientHeight/2
  
    // 限制mask移动范围
    if (maskLeft < 0) {
      maskLeft = 0
    }
    if (maskLeft >= (minBox.clientWidth-mask.clientWidth)) {
      maskLeft = minBox.clientWidth-mask.clientWidth
    }
    if (maskTop < 0) {
      maskTop = 0
    }
    if (maskTop >= (minBox.clientHeight-mask.clientHeight)) {
      maskTop = minBox.clientHeight-mask.clientHeight
    }
  
    mask.style.left = maskLeft + 'px'
    mask.style.top = maskTop + 'px'
  
    var scaleX = maskLeft/(minBox.clientWidth-mask.clientWidth)
    var scaleY = maskTop/(minBox.clientHeight-mask.clientHeight)
  
    // 大图也跟随移动
    maxImg.style.left = -scaleX*(maxImg.clientWidth-maxBox.clientWidth) + 'px'
    maxImg.style.top = -scaleY*(maxImg.clientHeight-maxBox.clientHeight) + 'px'
  }
function offset(dom,bool){
    var t = 0, l = 0
    var bdl = dom.clientLeft // 保存当前元素的左边框
    var bdt = dom.clientTop// 保存当前元素的上边框
    while(dom){
      l += dom.offsetLeft + dom.clientLeft
      t += dom.offsetTop + dom.clientTop
      // 每次循环完让当前dom元素等于他的定位父级
      dom = dom.offsetParent
    }
    if (bool) {// 包含自身边框
      return {left: l, top: t}
    } else {// 不包含自身边框
      return {left: l-bdl, top: t-bdt}
    }
  }
