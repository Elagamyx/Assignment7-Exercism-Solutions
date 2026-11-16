// var name = prompt("What is your name?");
// var age = Number(prompt("How old are you?"));
// console.log("Hello, " + name + "!" + " You are " + age + " years old.");

// ------------------------------

// var currency = Number(prompt("What is your amount in EGP?"));
// var usd = currency / 47.22;
// var eur = currency / 54.35;
// var gbp = currency / 61.95;
// console.log(currency + " EGP","= $" + usd.toFixed(2) + " USD,","€" + eur.toFixed(2) + " EUR,","£" + gbp.toFixed(2) + " GBP ");

// ------------------------------

// var currency = Number(prompt("Enter a number:"));

// if (currency % 2 === 0) {
//     console.log(currency + " is an even number.");
// } else if (currency % 2 === 1) {
//     console.log(currency + " is an odd number.");
// }

// ------------------------------

// var hour = Number(prompt("Enter the hour (0-23):"));

// if( hour <= 0|| hour > 23 ) {
//     console.log("Error!");
// }
// else if(hour >= 0 && hour <= 11) {
//     console.log("Good morning!");
// } else if (hour >= 12 && hour <= 17) {
//     console.log("Good afternoon!");
// } else if (hour >= 18 && hour <= 23) {
//     console.log("Good evening!");
// }

// ------------------------------

// var subject1 = Number(prompt("Enter your score in subject 1:"));
// var subject2 = Number(prompt("Enter your score in subject 2:"));
// var subject3 = Number(prompt("Enter your score in subject 3:"));

// var average = (subject1 + subject2 + subject3) / 3;

// if (average >= 50){
//     console.log("average: " + average.toFixed(2) + "," , "Status: Pass");
// } else {
//     console.log("You failed!");
// }


// ------------------------------

// var num1 = Number(prompt("Enter the first number:"));
// var num2 = Number(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /):");
// var result;

// switch (operation) {
//     case "+":
//         result = num1 + num2;
//         break;
//     case "-":
//         result = num1 - num2;
//         break;
//     case "*":
//         result = num1 * num2;
//         break;
//     case "/":
//         result = num1 / num2;
//         break;
//     default:
//         console.log("Invalid operation!");
// }
// console.log(num1+" "+operation+" "+num2+" = "+result);

// ------------------------------

// var num1 = Number(prompt("Enter a number:"));
// var result = "";

// for (var i = 1; i <= 10; i++) {
//     result += num1 + " x " + i + " = " + (num1 * i) + "\n";
// }

// console.log(result);

// ------------------------------

// for (var i = 2; i <= 10; i++) {
//     var printEven = i % 2 === 0 ? i : "";
//     console.log(printEven);
// }

// ------------------------------
// var total = 0;
// for (var i = 5; i >= 1; i--) {
//     total += 5 * i;
//     console.log(total);
// }

// ------------------------------
// var n = 1;
// while ( n * n <= 50) {
//     n++;
// }
// console.log(n)

// ------------------------------
// var num1 = Number(prompt("Enter the first number:"));
// var num2 = Number(prompt("Enter the second number:"));
// console.log("After Swapping: num1=" + num2 + ", num2=" + num1);

// ------------------------------
// var userAge = Number(prompt("Enter your age:"));
// var hasTicket = prompt("Do you have a ticket? (yes/no)");

// var accessGranted = (userAge >= 18 || hasTicket === "yes");

// console.log("Access granted: " + accessGranted);

// var userAge = Number(prompt("Enter your age:"));
// var hasTicket = prompt("Do you have a ticket? (yes/no)");

// var accessGranted;

// if (userAge >= 18 || hasTicket === "yes") {
//     accessGranted = true;
// } else {
//     accessGranted = false;
// }

// console.log("Access granted: " + accessGranted);

// ------------------------------
// var num1 = Number(prompt("Enter a number:"));
// var num2 = Number(prompt("Enter another number:"));
// var num3 = Number(prompt("Enter a third number:"));

// var max;
// if (num1 >= num2 && num1 >= num3) {
//     max = num1;
// } else if (num2 >= num1 && num2 >= num3) {
//     max = num2;
// } else {
//     max = num3;
// }
// console.log("Largest number is: " + max);

// ------------------------------
// var hours = Number(prompt("Enter the hours you worked:"));
// var rate = Number(prompt("Enter your hourly rate:"));
// var salary;

// if (hours > 40) {
//     salary = 40 * rate + (hours - 40) * rate * 1.5;
// } else {
//     salary = hours * rate;
// }
// console.log("Regular: $" + (hours > 40 ? 40 * rate : salary) + ", Overtime: $" + (hours > 40 ? salary - 40 * rate : 0) + ", Total: $" + salary);

// ------------------------------
// var weight = Number(prompt("Enter your weight in kg:"));
// var height = Number(prompt("Enter your height in meters:"));
// var bmi = weight / (height * height);
// var category;

// if (bmi < 18.5) {
//     category = "Underweight";
// }else if (bmi >= 18.5 && bmi <= 24.9) {
//     category = "Normal weight";
// }else if (bmi >= 25 && bmi <= 29.9) {
//     category = "Overweight";
// }else {
//     category = "Obese";
// }
// console.log("BMI: " + bmi.toFixed(2) + " - " + category);

// ------------------------------
// var purchaseAmount = Number(prompt("Enter the purchase amount:"));
// var taxRate = 0.10; // 10% tax
// var tax = purchaseAmount * taxRate;
// var totalAmount = purchaseAmount + tax;
// var discount;
// var finalAmount;

// if (purchaseAmount >= 100) {
//     discount = purchaseAmount * 0.05; // 5% discount
// } else {
//     discount = 0;
// }

// finalAmount = totalAmount - discount;
// console.log("Subtotal: $" + purchaseAmount + ", Tax: $" + tax + ", Discount: $" + discount + ", Final: $" + finalAmount);

// ------------------------------
// var operation = Number(prompt("Enter your account operation (1 for balance, 2 for withdrew, 3 for deposit):"));
// var currentBalance = 500;

// switch (operation) {
//     case 1:
//         console.log("Your balance is: $" + currentBalance);
//     break;
//     case 2:
//         var withdrewAmount = Number(prompt("Enter the amount to withdraw:"));
//         if (withdrewAmount <= currentBalance) {
//             currentBalance -= withdrewAmount;
//             console.log("Withdrew $" + withdrewAmount + ". " + "New balance: $" + currentBalance);
//             break;
//         }else {
//             console.log("Insufficient balance");
//         }
//         break;
//     case 3:
//         var depositAmount = Number(prompt("Enter the amount to deposit:"));
//         currentBalance += depositAmount;
//         console.log("Deposited $" + depositAmount+ ". " + "New balance: $" + currentBalance);
//     break;
//     default:
//         console.log("Invalid operation!");
// }

// ------------------------------

// for (var i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(" FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log(" Fizz");
//     } else if (i % 5 === 0) {
//         console.log(" Buzz");
//     } else {
//         console.log(" " + i + " ");
//     }
// }

// ------------------------------
// var row = Number(prompt("Enter the number of rows for the triangle:"));
// var triangle = "";

// for (var i = 1; i <= row; i++) {
//     for (let k = 0; k < row - i; k++) {
//         triangle += " ";
//     }
//     for (var j = 1; j <= i; j++) {
//         triangle += "*";
//     }
//     triangle += "\n";
// }

// console.log(triangle);




