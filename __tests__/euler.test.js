import * as fibonacci from './../src/fibonacci.js';

//create fibonacci sequence
describe('Fibonacci sequence generator', () => {
  test('should return an empty array if the given length is 0', () => {
    const lengthOfSequence = 0;
    const outputSequence = fibonacci.generateFibonacciSequence(lengthOfSequence);
    expect(outputSequence).toEqual([]);
  });

  test('should return an array of [1, 2, 3] if the given length is 3', () => {
    const lengthOfSequence = 3;
    const outputSequence = fibonacci.generateFibonacciSequence(lengthOfSequence);
    expect(outputSequence).toEqual([1, 2, 3]);
  });

  test('should return an array of Fibonacci numbers of length given', () => {
    const lengthOfSequence = 10;
    const outputSequence = fibonacci.generateFibonacciSequence(lengthOfSequence);
    expect(outputSequence).toEqual([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });
});

describe('Find even numbers in sequence', () => {
  test('should return an array of even numbers given an array of numbers', () => {
    const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const evenArray = fibonacci.evenGetter(arrayOfNumbers);
    expect(evenArray).toEqual([2, 4, 6, 8, 10]);
  });
});
//find even numbers
// add the even numbers in an array
describe("Add all numbers in an array", () => {
  test("should return the sum of all elements in an array", () => {
    const sumOfArray = [2, 4, 6, 8, 10];
    const sum = fibonacci.sumAll(sumOfArray);
    expect(sum).toEqual(30)
  })
})