import axios from 'axios'



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
    return response.data.hits
  })

}