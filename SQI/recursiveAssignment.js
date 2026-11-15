//1.  Countdown to zero 
function Countdown(n){
    if (n===0){return}

    console.log(n);
    return Countdown(n-1)
}
// Countdown(5)


//2. Sum of the Nth Natural number 
function sum(n){
    if(n === 0){
        return 0
    }    
    return n + sum(n-1);
}
// console.log(sum(5))

//3. Factorial 
function Factorial(n){
    if(n===0){
        return 1
    }
    return n * Factorial(n-1)
}
// console.log(Factorial(5));

//4. Fibonacci Series 
function Fibonacci(n){
    if(n<=1){
        return n
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}
console.log(Fibonacci(2));

// 5. Reverse of a string 
function Reverse(data){
    
}
