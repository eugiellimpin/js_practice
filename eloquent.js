// Chapter 2

/*
Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

console.log("Looping a triangle");
console.log("==================================================");

for (let i = 1; i <= 7; i++) {
  console.log("#".repeat(i) + "\n");
}

console.log("==================================================\n");

/*
FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a
significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/

console.log("FizzBuzz");
console.log("==================================================");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

console.log("==================================================\n");

/*
Chessboard

Write a program that creates a string that represents an 8×8 grid, using
newline characters to separate lines. At each position of the grid there is
either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size =
8 and change the program so that it works for any size, outputting a grid of
the given width and height.
*/

console.log("Chessboard");
console.log("==================================================");

const size = 8;
for (let r = 0; r < size; r++) {
  let pattern = "";

  for (let c = 0; c < size; c++) {
    if (r % 2 == 0) {
      pattern += c % 2 == 0 ? " " : "#";
    } else {
      pattern += c % 2 == 0 ? "#" : " ";
    }
  }

  console.log(pattern);
}

console.log("==================================================\n");

// Chapter 3

/*
Minimum

The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/

console.log("Minimum");
console.log("==================================================");

function min(x, y) {
  return Math.min(x, y);
}

// const min = (x, y) => Math.min(x,y);

// const min = function(x,y) {
//   return Math.min(x, y);
// }

console.log('Min of 0 and 10 is', min(0, 10));
console.log('Min of 0 and -10 is', min(0, -10));

console.log("==================================================\n");