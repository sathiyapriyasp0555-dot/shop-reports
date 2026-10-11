import products from "./data/products.js";
import { formatDate } from "./lib/format.js";
import {
  lowStock,
  priceList,
  valueByCategory,
  cartTotal,
  applySale,
  soldOut,
  searchProducts,
averagePrice
} from "./lib/reports.js";

const cart = [
  { id: 1, qty: 1 },
  { id: 4, qty: 2 },
  { id: 8, qty: 3 },
  { id: 99, qty: 1 }
];

console.log("Date:", formatDate());
console.log("Low stock:", JSON.stringify(lowStock(products, 10)));
console.log("Price list:", JSON.stringify(priceList(products)));
console.log("Value by category:", JSON.stringify(valueByCategory(products)));
console.log("Cart total:", cartTotal(products, cart));

const sale = applySale(products, "decor", 20);
console.log(
  "Sale total:",
  sale.reduce((total, product) => total + product.price, 0)
);

console.log("Sold out:", JSON.stringify(soldOut(products)));
console.log(
  "Search for chair:",
  JSON.stringify(searchProducts(products, "chair").map(({ name }) => name))
);
console.log("Average price:", averagePrice(products));