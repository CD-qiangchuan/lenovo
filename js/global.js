$(function(){
	//首页悬浮
	showScroll();
	
	//首页shopping-cart's hover js
	$(".hd-tool-shopping").hover(function(){
		$(this).removeClass("shopping-sty").addClass("shopping-hover");
		$(".hd-shopping-ico").removeClass("shopping-ico-bg").addClass("shopping-ico-hover");
		$(this).find(".hd-tool-jt").removeClass("tool-jt-bg").addClass("tool-jt-hover");
		$("#shopping-minicart").show();
		},function(){
			$(this).removeClass("shopping-hover").addClass("shopping-sty");
			$(".hd-shopping-ico").removeClass("shopping-ico-hover").addClass("shopping-ico-bg");
			$(".hd-tool-jt").removeClass("tool-jt-hover").addClass("tool-jt-bg");
			$("#shopping-minicart").hide();
			});
	//首页sidebar's hover js
	$(".sidebar-ul>#sidebar-li").hover(function(){
		$(this).children("div.sub-sidebar").show();
		$(this).addClass("sidebar-hover").removeClass("sidebar-f-h");
		},function(){
			$(this).children("div.sub-sidebar").hide();
			$(this).addClass("sidebar-f-h").removeClass("sidebar-hover");
	});
	//首页推荐专区
	$(".nominate-ul>li").hover(function(){
		$(this).addClass("nominate-hover").removeClass("nominate-h");
		},function(){
			$(this).addClass("nominate-h").removeClass("nominate-hover");
			});
	//首页特惠专区鼠标悬停图片向左移动
	$(".recommend-prc-img>a img").hover(function() {
        $(this).stop().animate({"margin-left":"-20px"},{queue:false,duration:200});
    },function(){
		$(this).stop().animate({"margin-left":"0px"},{queue:false,duration:200});
		});
	//首页排行榜鼠标悬停图片向左移动
	$(".tab-hot-img>a img").hover(function(){
		$(this).stop().animate({"margin-left":"-15px"},{queue:false,duration:200});
    },function(){
		$(this).stop().animate({"margin-left":"0px"},{queue:false,duration:200});
		});	
	//首页右边悬浮层
	$(".right-sidebar-item>ul li").hover(function(){
		$(this).find("span").addClass("span-hidden");
		$(this).find("em").addClass("sidebar-active");
		},function(){
			$(this).find("span").removeClass("span-hidden");
		$(this).find("em").removeClass("sidebar-active");
			});	
	//首页左边悬浮层
	   //订单
	$(".left-sidebar-order").hover(function(){
		$(this).addClass("left-sidebar-orderH").removeClass("left-sidebar-order");
		},function(){
		$(this).addClass("left-sidebar-order").removeClass("left-sidebar-orderH");
			});
		//收藏
	$(".left-sidebar-collect").hover(function(){
		$(this).addClass("left-sidebar-collectH").removeClass("left-sidebar-collect");
		$(this).find(".left-collect-box").addClass("left-side-active");
		},function(){
		$(this).addClass("left-sidebar-collect").removeClass("left-sidebar-collectH");
		$(this).find(".left-collect-box").removeClass("left-side-active");
			});
		//浏览
	$(".left-sidebar-browse").hover(function(){
		$(this).addClass("left-sidebar-browseH").removeClass("left-sidebar-browse");
		$(this).find(".left-browse-box").addClass("left-side-active");
		},function(){
		$(this).addClass("left-sidebar-browse").removeClass("left-sidebar-browseH");
		$(this).find(".left-browse-box").removeClass("left-side-active");
			});
			//咨询
	$(".left-sidebar-consult").hover(function(){
		$(this).addClass("left-sidebar-consultH").removeClass("left-sidebar-consult");
		$(this).find(".left-consult-box").addClass("left-side-active");
		},function(){
		$(this).addClass("left-sidebar-consult").removeClass("left-sidebar-consultH");
		$(this).find(".left-consult-box").removeClass("left-side-active");
			});
			//联系
	$(".left-sidebar-contact").hover(function(){
		$(this).addClass("left-sidebar-contactH").removeClass("left-sidebar-contact");
		$(this).find(".left-contact-box").addClass("left-side-active");
		},function(){
		$(this).addClass("left-sidebar-contact").removeClass("left-sidebar-contactH");
		$(this).find(".left-contact-box").removeClass("left-side-active");
			});
	//首页当浏览器的宽度小于1366px时，悬浮层距离浏览器边框的距离为0
	var width=$(window).width();
	if(width<=1280){
		 var ul=document.getElementsByClassName("left-sidebar");
		 alert(ul.length);
		 $(ul).addClass("left-sidebar-on");
		var ul2=document.getElementsByClassName("right-sidebar");
		$(ul2).addClass("right-sidebar-on");
		};
	//特惠专区页面“所有分类”hover
	$(".pd-classify-h3").hover(function(){
		$(this).find(".down-ico").addClass("up-ico");	
		$(this).children(".all-classify-list").addClass("classify-list-on");
		},function(){
			$(this).find(".down-ico").removeClass("up-ico");
			$(this).children(".all-classify-list").removeClass("classify-list-on");
			});
			
	//产品内容页面图片展示
	$(".pd-good-imgItem>ul li").click(function(){
		$('.pd-good-imgItem>ul>li').removeClass('pd-pic-active');
		$('.pd-good-imgItem>ul>li>.trigon-bg').removeClass('trigon-show');
		$(this).find(".trigon-bg").addClass("trigon-show");
			$(this).addClass('pd-pic-active');
		});
	//产品内容页面配送地点
	$("#pd-store-selector").hover(function(){
		$(this).find(".pd-delivery-province").addClass("trigon-show");
		},function(){
			$(this).find(".pd-delivery-province").removeClass("trigon-show");
			})
     //新品专区页鼠标悬停图片向左移动
	$(".np-newgoods-img").hover(function(){
		$("img",this).stop().animate({"margin-top":"-10px"},{queue:false,duration:200});
    },function(){
		$("img",this).stop().animate({"margin-top":"0px"},{queue:false,duration:200});
		});				
	$(".np-item-img").hover(function(){
		$("img",this).stop().animate({"margin-left":"-10px"},{queue:false,duration:200});
    },function(){
		$("img",this).stop().animate({"margin-left":"0px"},{queue:false,duration:200});
		});				
			
	//产品展示页面筛选板块
	$(".ps-reset-sublist>li").click(function(){
		$(".ps-reset-sublist>li").removeClass("reset-active");
		$(".ps-reset-sublist>li>.ps-setItem-sublist").removeClass("trigon-show");
		$(this).addClass("reset-active");
		$(this).find("ul.ps-setItem-sublist").addClass("trigon-show");
		});
    //产品展示页面内容排行
	$(".ps-goods-term>li").click(function(){
		$(".ps-goods-term>li").removeClass("reset-active");
		$(this).addClass("reset-active");
		})
	//特惠专区鼠标悬停图片向左移动
	$(".pf-goods-img").hover(function(){
		$("img",this).stop().animate({"margin-left":"-20px"},{queue:false,duration:200});
    },function(){
		$("img",this).stop().animate({"margin-left":"0px"},{queue:false,duration:200});
		});	
    //新品专区选项卡切换
	$("#ws-menu1 li").click(function(){
		$("#ws-menu1>li>.ws-trigon").removeClass('trigon-show');
		$(this).find(".ws-trigon").addClass("trigon-show");
		});
    //购物流程-添加收货地址
	$("#addr-add").click(function(){
		$(".bf-step-addr").addClass("trigon-show");
		})    
	$('#info-alter').click(function(){
		$(".bf-step-addr").addClass("trigon-show");
		})
	$(".bf-inp-smt").click(function(){		
		$(".bf-step-addr2").addClass("trigon-show");
		})
	//购物流程-修改支付方式
	$('#consignee-alter').click(function(){
		$('.bf-pay-way').addClass('trigon-show');
		})
	
	//产品内容页点开对比
	$(".ps-contrast-opn").click(function(){
		$(".ps-contrast").addClass("trigon-show");
		})		
    //产品内容页关闭对比
	$("#ps-contrast-cls").click(function(){
		$(".ps-contrast").removeClass("trigon-show");
		})
     //购买流程2-支付方式
	 $(".bf-pay-rad").click(function(){
		 $(".bf-pay-rad").parents("p").removeClass("bf-pay-cur");
		 $(this).parent("p").addClass("bf-pay-cur");
		 })
	
});	
//首页公告滚动方法
function AutoScroll(obj){
        $("#"+obj).find("ul:first").animate({
                marginTop:"-15px"
        },1500,function(){
                $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
        });
};
//首页左右切换特卖产品      
   function abc(){var $obj = $('.recommend-prc-box>li');var len  = $obj.length;var i = 0; 
		$(".recommend-per").click(function(){i++;if(i==len){ i = 0;}  
              $obj.stop(true,true).hide().eq(i).fadeIn(600);return false;  
         });      
         $(".recommend-next").click(function(){  
              i--;  
              if(i==-1){  
                i = len-1;  
              }  
              $obj.stop(true,true).hide().eq(i).fadeIn(600);  
              return false;  
         }); }    
