const fibonacci = limit => {
    const fibo = [0, 1];
    for (let i = 2; fibo[i-1] + fibo[i-2] <= limit; i++) {
       const resultado = fibo[i-1] + fibo[i-2];
       fibo.push(resultado);
    };
    return fibo;
};
console.log(fibonacci(2));
console.log(fibonacci(10));
console.log(fibonacci(21));

/* ( a + b ) = c  a = b  b = c  0+1=1 1+1=2 2+1=3 3+2=5 5+3=8 */

/* (penultimate + last) = newTerm  penultimate = last  last = newTerm */

[0, 1, 1, 2, 3, 5, 8, 13, 21];