import axios from 'axios'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


axios.defaults.baseURL = 'https://pixabay.com'

export default function getImagesByQuery(query) {

  return axios.get('/api/', {
    params: {
      key: '50436356-4cb7de4c874e77a26622e7211',
      q: `${query}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    }
  }).then(response => {
    if (response.data.hits.length === 0) {
      throw new Error('ERROR')
    } else { return response.data.hits }

  })
    .catch(error => {
      iziToast.error({
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: 'topRight',
        maxWidth: 400,
      })

    })

}






