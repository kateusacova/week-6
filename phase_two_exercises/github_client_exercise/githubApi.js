const got = require('got');

class GithubApi {

  constructor(){
    this.url = 'https://api.github.com/repos/';
  }

  fetchRepositoryData(repo, callBackFunction) {
    got(this.url + repo)
      .then((response) => {
        callBackFunction(JSON.parse(response.body));
      });
  }
}

class Github {

  constructor(api) {
    this.api = api;
    this.apiData;
  }

  fetch(repo) {
    this.api.fetchRepositoryData(repo, (result) => {
      this.apiData = result;
    });
  }

  getRepoData() {
    return this.apiData;
  }
}

module.exports = { GithubApi, Github };
