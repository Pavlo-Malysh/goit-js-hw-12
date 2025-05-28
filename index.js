import{a as f,S as E,i as u}from"./assets/vendor-frHSA4Lh.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const h=15;f.defaults.baseURL="https://pixabay.com";async function p(r,e){return(await f.get("/api/",{params:{key:"50436356-4cb7de4c874e77a26622e7211",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:h,page:e}})).data}const s={galleryList:document.querySelector(".gallery"),loaderSubmitElem:document.querySelector(".js-loader-submit"),loaderMoreElem:document.querySelector(".js-loader-more"),formElem:document.querySelector(".form"),loadBtnElem:document.querySelector(".load-btn")},x=new E(".gallery-item .gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});function g(r){const e=v(r);s.galleryList.insertAdjacentHTML("beforeend",e),x.refresh()}function S(r){const{webformatURL:e,largeImageURL:n,tags:c,likes:t,views:o,comments:a,downloads:b}=r,w=c.split(",").slice(0,4).join(",");return`<li class="gallery-item"><a class="gallery-link" href="${n}"><img class="gallery-image" src="${e}" alt="${w}">
        <ul class="text-list">
          <li class="text-item">
            <h3  class="subtitle">Likes</h3>
            <p  class="text">${t}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Views</h3>
            <p  class="text">${o}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Comments</h3>
            <p  class="text">${a}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Download</h3>
            <p  class="text">${b}</p>
          </li>
        </ul>
      </a></li>`}function v(r){return r.map(S).join(`


`)}function M(){s.galleryList.innerHTML=""}function B(){s.loaderSubmitElem.classList.remove("hidden")}function q(){s.loaderSubmitElem.classList.add("hidden")}function C(){s.loadBtnElem.classList.remove("hidden")}function y(){s.loadBtnElem.classList.add("hidden")}function P(){s.loaderMoreElem.classList.remove("hidden")}function R(){s.loaderMoreElem.classList.add("hidden")}let l,i=1,d=0;s.formElem.addEventListener("submit",$);s.loadBtnElem.addEventListener("click",O);async function $(r){if(r.preventDefault(),l=r.target.elements["search-text"].value.trim().toLowerCase(),i=1,l===""){m();return}M(),B(),y();const e=await p(l,i);e.hits&&(q(),g(e.hits)),d=Math.ceil(e.totalHits/h),m(),L(),r.target.reset()}async function O(r){i++,P();const e=await p(l,i);e.hits&&(R(),L(),m(),g(e.hits),j())}function L(){i<d?C():y()}function m(){if(l===""){u.warning({message:"The search field is empty. Please enter a keyword.",position:"topRight"});return}i===d&&u.warning({message:"We're sorry, but you've reached the end of search results",position:"topRight"}),d===0&&u.error({message:"Nothing was found for your request!",position:"topRight"})}function j(){const r=document.querySelector(".gallery-item");if(r){const e=r.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
