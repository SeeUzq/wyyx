//1.判断一个任意一个数是否是素数isPrime(num)
//2.求任意数getRand(max,min)
//3.获取min-max之间的随机整数getRand(min,max)
//4.获取随机六进制颜色值getColor()
//5.随机获取num位置验证码getYZM(num)
//6.本地化时间函数封装 getDateToLocal(date)
// 7.给1-9的数字前加0处理toDB(num)
//8.封装时间差函数,获取时间差秒数 getDifTime(startDate,endDate)
// 9.求子元素节点 getChildren(obj)
//10.找对象的第一个元素getFirstEle(obj) 
//11找对象的最后一个元素getLastEle(obj) 
//12清除空格 myTrim(str)
//13.判断ele元素中是否有value的类 hasClass(ele, value) 
//14.删除ele中的value的class类removeClass(ele, value) 
//15.给ele添加value这个class名称 addClass(ele, value) 
//16.获得前面的兄弟节点getPreviousSibling(ele) 
//17.根据key获取查询串中的应对value  getSearch(key)
//18.获取所有cName的元素集合getByClassName(cName)
// 19.阻止默认行为的方法 prevent(e) 
// 20.//兼容page  getPage(e)
// 21.创建动作animate(ele,attrList)
// 22.获取元素到最外层定位父级的距离 offset(dom,flag)
//23.根据css选择器获取单个元素 $1(selector)
//24.根据css选择器获取元素集合 $2(selector)
//25.判断是不是对象 isObject(obj)
//26 ajax ajax(options)
// 27 //放大镜功能函数
// 27 //放大镜功能函数
// ajax{
	// 	data: ,
	// 	type: "get/post",
	// 	url: '',
	// 	dataType:'',
	// 	success:function(){},
	// 	error:function(){}
	// }
//27 jsonp(options) 
	/* jsonp({
    url: 'http://suggestion.baidu.com/su',
    data: 'wd='+ipt.value,
    jsonp: 'cb',
    jsonpCallback: 'hehe',//自定义函数名
    success: function mycb(json){
     
    }
  }) */
//28.设置setCookie(options)
	//setCookie({
	// val: 'jack',
	// key: 'user3',
	// days: 7,
	// path: ,
	//})
//29.获取cookie  getCookie(key)
//30.删除  removeCookie(key)
//31. promiseAjax(options)
 /*
  promiseAjax({
	data: ,
	type: "get/post",
	url: '',
	dataType:'',
	cache:true /false ,//是否缓存，true是
	success:function(){},
	error:function(){}
  })
 
  */


//1.判断一个任意一个数是否是素数
function isPrime(num){
	if(num === 1){return false }
	for(var i = 2 ; i < num ; i++){
		if(num % i ===0){
		return false }
	}
	return true 
};
//2.求任意数
function getRand(max,min){
				return parseInt(Math.random()*(max - min + 1) + min)
			}
			
//3.获取min-max之间的随机整数
function getRand(min,max){
	return parseInt(Math.random()*(max-min+1) + min);
};
//4.获取随机六进制颜色值
function getColor(){
	var str = "0123456789abcdef";//index 0-15
	var color = "#";
	//随机到str中取出六个字符
	//将这六个字符拼接在#后面返回
	for (var i = 0; i < 6; i++) {
		color += str[getRand(0,15)];//利用随机下标到str中随机取出字符
	}
	return color;
};
//5.随机获取num位置验证码
function getYZM(num){
	//num位验证码
	//字符从哪来？
	//从ascii码中来 48-122范围取出
	//排除58-64 91-96
	var yzm = "";
	var rand;
	for (var i = 0; i < num; i++) {
		//随机获取对应字符
		//yzm += String.fromCharCode(getRand(48,122));//yzm包括了一些特殊字符
		//排除58-64 91-96
		rand = getRand(48,122);
		if(rand >= 58 && rand <= 64 || rand >= 91 && rand <= 96 ){
			//重新获取
			i--;
		}else{
			yzm += String.fromCharCode(rand);	
		}
		
	}
	
	return yzm;
};

//6.本地化时间函数封装
function getDateToLocal(date){
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var f = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();
	//w 0-6
	var week = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	
	return y + "年" + toDB(m) + "月" + toDB(d) + "日 " + toDB(h) + ":" + toDB(f) + ":" + toDB(s) + " " + week[w];
};

