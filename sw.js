if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,c,s)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+r.slice(1)};return Promise.all(c.map((r=>{switch(r){case"exports":return i;case"module":return n;default:return e(r)}}))).then((e=>{const r=s(...e);return i.default||(i.default=r),i}))})))}}define("./sw.js",["./workbox-c0c5e268"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"58d5c2b62dcf155a9ea771bc6114d3b9"},{url:"src/img/alcohol.png",revision:"afb7ef2a22d427e13232f1afdbb73f2f"},{url:"src/img/drug.png",revision:"43727198742cf81a9d6ece7fe16b7e90"},{url:"src/img/Education.png",revision:"072ca8223b36704b89c3e824672e670a"},{url:"src/img/facebook_icon.png",revision:"0f4336129286ed61519f7f5038a07ea1"},{url:"src/img/FavIcon16.ico",revision:"fda58127b440895a0b95a0c36f6c3635"},{url:"src/img/gmail_icon.png",revision:"fcc63b25bb655fa601038849e3ae9643"},{url:"src/img/goverment.png",revision:"529eb01fdda7ec5339f53a3ed08519d3"},{url:"src/img/inventor.png",revision:"5f608eeb7614c604dc22dece0e7ac225"},{url:"src/img/linkedin_icon.png",revision:"7034a1640d5f695d9751764c40de3b62"},{url:"src/img/mainBg.jpg",revision:"afdef3da00ec8e570059219169048764"},{url:"src/img/phone_icon.png",revision:"64a8219fe880ffcbb95bd58b38dc50bb"},{url:"src/img/RickSanchez.png",revision:"3b63459cbb2bfa683b33dd2145e1607e"},{url:"src/img/wallpaperflare.com_wallpaper.jpg",revision:"5114802ee297df84821e42a396ea8111"},{url:"src/img/website_icon.png",revision:"0d91c1642850f6ae749f79a34815ecf9"},{url:"src/styles/styles.css",revision:"dd04cacbe9089b1b7766e27238ddb07f"}],{})}));
//# sourceMappingURL=sw.js.map