import requests from 'superagent';
import {Promise} from 'bluebird';
const env = process.env;

const _proto = {
  request(method, url, data = {}, options = {}) {
    return new Promise((resolve, reject) => {
      let fullUrl = '';

      if (url.indexOf('http://') !== 0 &&
          url.indexOf('https://') !== 0) {
        fullUrl += this.root;

        if (url[0] !== '/') {
          fullUrl += '/';
        }
      }

      fullUrl += url;

      requests(method, fullUrl)
        .send(data)
        .withCredentials()
        .set(options)
        .end((err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve(res.body);
          }
        });
    });
  },

  get(url, data, options) {
    return this.request('GET', url, data, options);
  },

  put(url, data, options) {
    return this.request('PUT', url, data, options);
  },

  post(url, data, options) {
    return this.request('POST', url, data, options);
  },

  delete(url, data, options) {
    return this.request('DELETE', url, data, options);
  }
};

const apiClient = Object.create(_proto);
apiClient.root = env.adminApi;

module.exports = apiClient;
