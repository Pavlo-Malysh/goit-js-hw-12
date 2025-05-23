import{a as c,i as h,S as p}from"./assets/vendor-DFCQGEf1.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();c.defaults.baseURL="https://pixabay.com";function g(s){return c.get("/api/",{params:{key:"50436356-4cb7de4c874e77a26622e7211",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>{if(t.data.hits.length===0)throw new Error("ERROR");return t.data.hits}).catch(t=>{h.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:400})})}const u=document.querySelector(".gallery"),m=document.querySelector(".loader");function y(s){const t=b(s);u.innerHTML=t,S.refresh()}function L(s){const{webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:a,downloads:d}=s,f=o.split(",").slice(0,4).join(",");return`<li class="gallery-item"><a class="gallery-link" href="${i}"><img class="gallery-image" src="${t}" alt="${f}">
        <ul class="text-list">
          <li class="text-item">
            <h3  class="subtitle">Likes</h3>
            <p  class="text">${e}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Views</h3>
            <p  class="text">${r}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Comments</h3>
            <p  class="text">${a}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Download</h3>
            <p  class="text">${d}</p>
          </li>
        </ul>
      </a></li>`}function b(s){return s.map(L).join(`


`)}function x(){u.innerHTML=""}function w(){m.removeAttribute("hidden")}function l(){m.setAttribute("hidden","true")}const S=new p(".gallery-item .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250}),n=document.querySelector(".form");n.addEventListener("submit",s=>{s.preventDefault();let t=s.target.elements["search-text"].value.trim().toLowerCase();console.log(t),w(),t&&g(t).then(i=>{x(),y(i),l()}).catch(()=>{l()}),n.reset()});
//# sourceMappingURL=index.js.map
