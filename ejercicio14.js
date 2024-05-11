const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  const repitedWords = [];
  let counter = 0;
  for (const element of words) {
    if(!repitedWords.includes(element)){
      repitedWords.push(element);
      counter++;
      console.log(counter);
    }
  }
  let result = repitedWords + counter;
  console.log(result)
  afj adsojfbs
}



repeatCounter(words) 