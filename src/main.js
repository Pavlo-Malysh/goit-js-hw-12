import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery, PAGE_SIZE } from "./js/pixabay-api";
import { refs, createGallery, clearGallery, hideLoader, showLoader, showLoadMoreButton, hideLoadMoreButton, showLoaderMore, hideLoaderMore } from "./js/render-functions";

let userData;
let currentPage = 1;
let maxPage = 0;


refs.formElem.addEventListener("submit", handlerFormClick)
refs.loadBtnElem.addEventListener("click", handlerLoadMoreClick)


async function handlerFormClick(e) {
  e.preventDefault();

  userData = e.target.elements['search-text'].value.trim().toLowerCase()
  currentPage = 1;

  if (userData === '') {
    notification();
    return;
  }

  clearGallery();
  showLoader();
  hideLoadMoreButton();

  const res = await getImagesByQuery(userData, currentPage)

  if (res.hits) {
    hideLoader();
    createGallery(res.hits);
  }

  maxPage = Math.ceil(res.totalHits / PAGE_SIZE)
  notification();
  loadBtnStatus();

  e.target.reset();
};


async function handlerLoadMoreClick(e) {
  currentPage++

  showLoaderMore();

  const res = await getImagesByQuery(userData, currentPage);

  if (res.hits) {
    hideLoaderMore();
    loadBtnStatus();
    notification();

    createGallery(res.hits)
    BoundingClientRect();
  }

}


function loadBtnStatus() {
  if (currentPage < maxPage) {
    showLoadMoreButton();
  } else {
    hideLoadMoreButton();
  }
}

function notification() {
  if (userData === '') {
    iziToast.warning({
      message: 'The search field is empty. Please enter a keyword.',
      position: 'topRight'
    });
    return
  };

  if (currentPage === maxPage) {
    iziToast.warning({
      message: "We're sorry, but you've reached the end of search results",
      position: "topRight"
    })
  };

  if (maxPage === 0) {
    iziToast.error({
      message: "Nothing was found for your request!",
      position: "topRight"
    })
  }
}


function BoundingClientRect() {
  const cardElem = document.querySelector(".gallery-item");
  if (cardElem) {
    const rect = cardElem.getBoundingClientRect().height;
    window.scrollBy({
      top: rect * 2,
      behavior: 'smooth',
    })
  }
}





