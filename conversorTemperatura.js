function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

console.log("25°C em Fahrenheit:", celsiusToFahrenheit(25));
console.log("77°F em Celsius:", fahrenheitToCelsius(77));