// JavaScript Document

//图片地址
var imgsrc= new Array();
imgsrc[0]="images/tp/banner1.jpg";
imgsrc[1]="images/tp/banner2.jpg";
imgsrc[2]="images/tp/banner3.jpg";
//图片预加载
var arr = new Array();
for(var i=1; i<=imgsrc.length; i++) {
arr[i] = new Image();
arr[i].src=imgsrc[i];
arr[i].onload;
}
 i=0;
document.getElementById("next").onclick=function (){
i++;
if(i>=imgsrc.length){i=0}
document.getElementById("showimg").setAttribute("src",imgsrc[i]);
}
document.getElementById("pre").onclick=function (){
i--;
if(i<0){i=imgsrc.length-1}
document.getElementById("showimg").setAttribute("src",imgsrc[i]);
};
