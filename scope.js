function sum(num1, num2){
    let result = num1 + num2;
    if(result > 40){
        let mood = 'happy';
        console.log(mood);
        var feeling = 'sad';
    }
    console.log(feeling)

    return result;
}
const total = sum(30, 12);
console.log(total);
