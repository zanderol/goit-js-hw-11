const axios = require('axios').default;
export default class ApiService {
  constructor() {
    this.url = 'https://pixabay.com/api/';
    this.apiKey = '31644219-2f7acda799c999752853da478';
    this.query = '';
    this.page = 1;
    this.perPage = 40;
  }
  async sendRequest() {
    try {
      const result = await axios.get(
        `https://pixabay.com/api/?key=31644219-2f7acda799c999752853da478&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&perPage=${this.perPage}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
