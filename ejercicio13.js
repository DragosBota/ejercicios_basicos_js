const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList) {
  const userName = "Tony";
  for(let i = 0; i < names.length; i++){
    if(names[i] === userName){
      console.log("True. The user's name position in the list is: " + [i+1])
    }
    else{
      console.log(false)
    }
  }
}

nameFinder(names)
