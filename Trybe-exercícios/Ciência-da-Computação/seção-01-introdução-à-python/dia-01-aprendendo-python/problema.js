const array = [{ fruit: 'banana', price: 10 }, { fruit: 'maçã', price: 8 }, { fruit: 'uva', price: 12 }, { fruit: 'manga', price: 6 }];


// encontrar fruta com maior e menor preço

const max = array.reduce((acc, curr) => {
  if (acc.price < curr.price) return curr;
  return acc;
});
const min = array.reduce((acc, curr) => {
  if (acc.price > curr.price) return curr;
  return acc;
});
console.log(max.fruit);
console.log(min.fruit);

// particleVelocity(particles) {
//   if (particles.length >= 3) {
//     particles.reduce((acc, curr, i) => {
//       if (acc[0] === acc[1]) return 
//     })
//   }  
// }