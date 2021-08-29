const array = [1, 2, -3, 4, -5, 6, -7, 8, 9];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > 4) {
        break;
    }
    // console.log(element)
}

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element < 0){
        continue;
    }
    console.log(element)
}