//7.给1-9的数字前加0处理
function toDB(num){
	//0-9 前要加0 
	return num < 10 ? "0" + num : num;
};

//8.封装时间差函数,获取时间差秒数
function getDifTime(startDate,endDate){
	return (endDate.getTime() - startDate.getTime())/1000;
};
function $(idName){
	return document.getElementById(idName);
};

//9.求子元素节点
function getChildren(obj){
	//获取obj下的节点
	var objList = obj.children;
	var arr = [];
	for (var i = 0; i < objList.length; i++) {
		if(objList[i].nodeType === 1){
			arr.push(objList[i]);
		}
	}
	return  arr
};

//10.找对象的第一个元素
function getFirstEle(obj) { //找对象的第一个元素
    //console.log(getChildren(obj)[0]);
    //return getChildren(obj)[0] ? getChildren(obj)[0] : null;

    var ele = getChildren(obj)[0];
    //if(ele){//ele有对象隐式类型转换，更消耗性能
    if (!!ele) { //程序性能优化
        return ele;
    }
    return null;
};
//11找对象的最后一个元素
function getLastEle(obj) { 
    var list = getChildren(obj);
    var lastEle = list[list.length - 1];
    if (!!lastEle) { //程序性能优化
        return lastEle;
    }
    return null;
};
//12清除空格
function myTrim(str) { //清除空格
    var start = 0; //不是空格的开始下标
    var end = 0; //不是空格的结束下标
    //从前往后遍历str,找到第一个不是空格的下标
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            start = i; //保存start下标
            break;
        }
    }
    //从后往前遍历str,找到第一个不是空格的下标
    for (var i = str.length - 1; i >= 0; i--) {
        if (str[i] != " ") {
            end = i; //保存end下标
            break;
        }
    }
    return str.substring(start, end + 1);
};

function getButton(eve) {
    //现代浏览器中 0 1 2
    //ie 1 4 2
    //eve接收事件对象的形参
    //通过这个形参可以判断是不是ie8浏览器
    //eve上undefined的情况下是ie8浏览器
    if (!!eve) { //eve对象存在，是现代浏览器
        return eve.button;
    }
    //这里的代码在ie8环境下执行
    var button = window.event.button;
    switch (button) {
        case 1:
            return 0;
        case 4:
            return 1;
        case 2:
            return 2;
    }
};
//13.判断ele元素中是否有value的类
function hasClass(ele, value) {
    var cName = myTrim(ele.className);
    if (cName === "") return false;
    var cNameList = cName.split(" ");
    for (var i = 0; i < cNameList.length; i++) {
        if (cNameList[i] === value) {
            return true;
        }
    }
    return false;
};
//14.删除ele中的value的class类
function removeClass(ele, value) {
    var cName = myTrim(ele.className); //去掉左右空格，防止class="    "这种情况出现
    if (cName === "") return;
    if (!hasClass(ele, value)) return;
    var cNameList = cName.split(" ");
    for (var i = 0; i < cNameList.length; i++) {
        if (cNameList[i] === value) {
            cNameList.splice(i, 1);
            i--;
        } else if (cNameList[i] === "") { //删除空格是为了，避免出现多个空格 的情况 
            cNameList.splice(i, 1);
            i--;
        }
    }
    ele.className = cNameList.join(" ");
};

