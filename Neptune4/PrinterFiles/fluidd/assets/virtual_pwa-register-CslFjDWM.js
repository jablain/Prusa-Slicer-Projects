import{_}from"./index-Clw_tILY.js";function g(p={}){const{immediate:w=!1,onNeedRefresh:l,onOfflineReady:i,onRegistered:o,onRegisteredSW:n,onRegisterError:r}=p;let e,c,s;const m=async(t=!0)=>{await c,await(s==null?void 0:s())};async function f(){if("serviceWorker"in navigator){if(e=await _(()=>import("./workbox-window.prod.es5-DFjpnwFp.js"),__vite__mapDeps([]),import.meta.url).then(({Workbox:t})=>new t("./sw.js",{scope:"./",type:"classic"})).catch(t=>{r==null||r(t)}),!e)return;s=async()=>{await(e==null?void 0:e.messageSkipWaiting())};{let t=!1;const d=a=>{a&&t&&a.isExternal&&window.location.reload(),t=!0,e==null||e.addEventListener("controlling",u=>{(u.isUpdate===!0||u.isExternal===!0)&&window.location.reload()}),l==null||l()};e.addEventListener("installed",a=>{typeof a.isUpdate>"u"?typeof a.isExternal<"u"?a.isExternal?d():!t&&(i==null||i()):a.isExternal?window.location.reload():!t&&(i==null||i()):a.isUpdate||i==null||i()}),e.addEventListener("waiting",d)}e.register({immediate:w}).then(t=>{n?n("./sw.js",t):o==null||o(t)}).catch(t=>{r==null||r(t)})}}return c=f(),m}export{g as registerSW};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
