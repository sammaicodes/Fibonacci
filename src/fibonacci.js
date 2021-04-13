export function generateFibonacciSequence(lengthOfSequence){ //number that is how many numbers from the sequence we want
  //if zero then return empty array

  //if given a number we want to calculate sequence up to that length of elements
  //make an array [1, 2]
  //calculate the third element -> 3
  //calculate the fourth element -> 5
  // F = array, n == index -> Fn = Fn-2 + Fn-1 where n>=2
  // array[index] = array[index-2] + array[index-1]
  // const nextElement = array[index-2] + array[index-1]
  // array.push(nextElement)
  let array = [1, 2];
  if (lengthOfSequence === 0) {
    return []
  } else {
    for(let i = 2; i < lengthOfSequence; i++){
      const nextElement = array[i-2] + array[i-1]
      array.push(nextElement);
    }
    return array;
  }


}

export function evenGetter(arrayOfNumbers) {
  //number % 2 === 0
  let evenArray = []
  for (let i=0; i< arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 === 0) { 
      evenArray.push(arrayOfNumbers[i]);
    };
  }
  return evenArray;
};

export function sumAll(sumOfArray){
  let Summ = (a,b) => a + b
  let sum = sumOfArray.reduce(Summ)
  return sum
}

// let sequence = generateFibonacciSequence(10);
// let evenNumbers = evenGetter(sequence);
// let evenSum = sumAll(evenNumbers);

// console.log(sequence);
// console.log(evenNumbers);
// console.log(evenSum);
//node src/fibonacci.js