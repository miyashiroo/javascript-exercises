// ftoc(32) // fahrenheit to celsius, should return 0

// ctof(0) // celsius to fahrenheit, should return 32
const ftoc = function(fahrenheit) {
  const temperatureInFahrenheit = fahrenheit
  const temperatureInCelcius = (temperatureInFahrenheit - 32) /  1.8
  const fixedCelcius = temperatureInCelcius.toFixed(1)

  return parseFloat(fixedCelcius)
};

const ctof = function(celcius) {
  const temperatureInCelcius = celcius
  const temperatureInFahrenheit = (temperatureInCelcius * 1.8) + 32
  const fixedFahrenheit = temperatureInFahrenheit.toFixed(1)
  return parseFloat(fixedFahrenheit)

};

module.exports = {
  ftoc,
  ctof
};
