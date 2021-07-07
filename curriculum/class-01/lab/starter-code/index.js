'use strict';

const validator = require('./lib/validator');


console.log('String Testing');
console.log(validator.isValid(454325, 'string'));
console.log(validator.isValid({}, 'string'));
console.log(validator.isValid('HELP', 'string'));
console.log(validator.isValid(() =>{}, 'string'));

console.log('Even Number Test');
console.log(validator.isValid([4,5,6,7,8],'arr'));
console.log(validator.isValid([3,5,7],'arr'));
console.log(validator.isValid([-1,-3,-5],'arr'));

console.log('Positive Number Test');
console.log(validator.isValid(1, 'positive'));
console.log(validator.isValid(-100, 'positive'));
console.log(validator.isValid(.5,'positive'));
console.log(validator.isValid(65, 'positive'));

console.log('Is Object Test');
console.log(validator.isValid('lol', 'object' ));
console.log(validator.isValid({}, 'object'));
console.log(validator.isValid([], 'object'));
console.log(validator.isValid(null, 'object'));
console.log(validator.isValid(false, 'object'));

console.log('Does this Object Have THIS');
console.log(validator.isValid({cut:'sting', length:null, color:false, bald:[]}, 'hair'));
console.log(validator.isValid({cut:'sting', length:null, color: true, frank:'anne', bald:[]}, 'hair'));
console.log(validator.isValid({ length:null, color:false, bald:[]}, 'hair'));
