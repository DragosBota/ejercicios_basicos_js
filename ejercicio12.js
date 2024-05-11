const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
//2. Generamos un nuevo array vacio
  const noDuplicates= [];
//3. Creamos el bucle
  for (const element of list) {
    if(noDuplicates.includes(element)){
      noDuplicates.slice(element)
    }
    else{
      noDuplicates.push(element)
    }
  }  
  console.log(noDuplicates)   
}

//1. Ejecuto la función que coje como parametro el array "duplicates".
removeDuplicates (duplicates)