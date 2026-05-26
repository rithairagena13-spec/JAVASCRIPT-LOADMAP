//greater than
if(5 > 10){
    console.log("five is greater than 10");
}
else{
console.log("five is not greater than 10");
}
// less than
let a = 5;
let b = 10;
if(a > b){
    console.log("a is greater than b");
}
else{
    console.log(" a is less than b");
}

// greater than or equal to
let password = "12345232333er";
let number = 12345232323234;
if(password.length >= 6)
{
    console.log("password is valid");
}else{
    console.log("password is invalid");
}
// less than or equal to
let age = 10;
if(age <= 18){
    console.log("you are not allowed to vote ");
}else{
    console.log("you are allowed to vote");
}
// strictly equality

//tou are going to check if 2 is equal to "2"

let c = 2;
let d = "2";
if(c === d){
    console.logo("c is equal to d");
}
else{
    console.log("c is not equal to d");
}

//loosely
if(c == d){
    console.log("c is equal to d");
}  else{
    console.log("c is not equal to d");
}

//AND Operator &&
if(age >= 18 && password.length >= 6){
    console.log("you are allowed to vote and your password is valid");
}
else
{
    console.log("you are not included at all");
}

//OR Operators||
if(age >= 18 || password.length >= 6){
    console.log("you are allowed to vote or your password is valid");
}
else
{
    console.log("you are not included at all");
}
let e = 20;
let f = 11;
if(e % 2 == 0){
    console.log("e is even");
}else{
    console.log("e is odd");
}if(f % 2 != 0){
    console.log("f is odd number");
}else{ 
    console.log("f is even");
}
//not operator

if(!(age  >= 18)){
    console.log("you are note allowed to vote");

}else{
    console.log("you are allowed to vote");
}
let flourweight = 500;
let sugarweight = 200;
let totalweight = flourweight + sugarweight;
console.log(totalweight + " grams");

totalweight  /= 3;
console.log(totalweight + " grams");
let remainder = totalweight / 3;
let grams = remainder % 3;
console.log("the remainder is:"+grams);
 // banking app

 let initialbalance = 1000;
 initialbalance += 500;
 initialbalance -= 150;
 initialbalance *= 2;
 console.log("balance after deposit" + initialbalance);
   

 let userAge = 21;
 
 if(userAge >= 18)
 {
    console.log("you are allowed to enter the VIP louge");
 }else{
    console.log("you are not allowed to enter the VIP louge");
 }


 