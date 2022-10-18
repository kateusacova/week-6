class Candy {

  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  getName() {
    return this.brand;
  }

  getPrice() {
    return this.price;
  }
}

class ShoppingBasket {

  constructor() {
    this.candies = [];
    this.total = 0;
    this.discount = 0;
  }

  getTotalPrice() {
    this.candies.forEach(c => this.total += c.getPrice());
    return this.total - this.discount
  }

  addItem(candy) {
    this.candies = this.candies.concat(candy);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }
}

module.exports = {Candy, ShoppingBasket};