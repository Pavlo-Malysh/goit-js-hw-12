import{a as c,S as p,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com";function h(s){return c.get("/api/",{params:{key:"50436356-4cb7de4c874e77a26622e7211",q:`${s}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits)}const u=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=new p(".gallery-item .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});function y(s){const r=b(s);u.innerHTML=r,g.refresh()}function L(s){const{webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:a,downloads:d}=s,f=o.split(",").slice(0,4).join(",");return`<li class="gallery-item"><a class="gallery-link" href="${i}"><img class="gallery-image" src="${r}" alt="${f}">
        <ul class="text-list">
          <li class="text-item">
            <h3  class="subtitle">Likes</h3>
            <p  class="text">${e}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Views</h3>
            <p  class="text">${t}</p>
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


`)}function x(){u.innerHTML=""}function w(){m.removeAttribute("hidden")}function S(){m.setAttribute("hidden","true")}const n=document.querySelector(".form");n.addEventListener("submit",s=>{s.preventDefault();let r=s.target.elements["search-text"].value.trim().toLowerCase();if(r===""){l.warning({message:"The search field is empty. Please enter a keyword.",position:"topRight"});return}x(),w(),h(r).then(i=>{if(!i.length){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:400});return}y(i)}).catch(i=>{l.error({message:"An error occurred. Please try again later.",position:"topRight",maxWidth:400})}).finally(()=>{S()}),n.reset()});
//# sourceMappingURL=index.js.map
