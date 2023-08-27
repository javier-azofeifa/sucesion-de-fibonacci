const fibonacci = limit => {
    const arr = [];
    let penultimate = -1;
    let last = 1;
    let newTerm = penultimate + last;
    while(newTerm <= limit){
        arr.push(newTerm);
        penultimate = last;
        last = newTerm;
        newTerm = penultimate + last;
    };
    return arr;
};
console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacci(21));

/* ( a + b ) = c  a = b  b = c  0+1=1 1+1=2 2+1=3 3+2=5 5+3=8 */

/* (penultimate + last) = newTerm  penultimate = last  last = newTerm */

[0, 1, 1, 2, 3, 5, 8, 13, 21];