//15.给ele添加value这个class名称
function addClass(ele, value) {
    var cName = myTrim(ele.className); //去掉左右空格，防止class="    "这种情况出现

    if (cName === "") {
        //直接将value添加到ele的class中
        ele.className = value;
        return; //不需要再往后执行
    };
    //程序执行到这里，class中是有内容的
    //判断value在ele的class中是否存在，
    //存在不需要再添加
    if (hasClass(ele, value)) return; //存在就退出，不往后执行

    //不存在累加在最后
    ele.className += " " + value;

};
//16.获得前面的兄弟节点
function getPreviousSibling(ele) {
    var pEle = ele.parentNode;
    var firstEle = getFirstChild(pEle);
    if (firstEle === ele) return null;
    var prevNode = ele.previousSibling;
    if (prevNode.nodeType != 1) {
        return getPreviousSibling(prevNode);
    }
    return prevNode;
};
//17.根据key获取查询串中的应对value
function getSearch(key) {
    var search = location.search.substring(1);
    //去掉问号
    //console.log(search.substring(1));
    if (search === "") return "";
    //用&转换成数组
    var searchList = search.split("&");
    //console.log(searchList)
    var list = [];
    for (var i = 0; i < searchList.length; i++) {
        list = searchList[i].split("=");

        if (list[0] === key) {
            return decodeURIComponent(list[1]);
        }

    }
    return "";
};
//18.获取所有cName的元素集合
function getByClassName(cName) {
    var eleList = document.getElementsByTagName("*");
    var newList = [];
    for (var i = 0; i < eleList.length; i++) {
        if (hasClass(eleList[i], cName)) {
            newList.push(eleList[i]);
        }
    }
    return newList;
};

// 19.阻止默认行为的方法
function prevent(e) { //形参传递的是兼容后的事件对象
    //判断是否在ie8下运行
    // e.preventDefault:高版本浏览器是一个函数，在ie8下是undefined
    // if (e.preventDefault != undefined) 
    // if (!!e.preventDefault) { //函数存在，是高版本浏览器
    //     e.preventDefault()
    // } else {
    //     e.returnValue = false;
    // }
    !!e.preventDefault ? e.preventDefault() : e.returnValue = false;
};

//20.兼容page
function getPage(e){
				var lSro = document.documentElement.scrollLeft ||document.body.scrollLeft;
				var tSro = document.documentElement.scrollTop ||document.body.scrollTop;
				var x = e.clientX + lSro;
				var y = e.clientY + tSro;
				return {x,y};
			}
			
			
//21.创建动作			
function animate(ele,attrList){
				for(var attr in attrList){
					if(attr === "opacity"){
						var target = attrList[attr]*100;
						var current = parseInt(getComputedStyle(ele)[attr]*100);
					}else if(attr.indexOf("scroll") !== -1){
						var target = attrList[attr];
						var current = ele[attr];
					}else{
						var target = attrList[attr];
						var current = parseInt(getComputedStyle(ele)[attr]);
					}
					
					attrList[attr] = {
						'target':target,
						'current':current
					}
					// console.log(current,target)
				}
				speed = (target - current )/20;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				clearInterval(ele.timer);
				ele.timer = setInterval(function(){
					for (var attr in attrList){
						var target = attrList[attr].target;
						var current = attrList[attr].current;
						if(Math.abs(target - current) <= Math.abs(speed)){
							if(attr === "opacity"){
								 ele.style[attr] = target /100
							}else if(attr.indexOf("scroll") !== -1){
								 ele[attr]= target ;
							}else{
								 ele.style[attr] = target + 'px';
							}
							delete attrList[attr];
							for (var attr in attrList){
								return false;
							}
							clearInterval(ele.timer)
						}else{
							attrList[attr].current += speed;
							if(attr === "opacity"){
								 ele.style[attr] = attrList[attr].current/100;
							}else if(attr.indexOf("scroll") !== -1){
								 ele[attr]= attrList[attr].current ;
							}else{
								 ele.style[attr] = attrList[attr].current + 'px';
							}
						}
					}
				},20)
				
			}	
			
			
//22.获取元素到最外层定位父级的距离
			function offset(dom,flag){
				var t = 0 ,l = 0 ;
				var boL = dom.clientLeft;
				var boT = dom.clientTop;
				while(dom){
					l += dom.offsetLeft + dom.clientLeft;
					t += dom.offsetTop + dom.clientTop;
					//每次循环完，当dom元素等于它的定位父级
					dom = dom.offsetParent 
				}
				if(flag){//包含边框
					return {left:l ,top:t};
				}
				//不包含边框
				return {left:l -boL  ,top:t - boT};
			}

//23.根据css选择器获取单个元素$1(selector)
	function $1(selector){
		return document.querySelector(selector)
	}
	
