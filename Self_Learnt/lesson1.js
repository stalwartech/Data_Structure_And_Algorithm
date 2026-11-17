// Variables, Functions, and Operators

// Level 1 Beginner: Hard Question 
function findLargerNumber(num1, num2) { 
    if(num1 > num2){
        return num1
    }
    return num2
}

console.log(findLargerNumber(8,3)); // Working Perfectly well 

// Level 1 Beginner: Harder Question 
function isEvenNumber(num){
    if(num % 2 == 0){
        return true
    }
    return false
}
console.log(isEvenNumber(0)); // Working Perfectly well 

// Level 1 Beginner: Hardest Question
function absoluteDifference(num1, num2){
    if(num1 > num2){
        return num1 - num2
    }
    return num2 - num1
}

console.log(absoluteDifference(10, 5)); // Working Perfectly well
console.log(absoluteDifference(5, 10)); // Working Perfectly well
console.log(absoluteDifference(10, 10)); // Working Perfectly well


// Level 2: Intermediate: Hard Question
// Solution 1
function findSmallestNumber(num1, num2, num3){
    let smallest = num1;
    if(num2 < smallest){
        smallest = num2
    }
    if(num3 < smallest){
        smallest = num3
    }
    return smallest
}
// Solution 2
function findSmallestNumber2(num1, num2, num3){
    if(num1<num2 && num1<num3){
        return num1
    }

    if(num2<num1 && num2<num3){
        return num2
    }

    return num3
}
console.log(findSmallestNumber2(-4,-7,-2))

// Level 2: Intermediate: Harder Question 
function checkResult(score){
    if (score<0 || score>100){
        return "Invalid Input"
    }
    if(score >= 50){
        return "pass"
    }
    return "fail"
} 
console.log(checkResult(90));

// Level 2: Intermediate: Hardest Question 
function isValidTraingle(a,b,c){
    if(!a || !b || !c){
        return "false"
    }
    if(a+b <= c){
        return "false"
    }
    if(a+c <= b){
        return "false"
    }
    if(b+c <= a){
        return "false"
    }
    return "true"
}
console.log(isValidTraingle(1,2,3));


// Level 3: Advanced: Hard Question
// Rules: Do not use Math.max(), Do not use sorting, Use comparison and variables
function findLargestofFive(a,b,c,d,e){
    if(a>=b && a>=c && a>=d && a>=e){
        return a
    }

      if(b>=a && b>=c && b>=d && b>=e){
        return b
    }

      if(c>=a && c>=b && c>=d && c>=e){
        return c
    }

      if(d>=b && d>=c && d>=a && d>=e){
        return d
    }
    return e
}
console.log(findLargestofFive(10,10,8,5,3)) 

// Level 3: Advanced: Harder Question
// FInd the the second largest number 

// Level 3: Advanced: Hardest Question 
// Find the Largest number, Smallest number, Range (Largest - Smallest)
