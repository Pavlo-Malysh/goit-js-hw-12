
import getImagesByQuery from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { showLoader } from "./js/render-functions";


const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userSearch = e.target.elements['search-text'].value.trim().toLowerCase()
  console.log(userSearch);
  showLoader()
  if (userSearch) {
    getImagesByQuery(userSearch).then((res) => {
      clearGallery();
      createGallery(res);
      hideLoader();

    }).catch(() => {
      hideLoader()
    });
  }

  form.reset()
})