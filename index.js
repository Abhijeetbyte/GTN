
/*
Guess the number

by Abhijeet Kumar, https://github.com/Abhijeetbyte


*/

let score = 0;  //variable to count score
let user_num = 0; // store user input
let rand_num = Math.floor(Math.random() * 101); // random number b/w 0 to 100

//console.log(rand_num);  // for debugging
console.log("Welcome to Guess the number game !\n")  // greetings
user_num = prompt("Enter a number : "); // take an input form user

while (user_num != rand_num) {

  // Control structure
  if (user_num > rand_num) {  // check
    console.log("\nTry again ! Hint : the number is smaller than", user_num, "\n");
    score++;  // increment by 1
    user_num = prompt("Enter a number : "); // take an input form user
  }

  else if (user_num < rand_num) { // check

    console.log("\nTry again ! Hint : the number is bigger than", user_num, "\n");
    score++;  // increment by 1
    user_num = prompt("Enter a number : "); // take an input form user
  }
  else {
    console.log("\nTry again ! Invalid input ", "\n");
    user_num = prompt("Enter a number : ");
  }
}
// exit loop
console.log("\n***** Congratulations ! *****\n\nThe correct number is ", rand_num, "\nYour score is ", 100 - score);
console.log("\nThanks for playing !\n"); // thanks for playing



