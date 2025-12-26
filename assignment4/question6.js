// Modify the code below:

// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Step 1: Copy the array
const sortedPrices = [...amdPrices];

// Step 2: Sort from lowest to highest
sortedPrices.sort((a, b) => a - b);

// Step 3: Take the first 3 prices
const lowestThree = sortedPrices.slice(0, 3);

// Step 4: Print the result
console.log(
  `The three lowest prices are ${lowestThree[0]}, ${lowestThree[1]}, and ${lowestThree[2]}`
);