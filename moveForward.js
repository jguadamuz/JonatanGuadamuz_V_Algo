function moveForward(array) {
    let i = 0;
    while (i < array.length) {
        array[i] = array[i+1];
        i++;
    }
    // at this point i == array.length
    array[i-1] = 0;
    // console.log(array);
    // console.log("array[-1]: " + array[-1]);
    return array;
}

moveForward([1,2,3]);
moveForward([1,2,3,4,5,6]);
moveForward([1,2,3,4,5,6,7]);
moveForward([]);