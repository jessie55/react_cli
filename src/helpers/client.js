/**
 * Fetch data
 *
 * @param {string} url
 * @param {Object} options
 * @param {string} [options.method] - Request method ( GET, POST, PUT, ... ).
 * @param {string} [options.payload] - Request body.
 * @param {Object} [options.headers]
 *
 * @returns {Promise}
 *
 **/
import cookie from 'js-cookie';

const request = (url = '', options = {}) => {
  const config = {
    method: 'GET',
    ...options
  };
  const errors = [];

  if (!url) {
    errors.push('url');
  }

  if (!config.payload && (config.method !== 'GET' && config.method !== 'DELETE')) {
    errors.push('payload');
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``);
  }
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'cookie': cookie.get('cookie'),
    ...config.headers
  };


  let params = {};

  if (config.type === 'file') {
    params = {
      headers: {
        cookie: cookie.get('cookie')
      },
      method: config.method,
      mode: 'cors',
      cache: 'default'
    };
  } else {
    params = {
      headers,
      method: config.method,
      cache: 'default'
    };
  }

  if (params.method !== 'GET') {
    params.body = JSON.stringify(config.payload);
    if (config.type === 'file') {
      params.body = config.payload;
    }
  }

  return fetch(url, params)
    .then(async (response) => {
      const data = await response.json();
      if (data.msg === 'ok') {
        return data.data;
      }
      throw new Error(`Error! Message is ${data.msg}`);
    });
};

export default request;
