function t(t,e){let u=!0,n=!1;return(...o)=>{n||(n=!0,setTimeout(()=>{t(...o),n=!1},u?0:e),u=!1)}}function e(t,e){let u;return(...n)=>{clearTimeout(u),u=setTimeout(()=>{t(...n)},e)}}export{e as debounce,t as throttle};
//# sourceMappingURL=stormcloud.modern.js.map
