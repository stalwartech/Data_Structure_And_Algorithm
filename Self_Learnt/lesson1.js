// Leason 1 Beginner: Hard Question 
function findLargerNumber(num1, num2) { 
    if(num1 > num2){
        return num1
    }
    return num2
}

console.log(findLargerNumber(8,3)); // Working Perfectly well 

// Lesson 1 Beginner: Harder Question 
function isEvenNumber(num){
    if(num % 2 == 0){
        return true
    }
    return false
}
console.log(isEvenNumber(0)); // Working Perfectly well 

// Lesson 1 Beginner: Hardest Question
function absoluteDifference(num1, num2){
    if(num1 > num2){
        return num1 - num2
    }
    return num2 - num1
}

console.log(absoluteDifference(10, 5)); // Working Perfectly well
console.log(absoluteDifference(5, 10)); // Working Perfectly well
console.log(absoluteDifference(10, 10)); // Working Perfectly well