//#ASSIGNMENT 1:-

// let favColor = "White"
// const height = 178
// let likePizza = true

// console.log(`My favourite color is ${favColor}.`);
// console.log("My height is "+height+"cm.")
// console.log("It's",likePizza,"that i like pizza.")

//#ASSIGNMENT 2:-

// function sum(x,y) {
//     return x+y
// }

// let num1 = 8
// let num2 = 7

// console.log(`The sum of the two numbers ${num1} and ${num2} is ${sum(num1, num2)}.`)

// //side quest
// num2 = "Rahul"

// console.log(`The sum of the two numbers ${num1} and ${num2} is ${sum(num1, num2)}.`);

//#ASSIGNMENT 3:-

// function canVote(age) {

//     if (age >= 18) {
//         return true;
        
//     }

//     else {
//         return false
//     }

// }

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

// rl.question("What is your age? ", (i) =>{
//     if (canVote(Number(i)) == true){
//         console.log("The user can Vote.");
//     }
//     else {
//         console.log("The user can not Vote.");
//     }
//     rl.close();
// }) 

//#ASSIGNMENT 4:-

// let num = 5

// if (num%2 == 0) {
//     console.log("The number is even.");
    
// } else {
//     console.log("The number is odd.");   
// }

//ASSIGNMENT 5:-

// function sumFromOne(num) {
//     let sum = 0;
//     for (let i=1; i<=num; i++) {
//         sum = sum + i;
//     }
//     return sum;
// }

// console.log(sumFromOne(5));

// function sumfromone1(num1) {
//     let sum1 = 0;
//     let j = 0;
//     while (j<=num1) {
//         sum1 = sum1 + j;
//         j = j+1;
//     }
//     return sum1
// }

// console.log(sumfromone1(10));

//#ASSIGNMENT 6:-

// let user = {
// 	name: "Harkirat",
// 	age: 19
// }

// function greet(userData) {
//     console.log(`Hello ${userData.name}, your age is ${userData.age}.`);
    
// }

// greet(user)

//ASSIGNMENT 7:-

// let userD = {name: "Rahul", age: 17, gender: "Male"}

// function greeting(data) {
//     if (data.gender == "Male") {
//         console.log(`Hi Mr. ${data.name}, your age is ${data.age}.`);    
//     }
    
//     else if (data.gender == "Female") {
//         console.log(`Hi Mrs. ${data.name}, your age is ${data.age}.`);
//     }

//     else {
//         console.log(`Hi Others ${data.name}, your age is ${data.age}.`);
        
//     }
// }

// greeting(userD)

//ASSIGNMENT 8:-

//first uncomment assignmet 3 code containing canVote function and uncomment ASSIGNMENT 7 code

// if (canVote(userD.age) == true){
//     console.log("The user can Vote.");
// }
// else {
//     console.log("The user can not Vote.");
// }

//#ASSIGNMENT 9:-

// arr = [12,353,5,6,66,3,67,8,8,55,88,34,22,56,36,757,867,242,232,,153,367]

// function evenArray(array) {
//     let evenarr = array.filter(number => number%2 == 0);
//     return evenarr;
// }

// console.log("The even array is", evenArray(arr));

//ASSIGNMENT 10:-

// const users = [{name: "Rahul", age: 23}, {name: "Rohit", age: 17}, {name: "Khush", age: 21}, {name:"Abhishek", age: 1},{name: "Siddharth" , age: 22},{name: "Tarun", age: 18},{name: "Ramesh", age: 15},{name: "Krish", age: 29},{name: "Tanishq", age: 35},{name: "Hanuman", age: 24}];

// function ageChecker(data) {
//     let requiredArray = data.filter(userData => userData.age >= 18)
//     return requiredArray;
// }

// console.log("The required array is", ageChecker(users));

//ASSIGNMENT 11:-

const users = [{user1: {name: "Rahul", age: 23, gender: "Male"}}, {user2: {name: "Khushi", age: 21, gender: "Female"}}, {user3: {name: "Krish", age: 29, gender: "Male"}}, {user4: {name: "Rohini", age: 17, gender: "Female"}}, {user5: {name:"Abhishek", age: 1, gender: "Male"}}, {user6: {name: "Siddharth" , age: 22, gender: "Male"}}, {user7: {name: "Tanya", age: 18, gender: "Female"}}, {user8: {name: "Tanishq", age: 35, gender: "Male"}},  {user9: {name: "Hanuman", age: 24, gender: "Male"}}, {user10: {name: "Ramya", age: 20, gender: "Female"}}]

function checker(data) {
    let requiredArray = []
    for (let i = 0; i < data.length; i++) {
        if ((data[i]["user"+ (i+1)].age >= 18) && (data[i]["user"+ (i+1)].gender == "Male")) {
            requiredArray.push(data[i])
        }
    }    
    return requiredArray;
}

console.log("The required array is", checker(users));

