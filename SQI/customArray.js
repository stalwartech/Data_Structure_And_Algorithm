// class customArray{
//     constructor(){
//         this.length = 0;
//         this.data = {}
//     }
//     myPush(value){
//         this.data[this.length] = value;
//         this.length ++;
//         return this
//     }

//     myShift(value){

//     }
// }

// let fav_food = new customArray();
// fav_food.myPush("Beans");
// fav_food.myPush("Garri");
// fav_food.myPush("Friend Yam");
// console.log(fav_food); // 

// let fav_Car = new Array()
// fav_Car.push("Urus");
// fav_Car.push("Royce");
// fav_Car.push("Brabus");


// function Sum(num1, num2) {
//     return num1 + num2
// }

// console.log(Sum(2,4))

// Assingment 1. Right angle triangle 
function rightAngle(length) {
    for (let index = 1; index <= length; index++) {
        // console.log(index);
        const result = "*".repeat(index)
        console.log(result)
    }
}
rightAngle(5)

function pyramidStar(length){
    console.log("*");
    let index = 2;
    if (length %2 == 0) {
        console.log("Enter Odd number for perfect result")
    } else {
        for (length; length>index; length--) {
            if (length%2 == 1 ){
                let gap = 1
                while (length < gap) {
                    gap++
                    // console.log(length);
                    console.log(" ".repeat(gap),"*".repeat(length));
                }
            }
        }   
    }
}

pyramidStar(9)