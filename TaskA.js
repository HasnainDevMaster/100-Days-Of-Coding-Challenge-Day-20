"use strict";
// 100 Days Of Coding Challenge!
/** Question 58:
Write a simple program that can take lots of scores and find their average.*/
//----------------------------------------------------------------------------
// Function to calculate the average of an array of numbers
function calculateAverage(scores) {
    // Check if the array is empty
    if (scores.length === 0) {
        return 0; // Return 0 if there are no scores
    }
    // Calculate the sum of all scores
    let sum = 0;
    for (let score of scores) {
        sum += score;
    }
    // Calculate the average by dividing the sum by the number of scores
    let average = sum / scores.length;
    return average; // Return the calculated average
}
// An Array of Score Numbers to Calculate the Average
let scores = [85, 92, 75, 95, 81]; // Array of scores
let averageScore = calculateAverage(scores); // Calculate the average
console.log(`The average score is: ${averageScore}`); // Output the average score
