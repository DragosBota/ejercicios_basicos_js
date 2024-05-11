const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

const newlist = [];
for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id !== 11 && placesToTravel[i].id !== 44) {
    newlist.push(placesToTravel[i]);
  }
}

console.log(newlist)