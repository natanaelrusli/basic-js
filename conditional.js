let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("The weather is pleasant.");
} else {
  console.log("It's a bit chilly.");
}

let dayOfWeek = "Monday";

switch (dayOfWeek) {
  case "Monday":
    console.log("It's the start of the week.");
    break;
  case "Wednesday":
    console.log("Midweek vibes!");
    break;
  case "Friday":
    console.log("Weekend is almost here.");
    break;
  default:
    console.log("It's an ordinary day.");
}

let isRaining = true;

let weatherMessage = isRaining ? "Bring an umbrella." : "Enjoy the day!";
console.log(weatherMessage);
