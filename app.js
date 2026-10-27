// 1. Shallow Copy kya hota hai?
// Shallow copy mein object ki top-level properties copy hoti hain, lekin nested objects ka reference same rehta hai.
// const user1 = {
//   name: "Rahul",
//   address: {
//     city: "Bhopal"
//   }
// };

// const user2 = { ...user1 };

// user2.name = "Aman";
// user2.address.city = "Indore";

// console.log(user1.name);         // Rahul
// console.log(user1.address.city); // Indore



// 2. Deep Copy kya hota hai?
// Deep copy mein nested objects aur arrays ki bhi alag copy banti hai. Isliye copied object mein changes karne se original object affect nahi hota.


const user2 = {
  name: "Rahul",
  address: {
    city: "Bhopal"
  }
};

const user3 = structuredClone(user2);

user2.name = "Aman";
user2.address.city = "Indore";

console.log(user2.name);         // Rahul
console.log(user2.address.city); // Bhopal

console.log(user3.name);         // Aman
console.log(user3.address.city); // Indore