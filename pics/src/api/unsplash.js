import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID OxUXvFcjT9jci7OSaTaLs_uJz-0XiDfImQhAd8BebeE',
  },
});
