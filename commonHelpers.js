import"./assets/styles-221eec6a.js";import{f,i as h}from"./assets/vendor-77e16229.js";const n=document.querySelector("[data-start]"),o=document.querySelector("#datetime-picker"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),D=document.querySelector("[data-minutes]"),S=document.querySelector("[data-seconds]");let u=null;const E={dateFormat:"Y-m-d H:i",enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()-Date.now()<0?(n.disabled=!0,h.error({title:"Error",message:"Please choose a date in the future"})):n.disabled=!1}};f(o,E);function b(t){const r=e(Math.floor(t/864e5)),s=e(Math.floor(t%864e5/36e5)),l=e(Math.floor(t%864e5%36e5/6e4)),m=e(Math.floor(t%864e5%36e5%6e4/1e3));return{days:r,hours:s,minutes:l,seconds:m}}function q(){const a=new Date(o.value)-new Date,{days:c,hours:d,minutes:r,seconds:s}=b(a);if(a<0){clearInterval(u),o.disabled=!1;return}y.textContent=c,p.textContent=d,D.textContent=r,S.textContent=s}n.addEventListener("click",v);function v(){o.disabled=!0,n.disabled=!0,u=setInterval(q,1e3)}function e(t){return t.toString().padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
