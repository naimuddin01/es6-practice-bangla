// function add(num1, num2){
//     return num1 + num2
// }

// const add = function(num1, num2){
//     return num1 + num2;
// }

// const add = function add2(num1, num2){
//     return num1 + num2;
// }

// var result = add(5, 5);
// console.log(result);



const doubleIt = num => num * 3;
const result = doubleIt(5);
console.log(result);

const add =(x, y) => x + y;
const result2 = add(5, 5);
console.log(result2);

const give5 = () =>5;
const result3 = give5();
console.log(result3);


const doMath = (x, y) =>{
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result4 = doMath(7, 5);
console.log(result4);
