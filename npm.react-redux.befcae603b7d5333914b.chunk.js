"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[9794],{35120:(e,t,n)=>{var r=n(95318);t.__esModule=!0,t.default=t.ReactReduxContext=void 0;var o=r(n(67294)).default.createContext(null);t.ReactReduxContext=o;var a=o;t.default=a},57456:(e,t,n)=>{var r=n(20862),o=n(95318);t.__esModule=!0,t.default=void 0;var a=o(n(81506)),u=o(n(85354)),s=r(n(67294)),i=o(n(45697)),c=n(35120),d=o(n(7510)),p=function(e){function t(t){var n;n=e.call(this,t)||this;var r=t.store;n.notifySubscribers=n.notifySubscribers.bind((0,a.default)(n));var o=new d.default(r);return o.onStateChange=n.notifySubscribers,n.state={store:r,subscription:o},n.previousState=r.getState(),n}(0,u.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this.state.subscription.trySubscribe(),this.previousState!==this.props.store.getState()&&this.state.subscription.notifyNestedSubs()},n.componentWillUnmount=function(){this.unsubscribe&&this.unsubscribe(),this.state.subscription.tryUnsubscribe(),this._isMounted=!1},n.componentDidUpdate=function(e){if(this.props.store!==e.store){this.state.subscription.tryUnsubscribe();var t=new d.default(this.props.store);t.onStateChange=this.notifySubscribers,this.setState({store:this.props.store,subscription:t})}},n.notifySubscribers=function(){this.state.subscription.notifyNestedSubs()},n.render=function(){var e=this.props.context||c.ReactReduxContext;return s.default.createElement(e.Provider,{value:this.state},this.props.children)},t}(s.Component);p.propTypes={store:i.default.shape({subscribe:i.default.func.isRequired,dispatch:i.default.func.isRequired,getState:i.default.func.isRequired}),context:i.default.object,children:i.default.any};var f=p;t.default=f},56702:(e,t,n)=>{var r=n(20862),o=n(95318);t.__esModule=!0,t.default=function(e,t){void 0===t&&(t={});var n=t,r=n.getDisplayName,o=void 0===r?function(e){return"ConnectAdvanced("+e+")"}:r,m=n.methodName,y=void 0===m?"connectAdvanced":m,w=n.renderCountProp,M=void 0===w?void 0:w,g=n.shouldHandleStateChanges,S=void 0===g||g,C=n.storeKey,O=void 0===C?"store":C,_=n.withRef,T=void 0!==_&&_,x=n.forwardRef,R=void 0!==x&&x,E=n.context,N=void 0===E?f.ReactReduxContext:E,D=(0,u.default)(n,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"]);(0,i.default)(void 0===M,"renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),(0,i.default)(!T,"withRef is removed. To access the wrapped instance, use a ref on the connected component");(0,i.default)("store"===O,"storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");var q=N;return function(t){var n=t.displayName||t.name||"Component",r=o(n),f=(0,a.default)({},D,{getDisplayName:o,methodName:y,renderCountProp:M,shouldHandleStateChanges:S,storeKey:O,displayName:r,wrappedComponentName:n,WrappedComponent:t}),m=D.pure;var w=m?c.useMemo:function(e){return e()};function g(n){var o=(0,c.useMemo)((function(){return[n.context,n.forwardedRef,(0,u.default)(n,["context","forwardedRef"])]}),[n]),s=o[0],m=o[1],y=o[2],M=(0,c.useMemo)((function(){return s&&s.Consumer&&(0,d.isContextConsumer)(c.default.createElement(s.Consumer,null))?s:q}),[s,q]),g=(0,c.useContext)(M),C=Boolean(n.store),O=Boolean(g)&&Boolean(g.store);(0,i.default)(C||O,'Could not find "store" in the context of "'+r+'". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to '+r+" in connect options.");var _=n.store||g.store,T=(0,c.useMemo)((function(){return function(t){return e(t.dispatch,f)}(_)}),[_]),x=(0,c.useMemo)((function(){if(!S)return h;var e=new p.default(_,C?null:g.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[_,C,g]),R=x[0],E=x[1],N=(0,c.useMemo)((function(){return C?g:(0,a.default)({},g,{subscription:R})}),[C,g,R]),D=(0,c.useReducer)(v,l,b),F=D[0][0],j=D[1];if(F&&F.error)throw F.error;var U=(0,c.useRef)(),B=(0,c.useRef)(y),I=(0,c.useRef)(),W=w((function(){return I.current&&y===B.current?I.current:T(_.getState(),y)}),[_,F,y]);P((function(){B.current=y,U.current=W,I.current&&(I.current=null,E())})),P((function(){if(S){var e=!1,t=null,n=function(){if(!e){var n,r,o=_.getState();try{n=T(o,B.current)}catch(e){r=e,t=e}r||(t=null),n===U.current?E():(U.current=n,I.current=n,j({type:"STORE_UPDATED",payload:{latestStoreState:o,error:r}}))}};R.onStateChange=n,R.trySubscribe(),n();return function(){if(e=!0,R.tryUnsubscribe(),t)throw t}}}),[_,R,T]);var k=(0,c.useMemo)((function(){return c.default.createElement(t,(0,a.default)({},W,{ref:m}))}),[m,t,W]);return(0,c.useMemo)((function(){return S?c.default.createElement(M.Provider,{value:N},k):k}),[M,k,N])}var C=m?c.default.memo(g):g;if(C.WrappedComponent=t,C.displayName=r,R){var _=c.default.forwardRef((function(e,t){return c.default.createElement(C,(0,a.default)({},e,{forwardedRef:t}))}));return _.displayName=r,_.WrappedComponent=t,(0,s.default)(_,t)}return(0,s.default)(C,t)}};var a=o(n(67154)),u=o(n(37316)),s=o(n(8679)),i=o(n(41143)),c=r(n(67294)),d=n(59864),p=o(n(7510)),f=n(35120),l=[],h=[null,null];function v(e,t){var n=e[1];return[t.payload,n+1]}var b=function(){return[null,0]},P="undefined"!==typeof window?c.useLayoutEffect:c.useEffect},69478:(e,t,n)=>{var r=n(95318);t.__esModule=!0,t.createConnect=h,t.default=void 0;var o=r(n(67154)),a=r(n(37316)),u=r(n(56702)),s=r(n(68761)),i=r(n(22333)),c=r(n(96188)),d=r(n(19442)),p=r(n(73764));function f(e,t,n){for(var r=t.length-1;r>=0;r--){var o=t[r](e);if(o)return o}return function(t,r){throw new Error("Invalid value of type "+typeof e+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function l(e,t){return e===t}function h(e){var t=void 0===e?{}:e,n=t.connectHOC,r=void 0===n?u.default:n,h=t.mapStateToPropsFactories,v=void 0===h?c.default:h,b=t.mapDispatchToPropsFactories,P=void 0===b?i.default:b,m=t.mergePropsFactories,y=void 0===m?d.default:m,w=t.selectorFactory,M=void 0===w?p.default:w;return function(e,t,n,u){void 0===u&&(u={});var i=u,c=i.pure,d=void 0===c||c,p=i.areStatesEqual,h=void 0===p?l:p,b=i.areOwnPropsEqual,m=void 0===b?s.default:b,w=i.areStatePropsEqual,g=void 0===w?s.default:w,S=i.areMergedPropsEqual,C=void 0===S?s.default:S,O=(0,a.default)(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),_=f(e,v,"mapStateToProps"),T=f(t,P,"mapDispatchToProps"),x=f(n,y,"mergeProps");return r(M,(0,o.default)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:_,initMapDispatchToProps:T,initMergeProps:x,pure:d,areStatesEqual:h,areOwnPropsEqual:m,areStatePropsEqual:g,areMergedPropsEqual:C},O))}}var v=h();t.default=v},22333:(e,t,n)=>{t.__esModule=!0,t.whenMapDispatchToPropsIsFunction=a,t.whenMapDispatchToPropsIsMissing=u,t.whenMapDispatchToPropsIsObject=s,t.default=void 0;var r=n(35281),o=n(59228);function a(e){return"function"===typeof e?(0,o.wrapMapToPropsFunc)(e,"mapDispatchToProps"):void 0}function u(e){return e?void 0:(0,o.wrapMapToPropsConstant)((function(e){return{dispatch:e}}))}function s(e){return e&&"object"===typeof e?(0,o.wrapMapToPropsConstant)((function(t){return(0,r.bindActionCreators)(e,t)})):void 0}var i=[a,u,s];t.default=i},96188:(e,t,n)=>{t.__esModule=!0,t.whenMapStateToPropsIsFunction=o,t.whenMapStateToPropsIsMissing=a,t.default=void 0;var r=n(59228);function o(e){return"function"===typeof e?(0,r.wrapMapToPropsFunc)(e,"mapStateToProps"):void 0}function a(e){return e?void 0:(0,r.wrapMapToPropsConstant)((function(){return{}}))}var u=[o,a];t.default=u},19442:(e,t,n)=>{var r=n(95318);t.__esModule=!0,t.defaultMergeProps=a,t.wrapMergePropsFunc=u,t.whenMergePropsIsFunction=s,t.whenMergePropsIsOmitted=i,t.default=void 0;var o=r(n(67154));r(n(51758));function a(e,t,n){return(0,o.default)({},n,e,t)}function u(e){return function(t,n){n.displayName;var r,o=n.pure,a=n.areMergedPropsEqual,u=!1;return function(t,n,s){var i=e(t,n,s);return u?o&&a(i,r)||(r=i):(u=!0,r=i),r}}}function s(e){return"function"===typeof e?u(e):void 0}function i(e){return e?void 0:function(){return a}}var c=[s,i];t.default=c},73764:(e,t,n)=>{var r=n(95318);t.__esModule=!0,t.impureFinalPropsSelectorFactory=a,t.pureFinalPropsSelectorFactory=u,t.default=function(e,t){var n=t.initMapStateToProps,r=t.initMapDispatchToProps,s=t.initMergeProps,i=(0,o.default)(t,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),c=n(e,i),d=r(e,i),p=s(e,i);0;return(i.pure?u:a)(c,d,p,e,i)};var o=r(n(37316));r(n(81830));function a(e,t,n,r){return function(o,a){return n(e(o,a),t(r,a),a)}}function u(e,t,n,r,o){var a,u,s,i,c,d=o.areStatesEqual,p=o.areOwnPropsEqual,f=o.areStatePropsEqual,l=!1;function h(o,l){var h,v,b=!p(l,u),P=!d(o,a);return a=o,u=l,b&&P?(s=e(a,u),t.dependsOnOwnProps&&(i=t(r,u)),c=n(s,i,u)):b?(e.dependsOnOwnProps&&(s=e(a,u)),t.dependsOnOwnProps&&(i=t(r,u)),c=n(s,i,u)):P?(h=e(a,u),v=!f(h,s),s=h,v&&(c=n(s,i,u)),c):c}return function(o,d){return l?h(o,d):(s=e(a=o,u=d),i=t(r,u),c=n(s,i,u),l=!0,c)}}},81830:(e,t,n)=>{var r=n(95318);t.__esModule=!0,t.default=function(e,t,n,r){a(e,"mapStateToProps",r),a(t,"mapDispatchToProps",r),a(n,"mergeProps",r)};var o=r(n(93099));function a(e,t,n){if(!e)throw new Error("Unexpected value for "+t+" in "+n+".");"mapStateToProps"!==t&&"mapDispatchToProps"!==t||e.hasOwnProperty("dependsOnOwnProps")||(0,o.default)("The selector for "+t+" of "+n+" did not specify a value for dependsOnOwnProps.")}},59228:(e,t,n)=>{var r=n(95318);t.__esModule=!0,t.wrapMapToPropsConstant=function(e){return function(t,n){var r=e(t,n);function o(){return r}return o.dependsOnOwnProps=!1,o}},t.getDependsOnOwnProps=o,t.wrapMapToPropsFunc=function(e,t){return function(t,n){n.displayName;var r=function(e,t){return r.dependsOnOwnProps?r.mapToProps(e,t):r.mapToProps(e)};return r.dependsOnOwnProps=!0,r.mapToProps=function(t,n){r.mapToProps=e,r.dependsOnOwnProps=o(e);var a=r(t,n);return"function"===typeof a&&(r.mapToProps=a,r.dependsOnOwnProps=o(a),a=r(t,n)),a},r}};r(n(51758));function o(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}},37424:(e,t,n)=>{var r=n(95318);t.__esModule=!0;var o=r(n(57456));t.Provider=o.default;var a=r(n(56702));t.connectAdvanced=a.default;var u=n(35120);t.ReactReduxContext=u.ReactReduxContext;var s=r(n(69478));t.connect=s.default;var i=n(67852),c=n(92581);t.batch=c.unstable_batchedUpdates,(0,i.setBatch)(c.unstable_batchedUpdates)},7510:(e,t,n)=>{t.__esModule=!0,t.default=void 0;var r=n(67852),o=null,a={notify:function(){}};var u=function(){function e(e,t){this.store=e,this.parentSub=t,this.unsubscribe=null,this.listeners=a,this.handleChangeWrapper=this.handleChangeWrapper.bind(this)}var t=e.prototype;return t.addNestedSub=function(e){return this.trySubscribe(),this.listeners.subscribe(e)},t.notifyNestedSubs=function(){this.listeners.notify()},t.handleChangeWrapper=function(){this.onStateChange&&this.onStateChange()},t.isSubscribed=function(){return Boolean(this.unsubscribe)},t.trySubscribe=function(){var e,t,n;this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.handleChangeWrapper):this.store.subscribe(this.handleChangeWrapper),this.listeners=(e=(0,r.getBatch)(),t=[],n=[],{clear:function(){n=o,t=o},notify:function(){var r=t=n;e((function(){for(var e=0;e<r.length;e++)r[e]()}))},get:function(){return n},subscribe:function(e){var r=!0;return n===t&&(n=t.slice()),n.push(e),function(){r&&t!==o&&(r=!1,n===t&&(n=t.slice()),n.splice(n.indexOf(e),1))}}}))},t.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=a)},e}();t.default=u},67852:(e,t)=>{t.__esModule=!0,t.getBatch=t.setBatch=void 0;var n=function(e){e()};t.setBatch=function(e){return n=e};t.getBatch=function(){return n}},1442:(e,t)=>{t.__esModule=!0,t.default=function(e){if("object"!==typeof e||null===e)return!1;var t=Object.getPrototypeOf(e);if(null===t)return!0;var n=t;for(;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return t===n}},92581:(e,t,n)=>{t.__esModule=!0,t.unstable_batchedUpdates=void 0;var r=n(73935);t.unstable_batchedUpdates=r.unstable_batchedUpdates},68761:(e,t)=>{t.__esModule=!0,t.default=function(e,t){if(r(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var u=0;u<o.length;u++)if(!n.call(t,o[u])||!r(e[o[u]],t[o[u]]))return!1;return!0};var n=Object.prototype.hasOwnProperty;function r(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}},51758:(e,t,n)=>{var r=n(95318);t.__esModule=!0,t.default=function(e,t,n){(0,o.default)(e)||(0,a.default)(n+"() in "+t+" must return a plain object. Instead received "+e+".")};var o=r(n(1442)),a=r(n(93099))},93099:(e,t)=>{t.__esModule=!0,t.default=function(e){"undefined"!==typeof console&&"function"===typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}}}]);