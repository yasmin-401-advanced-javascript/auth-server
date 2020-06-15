const URL = 'https://github.com/login/oauth/authorize';
const options = {
  client_id: '084799ca3dc28a9ae77f',
};
const queryString = Object.keys(options)
  .map((key) => {
    return `${key}=${encodeURIComponent(options[key])}`;
  })
  .join('&');

const authUrl = `${URL}?${queryString}`;
const link = document.getElementById('oauth');
link.setAttribute('href', authUrl);