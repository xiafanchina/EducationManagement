$(function(){
//	首页banner
//$(".index-banner").slide({mainCell:".bd ul", effect:"fade", autoPlay:true, delayTime:1000});
$(".index-banner .bd li").first().before( jQuery(".index-banner .bd li").last() );
$(".index-banner").hover(function(){ jQuery(this).find(".arrow").stop(true,true).fadeIn(300) },function(){ jQuery(this).find(".arrow").fadeOut(300) });
$(".index-banner").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",autoPlay:true, vis:3,autoPage:true, trigger:"click"});
})















