const students = [
    {id: 31, name: 'Omar Sunny'},
    {id: 45, name: 'Purnima'},
    {id: 41, name: 'DeepJol'},
    {id: 31, name: 'Manna'}

];



// let studentName = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     console.log({element})
//     const getName = element.name;
//     console.log({getName});
//     // studentName.push(getName);
//     if(element.id >= 41){
//         studentName.push(getName);
//     }
    
    
// }
// console.log(studentName);


const names = students.map( s => s.name);
console.log({names});

const bigger = students.filter( ids => ids.id > 41);
console.log(bigger);

const findName = students.find( s => s.id > 30);
console.log(findName);