const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

// Step 1: Calculate SMA
let totalPrice = 0;

for (let i = 0; i < amdPrices.length; i++) {
  totalPrice = totalPrice + amdPrices[i];
}

let sma = totalPrice / amdPrices.length;

// Step 2: Count days above SMA
let daysAboveSMA = 0;

for (let i = 0; i < amdPrices.length; i++) {
  if (amdPrices[i] > sma) {
    daysAboveSMA++;
  }
}

console.log(`Number of days AMD was above the 7-day SMA is: ${daysAboveSMA}`);