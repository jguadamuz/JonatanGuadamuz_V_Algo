 
function resetNegatives(array) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            array[i] = 0;
        }
    }
    console.log(array);
    return array;
}

resetNegatives([1,2,-1,-3]);