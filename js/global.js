$(function(){
	//首页悬浮
	showScroll();
	//shopping-cart's hover js
	$(".hd-tool-shopping").hover(function(){
		$(this).removeClass("shopping-sty").addClass("shopping-hover");
		$(".hd-shopping-ico").removeClass("shopping-ico-bg").addClass("shopping-ico-hover");
		$(this).find(".hd-tool-jt").removeClass("tool-jt-bg").addClass("tool-jt-hover");
		$(".shopping-minicart").show();
		},function(){
			$(this).removeClass("shopping-hover").addClass("shopping-sty");
			$(".hd-shopping-ico").removeClass("shopping-ico-hover").addClass("shopping-ico-bg");
			$(".hd-tool-jt").removeClass("tool-jt-hover").addClass("tool-jt-bg");
			$(".shopping-minicart").hide();
			});
	//sidebar's hover js
	$(".sidebar-ul>#sidebar-li").hover(function(){
		$(this).children("div.sub-sidebar").show();
		$(this).addClass("sidebar-hover").removeClass("sidebar-f-h");
		},function(){
			$(this).children("div.sub-sidebar").hide();
			$(this).addClass("sidebar-f-h").removeClass("sidebar-hover");
	});
	//推荐专区
	$(".nominate-ul>li").hover(function(){
		$(this).addClass("nominate-hover").removeClass("nominate-h");
		},function(){
			$(this).addClass("nominate-h").removeClass("nominate-hover");
			});
	//特惠专区鼠标悬停图片向左移动
	$(".recommend-prc-img a").hover(function() {
        $("img",this).stop().animate({"margin-left":"-20px"},{queue:false,duration:200});
    },function(){
		$("img",this).stop().animate({"margin-left":"0px"},{queue:false,duration:200});
		});
	//排行榜鼠标悬停图片向左移动
	$(".tab-hot-img a").hover(function(){
		$("img",this).stop().animate({"margin-left":"-20px"},{queue:false,duration:200});
    },function(){
		$("img",this).stop().animate({"margin-left":"0px"},{queue:false,duration:200});
		});	
	//首页右边悬浮层
	$(".right-sidebar-item>a").hover(function(){
		$(this).find("span").removeClass("sidebar-hid").addClass("sidebar-active");
		},function(){
		$(this).find("span").removeClass("sidebar-active").addClass("sidebar-hid");
			});
	$(".right-sidebar-item>a").click(function(){
		$(this).find("span").removeClass("sidebar-hid").addClass("sidebar-active");
		},function(){
		$(this).find("span").removeClass("sidebar-active").addClass("sidebar-hid");
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
		$(this).find(".left-collect-box").addClass("left-side-active");
		},function(){
		$(this).addClass("left-sidebar-browse").removeClass("left-sidebar-browseH");
		$(this).find(".left-collect-box").removeClass("left-side-active");
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
	});
//首页公告滚动方法
function AutoScroll(obj){
        $("#"+obj).find("ul:first").animate({
                marginTop:"-15px"
        },1500,function(){
                $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
        });
};
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
				var scrollValue=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
				scrollValue > 200 ? $('div[class=left-sidebar]').fadeIn():$('div[class=left-sidebar]').fadeOut();
				scrollValue > 400 ? $('div[class=right-sidebar]').fadeIn():$('div[class=right-sidebar]').fadeOut();
			} );	
			$('.scrolltop').click(function(){
				$("html,body").animate({scrollTop:0},200);	
			});	
					
		}
   

   
