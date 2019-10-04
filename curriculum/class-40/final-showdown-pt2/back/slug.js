'use strict';

const uuid = require('uuid/v4');

class Slug {
  constructor(name, text) {
    this.name = name;
    this.text = text;
    this.id = uuid();
    this.createdAt = new Date();
  }

  set(object) {
    Object.keys(object).forEach(key => {
      this[key] = object[key];
    });
  };
};

module.exports = Slug;