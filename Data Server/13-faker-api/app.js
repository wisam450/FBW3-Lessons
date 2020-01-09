let faker = require('faker');
faker.locale = 'de';
let newName = faker.name.findName();
let newEmail = faker.internet.email();
let newCard = faker.helpers.createCard();
let productName = faker.commerce.productName()
let price = faker.commerce.price();


console.log(newName,newEmail);
//console.log(newCard);
console.log(` ${productName}   :  ${price} euro ` );
console.log(faker.date.month());