//首页通用的选项卡切换方法
function setTab(x,y,w) {
	var oDiv=document.getElementById(x);//要显示的UL
	var Olinum=oDiv.getElementsByTagName("li");//要显示的UL下LI的个数	
	var showDiv=document.getElementById(w);//要显示的DIV
	var showDivnum=showDiv.getElementsByClassName("tabDiv");//要显示的UL下tab-cur的个数
    var alpha = 0;
    for (var j = 0; j < Olinum.length; j++) {
        Olinum[j].className = "";
        showDivnum[j].className = "tabDiv";
        showDivnum[j].style.display = "none";
     }
     Olinum[y-1].className = "tab-cur";
     showDivnum[y-1].style.display="block";   
};
//首页左右悬浮板块
function showScroll(){
			$(window).scroll( function() { 
				var scrollValue=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//兼容不同浏览器的高度获取
				scrollValue > 200 ? $('div[class=left-sidebar]').fadeIn():$('div[class=left-sidebar]').fadeOut();
				scrollValue > 400 ? $('div[class=right-sidebar]').fadeIn():$('div[class=right-sidebar]').fadeOut();
			} );	
			$('.scrolltop').click(function(){
				$("html,body").animate({scrollTop:0},200);	
			});	
					
		}
/*===========================点击展开关闭效果====================================
oSourceObj    当前控件
oTargetObj    目标控件
shutAble    是否可以关闭开关
oOpenTip    展开时显示标题
oShutTip    关闭时显示标题
*/
function openShutManager(oSourceObj,oTargetObj,shutAble,oOpenTip,oShutTip){
var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
var openTip = oOpenTip || "";
var shutTip = oShutTip || "";
if(targetObj.style.display!="none"){
   if(shutAble) return;
   targetObj.style.display="none";
    sourceObj.style.backgroundPosition="left -1680px";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = shutTip; 
   }
} else {
   targetObj.style.display="block";
   sourceObj.style.backgroundPosition="left -2085px";
   if(openTip  &&  shutTip){
    sourceObj.innerHTML = openTip; 
   }
}
};

