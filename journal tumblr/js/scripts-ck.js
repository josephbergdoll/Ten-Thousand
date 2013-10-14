/*!
 * Masonry PACKAGED v3.0.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */(function(e){"use strict";function t(e){if(e){if("string"==typeof r[e])return e;e=e.charAt(0).toUpperCase()+e.slice(1);for(var t,s=0,o=n.length;o>s;s++)if(t=n[s]+e,"string"==typeof r[t])return t}}var n="Webkit Moz ms Ms O".split(" "),r=document.documentElement.style;"function"==typeof define&&define.amd?define(function(){return t}):e.getStyleProperty=t})(window),function(e){"use strict";function t(e){var t=parseFloat(e),n=-1===e.indexOf("%")&&!isNaN(t);return n&&t}function n(){for(var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},t=0,n=o.length;n>t;t++){var r=o[t];e[r]=0}return e}function r(e){function r(e){if("string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=s(e);if("none"===r.display)return n();var f={};f.width=e.offsetWidth,f.height=e.offsetHeight;for(var l=f.isBorderBox=!!u&&!!r[u]&&"border-box"===r[u],c=0,h=o.length;h>c;c++){var p=o[c],d=r[p],v=parseFloat(d);f[p]=isNaN(v)?0:v}var m=f.paddingLeft+f.paddingRight,g=f.paddingTop+f.paddingBottom,y=f.marginLeft+f.marginRight,b=f.marginTop+f.marginBottom,w=f.borderLeftWidth+f.borderRightWidth,E=f.borderTopWidth+f.borderBottomWidth,S=l&&i,x=t(r.width);x!==!1&&(f.width=x+(S?0:m+w));var T=t(r.height);return T!==!1&&(f.height=T+(S?0:g+E)),f.innerWidth=f.width-(m+w),f.innerHeight=f.height-(g+E),f.outerWidth=f.width+y,f.outerHeight=f.height+b,f}}var i,u=e("boxSizing");return function(){if(u){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[u]="border-box";var n=document.body||document.documentElement;n.appendChild(e);var r=s(e);i=200===t(r.width),n.removeChild(e)}}(),r}var i=document.defaultView,s=i&&i.getComputedStyle?function(e){return i.getComputedStyle(e,null)}:function(e){return e.currentStyle},o=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define(["get-style-property"],r):e.getSize=r(e.getStyleProperty)}(window),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,r){t[n+r]=r.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,r.handleEvent.call(r,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,r.call(t,n)},t.attachEvent("on"+n,t[n+r])});var r=function(){};t.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(r){e[t+n]=void 0}});var i={bind:n,unbind:r};"function"==typeof define&&define.amd?define(i):e.eventie=i}(this),function(e){"use strict";function t(e){"function"==typeof e&&(t.isReady?e():s.push(e))}function n(e){var n="readystatechange"===e.type&&"complete"!==i.readyState;if(!t.isReady&&!n){t.isReady=!0;for(var r=0,u=s.length;u>r;r++){var a=s[r];a()}}}function r(r){return r.bind(i,"DOMContentLoaded",n),r.bind(i,"readystatechange",n),r.bind(e,"load",n),t}var i=e.document,s=[];t.isReady=!1,"function"==typeof define&&define.amd?define(["eventie"],r):e.docReady=r(e.eventie)}(this),function(e){"use strict";function t(){}function n(e,t){if(i)return t.indexOf(e);for(var n=t.length;n--;)if(t[n]===e)return n;return-1}var r=t.prototype,i=Array.prototype.indexOf?!0:!1;r._getEvents=function(){return this._events||(this._events={})},r.getListeners=function(e){var t,n,r=this._getEvents();if("object"==typeof e){t={};for(n in r)r.hasOwnProperty(n)&&e.test(n)&&(t[n]=r[n])}else t=r[e]||(r[e]=[]);return t},r.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},r.addListener=function(e,t){var r,i=this.getListenersAsObject(e);for(r in i)i.hasOwnProperty(r)&&-1===n(t,i[r])&&i[r].push(t);return this},r.on=r.addListener,r.defineEvent=function(e){return this.getListeners(e),this},r.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},r.removeListener=function(e,t){var r,i,s=this.getListenersAsObject(e);for(i in s)s.hasOwnProperty(i)&&(r=n(t,s[i]),-1!==r&&s[i].splice(r,1));return this},r.off=r.removeListener,r.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},r.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},r.manipulateListeners=function(e,t,n){var r,i,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(r=n.length;r--;)s.call(this,t,n[r]);else for(r in t)t.hasOwnProperty(r)&&(i=t[r])&&("function"==typeof i?s.call(this,r,i):o.call(this,r,i));return this},r.removeEvent=function(e){var t,n=typeof e,r=this._getEvents();if("string"===n)delete r[e];else if("object"===n)for(t in r)r.hasOwnProperty(t)&&e.test(t)&&delete r[t];else delete this._events;return this},r.emitEvent=function(e,t){var n,r,i,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(n=s[r].length;n--;)i=t?s[r][n].apply(null,t):s[r][n](),i===!0&&this.removeListener(e,s[r][n]);return this},r.trigger=r.emitEvent,r.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},"function"==typeof define&&define.amd?define(function(){return t}):e.EventEmitter=t}(this),function(e){"use strict";function t(){}function n(e){function n(t){t.prototype.option||(t.prototype.option=function(t){e.isPlainObject(t)&&(this.options=e.extend(!0,this.options,t))})}function i(t,n){e.fn[t]=function(i){if("string"==typeof i){for(var o=r.call(arguments,1),u=0,a=this.length;a>u;u++){var f=this[u],l=e.data(f,t);if(l)if(e.isFunction(l[i])&&"_"!==i.charAt(0)){var c=l[i].apply(l,o);if(void 0!==c)return c}else s("no such method '"+i+"' for "+t+" instance");else s("cannot call methods on "+t+" prior to initialization; "+"attempted to call '"+i+"'")}return this}return this.each(function(){var r=e.data(this,t);r?(r.option(i),r._init()):(r=new n(this,i),e.data(this,t,r))})}}if(e){var s="undefined"==typeof console?t:function(e){console.error(e)};e.bridget=function(e,t){n(t),i(e,t)}}}var r=Array.prototype.slice;"function"==typeof define&&define.amd?define(["jquery"],n):n(e.jQuery)}(window),function(e,t){"use strict";function n(e,t){return e[u](t)}function r(e){if(!e.parentNode){var t=document.createDocumentFragment();t.appendChild(e)}}function i(e,t){r(e);for(var n=e.parentNode.querySelectorAll(t),i=0,s=n.length;s>i;i++)if(n[i]===e)return!0;return!1}function s(e,t){return r(e),n(e,t)}var o,u=function(){if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],n=0,r=e.length;r>n;n++){var i=e[n],s=i+"MatchesSelector";if(t[s])return s}}();if(u){var a=document.createElement("div"),f=n(a,"div");o=f?n:s}else o=i;"function"==typeof define&&define.amd?define(function(){return o}):window.matchesSelector=o}(this,Element.prototype),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e,t){e&&(this.element=e,this.layout=t,this.position={x:0,y:0},this._create())}var r=e.getSize,i=e.getStyleProperty,s=e.EventEmitter,o=document.defaultView,u=o&&o.getComputedStyle?function(e){return o.getComputedStyle(e,null)}:function(e){return e.currentStyle},a=i("transition"),f=i("transform"),l=a&&f,c=!!i("perspective"),h={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[a],p=["transform","transition","transitionDuration","transitionProperty"],d=function(){for(var e={},t=0,n=p.length;n>t;t++){var r=p[t],s=i(r);s&&s!==r&&(e[r]=s)}return e}();t(n.prototype,s.prototype),n.prototype._create=function(){this.css({position:"absolute"})},n.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},n.prototype.getSize=function(){this.size=r(this.element)},n.prototype.css=function(e){var t=this.element.style;for(var n in e){var r=d[n]||n;t[r]=e[n]}},n.prototype.getPosition=function(){var e=u(this.element),t=this.layout.options,n=t.isOriginLeft,r=t.isOriginTop,i=parseInt(e[n?"left":"right"],10),s=parseInt(e[r?"top":"bottom"],10);i=isNaN(i)?0:i,s=isNaN(s)?0:s;var o=this.layout.size;i-=n?o.paddingLeft:o.paddingRight,s-=r?o.paddingTop:o.paddingBottom,this.position.x=i,this.position.y=s},n.prototype.layoutPosition=function(){var e=this.layout.size,t=this.layout.options,n={};t.isOriginLeft?(n.left=this.position.x+e.paddingLeft+"px",n.right=""):(n.right=this.position.x+e.paddingRight+"px",n.left=""),t.isOriginTop?(n.top=this.position.y+e.paddingTop+"px",n.bottom=""):(n.bottom=this.position.y+e.paddingBottom+"px",n.top=""),this.css(n),this.emitEvent("layout",[this])};var v=c?function(e,t){return"translate3d("+e+"px, "+t+"px, 0)"}:function(e,t){return"translate("+e+"px, "+t+"px)"};n.prototype._transitionTo=function(e,t){this.getPosition();var n=this.position.x,r=this.position.y,i=parseInt(e,10),s=parseInt(t,10),o=i===this.position.x&&s===this.position.y;if(this.setPosition(e,t),o&&!this.isTransitioning)return this.layoutPosition(),void 0;var u=e-n,a=t-r,f={},l=this.layout.options;u=l.isOriginLeft?u:-u,a=l.isOriginTop?a:-a,f.transform=v(u,a),this.transition({to:f,onTransitionEnd:this.layoutPosition,isCleaning:!0})},n.prototype.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition()},n.prototype.moveTo=l?n.prototype._transitionTo:n.prototype.goTo,n.prototype.setPosition=function(e,t){this.position.x=parseInt(e,10),this.position.y=parseInt(t,10)},n.prototype._nonTransition=function(e){this.css(e.to),e.isCleaning&&this._removeStyles(e.to),e.onTransitionEnd&&e.onTransitionEnd.call(this)},n.prototype._transition=function(e){var t=this.layout.options.transitionDuration;if(!parseFloat(t))return this._nonTransition(e),void 0;var n=e.to,r=[];for(var i in n)r.push(i);var s={};if(s.transitionProperty=r.join(","),s.transitionDuration=t,this.element.addEventListener(h,this,!1),(e.isCleaning||e.onTransitionEnd)&&this.on("transitionEnd",function(t){return e.isCleaning&&t._removeStyles(n),e.onTransitionEnd&&e.onTransitionEnd.call(t),!0}),e.from){this.css(e.from);var o=this.element.offsetHeight;o=null}this.css(s),this.css(n),this.isTransitioning=!0},n.prototype.transition=n.prototype[a?"_transition":"_nonTransition"],n.prototype.onwebkitTransitionEnd=function(e){this.ontransitionend(e)},n.prototype.onotransitionend=function(e){this.ontransitionend(e)},n.prototype.ontransitionend=function(e){e.target===this.element&&(this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1,this.emitEvent("transitionEnd",[this]))},n.prototype._removeStyles=function(e){var t={};for(var n in e)t[n]="";this.css(t)};var m={transitionProperty:"",transitionDuration:""};n.prototype.removeTransitionStyles=function(){this.css(m)},n.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.emitEvent("remove",[this])},n.prototype.remove=a?function(){var e=this;this.on("transitionEnd",function(){return e.removeElem(),!0}),this.hide()}:n.prototype.removeElem,n.prototype.reveal=function(){this.css({display:""});var e=this.layout.options;this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0})},n.prototype.hide=function(){this.css({display:""});var e=this.layout.options;this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:!0,onTransitionEnd:function(){this.css({display:"none"})}})},n.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},e.Outlayer={Item:n}}(window),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===y.call(e)}function r(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var r=0,i=e.length;i>r;r++)t.push(e[r]);else t.push(e);return t}function i(e){return e.replace(/(.)([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()}function s(e,n){if("string"==typeof e&&(e=d.querySelector(e)),!e||!b(e))return v&&v.error("Bad "+this.settings.namespace+" element: "+e),void 0;this.element=e,this.options=t({},this.options),t(this.options,n);var r=++E;this.element.outlayerGUID=r,S[r]=this,this._create(),this.options.isInitLayout&&this.layout()}function o(e,n){e.prototype[n]=t({},s.prototype[n])}var u=e.Outlayer,a=u.Item,f=e.docReady,l=e.EventEmitter,c=e.eventie,h=e.getSize,p=e.matchesSelector,d=e.document,v=e.console,m=e.jQuery,g=function(){},y=Object.prototype.toString,b="object"==typeof HTMLElement?function(e){return e instanceof HTMLElement}:function(e){return e&&"object"==typeof e&&1===e.nodeType&&"string"==typeof e.nodeName},w=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},E=0,S={};s.prototype.settings={namespace:"outlayer",item:u.Item},s.prototype.options={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},t(s.prototype,l.prototype),s.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),t(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},s.prototype.reloadItems=function(){this.items=this._getItems(this.element.children)},s.prototype._getItems=function(e){for(var t=this._filterFindItemElements(e),n=this.settings.item,r=[],i=0,s=t.length;s>i;i++){var o=t[i],u=new n(o,this,this.options.itemOptions);r.push(u)}return r},s.prototype._filterFindItemElements=function(e){e=r(e);var t=this.options.itemSelector;if(!t)return e;for(var n=[],i=0,s=e.length;s>i;i++){var o=e[i];p(o,t)&&n.push(o);for(var u=o.querySelectorAll(t),a=0,f=u.length;f>a;a++)n.push(u[a])}return n},s.prototype.getItemElements=function(){for(var e=[],t=0,n=this.items.length;n>t;t++)e.push(this.items[t].element);return e},s.prototype.layout=function(){this._resetLayout(),this._manageStamps();var e=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},s.prototype._init=s.prototype.layout,s.prototype._resetLayout=function(){this.getSize()},s.prototype.getSize=function(){this.size=h(this.element)},s.prototype._getMeasurement=function(e,t){var n,r=this.options[e];r?("string"==typeof r?n=this.element.querySelector(r):b(r)&&(n=r),this[e]=n?h(n)[t]:r):this[e]=0},s.prototype.layoutItems=function(e,t){e=this._getItemsForLayout(e),this._layoutItems(e,t),this._postLayout()},s.prototype._getItemsForLayout=function(e){for(var t=[],n=0,r=e.length;r>n;n++){var i=e[n];i.isIgnored||t.push(i)}return t},s.prototype._layoutItems=function(e,t){if(!e||!e.length)return this.emitEvent("layoutComplete",[this,e]),void 0;this._itemsOn(e,"layout",function(){this.emitEvent("layoutComplete",[this,e])});for(var n=[],r=0,i=e.length;i>r;r++){var s=e[r],o=this._getItemLayoutPosition(s);o.item=s,o.isInstant=t,n.push(o)}this._processLayoutQueue(n)},s.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},s.prototype._processLayoutQueue=function(e){for(var t=0,n=e.length;n>t;t++){var r=e[t];this._positionItem(r.item,r.x,r.y,r.isInstant)}},s.prototype._positionItem=function(e,t,n,r){r?e.goTo(t,n):e.moveTo(t,n)},s.prototype._postLayout=function(){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))},s.prototype._getContainerSize=g,s.prototype._setContainerMeasure=function(e,t){if(void 0!==e){var n=this.size;n.isBorderBox&&(e+=t?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),e=Math.max(e,0),this.element.style[t?"width":"height"]=e+"px"}},s.prototype._itemsOn=function(e,t,n){function r(){return i++,i===s&&n.call(o),!0}for(var i=0,s=e.length,o=this,u=0,a=e.length;a>u;u++){var f=e[u];f.on(t,r)}},s.prototype.ignore=function(e){var t=this.getItem(e);t&&(t.isIgnored=!0)},s.prototype.unignore=function(e){var t=this.getItem(e);t&&delete t.isIgnored},s.prototype.stamp=function(e){if(e=this._find(e)){this.stamps=this.stamps.concat(e);for(var t=0,n=e.length;n>t;t++){var r=e[t];this.ignore(r)}}},s.prototype.unstamp=function(e){if(e=this._find(e))for(var t=0,n=e.length;n>t;t++){var r=e[t],i=w(this.stamps,r);-1!==i&&this.stamps.splice(i,1),this.unignore(r)}},s.prototype._find=function(e){return e?("string"==typeof e&&(e=this.element.querySelectorAll(e)),e=r(e)):void 0},s.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var e=0,t=this.stamps.length;t>e;e++){var n=this.stamps[e];this._manageStamp(n)}}},s.prototype._getBoundingRect=function(){var e=this.element.getBoundingClientRect(),t=this.size;this._boundingRect={left:e.left+t.paddingLeft+t.borderLeftWidth,top:e.top+t.paddingTop+t.borderTopWidth,right:e.right-(t.paddingRight+t.borderRightWidth),bottom:e.bottom-(t.paddingBottom+t.borderBottomWidth)}},s.prototype._manageStamp=g,s.prototype._getElementOffset=function(e){var t=e.getBoundingClientRect(),n=this._boundingRect,r=h(e),i={left:t.left-n.left-r.marginLeft,top:t.top-n.top-r.marginTop,right:n.right-t.right-r.marginRight,bottom:n.bottom-t.bottom-r.marginBottom};return i},s.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},s.prototype.bindResize=function(){this.isResizeBound||(c.bind(e,"resize",this),this.isResizeBound=!0)},s.prototype.unbindResize=function(){c.unbind(e,"resize",this),this.isResizeBound=!1},s.prototype.onresize=function(){function e(){t.resize()}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var t=this;this.resizeTimeout=setTimeout(e,100)},s.prototype.resize=function(){var e=h(this.element),t=this.size&&e;t&&e.innerWidth===this.size.innerWidth||(this.layout(),delete this.resizeTimeout)},s.prototype.addItems=function(e){var t=this._getItems(e);if(t.length)return this.items=this.items.concat(t),t},s.prototype.appended=function(e){var t=this.addItems(e);t.length&&(this.layoutItems(t,!0),this.reveal(t))},s.prototype.prepended=function(e){var t=this._getItems(e);if(t.length){var n=this.items.slice(0);this.items=t.concat(n),this._resetLayout(),this.layoutItems(t,!0),this.reveal(t),this.layoutItems(n)}},s.prototype.reveal=function(e){if(e&&e.length)for(var t=0,n=e.length;n>t;t++){var r=e[t];r.reveal()}},s.prototype.hide=function(e){if(e&&e.length)for(var t=0,n=e.length;n>t;t++){var r=e[t];r.hide()}},s.prototype.getItem=function(e){for(var t=0,n=this.items.length;n>t;t++){var r=this.items[t];if(r.element===e)return r}},s.prototype.getItems=function(e){if(e&&e.length){for(var t=[],n=0,r=e.length;r>n;n++){var i=e[n],s=this.getItem(i);s&&t.push(s)}return t}},s.prototype.remove=function(e){e=r(e);var t=this.getItems(e);this._itemsOn(t,"remove",function(){this.emitEvent("removeComplete",[this,t])});for(var n=0,i=t.length;i>n;n++){var s=t[n];s.remove();var o=w(this.items,s);this.items.splice(o,1)}},s.prototype.destroy=function(){var e=this.element.style;e.height="",e.position="",e.width="";for(var t=0,n=this.items.length;n>t;t++){var r=this.items[t];r.destroy()}this.unbindResize(),delete this.element.outlayerGUID},s.data=function(e){var t=e&&e.outlayerGUID;return t&&S[t]},s.create=function(e,n){function r(){s.apply(this,arguments)}return t(r.prototype,s.prototype),o(r,"options"),o(r,"settings"),t(r.prototype.options,n),r.prototype.settings.namespace=e,r.data=s.data,r.Item=function(){a.apply(this,arguments)},r.Item.prototype=new s.Item,r.prototype.settings.item=r.Item,f(function(){for(var t=i(e),n=d.querySelectorAll(".js-"+t),s="data-"+t+"-options",o=0,u=n.length;u>o;o++){var a,f=n[o],l=f.getAttribute(s);try{a=l&&JSON.parse(l)}catch(c){v&&v.error("Error parsing "+s+" on "+f.nodeName.toLowerCase()+(f.id?"#"+f.id:"")+": "+c);continue}var h=new r(f,a);m&&m.data(f,e,h)}}),m&&m.bridget&&m.bridget(e,r),r},s.Item=a,e.Outlayer=s}(window),function(e){"use strict";function t(e,t){var r=e.create("masonry");return r.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var e=this.cols;for(this.colYs=[];e--;)this.colYs.push(0);this.maxY=0},r.prototype.measureColumns=function(){var e=this.items[0].element;this.columnWidth=this.columnWidth||t(e).outerWidth,this.columnWidth+=this.gutter,this.cols=Math.floor((this.size.innerWidth+this.gutter)/this.columnWidth),this.cols=Math.max(this.cols,1)},r.prototype._getItemLayoutPosition=function(e){e.getSize();var t=Math.ceil(e.size.outerWidth/this.columnWidth);t=Math.min(t,this.cols);for(var r=this._getColGroup(t),s=Math.min.apply(Math,r),o=n(r,s),u={x:this.columnWidth*o,y:s},a=s+e.size.outerHeight,f=this.cols+1-r.length,l=0;f>l;l++)this.colYs[o+l]=a;return u},r.prototype._getColGroup=function(e){if(1===e)return this.colYs;for(var t=[],n=this.cols+1-e,r=0;n>r;r++){var i=this.colYs.slice(r,r+e);t[r]=Math.max.apply(Math,i)}return t},r.prototype._manageStamp=function(e){var n=t(e),r=this._getElementOffset(e),i=this.options.isOriginLeft?r.left:r.right,s=i+n.outerWidth,o=Math.floor(i/this.columnWidth);o=Math.max(0,o);var u=Math.floor(s/this.columnWidth);u=Math.min(this.cols-1,u);for(var a=(this.options.isOriginTop?r.top:r.bottom)+n.outerHeight,f=o;u>=f;f++)this.colYs[f]=Math.max(a,this.colYs[f])},r.prototype._getContainerSize=function(){return this.maxY=Math.max.apply(Math,this.colYs),{height:this.maxY}},r}var n=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,r=e.length;r>n;n++){var i=e[n];if(i===t)return n}return-1};"function"==typeof define&&define.amd?define(["outlayer","get-size"],t):e.Masonry=t(e.Outlayer,e.getSize)}(window);(function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null},r=document.createElement("div"),i=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0];return r.className="fit-vids-style",r.innerHTML="&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>",i.parentNode.insertBefore(r,i),t&&e.extend(n,t),this.each(function(){var t=["iframe[src*='player.vimeo.com']","iframe[src*='www.youtube.com']","iframe[src*='www.youtube-nocookie.com']","iframe[src*='www.kickstarter.com']","object","embed"];n.customSelector&&t.push(n.customSelector);var r=e(this).find(t.join(","));r.each(function(){var t=e(this);if(!("embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),r=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),i=n/r;if(!t.attr("id")){var s="fitvid"+Math.floor(999999*Math.random());t.attr("id",s)}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*i+"%"),t.removeAttr("height").removeAttr("width")}})})}})(jQuery);$(document).ready(function(){$("span.cart").hover(function(e){$(".counter").toggleClass("cart-circle-hovered");$(".js-cart-counter").toggleClass("cart-circle-span-hovered")});$("span.cart a").click(function(){$("section.cart-disp-empty").fadeToggle(200);$("span.cart a").toggleClass("cartclicked");$("span.cart figure").toggleClass("cartclicked");$("div.closebtn").fadeToggle(300)})});