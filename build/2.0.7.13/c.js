﻿var a={a:(function(){var a=document.createElement("div");a.style.cssText='position:absolute;max-width:50%;min-width:200px;display:none;z-index:9999;background-color:rgba(255,255,255,.9);border:1px solid #8B8B8B;border-radius:5px;padding:5px;font-family:"Microsoft YaHei";color:rgb(85,85,85);';a.innerHTML='<div style="font-size:20px;line-height:34px;padding:0 5px;"><span style="float:right;cursor:pointer;font-size:12px;color:rgb(2,48,129);" onclick="this.parentNode.parentNode.style.display=\'none\'">关闭</span>翻译结果</div><div style="font-size:16px;text-indent:2em;line-height:26px;padding:0 10px;word-break:break-all;">正在翻译，请稍候……</div>';a._=a.getElementsByTagName("div")[1];document.body.appendChild(a);return a}()),b:function(){var a=document.createElement("script");a.id="outfox_seed_js";a.charset="utf-8";a.src="http://fanyi.youdao.com/web2/seed.js?"+Date.now();document.body.appendChild(a)},c:getSelection(),d:"http://openapi.baidu.com/public/2.0/bmt/translate?client_id=Of5Pw6TxYkGxHKDEMzEtc4yV&from=auto&to=auto&q=",e:"http://fanyi.youdao.com/openapi.do?keyfrom=chrome&key=1361128838&type=data&doctype=json&version=1.1&q=",f:function(c){var d=a.a,b;if(c.translation){b=c.translation[0]}else{b=c.trans_result[0].dst}d._.textContent=b;d.style.display="block";d.style.top=a.o[1]+"px";d.style.left=a.o[0]+"px"},g:function(a,b,d){var c=new XMLHttpRequest();c.open("GET",this[d]+encodeURI(a));c.onreadystatechange=function(){if(c.readyState===4&&c.status===200){b(JSON.parse(c.responseText))}};c.send(null)},h:function(){document.addEventListener("mouseup",this.i,true)},i:function(e){var q=a.c.toString();if(q&&e.which===1&&q!==a.n){a.o[0]=e.pageX+10;a.o[1]=e.pageY+10;a.n=q;a.g(q,a.f,"e")}},j:function(){document.removeEventListener("mouseup",this.i,true)},k:false,l:false,m:function(){if(window.top===window){chrome.runtime.sendMessage([a.k,a.l])}},n:"",o:[0,0]};document.addEventListener("contextmenu",function(e){a.o[0]=e.pageX+10;a.o[1]=e.pageY+10},true);a.m();postMessage({from:"com.lmk123",manifest:chrome.runtime.getManifest()},"*");