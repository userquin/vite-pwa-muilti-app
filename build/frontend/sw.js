if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/modulepreload-polyfill.b7f2da20.js",revision:null},{url:"assets/sub1.99fd1475.js",revision:null},{url:"assets/sub2.ed77df99.js",revision:null},{url:"assets/sub3.50d3ee65.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"sub1/index.html",revision:"d8c2c2eb423d2bcccf6d39cf23e6b1fe"},{url:"sub2/index.html",revision:"b334a4546231992ee01ec030d6544f6c"},{url:"sub3/index.html",revision:"a5385dda947828e79fea35f4aaf25608"},{url:"manifest.webmanifest",revision:"685fce3c538fc4a9862d4eae6666525b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));