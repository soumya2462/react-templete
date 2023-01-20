"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[7500],{39602:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(63038)),i=r(n(50008)),f=r(n(67294)),c=n(88208),o=r(n(76519)),a=n(46981),l=r(n(78767)),d=n(98525),s=r(n(69182));function v(e){return"function"!==typeof e?null:e()}function p(e){return"object"===(0,i.default)(e)&&e?e:null}var m=f.default.forwardRef((function(e,t){var n=e.children,r=e.disabled,i=e.target,m=e.align,g=e.onAlign,h=e.monitorWindowResize,y=e.monitorBufferTime,b=void 0===y?0:y,R=f.default.useRef({}),_=f.default.useRef(),w=f.default.Children.only(n),E=f.default.useRef({});E.current.disabled=r,E.current.target=i,E.current.onAlign=g;var P=(0,s.default)((function(){var e=E.current,t=e.disabled,n=e.target,r=e.onAlign;if(!t&&n){var u,i=_.current,f=v(n),c=p(n);R.current.element=f,R.current.point=c;var l=document.activeElement;return f&&(0,o.default)(f)?u=(0,a.alignElement)(i,f,m):c&&(u=(0,a.alignPoint)(i,c,m)),(0,d.restoreFocus)(l,i),r&&u&&r(i,u),!0}return!1}),b),M=(0,u.default)(P,2),j=M[0],B=M[1],O=f.default.useRef({cancel:function(){}}),A=f.default.useRef({cancel:function(){}});f.default.useEffect((function(){var e=v(i),t=p(i);_.current!==A.current.element&&(A.current.cancel(),A.current.element=_.current,A.current.cancel=(0,d.monitorResize)(_.current,j)),R.current.element===e&&(0,d.isSamePoint)(R.current.point,t)||(j(),O.current.element!==e&&(O.current.cancel(),O.current.element=e,O.current.cancel=(0,d.monitorResize)(e,j)))})),f.default.useEffect((function(){r?B():j()}),[r]);var C=f.default.useRef(null);return f.default.useEffect((function(){h?C.current||(C.current=(0,l.default)(window,"resize",j)):C.current&&(C.current.remove(),C.current=null)}),[h]),f.default.useEffect((function(){return function(){O.current.cancel(),A.current.cancel(),C.current&&C.current.remove(),B()}}),[]),f.default.useImperativeHandle(t,(function(){return{forceAlign:function(){return j(!0)}}})),f.default.isValidElement(w)&&(w=f.default.cloneElement(w,{ref:(0,c.composeRef)(w.ref,_)})),w}));m.displayName="Align";var g=m;t.default=g},69182:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(67294));t.default=function(e,t){var n=u.default.useRef(!1),r=u.default.useRef(null);function i(){window.clearTimeout(r.current)}return[function u(f){if(n.current&&!0!==f)i(),r.current=window.setTimeout((function(){n.current=!1,u()}),t);else{if(!1===e())return;n.current=!0,i(),r.current=window.setTimeout((function(){n.current=!1}),t)}},function(){n.current=!1,i()}]}},63741:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(39602)).default;t.default=u},98525:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePoint=function(e,t){if(e===t)return!0;if(!e||!t)return!1;if("pageX"in t&&"pageY"in t)return e.pageX===t.pageX&&e.pageY===t.pageY;if("clientX"in t&&"clientY"in t)return e.clientX===t.clientX&&e.clientY===t.clientY;return!1},t.restoreFocus=function(e,t){e!==document.activeElement&&(0,f.default)(t,e)&&"function"===typeof e.focus&&e.focus()},t.monitorResize=function(e,t){var n=null,r=null;var f=new i.default((function(e){var i=(0,u.default)(e,1)[0].target;if(document.documentElement.contains(i)){var f=i.getBoundingClientRect(),c=f.width,o=f.height,a=Math.floor(c),l=Math.floor(o);n===a&&r===l||Promise.resolve().then((function(){t({width:a,height:l})})),n=a,r=l}}));e&&f.observe(e);return function(){f.disconnect()}};var u=r(n(63038)),i=r(n(32018)),f=r(n(96938))},78767:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,r){var i=u.default.unstable_batchedUpdates?function(e){u.default.unstable_batchedUpdates(n,e)}:n;e.addEventListener&&e.addEventListener(t,i,r);return{remove:function(){e.removeEventListener&&e.removeEventListener(t,i)}}};var u=r(n(73935))},96938:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e)return!1;return e.contains(t)}},76519:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){if(!e)return!1;if(e.offsetParent)return!0;if(e.getBBox){var t=e.getBBox();if(t.width||t.height)return!0}if(e.getBoundingClientRect){var n=e.getBoundingClientRect();if(n.width||n.height)return!0}return!1}},88208:(e,t,n)=>{var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fillRef=f,t.composeRef=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){t.forEach((function(t){f(t,e)}))}},t.supportRef=function(e){var t,n,r=(0,i.isMemo)(e)?e.type.type:e.type;if("function"===typeof r&&!(null===(t=r.prototype)||void 0===t?void 0:t.render))return!1;if("function"===typeof e&&!(null===(n=e.prototype)||void 0===n?void 0:n.render))return!1;return!0};var u=r(n(50008)),i=n(59864);function f(e,t){"function"===typeof e?e(t):"object"===(0,u.default)(e)&&e&&"current"in e&&(e.current=t)}}}]);