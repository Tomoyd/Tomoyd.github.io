(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{DwZv:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/detailed",function(){return n("sTtx")}])},EujP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==O(e)&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=n("VCL8"),i=p(n("TSYQ")),a=p(n("BGR+")),u=p(n("t23M")),c=n("vgIT"),l=n("RggE"),f=p(n("aVg8")),s=n("mFXC");function p(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var o=g(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var w,k=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":O(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};!function(e){e[e.None=0]="None",e[e.Prepare=1]="Prepare"}(w||(w={}));var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(p,e);var t,n,o,l=m(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=l.apply(this,arguments)).state={status:w.None,lastAffix:!1,prevTarget:null},e.getOffsetTop=function(){var t=e.props,n=t.offset,r=t.offsetBottom,o=e.props.offsetTop;return"undefined"===typeof o&&(o=n,(0,f.default)("undefined"===typeof n,"Affix","`offset` is deprecated. Please use `offsetTop` instead.")),void 0===r&&void 0===o&&(o=0),o},e.getOffsetBottom=function(){return e.props.offsetBottom},e.savePlaceholderNode=function(t){e.placeholderNode=t},e.saveFixedNode=function(t){e.fixedNode=t},e.measure=function(){var t=e.state,n=t.status,r=t.lastAffix,o=e.props,i=o.target,a=o.onChange;if(n===w.Prepare&&e.fixedNode&&e.placeholderNode&&i){var u=e.getOffsetTop(),c=e.getOffsetBottom(),l=i();if(l){var f={status:w.None},p=(0,s.getTargetRect)(l),d=(0,s.getTargetRect)(e.placeholderNode),h=(0,s.getFixedTop)(d,p,u),v=(0,s.getFixedBottom)(d,p,c);void 0!==h?(f.affixStyle={position:"fixed",top:h,width:d.width,height:d.height},f.placeholderStyle={width:d.width,height:d.height}):void 0!==v&&(f.affixStyle={position:"fixed",bottom:v,width:d.width,height:d.height},f.placeholderStyle={width:d.width,height:d.height}),f.lastAffix=!!f.affixStyle,a&&r!==f.lastAffix&&a(f.lastAffix),e.setState(f)}}},e.prepareMeasure=function(){e.setState({status:w.Prepare,affixStyle:void 0,placeholderStyle:void 0})},e.renderAffix=function(t){var n,o,c,l=t.getPrefixCls,f=e.state,s=f.affixStyle,p=f.placeholderStyle,d=e.props,v=d.prefixCls,y=d.children,m=(0,i.default)((n={},o=l("affix",v),c=s,o in n?Object.defineProperty(n,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):n[o]=c,n)),b=(0,a.default)(e.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return r.createElement(u.default,{onResize:function(){e.updatePosition()}},r.createElement("div",h({},b,{ref:e.savePlaceholderNode}),s&&r.createElement("div",{style:p,"aria-hidden":"true"}),r.createElement("div",{className:m,ref:e.saveFixedNode,style:s},r.createElement(u.default,{onResize:function(){e.updatePosition()}},y))))},e}return t=p,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props.target;t&&(this.timeout=setTimeout((function(){(0,s.addObserveTarget)(t(),e),e.updatePosition()})))}},{key:"componentDidUpdate",value:function(e){var t=this.state.prevTarget,n=this.props.target,r=null;n&&(r=n()||null),t!==r&&((0,s.removeObserveTarget)(this),r&&((0,s.addObserveTarget)(r,this),this.updatePosition()),this.setState({prevTarget:r})),e.offsetTop===this.props.offsetTop&&e.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),(0,s.removeObserveTarget)(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var e=this.props.target,t=this.state.affixStyle;if(e&&t){var n=this.getOffsetTop(),r=this.getOffsetBottom(),o=e();if(o&&this.placeholderNode){var i=(0,s.getTargetRect)(o),a=(0,s.getTargetRect)(this.placeholderNode),u=(0,s.getFixedTop)(a,i,n),c=(0,s.getFixedBottom)(a,i,r);if(void 0!==u&&t.top===u||void 0!==c&&t.bottom===c)return}}this.prepareMeasure()}},{key:"render",value:function(){return r.createElement(c.ConfigConsumer,null,this.renderAffix)}}])&&v(t.prototype,n),o&&v(t,o),p}(r.Component);x.defaultProps={target:function(){return"undefined"!==typeof window?window:null}},k([(0,l.throttleByAnimationFrameDecorator)()],x.prototype,"updatePosition",null),k([(0,l.throttleByAnimationFrameDecorator)()],x.prototype,"lazyUpdatePosition",null),(0,o.polyfill)(x);var _=x;t.default=_},P8px:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=f(n("q1tI")),i=f(n("17x9")),a=n("VCL8"),u=(r=n("TSYQ"))&&r.__esModule?r:{default:r},c=n("vgIT");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function f(e){if(e&&e.__esModule)return e;if(null===e||"object"!==s(e)&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,e);var t,n,r,i=v(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=i.apply(this,arguments)).handleClick=function(t){var n=e.context.antAnchor,r=n.scrollTo,o=n.onClick,i=e.props,a=i.href,u=i.title;o&&o(t,{title:u,href:a}),r(a)},e.renderAnchorLink=function(t){var n=t.getPrefixCls,r=e.props,i=r.prefixCls,a=r.href,c=r.title,l=r.children,f=r.className,s=r.target,d=n("anchor",i),h=e.context.antAnchor.activeLink===a,v=(0,u.default)(f,"".concat(d,"-link"),p({},"".concat(d,"-link-active"),h)),y=(0,u.default)("".concat(d,"-link-title"),p({},"".concat(d,"-link-title-active"),h));return o.createElement("div",{className:v},o.createElement("a",{className:y,href:a,title:"string"===typeof c?c:"",target:s,onClick:e.handleClick},c),l)},e}return t=a,(n=[{key:"componentDidMount",value:function(){this.context.antAnchor.registerLink(this.props.href)}},{key:"componentDidUpdate",value:function(e){var t=e.href,n=this.props.href;t!==n&&(this.context.antAnchor.unregisterLink(t),this.context.antAnchor.registerLink(n))}},{key:"componentWillUnmount",value:function(){this.context.antAnchor.unregisterLink(this.props.href)}},{key:"render",value:function(){return o.createElement(c.ConfigConsumer,null,this.renderAnchorLink)}}])&&d(t.prototype,n),r&&d(t,r),a}(o.Component);b.defaultProps={href:"#"},b.contextTypes={antAnchor:i.object},(0,a.polyfill)(b);var g=b;t.default=g},"R6N+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if("undefined"===typeof window)return 0;var n=t?"pageYOffset":"pageXOffset",r=t?"scrollTop":"scrollLeft",o=e===window,i=o?e[n]:e[r];o&&"number"!==typeof i&&(i=document.documentElement[r]);return i}},RggE:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u,t.throttleByAnimationFrameDecorator=function(){return function(e,t,n){var r=n.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(t))return r;var n=u(r.bind(this));return o=!0,Object.defineProperty(this,t,{value:n,configurable:!0,writable:!0}),o=!1,n}}}};var r,o=(r=n("xEkU"))&&r.__esModule?r:{default:r};function i(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){var t,n=function(n){return function(){t=null,e.apply(void 0,i(n))}},r=function(){if(null==t){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];t=(0,o.default)(n(r))}};return r.cancel=function(){return o.default.cancel(t)},r}},S1XV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(n("q1tI")),o=h(n("i8i4")),i=h(n("17x9")),a=p(n("TSYQ")),u=p(n("rsGM")),c=p(n("EujP")),l=n("vgIT"),f=p(n("ibRW")),s=p(n("R6N+"));function p(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function h(e){if(e&&e.__esModule)return e;if(null===e||"object"!==v(e)&&"function"!==typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function v(e){return(v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){if(!e)return 0;if(!e.getClientRects().length)return 0;var n=e.getBoundingClientRect();return n.width||n.height?t===window?(t=e.ownerDocument.documentElement,n.top-t.clientTop):n.top-t.getBoundingClientRect().top:n.top}var _=/#([^#]+)$/,P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(d,e);var t,n,i,p=g(d);function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=p.apply(this,arguments)).state={activeLink:null},e.links=[],e.handleScrollTo=function(t){var n=e.props,r=n.offsetTop,o=n.getContainer,i=n.targetOffset;e.setCurrentActiveLink(t);var a=o(),u=(0,s.default)(a,!0),c=_.exec(t);if(c){var l=document.getElementById(c[1]);if(l){var p=u+x(l,a);p-=void 0!==i?i:r||0,e.animating=!0,(0,f.default)(p,{callback:function(){e.animating=!1},getContainer:o})}}},e.saveInkNode=function(t){e.inkNode=t},e.setCurrentActiveLink=function(t){var n=e.state.activeLink,r=e.props.onChange;n!==t&&(e.setState({activeLink:t}),r&&r(t))},e.handleScroll=function(){if(!e.animating){var t=e.props,n=t.offsetTop,r=t.bounds,o=t.targetOffset,i=e.getCurrentAnchor(void 0!==o?o:n||0,r);e.setCurrentActiveLink(i)}},e.updateInk=function(){if("undefined"!==typeof document){var t=w(e).prefixCls,n=o.findDOMNode(w(e)).getElementsByClassName("".concat(t,"-link-title-active"))[0];n&&(e.inkNode.style.top="".concat(n.offsetTop+n.clientHeight/2-4.5,"px"))}},e.renderAnchor=function(t){var n=t.getPrefixCls,o=e.props,i=o.prefixCls,u=o.className,l=void 0===u?"":u,f=o.style,s=o.offsetTop,p=o.affix,d=o.showInkInFixed,h=o.children,v=o.getContainer,m=e.state.activeLink,b=n("anchor",i);e.prefixCls=b;var g=(0,a.default)("".concat(b,"-ink-ball"),{visible:m}),O=(0,a.default)(l,"".concat(b,"-wrapper")),w=(0,a.default)(b,{fixed:!p&&!d}),k=y({maxHeight:s?"calc(100vh - ".concat(s,"px)"):"100vh"},f),x=r.createElement("div",{className:O,style:k},r.createElement("div",{className:w},r.createElement("div",{className:"".concat(b,"-ink")},r.createElement("span",{className:g,ref:e.saveInkNode})),h));return p?r.createElement(c.default,{offsetTop:s,target:v},x):x},e}return t=d,(n=[{key:"getChildContext",value:function(){var e=this;return{antAnchor:{registerLink:function(t){e.links.includes(t)||e.links.push(t)},unregisterLink:function(t){var n=e.links.indexOf(t);-1!==n&&e.links.splice(n,1)},activeLink:this.state.activeLink,scrollTo:this.handleScrollTo,onClick:this.props.onClick}}}},{key:"componentDidMount",value:function(){var e=this.props.getContainer;this.scrollContainer=e(),this.scrollEvent=(0,u.default)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll()}},{key:"componentDidUpdate",value:function(){if(this.scrollEvent){var e=(0,this.props.getContainer)();this.scrollContainer!==e&&(this.scrollContainer=e,this.scrollEvent.remove(),this.scrollEvent=(0,u.default)(this.scrollContainer,"scroll",this.handleScroll),this.handleScroll())}this.updateInk()}},{key:"componentWillUnmount",value:function(){this.scrollEvent&&this.scrollEvent.remove()}},{key:"getCurrentAnchor",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=this.props.getCurrentAnchor;if("function"===typeof n)return n();var r="";if("undefined"===typeof document)return r;var o=[],i=this.props.getContainer,a=i();if(this.links.forEach((function(n){var r=_.exec(n.toString());if(r){var i=document.getElementById(r[1]);if(i){var u=x(i,a);u<e+t&&o.push({link:n,top:u})}}})),o.length){var u=o.reduce((function(e,t){return t.top>e.top?t:e}));return u.link}return""}},{key:"render",value:function(){return r.createElement(l.ConfigConsumer,null,this.renderAnchor)}}])&&m(t.prototype,n),i&&m(t,i),d}(r.Component);t.default=P,P.defaultProps={affix:!0,showInkInFixed:!1,getContainer:function(){return window}},P.childContextTypes={antAnchor:i.object}},XZ74:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.supportRef=function(e){return!(e.type&&e.type.prototype&&!e.type.prototype.render)}},b0oO:function(e,t,n){"use strict";var r=n("9xET"),o=n.n(r),i=n("Jv8k"),a=n.n(i),u=n("Pbn2"),c=n.n(u),l=n("ZPTe"),f=n.n(l),s=n("ln6h"),p=n.n(s),d=n("q1tI"),h=n.n(d),v=(n("p/nH"),n("yWTe")),y=n("nOHt"),m=n.n(y),b=n("vDqi"),g=n.n(b),O=h.a.createElement;t.a=function(){var e=Object(d.useState)([]),t=e[0],n=e[1];Object(d.useEffect)((function(){!function(){var e;p.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.awrap(g()(v.a.getTypeInfo).then((function(e){return n(e.data.data),e.data.data})));case 2:e=t.sent,n(e);case 4:case"end":return t.stop()}}))}()}),[]);return O("div",{className:"header"},O(o.a,{type:"flex",justify:"center"},O(f.a,{xs:24,sm:24,md:10,lg:15,xl:12},O("span",{className:"header-logo"},"Hu"),O("span",{className:"header-txt"},"Hello React")),O(f.a,{className:"memu-div",xs:0,sm:0,md:14,lg:8,xl:6},O(a.a,{mode:"horizontal",onClick:function(e){console.log(e),0==e.key?m.a.push("/index"):m.a.push("/list?id="+e.key+"&typeName="+e.item.props.children[1])}},O(a.a.Item,{key:"0"},O(c.a,{type:"home"}),"\u9996\u9875"),t.map((function(e){return O(a.a.Item,{key:e.id,"data-type_name":e.type_name},O(c.a,{type:e.type_icon}),e.type_name)}))))))}},dplF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(e instanceof HTMLElement)return e;return o.default.findDOMNode(e)};var r,o=(r=n("i8i4"))&&r.__esModule?r:{default:r}},eoY8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("S1XV")),o=i(n("P8px"));function i(e){return e&&e.__esModule?e:{default:e}}r.default.Link=o.default;var a=r.default;t.default=a},ibRW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.getContainer,a=void 0===n?function(){return window}:n,u=t.callback,c=t.duration,l=void 0===c?450:c,f=a(),s=(0,o.default)(f,!0),p=Date.now();(0,r.default)((function t(){var n=Date.now()-p,o=(0,i.easeInOutCubic)(n>l?l:n,s,e,l);f===window?window.scrollTo(window.pageXOffset,o):f.scrollTop=o,n<l?(0,r.default)(t):"function"===typeof u&&u()}))};var r=a(n("xEkU")),o=a(n("R6N+")),i=n("osmp");function a(e){return e&&e.__esModule?e:{default:e}}},mFXC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTargetRect=function(e){return e!==window?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}},t.getFixedTop=function(e,t,n){if(void 0!==n&&t.top>e.top-n)return n+t.top;return},t.getFixedBottom=function(e,t,n){if(void 0!==n&&t.bottom<e.bottom+n){var r=window.innerHeight-t.bottom;return n+r}return},t.getObserverEntities=function(){return a},t.addObserveTarget=function(e,t){if(!e)return;var n=a.find((function(t){return t.target===e}));n?n.affixList.push(t):(n={target:e,affixList:[t],eventHandlers:{}},a.push(n),i.forEach((function(t){n.eventHandlers[t]=(0,o.default)(e,t,(function(){n.affixList.forEach((function(e){e.lazyUpdatePosition()}))}))})))},t.removeObserveTarget=function(e){var t=a.find((function(t){var n=t.affixList.some((function(t){return t===e}));return n&&(t.affixList=t.affixList.filter((function(t){return t!==e}))),n}));t&&0===t.affixList.length&&(a=a.filter((function(e){return e!==t})),i.forEach((function(e){var n=t.eventHandlers[e];n&&n.remove&&n.remove()})))};var r,o=(r=n("rsGM"))&&r.__esModule?r:{default:r};var i=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],a=[]},osmp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.easeInOutCubic=function(e,t,n,r){var o=n-t;if((e/=r/2)<1)return o/2*e*e*e+t;return o/2*((e-=2)*e*e+2)+t}},rsGM:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,i){var a=o.default.unstable_batchedUpdates?function(e){o.default.unstable_batchedUpdates(n,e)}:n;return(0,r.default)(e,t,a,i)};var r=i(n("LIAx")),o=i(n("i8i4"));function i(e){return e&&e.__esModule?e:{default:e}}},sTtx:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),i=n("eVuF"),a=n.n(i),u=n("9xET"),c=n.n(u),l=n("EujP"),f=n.n(l),s=n("ZPTe"),p=n.n(s),d=n("Pbn2"),h=n.n(d),v=n("Y/VR"),y=n.n(v),m=n("q1tI"),b=n.n(m),g=n("8Kt/"),O=n.n(g),w=n("b0oO"),k=n("Yo3B"),x=n("Ilvs"),_=n("8lYe"),P=(n("v0DR"),n("Nm2R"),n("vDqi")),j=n.n(P),C=n("4MG8"),T=n.n(C),E=n("FIf5"),S=n.n(E);n("bi5S");var N=n("hfKm"),R=n.n(N);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),R()(e,r.key,r)}}function I(e,t,n){return t in e?R()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=n("eoY8"),D=n.n(A),L=n("LvDl"),B=b.a.createElement,z=D.a.Link,F=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),I(this,"tocItems",[]),I(this,"index",0),I(this,"reset",(function(){t.tocItems=[],t.index=0})),this.tocItems=[],this.index=0}var t,n,r;return t=e,(n=[{key:"add",value:function(e,t){var n="toc".concat(t).concat(++this.index),r={anchor:n,level:t,text:e},o=this.tocItems;if(0===o.length)o.push(r);else{var i=Object(L.last)(o);if(r.level>i.level)for(var a=i.level+1;a<=2;a++){var u=i.children;if(!u){i.children=[r];break}if(i=Object(L.last)(u),r.level<=i.level){u.push(r);break}}else o.push(r)}return n}},{key:"renderToc",value:function(e){var t=this;return e.map((function(e){return B(z,{key:e.anchor,href:"#".concat(e.anchor),title:e.text},e.children&&t.renderToc(e.children))}))}},{key:"render",value:function(){return B(D.a,{affix:!0,showInkInFixed:!0},this.renderToc(this.tocItems))}}])&&M(t.prototype,n),r&&M(t,r),e}(),U=n("yWTe"),W=b.a.createElement,H=function(e){var t=new F,n=new T.a.Renderer;n.heading=function(e,n,r){var o=t.add(e,n);return'<a id="'.concat(o,'" href="#').concat(o,'" class="anchor-fix"><h').concat(n,">").concat(e,"</h").concat(n,"></a>\n")},T.a.setOptions({renderer:n,gfm:!0,pedantic:!1,sanitize:!1,tables:!0,breaks:!1,smartLists:!0,smartypants:!1,highlight:function(e){return S.a.highlightAuto(e).value}});var r=T()(e.articleContent);return W(b.a.Fragment,null,W(O.a,null,W("title",null,"\u535a\u5ba2\u8be6\u7ec6\u9875")),W(w.a,null),W(c.a,{className:"comm-main",type:"flex",justify:"center"},W(p.a,{className:"comm-left",xs:24,sm:24,md:16,lg:18,xl:14},W("div",null,W("div",{className:"bread-div"},W(y.a,null,W(y.a.Item,null,W("a",{href:"/"},"\u9996\u9875")),W(y.a.Item,null,"\u89c6\u9891\u5217\u8868"),W(y.a.Item,null,e.title))),W("div",null,W("div",{className:"detailed-title"},e.title),W("div",{className:"list-icon center"},W("span",null,W(h.a,{type:"calendar"}),e.addTime),W("span",null,W(h.a,{type:"folder"})," ",e.typeName),W("span",null,W(h.a,{type:"fire"})," ",e.viewCount)),W("div",{className:"detailed-content",dangerouslySetInnerHTML:{__html:r}})))),W(p.a,{className:"comm-right",xs:0,sm:0,md:7,lg:5,xl:4},W(k.a,null),W(x.a,null),W(f.a,{offsetTop:5},W("div",{className:"detailed-nav comm-box"},W("div",{className:"nav-title"},"\u6587\u7ae0\u76ee\u5f55"),W("div",{className:"toc-list"},t&&t.render()))))),W(_.a,null))};H.getInitialProps=function(e){var t,n;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.query.id,n=new a.a((function(e){j.a.get(U.a.getArticleById+t).then((function(t){e(t.data.data[0])}))})),r.next=4,o.a.awrap(n);case 4:return r.abrupt("return",r.sent);case 5:case"end":return r.stop()}}))};t.default=H},"saJ+":function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){"function"===typeof e?e(t):"object"===r(e)&&e&&"current"in e&&(e.current=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=o,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){o(t,e)}))}},t.supportRef=function(e){if(e.type&&e.type.prototype&&!e.type.prototype.render)return!1;if("function"===typeof e&&e.prototype&&!e.prototype.render)return!1;return!0}},t23M:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var f=c(n("q1tI")),s=l(n("dplF")),p=l(n("0r0h")),d=l(n("cOkC")),h=n("saJ+"),v=l(n("bdgK")),y=n("XZ74"),m=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=i(this,a(t).apply(this,arguments))).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0},e.onResize=function(t){var n=e.props.onResize,r=t[0].target.getBoundingClientRect(),o=r.width,i=r.height,a=Math.floor(o),u=Math.floor(i);if(e.state.width!==a||e.state.height!==u){var c={width:a,height:u};e.setState(c),n&&n(c)}},e.setChildNode=function(t){e.childNode=t},e}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=s.default(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new v.default(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=p.default(e);if(t.length>1)d.default(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return d.default(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var n=t[0];if(f.isValidElement(n)&&y.supportRef(n)){var r=n.ref;t[0]=f.cloneElement(n,{ref:h.composeRef(r,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!f.isValidElement(e)||"key"in e&&null!==e.key?e:f.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}])&&o(n.prototype,r),c&&o(n,c),t}(f.Component);m.displayName="ResizeObserver",t.default=m}},[["DwZv",1,2,4,5,9,0,3,6,7,8]]]);