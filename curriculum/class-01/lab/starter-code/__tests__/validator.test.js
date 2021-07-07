'use strict';

const validator = require('../lib/validator.js');

// describe('validator module performs basic validation of', () => {

// TODO: Make this series of tests less repetitive ... DRY it out

//   it('strings', () => {
//     let str = 'yes';
//     let num = 1;
//     let arr = ['a'];
//     let obj = {x:'y'};
//     let func = () => {};
//     let bool = false;
//     expect(validator.isString(str)).toBeTruthy();
//     expect(validator.isString(num)).toBeFalsy();
//     expect(validator.isString(arr)).toBeFalsy();
//     expect(validator.isString(obj)).toBeFalsy();
//     expect(validator.isString(func)).toBeFalsy();
//     expect(validator.isString(bool)).toBeFalsy();
//   });
//
//   it('numbers', () => {
//     expect(true).toBeFalsy();
//   });
//
//   it('arrays', () => {
//     expect(true).toBeFalsy();
//   });
//
//   it('objects', () => {
//     expect(true).toBeFalsy();
//   });
//
//   it('booleans', () => {
//     expect(true).toBeFalsy();
//   });
//
//   it('functions', () => {
//     expect(true).toBeFalsy();
//   });
//
// });
//
// describe('validator module performs complex validations', () => {
//
//   it('validates the presence of required object properties at any level', () => {
//     // i.e. does person.hair.color exist and have a good value, not just person.hair
//     expect(true).toBeFalsy();
//   });
//
//   it('validates the proper types of object properties', () => {
//     // i.e. person.name must be a string, etc.
//     expect(true).toBeFalsy();
//   });
//
//   it('validates the types of values contained in an array', () => {
//     // i.e. an array of all strings or numbers
//     expect(true).toBeFalsy();
//   });
//
//   it('validates a value array against an approved list', () => {
//     // i.e. a string might only be allowed to be "yes" or "no"
//     expect(true).toBeFalsy();
//   });
//
//   // TODO: Cover so, so many more cases
//
// });

describe('Is this a positive number?',() => {

  it('Checks to see if the number is, in fact positive', () => {
    expect(validator.isPosNum(-1)).toBeFalsy();
    expect(validator.isPosNum(0)).toBeFalsy();
    expect(validator.isPosNum(10)).toBeTruthy();
    expect(validator.isPosNum(' ')).toBeFalsy();
  });

});

describe('Returns an Array of Even Numbers', () => {
  it('Checks for even numbers', () => {
    expect(validator.isEvenArr([2, 4, 6, 8, 10])).toBeTruthy();
    expect(validator.isEvenArr([1,3,5,7,9])).toBeTruthy();
    expect(validator.isEvenArr([-1, -3, -5])).toBeTruthy();
  });
});

describe('Am I an Object?', () => {
  it('Checks the type of Object', () => {
    expect(validator.isObj({})).toBeTruthy();
    expect(validator.isObj(5)).toBeFalsy();
    expect(validator.isObj(true)).toBeFalsy();
    expect(validator.isObj([100])).toBeTruthy();
    expect(validator.isObj(1+5)).toBeFalsy();
  });
});

describe('THis Object Has Property', () => {
  it('Checks The Prop Values of an object', () =>{
    let hair = {
      cut: 'string',
      length: 'number',
      color: [],
      bald: false,
    };
    
    expect(validator.objHas(hair)).toBeTruthy();
    expect(validator.objHas('')).toBeFalsy();
    expect(validator.objHas(2)).toBeFalsy();
  });
});







