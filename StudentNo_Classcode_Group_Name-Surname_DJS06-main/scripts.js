// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// ForEach
provinces.forEach(province => console.log(province));
names.forEach(name => console.log(name));
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Sorting
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Filtering
const remainingProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(remainingProvinces.length);

// Finding "s"
const hasS = names.map(name => name.includes('S'));
console.log(hasS);

// Object Mapping
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);

// Total price
const totalPrice = products
    .filter(product => product.price.trim() !== '')
    .map(product => parseFloat(product.price))
    .reduce((total, price) => total + price, 0);

// Concatenated names
const concatenatedNames = products.reduce((acc, product) => acc + product.product + ' ', '').trim();

// Highest and Lowest
const prices = products
    .filter(product => product.price.trim() !== '')
    .map(product => parseFloat(product.price));
const highest = Math.max(...prices);
const lowest = Math.min(...prices);

// Transform
const transformedProducts = products.reduce((acc, { product, price }) => {
  acc.push({ name: product, cost: parseFloat(price.trim() || 0) });
  return acc;
}, []);

// Logs
console.log(products.map(product => product.product).join(', '));
console.log(products.filter(product => product.product.length <= 5));
console.log(totalPrice);
console.log(concatenatedNames);
console.log(`Highest: ${highest}. Lowest: ${lowest}.`);
console.log(transformedProducts);

