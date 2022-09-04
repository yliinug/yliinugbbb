// JavaScript Document
 
$(document).ready(function(){
	
	$(".c1").mouseover(function(){
		$(this).css({
			"opacity": "1"	
		});
		$("#i2").append("<img src='"+$(this).attr("src")+"'id='pic'>");
		$("#pic").css({
			"width":"300px",/*图片展示的大小*/
			"border-radius": "10px",/*放大后的图片圆角*/
		});
		$(".c1").mouseout(function(){
			$(".c1").css({
				"opacity": "0.7"
			});
			$("#pic").remove();
		});
	});
});