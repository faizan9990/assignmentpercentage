// Get the total value from the user
let totalValue = prompt("Enter the total value:");

// Get the obtained value from the user
let obtainedValue = prompt("Enter the obtained value:");

// Convert the inputs to numbers
totalValue = parseFloat(totalValue);
obtainedValue = parseFloat(obtainedValue);

// Calculate the percentage
let percentage = (obtainedValue / totalValue) * 100;

// Display the result using alert
alert("The percentage is " + percentage + "%");
