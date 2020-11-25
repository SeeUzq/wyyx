$('.header').load('./common_header.html');
$('.footer').load('./common_footer.html',function(){
     $.ajax({
        dataType :'json',
        url:'./../data/foodList.json',
        type:'get',
        success:function(data){
            console.log(data)
            var goodsList = data.categoryItemList
           console.log(goodsList)
            $.each(goodsList,function(index,item){
                // item.category.name是a标签
                $('.allSort').append("<a href='#' class='sortA sameA'>"+item.category.name+"</a>")
                // console.log(item.category.name)
            })
        }
    })
});

