const products = ['Camiseta de Metallica', 'Pantalón vaquero', 'Gorra de beisbol', 'Camiseta de Basket', 'Cinturón de Orión', 'AC/DC Camiseta']

const result = []
for (const element of products) {
  if(element.includes('Camiseta')){
    result.push(element);
  }
}

console.log(result)