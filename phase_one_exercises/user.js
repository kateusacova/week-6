class User {

  constructor(userName) {
    this.userName = userName;
  }

  getName() {
    return this.userName;
  }

  getIntroduction() {
    return 'Hi, my name is ' + this.userName;
  }
}

class UserBase {

  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map(u => u.getName());
  }

  getIntroductions() {
    return this.users.map(u => u.getIntroductions());
  }
}

module.exports = { User, UserBase };

// in node: const { User, UserBase } = require('./user');

// const users = [
//   new User('Uma'),
//   new User('Josh'),
//   new User('Ollie')
// ];

// const userBase = new UserBase(users);