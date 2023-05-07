
/*
Guess the number

by Abhijeet Kumar, https://github.com/Abhijeetbyte


*/

let score = 0;  //variable to count score
let user_num = 0; // store user input
let rand_num = Math.floor(Math.random() * 101); // random number b/w 0 to 100

//console.log(rand_num);  // for debugging
console.log(" Welcome to Guess the Number Game!")  // greetings
console.log("\n I am computer, and I have chosen a number between 0 - 100 ")  // about/story
console.log("\n Now you have to guess it, let's begin ! \n ")  // about/story
user_num = prompt(" Enter the number : "); // take an input from the user

while (user_num != rand_num) {

  // Control structure
  if (user_num > rand_num) {  // check
    console.log("\n Haa looser ! Hint : the number is smaller than", user_num, "\n");
    score++;  // increment by 1
    user_num = prompt(" Enter the number : "); // take an input form user
  }

  else if (user_num < rand_num) { // check

    console.log("\n Haa looser ! Hint : the number is bigger than", user_num, "\n");
    score++;  // increment by 1
    user_num = prompt(" Enter the number : "); // take an input form user
  }
  else {
    console.log("\n Haa looser ! Invalid input ", "\n");
    user_num = prompt(" Enter the number : ");
  }
}
// exit loop
console.log("\n\n Damn it, you guessed it right !!! \n"); // 
console.log("\n The correct number is ", rand_num, " Your score is ", 100 - score);
console.log("\n I will see you next time...\n\n"); // thanks for playing



