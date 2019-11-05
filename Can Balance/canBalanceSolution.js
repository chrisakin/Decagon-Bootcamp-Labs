//canBalance function takes an array of numbers and returns true or false based on the following conditions
//It returns true if the array can be split at any point with the sum of the numbers on one side equal to the sum of the numbers at the other side
// For example, given the array [1, 2, 3, 4, 5, 5], it will return true as the array can be split into [1, 2, 3, 4] and [5, 5] giving a sum of 10 on each side.


function canBalance(array) {
  //Type your solutions here
    // Add All Array Values
    function getSum(arr) {
      return arr.reduce(function(a, b) {return a + b});
    }
    // Get Array Length
    arrayLength = array.length;
  
    // Check If Array Sum Is Divisible By 2
    if (getSum(array) % 2 == 0) {
  
      //  Create Array For Split
      var leftSide = []; 
  
      // Loop Through Array And Separate Values
      for(i = 0; i < array.length; i++) {
        // Get Random Value From Array And Remove
        var randomValue = array[Math.floor(Math.random() * arrayLength)];
        leftSide.push(randomValue);
        array.pop(randomValue);
  
        // Check If Split Is Successful
        if (getSum(leftSide) == getSum(array)/2) {
          break;
        }
      }
      // Return Results
      console.log("CanBalance Results:");
      console.log([leftSide.length, array.length]);
    } else {
      console.log(-1);
    }
  }
  
  canBalance([1, 1, 1, 2, 1]);
  canBalance([2, 1, 1, 2, 1]);
  canBalance([10, 10]);
  console.log("\n");


module.exports = canBalance;