(function(w,d){zaraz.debug=(fI="")=>{document.cookie=`zarazDebug=${fI}; path=/`;location.reload()};window.zaraz._al=function(eK,eL,eM){w.zaraz.listeners.push({item:eK,type:eL,callback:eM});eK.addEventListener(eL,eM)};zaraz.preview=(dM="")=>{document.cookie=`zarazPreview=${dM}; path=/`;location.reload()};zaraz.i=function(fL){const fM=d.createElement("div");fM.innerHTML=unescape(fL);const fN=fM.querySelectorAll("script");for(let fO=0;fO<fN.length;fO++){const fP=d.createElement("script");fN[fO].innerHTML&&(fP.innerHTML=fN[fO].innerHTML);for(const fQ of fN[fO].attributes)fP.setAttribute(fQ.name,fQ.value);d.head.appendChild(fP);fN[fO].remove()}d.body.appendChild(fM)};zaraz.f=async function(eN,eO){const eP={credentials:"include",keepalive:!0,mode:"no-cors"};if(eO){eP.method="POST";eP.body=new URLSearchParams(eO);eP.headers={"Content-Type":"application/x-www-form-urlencoded"}}return await fetch(eN,eP)};window.zaraz._p=async bn=>new Promise((bo=>{if(bn){bn.e&&bn.e.forEach((bp=>{try{new Function(bp)()}catch(bq){console.error(`Error executing script: ${bp}\n`,bq)}}));Promise.allSettled((bn.f||[]).map((br=>fetch(br[0],br[1]))))}bo()}));zaraz.pageVariables={};zaraz.__zcl=zaraz.__zcl||{};zaraz.track=async function(fm,fn,fo){return new Promise(((fp,fq)=>{const fr={name:fm,data:{}};for(const fs of[localStorage,sessionStorage])Object.keys(fs||{}).filter((fu=>fu.startsWith("_zaraz_"))).forEach((ft=>{try{fr.data[ft.slice(7)]=JSON.parse(fs.getItem(ft))}catch{fr.data[ft.slice(7)]=fs.getItem(ft)}}));Object.keys(zaraz.pageVariables).forEach((fv=>fr.data[fv]=JSON.parse(zaraz.pageVariables[fv])));Object.keys(zaraz.__zcl).forEach((fw=>fr.data[`__zcl_${fw}`]=zaraz.__zcl[fw]));fr.data.__zarazMCListeners=zaraz.__zarazMCListeners;
//
zarazData.c=d.cookie;
//
fr.data={...fr.data,...fn};fr.zarazData=zarazData;fetch("https://preview.colorlib.com/cdn-cgi/zaraz/t",{credentials:"include",keepalive:!0,method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(fr)}).catch((()=>{
//
return fetch("https://preview.colorlib.com/cdn-cgi/zaraz/t",{credentials:"include",method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(fr)})})).then((function(fy){zarazData._let=(new Date).getTime();fy.ok||fq();return 204!==fy.status&&fy.json()})).then((async fx=>{await zaraz._p(fx);"function"==typeof fo&&fo()})).finally((()=>fp()))}))};zaraz.set=function(fz,fA,fB){try{fA=JSON.stringify(fA)}catch(fC){return}prefixedKey="_zaraz_"+fz;sessionStorage&&sessionStorage.removeItem(prefixedKey);localStorage&&localStorage.removeItem(prefixedKey);delete zaraz.pageVariables[fz];if(void 0!==fA){fB&&"session"==fB.scope?sessionStorage&&sessionStorage.setItem(prefixedKey,fA):fB&&"page"==fB.scope?zaraz.pageVariables[fz]=fA:localStorage&&localStorage.setItem(prefixedKey,fA);zaraz.__watchVar={key:fz,value:fA}}};for(const{m:fD,a:fE}of zarazData.q.filter((({m:fF})=>["debug","set"].includes(fF))))zaraz[fD](...fE);for(const{m:fG,a:fH}of zaraz.q)zaraz[fG](...fH);delete zaraz.q;delete zarazData.q;zaraz.fulfilTrigger=function(ej,ek,el,em){zaraz.__zarazTriggerMap||(zaraz.__zarazTriggerMap={});zaraz.__zarazTriggerMap[ej]||(zaraz.__zarazTriggerMap[ej]="");zaraz.__zarazTriggerMap[ej]+="*"+ek+"*";zaraz.track("__zarazEmpty",{...el,__zarazClientTriggers:zaraz.__zarazTriggerMap[ej]},em)};window.dataLayer=w.dataLayer||[];zaraz._processDataLayer=fS=>{for(const fT of Object.entries(fS))zaraz.set(fT[0],fT[1],{scope:"page"});if(fS.event){if(zarazData.dataLayerIgnore&&zarazData.dataLayerIgnore.includes(fS.event))return;let fU={};for(let fV of dataLayer.slice(0,dataLayer.indexOf(fS)+1))fU={...fU,...fV};delete fU.event;fS.event.startsWith("gtm.")||zaraz.track(fS.event,fU)}};const fR=w.dataLayer.push;Object.defineProperty(w.dataLayer,"push",{configurable:!0,enumerable:!1,writable:!0,value:function(...fW){let fX=fR.apply(this,fW);zaraz._processDataLayer(fW[0]);return fX}});dataLayer.forEach((fY=>zaraz._processDataLayer(fY)));zaraz._cts=()=>{zaraz._timeouts&&zaraz._timeouts.forEach((dN=>clearTimeout(dN)));zaraz._timeouts=[]};zaraz._rl=function(){w.zaraz.listeners&&w.zaraz.listeners.forEach((dO=>dO.item.removeEventListener(dO.type,dO.callback)));window.zaraz.listeners=[]};history.pushState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.pushState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.__zarazMCListeners={};zaraz.track("__zarazSPA")}),100)}};history.replaceState=function(){try{zaraz._rl();zaraz._cts&&zaraz._cts()}finally{History.prototype.replaceState.apply(history,arguments);setTimeout((()=>{zarazData.l=d.location.href;zarazData.t=d.title;zaraz.pageVariables={};zaraz.track("__zarazSPA")}),100)}};zaraz._c=dI=>{const{event:dJ,...dK}=dI;zaraz.track(dJ,{...dK,__zarazClientEvent:!0})};zaraz._syncedAttributes=["altKey","clientX","clientY","pageX","pageY","button"];zaraz.__zcl.track=!0;d.addEventListener("visibilitychange",(dy=>{zaraz._c({event:"visibilityChange",visibilityChange:[{state:d.visibilityState,timestamp:(new Date).getTime()}]},1)}));zaraz.__zcl.visibilityChange=!0;zaraz.__zarazMCListeners={"google-analytics_v4_20ac":["visibilityChange"]};zaraz._p({"e":["(function(w,d){w.zarazData.executed.push(\"Pageview\");})(window,document)","x=new XMLHttpRequest,x.withCredentials=!0,x.open(\"POST\",\"https://stats.g.doubleclick.net/g/collect?t=dc&aip=1&_r=3&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=8c863229-9412-4bdf-8e3a-d6baeb2311b0&_u=KGDAAEADQAAAAC%7E&z=467113150\",!0),x.onreadystatechange=function(){if (4 == x.readyState) {const domain = x.responseText.trim();if (domain.startsWith(\"1g\") && domain.length > 2) {fetch(\"https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=8c863229-9412-4bdf-8e3a-d6baeb2311b0&_u=KGDAAEADQAAAAC%7E&z=467113150&slf_rd=1\".replace(\"www.google.com\", \"www.google.\"+domain.slice(2)));}}},x.send();","(function(w,d){;d.cookie=unescape('google-analytics_v4_20ac__engagementStart%3D1695293661586%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000');d.cookie=unescape('google-analytics_v4_20ac__counter%3D1%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000');d.cookie=unescape('google-analytics_v4_20ac__ga4sid%3D624793229%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D1800');d.cookie=unescape('google-analytics_v4_20ac__session_counter%3D1%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000');d.cookie=unescape('google-analytics_v4_20ac__ga4%3D8c863229-9412-4bdf-8e3a-d6baeb2311b0%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000');d.cookie=unescape('google-analytics_v4_20ac___z_ga_audiences%3D8c863229-9412-4bdf-8e3a-d6baeb2311b0%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000');d.cookie=unescape('google-analytics_v4_20ac__let%3D1695293661586%3B%20Domain%3Dcolorlib.com%3B%20Path%3D/%3B%20Max-Age%3D31536000000')})(window, document)"],"f":[["https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&v=1&_v=j86&tid=G-SEKJ4E9T4H&cid=8c863229-9412-4bdf-8e3a-d6baeb2311b0&_u=KGDAAEADQAAAAC%7E&z=467113150&slf_rd=1",{}]]})})(window,document);