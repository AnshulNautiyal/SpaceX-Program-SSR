(()=>{"use strict";var e={685:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=l(t(376)),i=l(t(297)),o=t(374);t(51),t(201);var c=l(t(366));function l(e){return e&&e.__esModule?e:{default:e}}function s(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)}a.default=(0,o.withRouter)((function(e){var a=e.data,t=void 0===a?[]:a,o=function(a,t){return function(){var r=new URLSearchParams(location.search),i=location.pathname;"Launch Year"===t?(r.set("launch_year",a),e.history.push({pathname:i,search:r.toString()}),n.default.get("/",{params:{launch_year:a}}).then((function(e){console.log("sccess")})).catch((function(){console.log("fail")}))):"Successful Launch"===t?(r.set("launch_success","True"===a),e.history.push({pathname:i,search:r.toString()}),n.default.get("/",{params:{launch_success:a}}).then((function(e){console.log("sccess")})).catch((function(){console.log("fail")}))):(e.history.push("&land_success="+a),r.set("land_success","True"===a),e.history.push({pathname:i,search:r.toString()}),n.default.get("/",{params:{land_success:a}}).then((function(e){console.log("sccess")})).catch((function(){console.log("fail")})))}},l=function(){for(var a=arguments.length,t=Array(a>1?a-1:0),n=1;n<a;n++)t[n-1]=arguments[n];var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",u=t[0],d=void 0===u?"":u,m=t[1],p=void 0===m?0:m,f=[];if("object"!==(void 0===d?"undefined":r(d)))for(var h=p;h>=0;h--)f.push(d),d++;else f=[].concat(s(d));var g=c.default.parse(e.location.search),_=g.launch_year||"",x=g.launch_success||"",v=g.land_success||"";return i.default.createElement("div",{className:"filter"},i.default.createElement("div",{className:"filter__header"},l),i.default.createElement("div",{className:"filter__value"},f.map((function(e){var a;return a="Launch Year"===l?_===e.toString()?"filterSelected":"":"Successful Launch"===l?x===e.toString().toLowerCase()?"filterSelected":"":v===e.toString().toLowerCase()?"filterSelected":"",i.default.createElement("div",{key:e,className:a,onClick:o(e,l)},e)}))))};return i.default.createElement("div",{className:"container"},i.default.createElement("h1",{className:"container__header"},"SpaceX Launch Programs"),i.default.createElement("div",{className:"container__programs"},i.default.createElement("div",{className:"container__programs--filters"},i.default.createElement("h2",null,"Filters"),l("Launch Year",2006,14),l("Successful Launch",["True","False"]),l("Successful Landing",["True","False"])),i.default.createElement("div",{className:"container__programs--name"},t.map((function(e,a){var t=e.launch_year,r=void 0===t?"":t,n=e.mission_name,o=void 0===n?"":n,c=e.launch_success,l=void 0===c?"":c,s=e.flight_number,u=void 0===s?"":s,d=e.mission_id,m=void 0===d?[]:d,p=e.links,f=(p=void 0===p?{}:p).mission_patch,h=void 0===f?"":f,g=p.mission_patch_small,_=void 0===g?"":g,x=e.rocket,v=(x=void 0===x?{}:x).first_stage,y=(v=void 0===v?{}:v).cores,b=void 0===y?[]:y;return i.default.createElement("div",{className:"launchCard"},i.default.createElement("div",{className:"launchImage"},i.default.createElement("picture",null,i.default.createElement("source",{media:"(min-width:300px && max-width:900px)",srcSet:_}),i.default.createElement("source",{media:"(min-width:900px && max-width:1200px)",srcSet:h}),i.default.createElement("img",{"data-src":_,alt:"Space X",className:"lazyload"}))),i.default.createElement("div",{className:"launchName"},o," # ",u),i.default.createElement("div",{className:"missionID"},i.default.createElement("span",null,"Mission Ids:")," ",m.length?m.map((function(e){return i.default.createElement("span",{key:e},e,", ")})):"Not Available"),i.default.createElement("div",{className:"year"},i.default.createElement("span",null,"Launch Year:")," ",r),i.default.createElement("div",{className:"success"},i.default.createElement("span",null,"Successful Launch:")," ",l?"true":"false"),i.default.createElement("div",{className:"fail"},i.default.createElement("span",null,"Successful Landing:")," ",b.length?b[0].land_success?"true":!1===b[0].land_success?"false":"Not Available":"Not Available"))})))),i.default.createElement("h1",{className:"developBy"},"Developed By:"," ",i.default.createElement("a",{href:"https://anshuljs.000webhostapp.com/"},"Anshul Nautiyal"),i.default.createElement("a",{href:"https://github.com/AnshulNautiyal"},"Github")))}))},788:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0});var r=c(t(297)),n=t(747),i=t(146),o=c(t(685));function c(e){return e&&e.__esModule?e:{default:e}}a.default=function(e,a){var t=(0,n.renderToString)(r.default.createElement(i.StaticRouter,{context:{},location:a.path},r.default.createElement(i.Route,{exact:!0,path:"/",render:function(){return r.default.createElement(o.default,{data:e})}})));return'\n  <!DOCTYPE html> \n    <html  lang="en">\n      <head>\n          <title>Space X</title>\n          <meta name="viewport" content="width=device-width, initial-scale=1">\n          <meta name="Description" content="SpaceX Launch Programs">\n          <script>window.__APP_INITIAL_STATE__ = '+JSON.stringify(e)+'<\/script>\n      </head>\n      <body>\n          <div id="root">'+t+'</div>\n          <script src="client-build.js"><\/script>\n      </body>\n    </html>\n    '}},201:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var r=t(645),n=t.n(r)()((function(e){return e[1]}));n.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800&display=swap);"]),n.push([e.id,'*,*::after,*::before{margin:0;padding:0;box-sizing:border-box}body{font-family:"Nunito", sans-serif}.container{background-color:#f2f2f2;max-width:1200px;margin:auto;height:100%}.container__header{padding-left:16px;padding-top:16px;margin-bottom:16px}@media only screen and (min-width: 300px) and (max-width: 500px){.container__header{font-size:20px}}@media only screen and (min-width: 300px) and (max-width: 500px){.container__programs{flex-wrap:wrap;justify-content:center}}.container__programs{display:flex}.container__programs>div{border-radius:10px}.container__programs--filters{background-color:white;min-width:250px;max-width:250px;margin:0 16px;margin-bottom:20px;max-height:750px;padding:16px;box-shadow:0 1px 4px 0 rgba(32,32,32,0.1)}.container__programs--filters>h2{margin:0;margin-bottom:10px}.container__programs--filters .filter{margin-bottom:20px}.container__programs--filters .filter__header{text-align:center;border-bottom:1px solid #bebebe;margin:0 30px;margin-bottom:10px}.container__programs--filters .filter__value{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center}.container__programs--filters .filter__value>div{width:85px;height:30px;background-color:#c5e09b;margin:10px;border-radius:4px;display:flex;justify-content:center;align-items:center;cursor:pointer}.container__programs--filters .filter__value>div:hover{background-color:#79ac28}.container__programs--filters .filter__value .filterSelected{background-color:#79ac28;font-weight:bold}@media only screen and (min-width: 300px) and (max-width: 500px){.container__programs--filters .filter__value>div{width:98px}}@media only screen and (min-width: 300px) and (max-width: 500px){.container__programs--filters{min-width:unset;max-width:unset}}.container__programs--name{margin-right:16px;flex-grow:1;display:flex;flex-wrap:wrap;padding:16px;padding-top:0;padding-right:0}.container__programs--name .launchCard{background-color:white;border-radius:4px;margin-right:16px;margin-bottom:16px;width:275px;height:450px;padding:10px;box-shadow:0 1px 4px 0 rgba(32,32,32,0.1)}.container__programs--name .launchCard>div{margin-bottom:10px;color:#464e8e}.container__programs--name .launchCard>div>span{font-weight:bold;color:black}.container__programs--name .launchCard .launchName{font-weight:bold}.container__programs--name .launchCard .launchImage{width:256px;height:256px;background-color:#f2f2f2;margin-bottom:10px}.container__programs--name .launchCard .launchImage img{width:256px;height:256px}@media only screen and (min-width: 300px) and (max-width: 500px){.container__programs--name{justify-content:center}.container__programs--name .launchCard{width:100%;margin-right:unset}.container__programs--name .launchCard .launchImage{width:100%;height:256px;background-color:#f2f2f2}.container__programs--name .launchCard .launchImage img{width:100%;height:256px}}.container .developBy{text-align:center}@media only screen and (min-width: 300px) and (max-width: 500px){.container .developBy{font-size:20px}}\n',""]);const i=n},645:e=>{e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t=e(a);return a[2]?"@media ".concat(a[2]," {").concat(t,"}"):t})).join("")},a.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(n[o]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&n[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),a.push(l))}},a}},376:e=>{e.exports=require("axios")},995:e=>{e.exports=require("compression")},127:e=>{e.exports=require("express")},51:e=>{e.exports=require("lazysizes")},786:e=>{e.exports=require("node-fetch")},366:e=>{e.exports=require("query-string")},297:e=>{e.exports=require("react")},747:e=>{e.exports=require("react-dom/server")},374:e=>{e.exports=require("react-router")},146:e=>{e.exports=require("react-router-dom")}},a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={id:r,exports:{}};return e[r](n,n.exports,t),n.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=i(t(127)),a=i(t(786)),r=i(t(995)),n=i(t(788));function i(e){return e&&e.__esModule?e:{default:e}}var o=(0,e.default)();o.use((0,r.default)()),o.use(e.default.static("build")),o.get("/",(function(e,t){var r=e.query,i=r.launch_year,o=void 0===i?"":i,c=r.launch_success,l=void 0===c?"":c,s=r.land_success,u=void 0===s?"":s,d="https://api.spacexdata.com/v3/launches?limit=100";o&&(d=d+"&launch_year="+o),l&&(d=d+"&launch_success="+l),u&&(d=d+"&land_success="+u),(0,a.default)(d).then((function(e){return e.json()})).then((function(a){t.set("Cache-Control","public, max-age=31557600, s-maxage=31557600"),t.send((0,n.default)(a,e))}))}));var c=process.env.PORT||3e3;o.listen(c,(function(e,a){console.log("Server  is  running on  port 3000")}))})()})();