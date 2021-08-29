const numbers = [3, 4, 5, 6, 7];

// const result = numbers.map(function(element){
//     return element * element;
// })

const result = numbers.map(element => element * element)
console.log(result);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

const findElement = numbers.find(x => x > 6);
console.log(findElement);

const array1 = ['a', 'b', 'c', 'd'];
const result2 = array1.forEach(element => {
   console.log(element)
});



