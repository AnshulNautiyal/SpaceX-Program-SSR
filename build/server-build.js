(()=>{"use strict";var e={685:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=s(a(376)),o=a(297),i=s(o),c=a(374);a(51),a(201);var l=s(a(366));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}t.default=(0,c.withRouter)((function(e){var t=e.data,a=void 0===t?[]:t,c=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(r)throw o}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}((0,o.useState)(a),2),s=c[0],d=c[1],m=function(t,a){return function(){var n=new URLSearchParams(location.search),o=location.pathname;"Launch Year"===a?(n.set("launch_year",t),e.history.push({pathname:o,search:n.toString()}),r.default.get("/",{params:{launch_year:t,launch_success:n.get("launch_success"),land_success:n.get("land_success")},headers:{"Content-Type":"application/json"},data:{}}).then((function(e){console.log("sccess",e),d(e.data)})).catch((function(){console.log("fails")}))):"Successful Launch"===a?(n.set("launch_success","True"===t),e.history.push({pathname:o,search:n.toString()}),r.default.get("/",{params:{launch_year:n.get("launch_year"),launch_success:t,land_success:n.get("land_success")},headers:{"Content-Type":"application/json"},data:{}}).then((function(e){console.log("sccess",e),d(e.data)})).catch((function(){console.log("fail")}))):(n.set("land_success","True"===t),e.history.push({pathname:o,search:n.toString()}),r.default.get("/",{params:{launch_year:n.get("launch_year"),launch_success:n.get("launch_success"),land_success:t},headers:{"Content-Type":"application/json"},data:{}}).then((function(e){console.log("sccess"),d(e.data)})).catch((function(){console.log("fail")})))}},p=function(){for(var t=arguments.length,a=Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",c=a[0],s=void 0===c?"":c,d=a[1],p=void 0===d?0:d,f=[];if("object"!==(void 0===s?"undefined":n(s)))for(var h=p;h>=0;h--)f.push(s),s++;else f=[].concat(u(s));var g=l.default.parse(e.location.search),_=g.launch_year||"",x=g.launch_success||"",v=g.land_success||"";return i.default.createElement("div",{className:"filter"},i.default.createElement("div",{className:"filter__header"},o),i.default.createElement("div",{className:"filter__value"},f.map((function(e){var t;return t="Launch Year"===o?_===e.toString()?"filterSelected":"":"Successful Launch"===o?x===e.toString().toLowerCase()?"filterSelected":"":v===e.toString().toLowerCase()?"filterSelected":"",i.default.createElement("button",{key:e,className:t,onClick:m(e,o)},e)}))))},f=s.length&&s.map((function(e,t){var a=e.launch_year,n=void 0===a?"":a,r=e.mission_name,o=void 0===r?"":r,c=e.launch_success,l=void 0===c?"":c,s=e.flight_number,u=void 0===s?"":s,d=e.mission_id,m=void 0===d?[]:d,p=e.links,f=(p=void 0===p?{}:p).mission_patch,h=void 0===f?"":f,g=p.mission_patch_small,_=void 0===g?"":g,x=e.rocket,v=(x=void 0===x?{}:x).first_stage,y=(v=void 0===v?{}:v).cores,b=void 0===y?[]:y;return i.default.createElement("div",{className:"launchCard",key:t},i.default.createElement("div",{className:"launchImage"},i.default.createElement("picture",null,i.default.createElement("source",{media:"(min-width:300px && max-width:900px)",srcSet:_}),i.default.createElement("source",{media:"(min-width:900px && max-width:1200px)",srcSet:h}),i.default.createElement("img",{"data-src":_,alt:"Space X",className:"lazyload"}))),i.default.createElement("div",{className:"launchName"},o," # ",u),i.default.createElement("div",{className:"missionID"},i.default.createElement("span",null,"Mission Ids:")," ",m.length?m.map((function(e){return i.default.createElement("span",{key:e},e,", ")})):"Not Available"),i.default.createElement("div",{className:"year"},i.default.createElement("span",null,"Launch Year:")," ",n),i.default.createElement("div",{className:"success"},i.default.createElement("span",null,"Successful Launch:")," ",l?"true":"false"),i.default.createElement("div",{className:"fail"},i.default.createElement("span",null,"Successful Landing:")," ",b.length?b[0].land_success?"true":!1===b[0].land_success?"false":"Not Available":"Not Available"))}));return i.default.createElement("div",{className:"container"},i.default.createElement("h1",{className:"container__header"},"SpaceX Launch Programs"),i.default.createElement("div",{className:"container__programs"},i.default.createElement("div",{className:"container__programs--filters"},i.default.createElement("h2",null,"Filters"),p("Launch Year",2006,14),p("Successful Launch",["True","False"]),p("Successful Landing",["True","False"])),i.default.createElement("div",{className:"container__programs--name"},f||"Data Not Available")),i.default.createElement("h1",{className:"developBy"},"Developed By:"," ",i.default.createElement("a",{href:"https://anshuljs.000webhostapp.com/"},"Anshul Nautiyal"),i.default.createElement("a",{href:"https://github.com/AnshulNautiyal"},"Github")))}))},788:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=c(a(297)),r=a(747),o=a(146),i=c(a(685));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){var a=(0,r.renderToString)(n.default.createElement(o.StaticRouter,{context:{},location:t.url},n.default.createElement(o.Route,{exact:!0,path:"/",render:function(){return n.default.createElement(i.default,{data:e,loc:t.url})}})));return'\n  <!DOCTYPE html> \n    <html  lang="en">\n      <head>\n          <title>Space X</title>\n          <meta name="viewport" content="width=device-width, initial-scale=1">\n          <meta name="Description" content="SpaceX Launch Programs">\n          <script>window.__APP_INITIAL_STATE__ = '+JSON.stringify(e)+'<\/script>\n      </head>\n      <body>\n          <div id="root">'+a+'</div>\n          <script src="client-build.js"><\/script>\n      </body>\n    </html>\n    '}},201:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(645),r=a.n(n)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap);"]),r.push([e.id,'*,*::after,*::before{margin:0;padding:0;box-sizing:border-box}body{font-family:"Nunito", sans-serif}.container{background-color:#f2f2f2;max-width:1200px;margin:auto;height:100%}.container__header{padding-left:16px;padding-top:16px;margin-bottom:16px}@media only screen and (min-width: 300px) and (max-width: 500px){.container__header{font-size:20px}}@media only screen and (min-width: 300px) and (max-width: 500px){.container__programs{flex-wrap:wrap;justify-content:center}}.container__programs{display:flex}.container__programs>div{border-radius:10px}.container__programs--filters{background-color:white;min-width:250px;max-width:250px;margin:0 16px;margin-bottom:20px;max-height:750px;padding:16px;box-shadow:0 1px 4px 0 rgba(32,32,32,0.1)}.container__programs--filters>h2{margin:0;margin-bottom:10px}.container__programs--filters .filter{margin-bottom:20px}.container__programs--filters .filter__header{text-align:center;border-bottom:1px solid #bebebe;margin:0 30px;margin-bottom:10px}.container__programs--filters .filter__value{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.container__programs--filters .filter__value>button{width:85px;height:30px;border:none;background-color:#c5e09b;margin:10px;border-radius:4px;display:flex;justify-content:center;align-items:center;cursor:pointer}.container__programs--filters .filter__value>button:hover{background-color:#79ac28}.container__programs--filters .filter__value .filterSelected{background-color:#79ac28;font-weight:bold}@media only screen and (min-width: 300px) and (max-width: 500px){.container__programs--filters .filter__value>button{width:98px}}@media only screen and (min-width: 300px) and (max-width: 500px){.container__programs--filters{min-width:unset;max-width:unset}}.container__programs--name{margin-right:16px;flex-grow:1;display:flex;flex-wrap:wrap;padding:16px;padding-top:0;padding-right:0}.container__programs--name .launchCard{background-color:white;border-radius:4px;margin-right:16px;margin-bottom:16px;width:275px;height:450px;padding:10px;box-shadow:0 1px 4px 0 rgba(32,32,32,0.1)}.container__programs--name .launchCard>div{margin-bottom:10px;color:#464e8e}.container__programs--name .launchCard>div>span{font-weight:bold;color:black}.container__programs--name .launchCard .launchName{font-weight:bold}.container__programs--name .launchCard .launchImage{width:256px;height:256px;background-color:#f2f2f2;margin-bottom:10px}.container__programs--name .launchCard .launchImage img{width:256px;height:256px}@media only screen and (min-width: 300px) and (max-width: 500px){.container__programs--name{justify-content:center}.container__programs--name .launchCard{width:100%;margin-right:unset}.container__programs--name .launchCard .launchImage{width:100%;height:256px;background-color:#f2f2f2}.container__programs--name .launchCard .launchImage img{width:100%;height:256px}}.container .developBy{text-align:center}@media only screen and (min-width: 300px) and (max-width: 500px){.container .developBy{font-size:20px}}\n',""]);const o=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=e(t);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&r[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}},376:e=>{e.exports=require("axios")},995:e=>{e.exports=require("compression")},127:e=>{e.exports=require("express")},51:e=>{e.exports=require("lazysizes")},786:e=>{e.exports=require("node-fetch")},366:e=>{e.exports=require("query-string")},297:e=>{e.exports=require("react")},747:e=>{e.exports=require("react-dom/server")},374:e=>{e.exports=require("react-router")},146:e=>{e.exports=require("react-router-dom")}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=o(a(127)),t=o(a(786)),n=o(a(995)),r=o(a(788));function o(e){return e&&e.__esModule?e:{default:e}}var i=(0,e.default)();i.use((0,n.default)()),i.use(e.default.static("build")),i.get("/",(function(e,a){var n=e.query,o=n.launch_year,i=void 0===o?"":o,c=n.launch_success,l=void 0===c?"":c,s=n.land_success,u=void 0===s?"":s,d="https://api.spacexdata.com/v3/launches?limit=100";i&&(d=d+"&launch_year="+i),l&&(d=d+"&launch_success="+l.toLowerCase()),u&&(d=d+"&land_success="+u.toLowerCase()),(0,t.default)(d).then((function(e){return e.json()})).then((function(t){a.set("Cache-Control","public, max-age=31557600, s-maxage=31557600"),"application/json"!==e.headers["content-type"]?a.send((0,r.default)(t,e)):a.send(t)})).catch((function(){console.log("Ops Something went wrong")}))}));var c=process.env.PORT||3e3;i.listen(c,(function(e,t){console.log("Server  is  running on  port 3000")}))})()})();