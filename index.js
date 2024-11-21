import { validateForm } from "./validateForm.js";

// Capture user's input on form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Store the user's email address as userEmail (string/text)
  let userEmail = document.querySelector("#email").value;
  // store the user's level as userLevel (string/text)
  let userLevel = document.querySelector("#level").value;
  // store the user's hours of study as userHours (number)
  let userHours = parseInt(document.querySelector("#hoursPerWeek").value);

  const result = validateForm({ userEmail, userLevel, userHours });
  console.log({ result });
});
// Calculate the total cost
// Display the total cost to the user -
