$(function(){
		//$('.search').after('<section id="ad960"></section>');
		if(location.href.split("/")[3]==""){
				//$('.bg').before('<section id="ad960"></section>');
				$('h2').each(function(index,elements){
						$(elements).prepend('<span class="h2'+index+'"></span>');
				});
				$('h3').each(function(index,elements){
						$(elements).prepend('<span class="h3'+index+'"></span>');
				});
			//$('.notify').before('<ul id="slide"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id=scriptmain name=scriptmain codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="435" height="310"><param name="movie" value="bcastr.swf?bcastr_xml_url=xml/bcastr.xml"><param name="quality" value="high"><param name=scale value=noscale><param name="LOOP" value="false"><param name="menu" value="false"><param name="wmode" value="transparent"><embed src="bcastr.swf?bcastr_xml_url=xml/bcastr.xml" width="435" height="310" loop="false" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" salign="T" name="scriptmain" menu="false" wmode="transparent"></embed></object></ul>');
		}

		//搜索栏
		$(".eng_list mark").click(function(){
		$(".eng_list li").slideDown(600);
		$(".eng_list li").hover(function(){
			$(this).css('background','#eee');
		},function(){
			$(this).css('background','#fff');
		});
		$(".eng_list li").click(function(){
				$(".eng_list mark").text($(this).text());
				$(".eng_list li").slideUp(600);
				$("#radio").attr("value",$(this).index()-1);
			});
		});
		// 搜索框
		var	key="请输入要搜索的歌词内容";
				$(".txt").blur(function(){
					 if($(this).val()==""){
					 $(this).val(key);
					 $(this).css('color','#666');
					 }
				 });

				$(".txt").focus(function(){
					 if($(this).val()==key){
						 $(this).val("");
					     $(this).css('color','#333');
					 }
				 });
			$(".sleft button").click(function(){
			if($(".txt").val()==key){
				alert("搜索关键字不能为空！");
				return false;
			}else{
				$(".sleft").submit();
			}
		});
		//表格变色
		$("tr").hover(function(){
			$(this).css('background','#eee');
			$(this).css('cursor','pointer');
		},function(){
			$(this).css('background','#fff');
		});
});

//验证码
function loadimg(id)
{	
	var img = document.getElementById(id);
	    img.src = 'imgcode.php?seed='+Math.random();
}

if(document.getElementsByTagName("table")[0]){
	var atag=document.getElementsByTagName("table")[0].getElementsByTagName("a");
		for(var i=0;i<atag.length;i++){
		  atag[i].target="_blank";
		}
}
//会员登录窗口
 function creaj(){
	 // if(document.getElementById("slide")){document.getElementById("slide").style.display="none";}
    var htmll="<form action=\"check_login.php\" method=\"post\">";
		htmll+="<li id=\"titl\" style=\"background:#eeeeee\"></li>";
		htmll+="<li><b>会员名：</b><input name=\"username\" class=\"input1\" onblur=\"this.className=\'input1\'\" onfocus=\"this.className=\'input2\'\" type=\"text\" /></li>";
		htmll+="<li><b>密码：</b><input name=\"password\" class=\"input1\" onblur=\"this.className=\'input1\'\" onfocus=\"this.className=\'input2\'\" type=\"password\" /></li>";
		htmll+="<li><b>验证码：</b><input name=\"imgcode\" class=\"input1\" onblur=\"this.className=\'input1\'\" onfocus=\"this.className=\'input2\'\" type=\"text\" style=\"width:70px\"/><img src=\"imgcode.php\" title=\"点这里刷新验证码\" align=\"absmiddle\" id=\"img\" onclick=\"loadimg(\'img\')\" /></li>";
		htmll+="<li><b></b><input type=\"submit\" class=\"mybutton\" value=\"登 录\" />";
		htmll+="</form>";

        var divv=document.createElement("div");
		    divv.id="dlbody";
			divv.style.width=document.body.clientWidth+"px";
            divv.style.height=document.body.clientHeight+"px";
			divv.style.filter="alpha(opacity=60)";
			divv.style.opacity="0.6";
		var div2=document.createElement("div");
		    div2.id="div2";
			div2.style.filter="alpha(opacity=30)";
			div2.style.opacity="0.3";
	    var ull=document.createElement("ul");
		    ull.id="dlogin";
			ull.innerHTML=htmll;
		var h33=document.createElement("h3");
		    h33.innerHTML="会员登录";

			var down=false;
			document.onmousemove=function(e){
					var ev=e || window.event;
					  if(down){
					    ull.style.left=ev.clientX-100+"px";
					    ull.style.top=ev.clientY-20+"px";
						div2.style.left=ev.clientX-100+"px";
					    div2.style.top=ev.clientY-20+"px";
					   }  
				}
			h33.onmousedown=function(){
			  this.style.cursor="move";  
			  if(!down)
			   down=true;
              }	
			  
			document.onmouseup=function(){
			  h33.style.cursor="";
			  if(down) 
               down=false;
			  }
			  
		var aa=document.createElement("a");
			aa.innerHTML="关闭";
			aa.style.cursor="pointer";
			aa.className="closs";
			aa.onclick=function closediv(){
			   document.body.removeChild(divv);
			   document.body.removeChild(div2);
			   document.body.removeChild(ull);
			   if(document.getElementById("slide")){document.getElementById("slide").style.display="";}
			  }
			document.body.appendChild(divv);
			document.body.appendChild(div2);
			document.body.appendChild(ull);
			document.getElementById("titl").appendChild(h33);
			document.getElementById("titl").appendChild(aa);
	  }

function adsens2(){

}