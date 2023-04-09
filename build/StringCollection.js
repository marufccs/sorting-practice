"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
const Sorting_1 = require("./Sorting");
class StringCollection extends Sorting_1.Sorting {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const sentence = this.data.split("");
        const leftHand = sentence[leftIndex];
        sentence[leftIndex] = sentence[rightIndex];
        sentence[rightIndex] = leftHand;
        this.data = sentence.join("");
    }
}
exports.StringCollection = StringCollection;
