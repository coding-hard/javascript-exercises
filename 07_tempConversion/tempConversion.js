const convertToCelsius = function (temperature) {
  // formula - x °F ≘ (x − 32) × 5/9°C

  let actualTemperature = (temperature - 32) * (5 / 9);
  return Math.round(actualTemperature * 10) / 10;

};

// console.log(convertToCelsius(32));

const convertToFahrenheit = function (temperature) {
  // formula - x °C ≘ (x × 9/5+ 32) °

  let actualTemperature = (temperature * (9 / 5)) + 32;
  return Math.round(actualTemperature * 10) / 10;
};

// console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