/*===========================点击展开关闭效果====================================
oSourceObj    当前控件
oTargetObj    目标控件
shutAble    是否可以关闭开关
bgo         需要改变背景图标
*/
function openSub(oSourceObj,oTargetObj,shutAble,bgo){
var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
var bgo=document.getElementById(bgo);
if(targetObj.style.display!="none"){
   if(shutAble) return;
   targetObj.style.display="none";
    bgo.style.backgroundPosition="left -1680px";
  
} else {
   targetObj.style.display="block";
   bgo.style.backgroundPosition="left -2085px";
   
}
};
/*===========================点击展开关闭效果====================================
oSourceObj    当前控件
oTargetObj    目标控件
shutAble    是否可以关闭开关
*/
function opcl(oSourceObj,oTargetObj,shutAble){
var sourceObj = typeof oSourceObj == "string" ? document.getElementById(oSourceObj) : oSourceObj;
var targetObj = typeof oTargetObj == "string" ? document.getElementById(oTargetObj) : oTargetObj;
if(targetObj.style.display!="none"){
   if(shutAble) return;
   targetObj.style.display="none";  
} else {
   targetObj.style.display="block";
}
};
/*IE 兼容getElementsByClassName*/

function getElementsByClassName(className,tagName) { 
    tagName=tagName||"*";                                    //参数tagName可以不写。
    if (document.getElementsByClassName) {                    //如果浏览器支持getElementsByClassName就直接用
        return getElementsByClassName(className);
    }else { 
        var tag= document.getElementsByTagName(tagName);    //获取指定元素
        var tagAll = [];                                    //用于存储符合条件的元素
        for (var i = 0; i < tag.length; i++) {                //遍历获得的元素
            for(var j=0,n=tag[i].className.split(' ');j<n.length;j++){    //遍历此元素中所有class的值，如果包含指定的类名，就赋值给tagnameAll
                if(n[j]==className){
                    tagAll.push(tag[i]);
                    break;
                }
            }
        }
        return tagAll;
    }
}
//首页点击滚动显示不同楼层
function click_scroll(obj){
	  var scroll_offset = $('#'+obj).offset();  
  $("body,html").animate({
   scrollTop:scroll_offset.top  //让body的scrollTop等于pos的top，就实现了滚动
   },500);
	}
   