//24.根据css选择器获取元素集合 $2(selector)
	function $2(selector){
		return document.querySelectorAll(selector)
	}
	
	//25.判断是不是对象
	function isObject(obj){
		if(Object.prototype.toString.call(obj) === '[object Object]'){
			return true ;
		}
		return false;
	}
	
	
	// //26 ajax{
	// 	data: ,
	// 	type: "get/post",
	// 	url: '',
	// 	dataType:'',
	// 	success:function(){},
	// 	error:function(){}
	// }
	function ajax(options){
	  // data -> 'key=value&key=value'
	  // 1.创建数据交互对象
	  if (window.XMLHttpRequest) {
	    var xhr = new XMLHttpRequest(); // 非IE5 6
	  } else {
	    var xhr = new ActiveXObject('Microsoft.XMLHTTP') ;// IE5 6
	  }
	
	  // 判断并格式化参数data
	  var data = '';
	  if (isObject(options.data)) {
	    // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
	    for (var key in options.data) {
	      data += key+'='+options.data[key]+'&';
	    }
	    // data = 'k1=v1&k2=v2&k3=v3&'
	    data = data.substring(0,data.length-1);
	  }
	
	  if (typeof options.data === 'string') {
	    data = options.data;
	  }
	
	  // 判断请求方式
	  if (options.type.toLowerCase() === 'get') {
	    var time = '';
	    time = options.cache ? '' : Date.now();
	    // 2.打开连接
	    xhr.open(options.type,options.url+'?'+data+'&_='+time,true); // 默认true，异步
	    // 3.发送请求
	    xhr.send(null); // get请求传null
	  }
	  if (options.type.toLowerCase() === 'post') {
	    // 2.打开连接
	    xhr.open(options.type,options.url,true) ;// 默认true，异步
	    // post 请不会有缓存问题
	    // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
	    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	
	    // 3.发送请求
	    xhr.send(data); // post请求 要传递的参数在此传
	  }
	  
	  // 4.等待请求/响应状态
	  // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
	   xhr.onreadystatechange = function (){
	      // console.log( xhr.readyState );// 2 3 4
	      if (xhr.readyState === 4) {// 请求完成
	      // xhr.status 响应状态
	        if (xhr.status === 200) {// OK 响应就绪
	          // xhr.responseText 响应的数据
	          // options.success(xhr.responseText)
	          // 支持dataType配置
	          if (options.dataType === 'json') {
	            var json = JSON.parse(xhr.responseText);//将json字符串转为json对象
	            options.success(json);
	          } else if (options.dataType === 'xml') {
	            options.success(xhr.responseXML);
	          } else {
	            options.success(xhr.responseText);
	          }
	        } else {
	          // console.log(xhr.status)
	          options.error(xhr.status);
	        }
	      }
	    }
	  }
//27jsonp
function jsonp(options){
  // options.success 变成全局函数
  // options.jsonpCallback = 'hehe'
  window[options.jsonpCallback] = options.success;

  // 判断 options.data的数据类型
  // 如果字符串，直接赋值data变量
  // 如果是对象，转成;参数序列的字符串
  var data = '';
  if (typeof options.data === 'string') {
    data = options.data;
  }
  if (isObject(options.data)) {
    for (var key in options.data){
      data += key+'='+options.data[key]+'&';
    }
    data = data.substring(0,data.length-1);
  }

  // 创建 script标签
  var oScript = document.createElement('script')
  // 给src属性赋值（url+接口参数）
  oScript.src = options.url+'?'+options.jsonp+'='+options.jsonpCallback+'&'+data;
  // 把script插入文档中
  document.body.appendChild(oScript);
  // script标签加载完成时，删除此标签
  oScript.onload = function (){
    document.body.removeChild(oScript)
  }
}


//28.设置setCookie(options)
	//setCookie({
	// val: 'jack',
	// key: 'user3',
	// days: 7,
	// path: ,
	//})
function setCookie(options){
	options.days = options.days || 0;
	options.path = options.path || '';
	if(options.days === 0){
		document.cookie =options.key+'='+options.val+'; path='+options.path;
	}else{
		var d = new Date();
		d.setDate(d.getDate() + options.days);
		document.cookie =options.key+'='+options.val+'; expires='+d+'; path='+options.path;
	}
}

setCookie({
  val: 'jack',
  key: 'user3',
  days: 7
})
//29.获取cookie
function getCookie(key){
	var cookie = document.cookie;
	var arr =cookie.split("; ");
	for (var i = 0; i < arr.length; i++) {
		var arri = arr[i].split('=');
		if(arri[0] === key){
			return arri[1];
		}
	}
	return null
}

