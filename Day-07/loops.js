// the loop is the repetition of the same codes multiple times.
//for loop is made out of the three main parts

//a inner loop whwere we hane condition
//  a.initialization
//b. condition 
// c. incement or decrement
 //count from one up to ten
  
 for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
 }
 for(let p = 5; p >= 1; p--){
    console.log(p);
 }

 /// display even numbers

 for(let i = 1; i <= 20; i++){
    if(i % 2 === 0)
    {
        console.log(i);
    }
 }
 let roll = 0;
 while (roll !== 6){
    roll = Math.floor(Math.random() *6) + 1;
    console.log("you roll  a  "  +roll );
 }
 console.log("congrants you rolled a 6 ");

 // ATM machine
 let correctPin = 1234;
 let userPin = 1234;
 while(userPin !== correctPin){
    userPin = Number (("enter your pin:"));
    if(userPin !== correctPin){
        console.log("incorrect pin. try again");
    }
 }
 console.log("access granteg")


 let pin = true;
 while(pin !== true){
    console.log("incorect pin ");
    break;
 }
 console.log("enter your pin again");
 // do.. while loop

 let t = 0;
 do{
   console.log(" t is : " + t) ;
   t++;
 }while(t <= 5);



 let roll1 = 0;
 do{
   roll1 = Math.floor(Math.random() *6) + 1;
    console.log("you roll  a  "  +roll );
    
 }
 
 while (roll1 !== 6);
        
 console.log("congrants you rolled a 6 ");
   // contnue in loop 
   // break in loop

   for(let n = 1; n<= 10; n++ ){
      if (n === 3) break;

console.log(n);
      
   }



let numbers = [1, 2, 3, 4, 5, 6,7,80,90,81,12,14,16,35,86,18,19,20,21,22,23,24,25,]



// Even numbers
console.log("Even numbers are :");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i]);
    }
}

// Odd numbers
console.log("Odd numbers are :");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        console.log(numbers[i]);
    }
}

// Numbers divisible by 3
console.log("Numbers divisible by 3");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0) {
        console.log(numbers[i]);
    }
}

// Multiply all numbers by 2
console.log("Numbers multiplied by 2 are : ");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2);
}

// Largest number
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}

console.log("Largest number is", largest);

// Smallest number
let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Smallest number is", smallest);


// guessing game
let guessNumber ;
let randomNumber = Math.floor(Math.random() * 10) + 1;

while (guessNumber !== randomNumber) {
    console.log = ("Wrong! Try again");
}

console.log("Congratulations! You guessed the correct number");