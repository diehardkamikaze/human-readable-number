module.exports = function toReadable (number) {
	var result;
	var num19;
	var numteens;
  
	if (number === 0)
		return "zero"
	result = new Array(4);
	num19 = [undefined, "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
			"eighteen", "nineteen"];
	numteens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	if (number % 100 <= 19)
		result[3] = (num19[number % 100]);
	else 
	{
		result[3] = (num19[number % 10]);
		result[2] = (numteens[Math.floor(number % 100 / 10) - 2]);
	}
	number = Math.floor(number / 100);
	if (number % 10)
	{
		result[1] = ("hundred");
		result[0] = (num19[number % 10]);
	}
		console.log(result);
	return result.reduce(function(str, current) {
		if (current)
			return (str + " " + current);
		return str;
	});
}
