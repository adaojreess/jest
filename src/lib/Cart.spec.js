import Cart from './Cart';
describe('Cart', () => {
  let cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiple quantity and price ans receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas running shoes | men',
        price: 35388, // 353.88 || R$ 353,88
      },
      quantity: 2, // 70776
    };
    cart.add(item);

    expect(cart.getTotal()).toEqual(70776);
  });
});
