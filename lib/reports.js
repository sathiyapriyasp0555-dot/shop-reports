export const lowStock = (list, limit) =>
  list
    .filter(({ stock }) => stock > 0 && stock < limit)
    .map(({ name }) => name);

export const priceList = list =>
  list
    .filter(({ inStock }) => inStock)
    .map(
      ({ name, price }) =>
        `${name} - ₹${Math.round(price * 1.18)} incl. GST`
    );

export const valueByCategory = list =>
  list.reduce((totals, product) => {
    totals[product.category] =
      (totals[product.category] ?? 0) + product.price * product.stock;
    return totals;
  }, {});

export const cartTotal = (list, cart) =>
  cart.reduce((total, { id, qty }) => {
    const product = list.find(p => p.id === id);
    return total + (product?.price ?? 0) * qty;
  }, 0);

export const applySale = (list, category, percent) =>
  list.map(product =>
    product.category === category
      ? { ...product, price: product.price * (1 - percent / 100) }
      : product
  );
  export const soldOut = list =>
  list.filter(({ stock }) => stock === 0).map(({ name }) => name);
  export const searchProducts = (list, text) =>
  list.filter(({ name }) =>
    name.toLowerCase().includes(text.toLowerCase())
  );
  export const averagePrice = list =>
  list.length === 0
    ? 0
    : Math.round(
        list.reduce((total, { price }) => total + price, 0) / list.length
      );
      export const restock = (list, id, qty) =>
  list.map(product =>
    product.id === id
      ? { ...product, stock: product.stock + qty, inStock: true }
      : product
  );