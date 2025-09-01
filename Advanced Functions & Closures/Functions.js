// Basic Functions
// 1. Write a function to check if a number is even.

// function isEven(num){
//     return num%2===0;
// }
// console.log(isEven(11))

//2. Write a function to calculate factorial of a number.

// function factorial(num){
//     let result=1;
//     for(let i=1;i<=num;i++){
//         result*=i;
//     }
//     return result;
// }
// console.log(factorial(7))

//3. Write a function to reverse a string.

// function reverse(str){
//     let result="";
//     for(let i=str.length-1;i>=0;i--){
//      result+=str[i];
//     }
//     return result;
// }
// console.log(reverse("Hello"))

// //4. Write a function to find the maximum in an array.

// function maxArr(arr){
//     let max=arr[0];
//     let ind=0;
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>max){
//             max=arr[i]
//             ind=i;
//         }
//     }
//     return `max value ${max} index${ind}`;
// }
// let arr=[1,2,3,4,5,12,34,12,2324,32435,12,3435,213425,13425,234546,13]
// console.log(maxArr(arr))

//5. Write a function to convert Celsius to Fahrenheit.

// function celToFah(num){
//     return (num*9/5)+32;
// }
// console.log(celToFah(32))

// Higher-Order Functions

//1. Use map to double each element in an array.

// let arr=[1,2,3,4,5];

// const double=arr.map(x=>x*3);
// console.log(double)

//2. Use filter to get only even numbers from an array.

//  let arr=[1,2,3,4,5,2];
 
//  let find=arr.filter(x=>x===2);
//  console.log(find);

// 3. Use reduce to calculate the sum of array elements.

// let arr=[1,2,3,4,5,2];

// const result=arr.reduce((x,acc)=>x+acc,0)

// console.log(result);

//4. Write a function that accepts another function and calls it twice.

// function callTwice(x){
//     x();
//     x();
// }
// const add=()=>{
// console.log("Hello")}

// callTwice(add);

//5. Write a function that accepts a function and returns a new function that logs its input and output.

