(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{105:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let s=!1;try{s=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),s};e.exports=a,e.exports.default=a},106:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},108:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),s=n(102),l=n(100),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(22).a,theme:c};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var d=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function g(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),p(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),p(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(o.style=s.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),p(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[s].concat(l))}})),p(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,s=u({},g(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?u({},s.style,r):r),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,s=0,l=[],c=[l];s>-1;){for(;(o=a[s]++)<r[s];){var i=void 0,p=t[s],u=n[s][o];if("string"==typeof u?(p=s>0?p:["plain"],i=u):(p=y(p,u.type),u.alias&&(p=y(p,u.alias)),i=u.content),"string"==typeof i){var h=i.split(d),g=h.length;l.push({types:p,content:h[0]});for(var f=1;f<g;f++)m(l),c.push(l=[]),l.push({types:p,content:h[f]})}else s++,t.push(p),n.push(i),a.push(0),r.push(i.length)}s--,t.pop(),n.pop(),a.pop(),r.pop()}return m(l),c}(void 0!==s?t.tokenize(a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),v=n(105),b=n.n(v),k=n(106),E=n.n(k),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},N=n(110),O=n(101);var x=()=>{const{prism:e}=Object(O.useThemeConfig)(),{isDarkTheme:t}=Object(N.a)(),n=e.theme||j,a=e.darkTheme||n;return t?a:n},C=n(53),T=n.n(C);const L=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((e=>`(?:${t[e].start}\\s*(${n})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${a})\\s*$`)},B=/(?:title=")(.*)(?:")/;var S=({children:e,className:t,metastring:n})=>{const{prism:s}=Object(O.useThemeConfig)(),[c,p]=Object(r.useState)(!1),[u,d]=Object(r.useState)(!1);Object(r.useEffect)((()=>{d(!0)}),[]);const m=Object(r.useRef)(null);let y=[],h="";const g=x();if(Array.isArray(e)&&(e=e.join("")),n&&L.test(n)){const e=n.match(L)[1];y=E()(e).filter((e=>e>0))}n&&B.test(n)&&(h=n.match(B)[1]);let v=t&&t.replace(/language-/,"");!v&&s.defaultLanguage&&(v=s.defaultLanguage);let k=e.replace(/\n$/,"");if(0===y.length&&void 0!==v){let t="";const n=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(v),a=e.replace(/\n$/,"").split("\n");let r;for(let e=0;e<a.length;){const o=e+1,s=a[e].match(n);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":t+=`${o},`;break;case"highlight-start":r=o;break;case"highlight-end":t+=`${r}-${o-1},`}a.splice(e,1)}else e+=1}y=E()(t),k=a.join("\n")}const j=()=>{b()(k),p(!0),setTimeout((()=>p(!1)),2e3)};return o.a.createElement(f,Object(a.a)({},i,{key:String(u),theme:g,code:k,language:v}),(({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:s})=>o.a.createElement(o.a.Fragment,null,h&&o.a.createElement("div",{style:t,className:T.a.codeBlockTitle},h),o.a.createElement("div",{className:T.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(l.a)(e,T.a.codeBlock,"thin-scrollbar",{[T.a.codeBlockWithTitle]:h})},o.a.createElement("div",{className:T.a.codeBlockLines,style:t},n.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const n=r({line:e,key:t});return y.includes(t+1)&&(n.className=`${n.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(a.a)({key:t},n),e.map(((e,t)=>o.a.createElement("span",Object(a.a)({key:t},s({token:e,key:t}))))))})))),o.a.createElement("button",{ref:m,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(T.a.copyButton),onClick:j},c?"Copied":"Copy")))))},$=(n(54),n(55)),_=n.n($);var P=e=>function({id:t,...n}){const{navbar:{hideOnScroll:a}}=Object(O.useThemeConfig)();return t?o.a.createElement(e,n,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",{[_.a.enhancedAnchor]:!a}),id:t}),n.children,o.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):o.a.createElement(e,n)},D=n(56),R=n.n(D);const A={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?o.a.createElement(S,e):o.a.createElement("code",e):t},a:e=>o.a.createElement(s.a,e),pre:e=>o.a.createElement("div",Object(a.a)({className:R.a.mdxCodeBlock},e)),h1:P("h1"),h2:P("h2"),h3:P("h3"),h4:P("h4"),h5:P("h5"),h6:P("h6")};t.a=A},115:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(100);var s=function(e,t,n){const[r,o]=Object(a.useState)(void 0);Object(a.useEffect)((()=>{function a(){const a=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){const n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(a){let n=0,s=!1;const l=document.getElementsByClassName(e);for(;n<l.length&&!s;){const e=l[n],{href:c}=e,i=decodeURIComponent(c.substring(c.indexOf("#")+1));a.id===i&&(r&&r.classList.remove(t),e.classList.add(t),o(e),s=!0),n+=1}}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},l=n(58),c=n.n(l);const i="table-of-contents__link";function p({headings:e,isChild:t}){return e.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(p,{isChild:!0,headings:e.children}))))):null}t.a=function({headings:e}){return s(i,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(o.a)(c.a.tableOfContents,"thin-scrollbar")},r.a.createElement(p,{headings:e}))}},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(107),s=n(103),l=n(108),c=n(115);t.default=function(e){const{content:t}=e,{frontMatter:n,metadata:a}=t,{title:i,description:p,wrapperClassName:u,hide_table_of_contents:d}=n,{permalink:m}=a;return r.a.createElement(o.a,{title:i,description:p,permalink:m,wrapperClassName:u},r.a.createElement("main",null,r.a.createElement("div",{className:"container container--fluid"},r.a.createElement("div",{className:"margin-vert--lg padding-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{components:l.a},r.a.createElement(t,null)))),!d&&t.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(c.a,{headings:t.rightToc})))))))}}}]);