//30.删除getCookie
function removeCookie(key){
	setCookie({
		key:key,
		days:-20,
		val:123
	})
}

// 31
function promiseAjax(options){
  return new Promise((resolve,reject)=>{
    // data -> 'key=value&key=value'
    // 1.创建数据交互对象
    if (window.XMLHttpRequest) {
      var xhr = new XMLHttpRequest() // 非IE5 6
    } else {
      var xhr = new ActiveXObject('Microsoft.XMLHTTP') // IE5 6
    }

    // 判断并格式化参数data
    var data = '';
    if (isObject(options.data)) {
      // 把对象格式化成 -> 'k1=v1&k2=v2&k3=v3'
      for (var key in options.data) {
        data += key+'='+options.data[key]+'&'
      }
      // data = 'k1=v1&k2=v2&k3=v3&'
      data = data.substring(0,data.length-1)
    }

    if (typeof options.data === 'string') {
      data = options.data
    }

    // 判断请求方式
    if (options.type.toLowerCase() === 'get') {
      var time = '';
      time = options.cache ? '' : Date.now();
      // 2.打开连接
      xhr.open(options.type,options.url+'?'+data+'&_='+time,true); // 默认true，异步
      // 3.发送请求
      xhr.send(null) // get请求传null
    }
    if (options.type.toLowerCase() === 'post') {
      // 2.打开连接
      xhr.open(options.type,options.url,true); // 默认true，异步
      // post 请不会有缓存问题

      // 设置请求头，作用 模拟表单 post 请求提交数据，在send方法之前设置
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

      // 3.发送请求
      xhr.send(data) // post请求 要传递的参数在此传
    }
    
    // 4.等待请求/响应状态
    // xhr.readyState  请求状态，0-4状态改变会触发一个readystatechange事件
    xhr.onreadystatechange = function (){
      // console.log( xhr.readyState );// 2 3 4
      if (xhr.readyState === 4) {// 请求完成
      // xhr.status 响应状态
        if (xhr.status === 200) {// OK 响应就绪
          // xhr.responseText 响应的数据
          // options.success(xhr.responseText)
          // 支持dataType配置
          if (options.dataType === 'json') {
            var json = JSON.parse(xhr.responseText)
            resolve(json)
          } else if (options.dataType === 'xml') {
            resolve(xhr.responseXML)
          } else {
            resolve(xhr.responseText)
          }
        } else {
          // console.log(xhr.status)
          reject(xhr.status)
        }
      }
    }
  })
}

function amplification(e){
	//获取光标相对于大盒子的移动位置
	var left1=e.pageX-box.offsetLeft-mark.offsetWidth/2
	var top1=e.pageY-box.offsetTop-mark.offsetHeight/2
	// console.log(left1,top1)
	//获取小盒子的移动范围
	var minX=minY=0 //minY=0;minX=minY
	var maxX=box.offsetWidth-mark.offsetWidth
	var maxY=box.offsetHeight-mark.offsetHeight
	//右边大盒子的偏移量
	var tmpX,tmpY;

	//判断X轴的移动,当移动距离小于最小值时，那么就把最小值作为偏移量
	if(left1<minX){
		mark.style.left=minX+'px'
		tmpX=minX
	}else if(left1>maxX){
		//当移动距离大于最大值时，那么就把最大值作为偏移量
		mark.style.left=maxX+'px'
		tmpX=maxX
	}else{
		mark.style.left=left1+'px'
		tmpX=left1
	}
	//判断Y轴的移动
	if(top1<minY){
		mark.style.top=minY+'px'
		tmpY=minY
	}else if(top1>maxY){
		//当移动距离大于最大值时，那么就把最大值作为偏移量
		mark.style.top=maxY+'px'
		tmpY=maxY
	}else{
		mark.style.top=top1+'px'
		tmpY=top1
	}

	//接下来要移动右边盒子中的图片
	var imgs=boxRight.getElementsByTagName('img')[0]
	//使图片移动
	imgs.style.left=-tmpX*2+'px'
	imgs.style.top=-tmpY*2+'px'
}