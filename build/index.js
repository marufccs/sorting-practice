"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([-5, -2, 23, 4, -6]);
numbersCollection.sort();
console.log(numbersCollection.data);
