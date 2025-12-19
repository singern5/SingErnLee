
const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];
// Write your code below

const total = msftData.reduce((sum, price) => sum + price, 0);
const average = total / msftData.length;

// Show in console (optional)
console.log(average);