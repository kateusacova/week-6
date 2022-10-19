const got = require('got');

const fetchJson = (url, callBack) => {
  got(url)
    .then((response) => {
      callBack(JSON.parse(response.body));
    })
}

module.exports = fetchJson;