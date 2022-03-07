import Cart from './Cart';
describe('Cart', () => {
  let cart;
  let product;
  let product2;

  beforeEach(() => {
    cart = new Cart();
    product = {
      title: 'Adidas running shoes | men',
      price: 35388,
    };
    product2 = {
      title: 'Adidas running shoes | woman',
      price: 41872,
    };
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() is executed in a newly created instance', () => {
      expect(cart.getTotal()).toEqual(0);
    });

    it('should multiple quantity and price ans receive the total amount', () => {
      const item = {
        product,
        quantity: 2,
      };
      cart.add(item);

      expect(cart.getTotal()).toEqual(70776);
    });

    it('should ensure no more than on product exists at a time', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product,
        quantity: 1,
      });

      expect(cart.getTotal()).toEqual(35388);
    });

    it('should update total when a product gets included and then removed', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });
      cart.remove(product);

      // expect(cart.getTotal()).toEqual(112648);

      expect(cart.getTotal()).toEqual(41872);
    });
  });

  describe('checkout()', () => {
    it('should return an object with the total and list of items ', () => {
      cart.add({ product, quantity: 2 });
      cart.add({ product: product2, quantity: 4 });

      expect(cart.checkout()).toMatchSnapshot();
    });
  });
});
