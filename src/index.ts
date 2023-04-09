import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([-5, -2, 23, 4, -6]);
numbersCollection.sort();
console.log(numbersCollection.data);
