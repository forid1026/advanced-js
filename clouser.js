function stopWatch(){
    let count = 0;
    return function clock(){
        count++;
        return count;

    }
}

const clock1 = stopWatch();
const clock2 = stopWatch();
console.log(clock1());
console.log(clock2())