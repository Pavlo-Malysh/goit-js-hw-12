import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export const refs = {
  galleryList: document.querySelector(".gallery"),
  loaderSubmitElem: document.querySelector(".js-loader-submit"),
  loaderMoreElem: document.querySelector('.js-loader-more'),
  formElem: document.querySelector(".form"),
  loadBtnElem: document.querySelector(".load-btn"),
}



const lightbox = new SimpleLightbox('.gallery-item .gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


export function createGallery(images) {

  const markup = renderCards(images)
  refs.galleryList.insertAdjacentHTML("beforeend", markup)
  lightbox.refresh()

}

function renderCard(obj) {
  const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = obj
  const alt = tags.split(",").slice(0, 4).join(',')

  return `<li class="gallery-item"><a class="gallery-link" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${alt}">
        <ul class="text-list">
          <li class="text-item">
            <h3  class="subtitle">Likes</h3>
            <p  class="text">${likes}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Views</h3>
            <p  class="text">${views}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Comments</h3>
            <p  class="text">${comments}</p>
          </li>
          <li  class="text-item">
            <h3  class="subtitle">Download</h3>
            <p  class="text">${downloads}</p>
          </li>
        </ul>
      </a></li>`
}

function renderCards(arr) {
  return arr.map(renderCard).join('\n\n\n')
}



export function clearGallery() {
  refs.galleryList.innerHTML = '';
}

export function showLoader() {
  refs.loaderSubmitElem.classList.remove('hidden');
}

export function hideLoader() {
  refs.loaderSubmitElem.classList.add('hidden');
}

export function showLoadMoreButton() {
  refs.loadBtnElem.classList.remove('hidden');
}
export function hideLoadMoreButton() {
  refs.loadBtnElem.classList.add('hidden');
}

export function showLoaderMore() {

  refs.loaderMoreElem.classList.remove('hidden');
}
export function hideLoaderMore() {

  refs.loaderMoreElem.classList.add('hidden');
}