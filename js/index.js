let sortArray=function(e,t){return e.nIdx-t.nIdx};function indexOfCatch(e){return-1<e}new class{query="";query_size=5;page_size=50;$$(e){return document.getElementById(e)}constructor(){function e(e){return document.getElementById(e)}var t,r;this.commands=linux_commands||[],this.elm_query=e("query"),this.elm_btn=e("search_btn"),this.elm_result=e("result"),this.elm_search_result=e("search_list_result"),this.root_path=(t=e("current_path"),r=window.location.origin+window.location.pathname,t?r.replace(/\/(c\/)?(\w|-)+\.html/,"").replace(/\/$/,""):""),this.init(),this.goToIndex()}goToIndex(){var t=document.getElementsByTagName("A");for(let e=0;e<t.length;e++)"/"!==t[e].pathname||/^https?:/i.test(t[e].protocol)||(t[e].href=this.root_path+"/")}bindEvent(e,t,r){e.addEventListener?e.addEventListener(t,r,!1):e.attachEvent&&e.attachEvent("on"+t,r)}isSreachIndexOF(e,t){return e&&t?e.toLowerCase().indexOf(t.toLowerCase()):-1}getQueryString(e){e=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),e=decodeURIComponent(window.location.hash.replace(/^(\#\!|\#)/,"")).match(e);return null!=e?unescape(e[2]):null}pushState(){window.history&&window.history.pushState&&(this.query?history.pushState({},"linux_commands","#!kw="+this.query):history.pushState({},"linux_commands",window.location.pathname))}simple(e,t){return e.replace(/\$\w+\$/gi,function(e){e=t[e.replace(/\$/g,"")];return void 0===e?"":e})}createKeyworldsHTML(e,t,r){var n='<i class="kw">$1</i>';let s=e.n,i=e.d;var l=new RegExp(`(${t})`,"ig"),t=(t&&(s=e.n.replace(l,n),i=e.d.replace(l,n)||""),this.root_path.replace(/\/$/,""));return this.simple(`<a href="${t}/c$url$.html"><strong>$name$</strong> - $des$</a>`+(r?"<p></p>":""),{name:s,url:e.p,des:i})}searchResult(t=!1){var r=this.commands;let n=this;var s=r.length;let i=[];var e,l=t?this.page_size:this.query_size,a=[],c=[];if(indexOfCatch(r&&r.length&&toString.call(r).indexOf("Array")))for(let e=0;e<s&&r[e];e++){var h=n.isSreachIndexOF(r[e].n,n.query),u=n.isSreachIndexOF(r[e].d,n.query),o=r[e];indexOfCatch(h)?(o.nIdx=h,a.push(o)):indexOfCatch(u)&&(o.dIdx=u,c.push(o))}a.sort(sortArray),c.sort(sortArray),a.concat(c).slice(0,l).forEach(e=>{i.push(n.createKeyworldsHTML(e,n.query,t))});let d=t?this.elm_search_result:this.elm_result;d.innerHTML="",i.forEach((e,t)=>{var r=document.createElement("li");r.innerHTML=e,d.appendChild(r)}),i.length||(l=document.createElement("LI"),(e=document.createElement("span")).innerText=this.query?"没有搜索到任何内容，请尝试输入其它字符！":"请尝试输入一些字符，进行搜索！",l.appendChild(e),d.appendChild(l))}selectedResult(e){var t=this.elm_result.children;let r=0;for(var n=0;n<t.length;n++)if("ok"==t[n].className){t[n].className="",r="up"==e?n-1:n+1;break}t[r]&&(t[r].className="ok")}isSelectedResult(){var t=this.elm_result.children;let r=!1;for(let e=0;e<t.length;e++)if("ok"==t[e].className){r=t[e];break}return r}init(){function t(e){r.elm_result.style.display=e||"none"}let r=this;var e=r.getQueryString("kw");this.elm_query.value=e,this.query=e||"",this.elm_search_result&&r.searchResult(!0),this.bindEvent(this.elm_query,"input",function(e){r.query=e.target.value,r.pushState(),r.query?r.searchResult():t(),r.elm_search_result?r.elm_btn.click():t(r.query?"block":"none")}),this.bindEvent(this.elm_btn,"click",function(e){t(),r.elm_search_result?r.searchResult(!0):window.location.href=r.root_path+"/list.html#!kw="+r.query}),this.bindEvent(this.elm_query,"focus",function(e){r.searchResult(),r.query&&t("block")}),this.bindEvent(this.elm_query,"blur",function(e){setTimeout(function(){t()},300)}),this.bindEvent(document,"keyup",function(e){if(40===e.keyCode&&r.selectedResult("down"),38===e.keyCode&&r.selectedResult("up"),"Enter"==e.key){e=r.isSelectedResult();if(!e)return r.elm_btn.click();e.children[0]&&e.children[0].click()}}),e&&r.searchResult()}};