function returnReversed(array) {
    var start = 0
    var end = array.length-1;
    do {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++; end--;
    } while (end - start >= 0);
    console.log(array);
    return array;
}

// even number of elements
returnReversed([1,2,3,4,5,6]);

// odd number of elements
returnReversed([1,2,3,4,5,6,7]);

// one single element
returnReversed([1]);

// two elements
returnReversed([1,2]);
