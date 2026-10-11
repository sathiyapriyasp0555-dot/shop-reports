# Shop Reports

A JavaScript project that reports on a furniture catalogue.

## How to run

Open `index.html` with Live Server and check the browser console.

## What I learned

I practised JavaScript modules, array methods, immutable updates, and formatting dates with dayjs.
## Reports included

- Low-stock and sold-out product names
- In-stock prices with GST
- Inventory value by category
- Cart total, skipping deleted products
- Sale total, product search, average price, and restocking

## Project files

- `data/products.js` — catalogue data
- `lib/reports.js` — report functions
- `lib/format.js` — price and date formatting
- `app.js` — imports the data and prints reports

The project uses ES modules in the browser and dayjs for date formatting.