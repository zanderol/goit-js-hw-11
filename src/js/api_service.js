const axios = require('axios').default;
export default class ApiService {
  constructor() {
    this.url = 'https://pixabay.com/api/';
    this.apiKey = '31644219-2f7acda799c999752853da478';
    this.query = '';
    this.page = 1;
    this.perPage = 40;
    this.imageType = 'photo';
    this.orientation = 'horizontal';
    this.safeSearch = true;
  }

  async sendRequest() {
    try {
      const result = await axios.get(
        `${this.url}?key=${this.apiKey}&q=${this.query}&image_type=${this.imageType}&orientation=${this.orientation}&safesearch=${this.safeSearch}&page=${this.page}&perPage=${this.perPage}`
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
