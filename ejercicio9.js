const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  numberList = 0;
  for(i = 0; i < numbers.length; i++){
    numberList = numberList + numbers[i];
  }
  console.log (numberList)
}

sumNumbers()
