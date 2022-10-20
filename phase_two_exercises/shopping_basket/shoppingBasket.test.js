const { Candy, ShoppingBasket } = require("./shoppingBasket");

describe('Candy', () => {
  it('returns name and price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars');
    expect(candy.getPrice()).toBe(4.99);
  });
});

describe('Shopping Basket', () =>{
  it('returns 0 as total price when basket is empty', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });

  it('adds single item to the basket', () => {
    const candyDouble = { getPrice: () => 4.99 };
    const basket = new ShoppingBasket();
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(4.99);
  });

  it('adds multiple items and returns total price', () => {
    const basket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 4.99 };
    basket.addItem(candyDouble);
    basket.addItem(new Candy('Skittle', 3.99));
    basket.addItem(new Candy('Skittle', 3.99));
    expect(basket.getTotalPrice()).toBe(12.97);
  });

  it('returns discount price', () => {
    const basket = new ShoppingBasket();
    basket.addItem(new Candy('Skittle', 3.99));
    basket.applyDiscount(1);
    expect(basket.getTotalPrice()).toBe(2.99);
  });
});