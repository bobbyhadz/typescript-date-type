export {};

// EXAMPLE 1 - Typing a Date object in TypeScript

// 👇️ const date: Date
const date: Date = new Date();
console.log(date);

// ---------------------------------------------------

// // EXAMPLE 2 - Typing a Date object with an Interface or a Type alias

// interface Delivery {
//   shippingDate: Date;
// }

// const shippingDate = new Date('2023-09-24');

// const obj: Delivery = {
//   shippingDate,
// };

// console.log(obj);

// ---------------------------------------------------

// // EXAMPLE 3 - Calling methods on the Date object

// const date = new Date('2023-01-22T13:06:58.838Z');

// console.log(date.getFullYear()); // 👉️ 2023

// console.log(date.getMonth()); // 👉️ 0

// console.log(date.getDate()); // 👉️ 22

// console.log(date.getHours()); // 👉️ 15

// console.log(date.getMinutes()); // 👉️ 6

// console.log(date.getSeconds()); // 👉️ 58
