(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),a=t.n(r),o=t(314),i=t.n(o)()(a());i.push([n.id,"body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Arial, Helvetica, sans-serif;\n\n    background-image: url(\"https://papers.co/wallpaper/papers.co-ne46-sky-blue-cloud-nature-sunny-summer-35-3840x2160-4k-wallpaper.jpg\");\n    background-size: 100vw 130vh;\n    color: white;\n    caret-color: transparent;\n}\n\n\n#location-input {\n    background-color: rgb(29, 78, 216, 0.4);\n    padding: 20px;\n    border-radius: 10px;\n    font-size: 20px;\n}\n\n#input {\n    font-size: 15px;\n    padding: 5px;\n    border: none;\n    border-radius: 5px;\n    outline: none;\n    caret-color: black;\n}\n\n#enter-input {\n    background-color: #1c71d8;\n    border: none;\n    border-radius: 5px;\n    font-size: 20px;\n    color: white;\n    height: 30px;\n    width: 80px;\n    cursor: pointer;\n}\n\n/*  */\n\n#current {\n    text-align: center;\n    font-weight:900;\n}\n\n#current >h1 {\n    font-size: 50px;\n    margin: 5px;\n}\n#current > h2 {\n    font-size: 40px;\n    margin-top: 10;\n    margin-bottom: 0px;\n}\n\n#current > p{\n    font-size: 30px;\n    margin: 5px;\n}\n\n/* Forecast1 */\n\n#forecast {\n    background-color: rgb(29, 78, 216, 0.6);\n    border-radius: 10px;\n    width: 25vw;\n    padding: 5px 20px;\n    margin-top: 10px;\n}\n\n.day {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-top: 2px solid #fff;\n    justify-content: space-between;\n}\n\n.weekday {\n    font-size: 25px;\n    font-weight: 800;\n    margin: 0px;\n}\n\n.rain-chance {\n    display: flex;\n    align-items: center;\n    margin: 0px;\n}\n\n.rain-chance > p{\n    font-size: 22px;\n    margin: 0px 10px 0px 10px;\n}\n\n.rain-chance > img{\n    height: 30px;\n    width: 30x;\n    margin: 0px;\n}\n\n@media screen and (max-width: 800px) {\n    body {\n        background-image: url('https://w0.peakpx.com/wallpaper/924/835/HD-wallpaper-above-the-clouds-blue-sky-sky-sun-sunny-sunshine.jpg');\n        background-size: 100vw 130vh;\n        background-attachment: fixed;\n        background-position:center;\n    }\n\n    #location-input > label {\n        display: none;\n    }\n\n    #forecast {\n        width: 80vw;\n    }\n\n    .day {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        border-top: 2px solid #fff;\n        justify-content: space-between;\n    }\n    \n    .weekday {\n        font-size: 18px;\n        font-weight: 800;\n        margin: 0px;\n    }\n    \n    .rain-chance {\n        display: flex;\n        align-items: center;\n        margin: 0px;\n    }\n    \n    .rain-chance > p{\n        font-size: 15px;\n        margin: 0px 55px 0px 5px;\n    }\n    \n    .rain-chance > img{\n        height: 20px;\n        width: 20px;\n        margin: 0px;\n    }\n}\n\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,a,o){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<n.length;p++){var d=[].concat(n[p]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var o={},i=[],c=0;c<n.length;c++){var s=n[c],p=r.base?s[0]+r.base:s[0],d=o[p]||0,u="".concat(p," ").concat(d);o[p]=d+1;var l=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)e[l].references++,e[l].updater(m);else{var f=a(m,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var o=r(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<o.length;i++){var c=t(o[i]);e[c].references--}for(var s=r(n,a),p=0;p<o.length;p++){var d=t(o[p]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return n[r](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=async n=>{try{const e=`https://api.weatherapi.com/v1/forecast.json?key=9915c10ff5094143910145711241905&q=${n}&days=7`,t=await fetch(e,{mode:"cors"}),r=await t.json();console.log(e);const a=function(n,e){const t=n.current.temp_c,r=n.current.temp_f,a=n.current.is_day,o=n.current.condition.text,i=n.forecast.forecastday.slice(0,void 0).map((n=>{return{day_of_week:(e=n.date,["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][new Date(e).getUTCDay()]),date:n.date,maxtemp_c:n.day.maxtemp_c,maxtemp_f:n.day.maxtemp_f,mintemp_c:n.day.mintemp_c,mintemp_f:n.day.mintemp_f,will_it_rain:n.day.daily_will_it_rain,chance_of_rain:n.day.daily_chance_of_rain};var e}));return{location:{city:n.location.name,country:n.location.country},current:{temperature:{celsius:t,fahrenheit:r},is_day:a,condition:o},forecast:i}}(r);return console.log(a),a}catch(n){console.log(n)}};var e=t(72),r=t.n(e),a=t(825),o=t.n(a),i=t(659),c=t.n(i),s=t(56),p=t.n(s),d=t(540),u=t.n(d),l=t(113),m=t.n(l),f=t(208),h={};h.styleTagTransform=m(),h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=u(),r()(f.A,h),f.A&&f.A.locals&&f.A.locals,(async()=>{document.querySelector("#location-input").addEventListener("submit",(async e=>{e.preventDefault();const t=document.querySelector("#input").value.toString(),r=await n(t);var a;(n=>{const e=document.querySelector("#days");e.innerHTML="",n.map((n=>{const e=document.createElement("div");e.classList.add("day");const t=document.createElement("p");t.classList.add("weekday"),t.textContent=n.day_of_week;const r=document.createElement("div");if(r.classList.add("rain-chance"),1==n.will_it_rain){const e=document.createElement("img");e.setAttribute("src","https://www.iconpacks.net/icons/2/free-raindrop-icon-1580-thumb.png");const t=document.createElement("p");t.textContent=n.chance_of_rain+"%",r.appendChild(e),r.appendChild(t)}else{const n=document.createElement("img");n.setAttribute("src","https://www.svgheart.com/wp-content/uploads/2020/07/sun-summer-free-svg-cutting-file.png"),r.appendChild(n)}const a=document.createElement("div");a.classList.add("min-max-temp");const o=document.createElement("p");o.textContent=n.mintemp_c+"°";const i=document.createElement("p");return i.textContent=n.maxtemp_c+"°",a.appendChild(o),a.appendChild(i),e.appendChild(t),e.appendChild(r),e.appendChild(a),e})).forEach((n=>{e.appendChild(n)}))})(r.forecast),a=r,document.querySelector("#country").textContent=a.location.country,document.querySelector("#current-temp").textContent=a.current.temperature.celsius+"°",document.querySelector("#condition").textContent=a.current.condition}))})(),n("london")})()})();