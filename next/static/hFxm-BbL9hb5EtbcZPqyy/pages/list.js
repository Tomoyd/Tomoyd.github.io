(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{hKUc:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/list",function(){return t("oVyb")}])},oVyb:function(e,n,t){"use strict";t.r(n);var a=t("ln6h"),l=t.n(a),u=t("eVuF"),r=t.n(u),s=t("9xET"),i=t.n(s),c=t("ZPTe"),o=t.n(c),m=t("hqwM"),d=t.n(m),p=t("Pbn2"),f=t.n(p),h=t("Y/VR"),y=t.n(h),v=t("q1tI"),w=t.n(v),g=t("8Kt/"),b=t.n(g),N=(t("Tpen"),t("ZHh6")),x=(t("TWMC"),t("Yo3B")),T=t("Ilvs"),I=t("8lYe"),_=t("yWTe"),q=t("vDqi"),E=t.n(q),P=t("4MG8"),L=t.n(P),M=t("FIf5"),S=t.n(M),V=(t("bi5S"),w.a.createElement),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},n=new L.a.Renderer;L.a.setOptions({renderer:n,gfm:!0,pedantic:!1,sanitize:!1,tables:!0,breaks:!1,smartLists:!0,smartypants:!1,xhtml:!1,highlight:function(e){return S.a.highlightAuto(e).value}});var t=Object(v.useState)(e.data),a=t[0],l=t[1];return Object(v.useEffect)((function(){l(e.data)})),V(w.a.Fragment,null,V(b.a,null,V("title",null,"Tomo | ",e.url.query.typeName)),V(N.a,null),V(i.a,{className:"comm-box",type:"flex",justify:"center"},V(o.a,{className:"comm-left",xs:24,sm:24,md:16,lg:18,xl:14},V("div",null,V("div",{className:"bread-div"},V(y.a,null,V(y.a.Item,null,V("a",{href:"/"},"\u9996\u9875")),V(y.a.Item,null,e.url.query.typeName))),V(d.a,{itemLayout:"vertical",dataSource:a,renderItem:function(e){return V(d.a.Item,null,V("div",{className:"list-title"},e.title),V("div",{className:"list-icon"},V("span",null,V(f.a,{type:"calendar"})," ",e.addTime),V("span",null,V(f.a,{type:"folder"})," ",e.typeName),V("span",null,V(f.a,{type:"fire"})," ",e.viewCount)),V("div",{className:"list-context",dangerouslySetInnerHTML:{__html:L()(e.introduce)}}))}}))),V(o.a,{className:"comm-right",xs:0,sm:0,md:7,lg:5,xl:4},V(x.a,null),V(T.a,null))),V(I.a,null))};j.getInitialProps=function(e){var n,t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return console.log(e),n=e.query.id,t=new r.a((function(e){E()(_.a.getListByTypeId+n).then((function(n){e(n.data)}))})),a.next=5,l.a.awrap(t);case 5:return a.abrupt("return",a.sent);case 6:case"end":return a.stop()}}),null,null,null,r.a)},n.default=j}},[["hKUc",1,2,4,3,0,20,21,23,22]]]);