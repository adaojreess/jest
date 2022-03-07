import find from 'lodash/find';
import remove from 'lodash/remove';
export default class Cart {
  items = [];

  add(item) {
    const itemToFind = { product: item.product };
    if (find(this.items, itemToFind)) {
      remove(this.items, itemToFind);
    }
    this.items.push(item);
  }

  remove(item) {
    remove(this.items, { product: item });
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);
  }

  summary() {
    const total = this.getTotal();
    const items = this.items;
    return {
      total,
      items,
    };
  }

  checkout() {
    const summary = this.summary();
    this.items = [];
    return summary;
  }
}
