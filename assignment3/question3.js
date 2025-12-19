const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below
const open = Number(disneyData.open);
const high = Number(disneyData.high);
const low = Number(disneyData.low);
const close = Number(disneyData.close);

const result = open - high + low - close;

console.log(result.toFixed(2));