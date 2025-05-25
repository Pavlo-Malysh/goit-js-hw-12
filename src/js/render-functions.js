import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



const galleryList = document.querySelector(".gallery")
const loader = document.querySelector(".loader")

const lightbox = new SimpleLightbox('.gallery-item .gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


export function createGallery(images) {

  const markup = renderCards(images)
  galleryList.innerHTML = markup
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
  galleryList.innerHTML = '';
}

export function showLoader() {
  loader.removeAttribute('hidden')
}

export function hideLoader() {
  loader.setAttribute('hidden', 'true')
}