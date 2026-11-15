function factorial(n){
    if(n == 0){
        return 1;
    }
    return n * factorial(n-1)
}
// console.log( factorial(4));
let n = 5
let sum = 1
for (n; 1 <= n; n--) {
    sum = n*sum
}
console.log(sum);    
