// 选择手机号登录事件
$('.login_boby_outer').on('click','.mobileLogin',function(ele){
    var e = ele || window.event
    this.style.color = '#333'
    $('.emailLogin')[0].style.color = '#999'
    $('.mobileL').css('display','block')
    $('.memailL').css('display','none')
    $('.question_phone').css('display','block')
    $('.question_email').css('display','none')

})
// 选择邮箱登录事件
$('.login_boby_outer').on('click','.emailLogin',function(ele){
    this.style.color = '#333'
    $('.mobileLogin')[0].style.color = '#999'
    $('.memailL').css('display','block')
    $('.mobileL').css('display','none')
    $('.question_phone').css('display','none')
    $('.question_email').css('display','block')
})

// 手机选择账号密码登录
$('.login_boby_outer').on('click','.s1',function(){
    this.style.display = "none"
    $('.s2').css('display','block')
    $('.iphone_wordLogin').css('display','block')
    $('.iphone_massageLogin').css('display','none')
})
// 手机 选择验证码登录
$('.login_boby_outer').on('click','.s2',function(){
    this.style.display = "none"
    $('.s1').css('display','block')
    $('.iphone_wordLogin').css('display','none')
    $('.iphone_massageLogin').css('display','block')
})