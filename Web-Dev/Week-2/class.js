//#Finding Sum of two numbers

// function sum(a, b) {
// 	return a + b;
// }

// let ans = sum(2, 3)
// console.log(sum);

//#Finding Sum from 1 to n

// function sumFromOne(n) {
//     let sum = 0;
//     for (let i=1; i<=n; i++) {
//         sum = sum +i;
//     }
//     return sum;
// }

// console.log(`The sum from 1 to 7 is ${sumFromOne(7)}`);

//#Synchronos code
//run line by line and in the order in which it's written

// console.log(sumFromOne(25))
// console.log(sumFromOne(50))
// console.log(sumFromOne(75))

//in the above code first the sum till first 25 numbers is calculated then till 50 no's and then till 75 no's
//this way the code run synchronously

//#input-output heavy operations

const fs = require("fs")

const content = fs.readFileSync("a.txt", "utf-8")

console.log(content);

const content2 = fs.readFileSync("b.txt", "utf-8")

console.log(content2);
