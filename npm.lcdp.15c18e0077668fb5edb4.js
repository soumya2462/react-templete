(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[218],{10731:(e,t)=>{var n;function a(){return"serviceWorker"in navigator&&("https:"===window.location.protocol||"localhost"===window.location.hostname||0===window.location.hostname.indexOf("127."))}t.install=function(e){if(e||(e={}),a()){var t=navigator.serviceWorker.register("sw.js",{}),i=function(e){var t,n,a=e.installing||e.waiting;a&&!a.onstatechange&&(e.active?(i(),n=i):(c(),n=c),e.waiting&&(t=!0),a.onstatechange=n);function i(){switch(a.state){case"redundant":o("onUpdateFailed"),a.onstatechange=null;break;case"installing":0;break;case"installed":t||o("onUpdateReady");break;case"activated":o("onUpdated"),a.onstatechange=null}}function c(){switch(a.state){case"redundant":a.onstatechange=null;break;case"installing":case"installed":break;case"activated":o("onInstalled"),a.onstatechange=null}}},o=function(t){"function"===typeof e[t]&&e[t]({source:"ServiceWorker"})};t.then((function(e){e&&(i(e),e.onupdatefound=function(){i(e)})})).catch((function(e){return o("onError"),Promise.reject(e)}))}else if(window.applicationCache){var c=function(){var t=document.createElement("iframe");window.addEventListener("message",(function(n){if(n.source===t.contentWindow){var a=(n.data+"").match(/__offline-plugin_AppCacheEvent:(\w+)/);if(a){var i=a[1];"function"===typeof e[i]&&e[i]({source:"AppCache"})}}})),t.src="appcache/manifest.html",t.style.display="none",n=t,document.body.appendChild(t)};"complete"===document.readyState?setTimeout(c):window.addEventListener("load",c)}else;},t.applyUpdate=function(e,t){if(a())navigator.serviceWorker.getRegistration().then((function(n){n&&n.waiting?(n.waiting.postMessage({action:"skipWaiting"}),e&&e()):t&&t()}));else if(n)try{n.contentWindow.__applyUpdate(),e&&setTimeout(e)}catch(e){t&&setTimeout(t)}},t.update=function(){if(a()&&navigator.serviceWorker.getRegistration().then((function(e){if(e)return e.update()})),n)try{n.contentWindow.applicationCache.update()}catch(e){}}}}]);