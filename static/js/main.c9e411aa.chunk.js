(this["webpackJsonpgeek-info"]=this["webpackJsonpgeek-info"]||[]).push([[0],{26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(14),r=c.n(o),i=(c(26),c.p+"static/media/836 [Converted].431102b9.svg"),a=c(21),l=c(13),j=c(11),h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{techNews:[]},t=arguments.length>1?arguments[1]:void 0;return"FETCH_TECH"===t.type&&(e=Object(j.a)(Object(j.a)({},e),{},{techNews:t.payload})),e},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{customNews:[]},t=arguments.length>1?arguments[1]:void 0;return"FETCH_CUSTOM_NEWS"===t.type&&(e=Object(j.a)(Object(j.a)({},e),{},{customNews:t.payload})),e},u=Object(l.b)({FetchTech:h,CustomSearch:b}),d=Object(l.a)(a.a),O=Object(l.c)(u,d),f=c(8),p=c(9),x=c(3),m=c(16);var v=c(1),g=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],o=t[1],r=Object(n.useState)(""),i=Object(m.a)(r,2),a=i[0],l=i[1],j=Object(n.useState)(""),h=Object(m.a)(j,2),b=h[0],u=h[1],d=Object(f.c)((function(e){return e.CustomSearch})),O=Object(f.b)(),p=function(e,t){return O(function(e,t){return function(c){fetch("https://newsapi.org/v1/articles?source="+e+"&sortBy="+t+"&apiKey=b58bf17ea7d34e73b32a2e3e4f79b8b1").then((function(e){return e.json()})).then((function(e){c({type:"FETCH_CUSTOM_NEWS",payload:e.articles})})).catch((function(e){console.log(e)}))}}(e,t))};Object(n.useEffect)((function(){fetch("https://newsapi.org/v1/sources?").then((function(e){return console.log(d.customNews),e.json()})).then((function(e){console.log(e),o(e.sources)}))}),[]);var x;return x=d.customNews.length>0?Object(v.jsx)("div",{className:"news",children:d.customNews.map((function(e){return Object(v.jsxs)("div",{className:"post",children:[Object(v.jsx)("img",{src:e.urlToImage,alt:e.title}),Object(v.jsx)("h2",{children:e.publishedAt}),Object(v.jsx)("a",{class:"btn btn-primary",href:e.url,role:"button",children:e.title}),Object(v.jsx)("p",{children:e.description})]},e.title)}))}):Object(v.jsx)("p",{children:"Select a source and relevance from the form"}),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsxs)("section",{children:[Object(v.jsx)("h2",{children:"Custom Search"}),Object(v.jsx)("form",{onSubmit:function(e){console.log(a),e.preventDefault(),""===a||"nothing"===a?console.log("There is no source selected"):(p(a,b),console.log(d.customNews))},children:Object(v.jsxs)("div",{className:"form-control",children:[Object(v.jsx)("label",{children:"Source"}),Object(v.jsxs)("select",{onChange:function(e){return l(e.target.value)},children:[Object(v.jsx)("option",{value:"nothing",children:"Select an option..."}),c.map((function(e){return Object(v.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),Object(v.jsx)("label",{children:"Relevance"}),Object(v.jsxs)("select",{onChange:function(e){return u(e.target.value)},children:[Object(v.jsx)("option",{value:"latest",children:"Latest"}),Object(v.jsx)("option",{value:"top",children:"Top"})]}),Object(v.jsx)("input",{type:"submit",value:"Search"})]})}),x]})})};var w=function(){var e=Object(f.c)((function(e){return e.FetchTech})),t=Object(f.b)(),c=function(){return t((function(e){fetch("https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=b58bf17ea7d34e73b32a2e3e4f79b8b1").then((function(e){return e.json()})).then((function(t){e({type:"FETCH_TECH",payload:t.articles})})).catch((function(e){console.log(e)}))}))};return Object(n.useEffect)((function(){c()}),[]),Object(v.jsx)(s.a.Fragment,{children:Object(v.jsxs)("section",{children:[Object(v.jsx)("h2",{children:"Technology News"}),Object(v.jsx)("div",{className:"news",children:e.techNews.map((function(e){return Object(v.jsxs)("div",{className:"post",children:[Object(v.jsx)("img",{src:e.urlToImage}),Object(v.jsx)("a",{class:"btn btn-primary",href:e.url,role:"button",children:e.title}),Object(v.jsx)("p",{children:e.description})]},e.title)}))})]})})},y=function(){return Object(v.jsxs)(x.c,{children:[Object(v.jsx)(x.a,{exact:!0,path:"/",component:g}),Object(v.jsx)(x.a,{exact:!0,path:"/tech",component:w})]})};var N=function(){return Object(v.jsx)(f.a,{store:O,children:Object(v.jsxs)("div",{className:"App",children:[Object(v.jsxs)("nav",{children:[Object(v.jsx)("ul",{children:Object(v.jsx)("li",{children:Object(v.jsx)(p.b,{to:"/",children:"Home"})})}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)(p.b,{to:"/",children:"Search"})}),Object(v.jsx)("li",{children:Object(v.jsx)(p.b,{to:"/tech",children:"Technology"})})]})]}),Object(v.jsxs)("header",{children:[Object(v.jsx)("h1",{children:"NEWS FOR YOU\ud83d\udcf0"}),Object(v.jsx)("img",{src:i})]}),Object(v.jsx)("main",{children:Object(v.jsx)(y,{})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(v.jsx)(p.a,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c9e411aa.chunk.js.map