import{_}from"./index-tcmxK7Yg.js";function g(p={}){const{immediate:u=!1,onNeedRefresh:n,onOfflineReady:i,onRegistered:l,onRegisteredSW:d,onRegisterError:s}=p;let t,c,r;const w=async(e=!0)=>{await c,await(r==null?void 0:r())};async function m(){if("serviceWorker"in navigator){if(t=await _(()=>import("./workbox-window.prod.es5-prqDwDSL.js"),__vite__mapDeps([]),import.meta.url).then(({Workbox:e})=>new e("./sw.js",{scope:"./",type:"classic"})).catch(e=>{s==null||s(e)}),!t)return;r=async()=>{await(t==null?void 0:t.messageSkipWaiting())};{let e=!1;const o=()=>{e=!0,t==null||t.addEventListener("controlling",a=>{a.isUpdate&&window.location.reload()}),n==null||n()};t.addEventListener("installed",a=>{typeof a.isUpdate>"u"?typeof a.isExternal<"u"?a.isExternal?o():!e&&(i==null||i()):a.isExternal?window.location.reload():!e&&(i==null||i()):a.isUpdate||i==null||i()}),t.addEventListener("waiting",o),t.addEventListener("externalwaiting",o)}t.register({immediate:u}).then(e=>{d?d("./sw.js",e):l==null||l(e)}).catch(e=>{s==null||s(e)})}}return c=m(),w}export{g as registerSW};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
