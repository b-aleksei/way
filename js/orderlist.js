!function(){"use strict";var e=document.createElement("div"),t=document.querySelector(".lk__tablist"),r=document.querySelector(".lk__tabpanel:not([hidden])")||e,a=document.querySelector('.lk__tab-btn[aria-selected="true"]')||e;t&&t.addEventListener("click",(function(e){var t=e.target.closest(".lk__tab-btn");if(t){a.removeAttribute("aria-selected"),t.setAttribute("aria-selected","true"),a=t,r.hidden=!0;var c=document.querySelector("[aria-labelledby=".concat(t.id,"]"));c&&(c.hidden=!1,r=c)}}))}();