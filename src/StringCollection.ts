import { Sorting } from "./Sorting";

export class StringCollection extends Sorting {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const sentence = this.data.split("");
    const leftHand = sentence[leftIndex];
    sentence[leftIndex] = sentence[rightIndex];
    sentence[rightIndex] = leftHand;
    this.data = sentence.join("");
  }
}
