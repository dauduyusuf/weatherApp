(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(12)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=(a(10),a(1)),l=a(2),u=(a(11),function(e){var t=e.res;String.fromCharCode("&#8451");return r.a.createElement("div",{id:"result"},r.a.createElement("h2",{id:"place"},t.name,", ",t.sys.country),r.a.createElement("div",{id:"temp"},t.main.temp,r.a.createElement("span",null,"\u2103")),r.a.createElement("h3",{id:"weather"},t.weather[0].main))});var s=function(e){return console.log(e),r.a.createElement("div",null,e.err?r.a.createElement("h2",{id:"error"},e.err):e.res.id?r.a.createElement(u,{res:e.res}):r.a.createElement("h2",{id:"error"},"No Data Found !"))};var m=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),o=a[0],c=a[1];return r.a.createElement("form",{id:"searchform",onSubmit:function(t){t.preventDefault(),e.search(o)}},r.a.createElement("input",{onChange:function(e){c(e.target.value)},required:!0,placeholder:"Enter Location"}),r.a.createElement("button",null,"Submit"))};function d(){return r.a.createElement("div",{id:"preloader"},r.a.createElement("div",{className:"loader06"}))}var h="&units=metric&appid=a75aacff5cda4cecc1021dc960ead86f";var f=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)({loading:!0,err:""}),u=Object(l.a)(c,2),f=u[0],p=u[1];return Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude;console.log("position:",t,a);var n="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(a)+h;fetch(n).then((function(e){return e.json()})).then((function(e){o(e),console.log(e)}))})),setTimeout((function(){a.name?p(Object(i.a)(Object(i.a)({},f),{},{err:!1})):p(Object(i.a)(Object(i.a)({},f),{},{err:"Can't access location"})),p(Object(i.a)(Object(i.a)({},f),{},{loading:!1}))}),4e3)}),[]),r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement("h1",null,"Weather App"),r.a.createElement(m,{search:function(e){!function(e){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(e)+h;p(Object(i.a)(Object(i.a)({},f),{},{loading:!0})),fetch(t).then((function(e){return e.json()})).then((function(e){o(e),console.log(e)})).then((function(){setTimeout((function(){p(Object(i.a)(Object(i.a)({},f),{},{loading:!1}))}),3e3)}))}(e)}})),r.a.createElement("main",null,f.loading?r.a.createElement(d,null):r.a.createElement(s,{res:a,err:f.err})),r.a.createElement("footer",null,r.a.createElement("h4",null,"Created by Daudu Yusuf("," ",r.a.createElement("a",{href:"http://twitter.com/yusuf_codes"},"@Yusuf_codes"),")")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.4d12c441.chunk.js.map