// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  let userLevel = document.querySelector("#level").value;
  let userHours = document.querySelector("#hoursPerWeek").value;
  console.log({ userEmail, userLevel, userHours });
});

// Get the user's level - userLevel (string)
// Get the user's hours of study userHours (number)
// Store the user's level as userLevel (string/text)
// Validate the user's input
// Check if the user has selected a level - check a level has been entered
// Check if the user has provided an email address - have they entered an email? is valid? does it have an "@" symbol?
// Check if the user has specified at least one hour of study - must be equal to or greater than 1;
// Check if the number of hours requested is within the allowed range - is less then or equal to the maximum number for the level;
// Calculate the total cost
// Calculate the total cost
// Display the total cost to the user -
