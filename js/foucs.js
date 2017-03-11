$(document).ready(function(e) {
    
  $(function () {//banner和导航
    var totalnum = $("#img img").size();
    var index = 0;
    $('#img a img:eq(0)').css('display','inline');
    $($("#SwitchNav li")).addClass("nocurrent");
    $($("#SwitchNav li")).eq(0).addClass("current");

	  $(".daohang li a").click(function(){
      $(this).addClass('daohang-action');
      $(this).parent().siblings().children('a').removeClass('daohang-action');
    })
    $("#SwitchNav li").mouseover(function () {
        index = $("#SwitchNav li").index(this);
        showImg(index);
        clearInterval(MyTime);
    });
	
    $("#SwitchNav li").hover(function () {
        if (MyTime) {
            clearInterval(MyTime);
        }
    },
    function () {
        MyTime = setInterval(function () {
            index++;
            if (index == totalnum) { index = 0; }
            showImg(index)
        },8000);
    }
    );
	
    var MyTime = setInterval(function () {
        index++;
        if (index == totalnum) { index = 0; }
        showImg(index)
    }, 8000)
    function showImg(i) {//banner
        $("#img img")
            .parent().siblings().find("img").hide()
            .eq(i).stop(true, true).fadeIn(1200)
        $("#SwitchNav li")
            .eq(i).addClass("current")
            .siblings().removeClass("current");
    }
  })
  
  ///////////backtop滑动出现///////////
  $(window).scroll(function(){//窗口滚动 回到顶部
     if($(this).scrollTop()>400){
	    $(".backtop").css({"visibility":"visible","opacity":"0.7","bottom":"74px"});
		$(".music").css({"bottom":"120px"})
			 
     }else{
	    $(".backtop").css({"visibility":"hidden","opacity":"0","bottom":"28px"})
		$(".music").css({"bottom":"74px"})
	 }
  }) 
  
  ///////////////点击回到顶部/////////////
  $(".backtop a").click(function(){
    $("body,html").animate({scrollTop:$(this.hash).offset().top},500)  
   
  })
  
  //////////播放器显示隐藏////////////////
  $(".music").click(function(){
	 $(this).children("span").css({"visibility":"visible"}) 
     $(this).children(".player").css({"visibility":"visible","opacity":"1","right":"46px"}) 
	 
  })
  $(".music").mouseleave(function(){
	 $(this).children("span").css({"visibility":"hidden"}) 	 
     $(this).children(".player").css({"visibility":"hidden","opacity":"0","right":"51px"}) 
  })
  
  //////////////作品展示左右滑动////////////
  $(".turn_r").click(function(){
	  $(".zuopin").animate({left:-1218})
  })
  $(".turn_l").click(function(){
	  $(".zuopin").animate({left:0,})
  })
  
  //////////////技能移入移出/////////////////
  $(".jn_list li").mouseover(function(){
     $(this).children(".gray").css({"visibility":"visible","opacity":"1"})
	 $(this).children("span").css({"font-size":"78px","color":"#FFFFFF"})
	  $(this).children("h3").css({"top":"180px"})
	  $(this).children("p").css({"top":"220px"})
  })
  $(".jn_list li").mouseleave(function(){
     $(this).children(".gray").css({"visibility":"hidden","opacity":"0"})
	 $(this).children("span").css({"font-size":"68px","color":"#8d8f90"})
	 $(this).children("h3").css({"top":"170px"})
	  $(this).children("p").css({"top":"210px"})
  })
  
  ///////////////3d移入移出////////////
  $(".zuo").mouseover(function(){////左上
    $(".us_bg").css({"transform":"rotatey(-10deg) rotatex(-10deg) perspective(20000px)","box-shadow":"5px 12px 8px rgba(0,0,0,.2)"})
	
  })
  $(".zuo").mouseleave(function(){
    $(".us_bg").css({"transform":"rotatey(0deg)  rotatex(0deg) perspective(20000px)","box-shadow":"none"})
  })
  
  $(".you").mouseover(function(){//右上
    $(".us_bg").css({"transform":"rotatey(-10deg) rotatex(8deg) perspective(20000px)","box-shadow":"-5px 12px 8px rgba(0,0,0,.2)"})
  })
  $(".you").mouseleave(function(){
    $(".us_bg").css({"transform":"rotatey(0deg) rotatex(0deg) perspective(20000px)","box-shadow":"none"})
  })
  
   $(".zhong").mouseover(function(){////中上
    $(".us_bg").css({"box-shadow":"0 8px 6px rgba(0,0,0,.2)"})
	
  })
  $(".zhong").mouseleave(function(){
    $(".us_bg").css({"box-shadow":"none"})
  })
  
   $(".zhongx").mouseover(function(){////中下
    $(".us_bg").css({"box-shadow":"0 -8px 6px rgba(0,0,0,.2)"})
	
  })
  $(".zhongx").mouseleave(function(){
    $(".us_bg").css({"box-shadow":"none"})
  })
  
  $(".zuox").mouseover(function(){////左下
    $(".us_bg").css({"transform":"rotatey(-10deg) rotatex(8deg) perspective(20000px)","box-shadow":"5px -12px 8px rgba(0,0,0,.2)"})
  })
  $(".zuox").mouseleave(function(){
    $(".us_bg").css({"transform":"rotatey(0deg)  rotatex(0deg) perspective(20000px)","box-shadow":"none"})
  })
   
  $(".youx").mouseover(function(){//右下
    $(".us_bg").css({"transform":"rotatey(-10deg) rotatex(-10deg) perspective(20000px)","box-shadow":"-5px -12px 8px rgba(0,0,0,.2)"})
  })
  $(".youx").mouseleave(function(){
    $(".us_bg").css({"transform":"rotatey(0deg) rotatex(0deg) perspective(20000px)","box-shadow":"none"})
  })

  //////////////////////////////////
  
});