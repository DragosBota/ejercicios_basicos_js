function greaterNumber(numberOne , numberTwo) {
  if(numberOne < numberTwo){
    console.log('El número más grande es el segundo:',numberTwo);
  }
  else if(numberOne > numberTwo){
    console.log('El número más grande es primero:',numberOne);
  }
  else{
    console.log('Ambos números son iguales!');
  }
}

greaterNumber(20 , 20)
