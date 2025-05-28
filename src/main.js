import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery, PAGE_SIZE } from "./js/pixabay-api";
import { refs, createGallery, clearGallery, hideLoader, showLoader, showLoadMoreButton, hideLoadMoreButton, showLoaderMore, hideLoaderMore } from "./js/render-functions";

let userData;
let currentPage = 1;
let maxPage = 0;

// const refsBtn = {
//   formElem: document.querySelector(".form"),
//   loadBtnElem: document.querySelector(".load-btn"),
// }

refs.formElem.addEventListener("submit", handlerFormClick)
refs.loadBtnElem.addEventListener("click", handlerLoadMoreClick)


async function handlerFormClick(e) {
  e.preventDefault();

  userData = e.target.elements['search-text'].value.trim().toLowerCase()
  currentPage = 1;

  if (userData === '') {
    iziToast.warning({
      message: 'The search field is empty. Please enter a keyword.',
      position: 'topRight'
    })
    return
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

  loadBtnStatus();
  notification();

  // .then((res) => {
  // if (!res.length) {
  //   iziToast.error({
  //     message: "Sorry, there are no images matching your search query. Please try again!",
  //     position: 'topRight',
  //     maxWidth: 400,
  //   })
  //   return
  // }



  // }).catch((err) => {
  //   iziToast.error({
  //     message: "An error occurred. Please try again later.",
  //     position: 'topRight',
  //     maxWidth: 400,
  //   })
  // }).finally(() => {
  //   hideLoader()
  // })

  e.target.reset();
};


async function handlerLoadMoreClick(e) {
  currentPage++

  showLoaderMore();

  const res = await getImagesByQuery(userData, currentPage);

  if (res.hits) {
    hideLoaderMore();
    loadBtnStatus();
    createGallery(res.hits)
  }

  notification();

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