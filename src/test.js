import { formatText, formatCode, formatQuantity, formatPrice } from "./utils/format.js";

const text = "hoAla";
const code = "f333331";
const quantity = 2111.222;
const price = 42.211;

// console.log(formatText(text));
// console.log(formatCode(code));
console.log(formatQuantity(quantity));
console.log(formatPrice(price));
