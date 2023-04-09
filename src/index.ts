import { NumbersCollection } from "./NumbersCollection";
import { StringCollection } from "./StringCollection";

const numbersCollection = new NumbersCollection([-5, -2, 23, 4, -6]);
numbersCollection.sort();
console.log(numbersCollection.data);

const stringCollection = new StringCollection("dgarhbatd");
stringCollection.sort();
console.log(stringCollection.data);
