(this.webpackJsonpcode=this.webpackJsonpcode||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t(3),a=t.n(c),i=(t(12),t(4)),r=t(5),s=t(7),l=t(6),u=(t(13),t.p+"static/media/logo.2d27ead7.svg"),h=t(0),g=function(e){var n=e.onRouteChange;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(h.jsx)("h1",{className:"App-title",children:"Welcome to Page 1"})]}),Object(h.jsx)("button",{className:"disabled",children:"Page1"}),Object(h.jsx)("button",{onClick:function(){return n("page2")},children:"Page2"}),Object(h.jsx)("button",{onClick:function(){return n("page3")},children:"Page3"})]})},d=function(e){var n=e.onRouteChange;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(h.jsx)("h1",{className:"App-title",children:"Welcome to Page 2"})]}),Object(h.jsx)("button",{onClick:function(){return n("page1")},children:"Page1"}),Object(h.jsx)("button",{className:"disabled",children:"Page2"}),Object(h.jsx)("button",{onClick:function(){return n("page3")},children:"Page3"})]})},j=function(e){var n=e.onRouteChange;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:u,className:"App-logo",alt:"logo"}),Object(h.jsx)("h1",{className:"App-title",children:"Welcome to Page 3"})]}),Object(h.jsx)("button",{onClick:function(){return n("page1")},children:"Page1"}),Object(h.jsx)("button",{onClick:function(){return n("page2")},children:"Page2"}),Object(h.jsx)("button",{className:"disabled",children:"Page3"})]})},p=function(e){Object(s.a)(t,e);var n=Object(l.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).onRouteChange=function(n){e.setState({route:n})},e.state={route:"page1"},e}return Object(r.a)(t,[{key:"render",value:function(){return"page1"===this.state.route?Object(h.jsx)(g,{onRouteChange:this.onRouteChange}):"page2"===this.state.route?Object(h.jsx)(d,{onRouteChange:this.onRouteChange}):Object(h.jsx)(j,{onRouteChange:this.onRouteChange})}}]),t}(o.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(h.jsx)(p,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");b?(!function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):f(e)}))}}()}},[[15,1,2]]]);
//# sourceMappingURL=main.bb65a00a.chunk.js.map