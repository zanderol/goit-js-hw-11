import axios from 'axios';
export default class ApiService {
  constructor() {
    this.query = '';
    this.page = 1;
    this.perPage = 40;
  }

  async sendRequest() {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '31644219-2f7acda799c999752853da478';

    const searchParams = new URLSearchParams({
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: this.perPage,
      q: this.query,
      key: API_KEY,
    });

    try {
      const result = await axios.get(`${BASE_URL}?${searchParams}`);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
