

function solution(P, C) {
    //Provide Your solution here 
// Set Maximum Games Variable
var maximumNumberOfGames;

// Using Control Structures To Get Maximum Number Of Games
if (P < 1 || P > 30000 || C < 1 || C > 30000) {
  console.log("Number of Players or Courts Not In Range of 1 to 30,000.");
} else if ((P / 2) > C) {
  maximumNumberOfGames = C;
} else if (P % 2 != 0 && P > 1 && C < P) {
  maximumNumberOfGames = (P - 1) / 2;
} else if (P < C && P % 2 == 0) {
  maximumNumberOfGames = P / 2;
} else if (P < C && P % 2 != 0 && P - 1 != 0) {
  maximumNumberOfGames = (P - 1) / 2;
} else {
  console.log("Something went wrong.");
}
// Return Results
console.log("tournamentSolution Results:");
console.log("Maximum Number Of Games: ", maximumNumberOfGames);
}

tournamentSolution(0, 30001);
tournamentSolution(5, 3);
tournamentSolution(10, 3);
console.log("\n");


module.exports = solution;