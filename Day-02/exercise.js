



let cartTotal = 200;
let isPremiumMember = true;
let hasDiscount = true;
let isFraudulent = false;
if ((isPremiumMember == true || cartTotal > 100 ) && isFraudulent == false) {
    console.log("user can not get free shippig");
} else {
    console.log(" user get free shipping");
}