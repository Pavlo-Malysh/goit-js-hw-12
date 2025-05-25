import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import getImagesByQuery from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { showLoader } from "./js/render-functions";


const form = document.querySelector(".form")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userSearch = e.target.elements['search-text'].value.trim().toLowerCase()

  if (userSearch === '') {
    iziToast.warning({
      message: 'The search field is empty. Please enter a keyword.',
      position: 'topRight'
    })
    return
  }

  clearGallery();
  showLoader()

  getImagesByQuery(userSearch).then((res) => {
    if (!res.length) {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: 'topRight',
        maxWidth: 400,
      })
      return
    }

    createGallery(res);

  }).catch((err) => {
    iziToast.error({
      message: "An error occurred. Please try again later.",
      position: 'topRight',
      maxWidth: 400,
    })
  }).finally(() => {
    hideLoader()
  })

  form.reset()
});