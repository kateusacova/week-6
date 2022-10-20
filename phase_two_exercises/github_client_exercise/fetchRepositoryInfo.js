const got = require('got');

const fetchRepositoryInfo = (api, callBack) => {
  got('https://api.github.com/repos/'+ api)
    .then((response) => {
      (callBack(JSON.parse(response.body)));
    })
}

module.exports = fetchRepositoryInfo;