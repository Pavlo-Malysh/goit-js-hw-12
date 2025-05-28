import axios from 'axios'

export const PAGE_SIZE = 15;

axios.defaults.baseURL = 'https://pixabay.com'

export async function getImagesByQuery(query, currentPage) {

  const res = await axios.get('/api/', {
    params: {
      key: '50436356-4cb7de4c874e77a26622e7211',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: PAGE_SIZE,
      page: currentPage,
    }
  })
  return res.data;
}