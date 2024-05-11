const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  numberList = 0;
  for(i = 0; i < numbers.length; i++){
    numberList += numbers[i];
  }
  numberList /= numbers.length;
  console.log(numberList)
}

average()