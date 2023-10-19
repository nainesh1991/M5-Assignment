//STEP 1
function halfNumber(number=20){
    let result = number/2
    console.log(`Half of ${number} is ${result}`)
    return result

}
halfNumber()

//STEP 2

function squareNumber(number=30){
    let result = number*number
     console.log(`The result of squaring the number  ${number} is ${result}`)
     return result
    }
squareNumber()

//STEP 3

function percentOf(num1,num2) {
    let percent = (num1/num2) * 100;
    console.log(num1 + ' is ' + percent + '% of ' + num2);
    return percent;

}
percentOf(10,20)


//STEP 4
function findModulus(num1,num2){
let modulus = num1 % num2
console.log(modulus + ' is the modulus of ' + num1 + ' and ' + num2);
return modulus;

}
findModulus(50,5)
//STEP 5