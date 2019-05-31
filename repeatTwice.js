function repeatTwice(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        output[2*i] = element;
        output[2*i+1] = element;
    }
    console.log(output);
    return output;
}

// repeatTwice( [4,”Ulysses”, 42, false] ) 
// should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false]
repeatTwice( [4,"Ulysses", 42, false]);

repeatTwice( [4,4,"Ulysses","Ulysses", 42, false]);
