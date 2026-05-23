let num = -5;
if (num > 0){
    console.log("the number is positive");
}else{
    console.log("number is negative");

}
// else  if and else 
    let score = 200;
if (score >= 90){
    console.log("Grade : A");

}else if (score >= 80){
    console.log("Grade : B");

}
else if (score >= 70){
    console.log("Grade : C");
}
else if (score >= 60){
    console.log("Grade : D");
}
else if(score >= 50){
    console.log("Grade: E")
}
else{
    console.log("Fail");
}


//switch cases
let day = "monaday"
switch (day){
    case "monday" :
        console.log("start of a week");
        break;
        case "friday" :
            console.log("weekend is a head");
            break;
            case "sunday" :
                console.log("rest day");
                break;
                dafault:
                console.log("invalid day");
                break;
}
// calculator

let num1 = 10;
let num2 = 20;
let operator = "+";
switch (operator){
    case "+" :
    console.log(num1 + num2);
    break;
    case "-" :
    console.log(num2 - num1);
    break;
    case "*" :
    console.log(num1 * num2);
    break;
    case "/" :
    console.log(num2 / num1);
    break;
    default:
        console.log("invalid operator");
}

//ATM Machine

let balance = 1000;
let paymentAmount = 500;
let depositAmount = 10000;
let withdrawAmount= 500;
let action = "check balance";
switch(action){
    case "withdraw" :
    if(withdrawAmount <balance && withdrawAmount > 0){
        balance -= withdrawAmount;
        console.log("withdraw successful. remaining balance: " +balance);
    }

else{
    console.log("invalid amount");
}
break;
case "deposit" :
if (depositAmount > 0){
    balance += depositAmount;
    console.log("deposit successfull. new balance: "+ balance);
}else{
    console.log("invakid amount");
}

break;
case "check balance" :
    balance += depositAmount;
    console.log("your current balance is ", + balance);
    break;
    case "pay bills":
        if(paymentAmount < balance && paymentAmount > 0){
            balance -= paymentAmount;
            console.log("payment successful. remaining balance: "+ balance);

        }else{
            console.log("insufficient balance or invalide amount");
        }
        break;
        defaut:
        console.log("the actin you enter is not valid");
        break;
}

// restaurent ordeling system menu


let order = "drink";
let price = 0;
switch(order){
    case "drink":
        console.log("1. water, 2.milk, 3. juice, 4. milk");
        console.log("enter number of drink you want");
        console.log("enter the quantity");
        console.log("toatal price is :");
        break;
        case "fast food":
            console.log("1. pizza, 2. burger, 3. fries,4. salad,5. sandwich");
            console.log("entr the number of food you want");
            console.log("enter the quantity");
            console.log("total price is :");
            break;
            case "coffee":
                console.log("1. espreso, 2. latte, 3. cappuccino,4. mocha,5. flat white");
            console.log("entr the number of coffee you want");
            console.log("enter the quantity");
            console.log("total price is :");
            break;
defaut:
console.log("invalid order");
break;
}


//const readline

