const fibonacci = limit => {
    const x = [];
    let a = -1;
    let b = 1;
    let c = a + b;
    while (c <= limit) {
        x.push(c);
        a = b
        b = c
        c = a + b
    };
    return x;
};
console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacci(21));

/* ( a + b ) = c  a = b  b = c  0+1=1 1+1=2 2+1=3 3+2=5 5+3=8 */

/* (penultimate + last) = newTerm  penultimate = last  last = newTerm */

[0, 1, 1, 2, 3, 5, 8, 13, 21];