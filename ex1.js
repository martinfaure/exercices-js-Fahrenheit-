function convertirCelsiusEnFahrenheit(celsius) {
	fahrenheit = (celsius * 9) / 5 + 32;
	return fahrenheit;
}

let result = convertirCelsiusEnFahrenheit(0);

console.log(result); // Résultat attendu : 32
console.log(convertirCelsiusEnFahrenheit(25)); // Résultat attendu : 77
