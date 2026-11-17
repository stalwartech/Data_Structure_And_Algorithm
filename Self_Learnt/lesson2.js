// Loops, Arrays, and Processing Mutiple Values 
// Level 1: Beginner: Easy 
function printNUmbers(numbers){
    for(let i=0; i<numbers.length; i++ ){
        console.log(numbers[i])
    }
}
// printNUmbers([2,4,5,7])

// Level 1: Intermediate: Harder 
function calculateSum(numbers){
    let total = 0;
    for(let i=0; i<numbers.length; i++){
        total+=numbers[i]
    }
    return total
}
console.log(calculateSum([2,6,8,4]));

// Level 1: Difficult: Hardest 
function countEvenNumbers(numbers){
    let totalEven = 0;
    for(let i = 0; i<numbers.length; i++){
        if(i % 2 ===0){
            totalEven+=1
        }
    }
    return totalEven
}
console.log(countEvenNumbers([2,4,5,3,8]));


// Level 2: Beginner : Hard 
function findMinimum(number){
    let minNum = 0
    for(let i = 0; i<number.length; i++){
        if(minNum>number[i]){
            minNum = number[i];
        }
    }
    return minNum
}
console.log(findMinimum([3,5,6,2,-4,7]));

// Level 2: Intermidiate : Harder 
function findSecondLargest(number){

}

// Level 2: Advanced : Hardest 
function countConcurrenceNumber(number, target){
    let counter = 0;
    for(let i=0; i < number.length; i++){
        if(number[i] === target){
            counter+=1
        }
    }
    return counter     
}

console.log(countConcurrenceNumber([2,2,5,7,8,9,6,2,9,1], 2))

// Level 3: Easy : Hard 
function removeDuplicateNumbers(numbers){
    let newArray = []

    for(let i = 0; i<numbers.length; i++){
        let isDuplicate = false;
        for( let j = 0; j < newArray.length; j++){
            if(numbers[i] ===  newArray[j]){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            newArray.push(numbers[i]);
        }
    }
    }
    // return newArray
}
console.log(removeDuplicateNumbers([2,5,3,6,3,9])); // result [2,5,3,6,9]

// Level 3: Intermediate :Harder 
function hasPairWithSum(numbers, target){
    // This should detrmine whether any two different elements in an array add up to a given target

}
// console.log(hasPairWithSum([2,7,11,15], 9)) // true i.e 2 + 7 = 9 

// Level 3: Advanced: Hardest 
function longestIncreasingRun(numbers){
    // Every number must be greater than the numbers immediately before it. 

}

