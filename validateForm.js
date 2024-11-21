export function displayErrors(errors) {
  for (let field in errors) {
    let inputElement = document.querySelector(`#${field}`);
    let labelElement = document.querySelector(`label[for=${field}]`);
    if (inputElement) {
      inputElement.classList.add("error-input");
    }
    if (labelElement) {
      labelElement.classList.add("error-label");
    }

    // Populate the error message div with an unordered list of error messages
    let errorDiv = document.querySelector(`#${field}-error`);
    if (errorDiv) {
      errorDiv.classList.add("error-message");
      let ul = document.createElement("ul");

      errors[field].messages.forEach((message) => {
        let li = document.createElement("li");
        li.textContent = message;
        ul.appendChild(li);
      });

      errorDiv.innerHTML = ""; // Clear any existing content
      errorDiv.appendChild(ul);
    }
  }
}

function removeErrors() {
  let errorInputs = document.querySelectorAll(".error-input");
  errorInputs.forEach((input) => {
    input.classList.remove("error-input");
  });

  let errorLabels = document.querySelectorAll(".error-label");
  errorLabels.forEach((label) => {
    label.classList.remove("error-label");
  });

  let errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((div) => {
    div.classList.remove("error-message");
    div.innerHTML = "";
  });
}

export function validateForm({ userEmail, userLevel, userHours }) {
  const maxHoursPerLevel = {
    basic: 5,
    advanced: 10,
  };

  removeErrors();

  let errors = {};

  function addError(field, message) {
    if (!errors[field]) {
      errors[field] = { messages: [] };
    }
    errors[field].messages.push(message);
  }

  // Validate the user's input
  // Check if the user has provided an email address
  if (userEmail === "") {
    addError("email", "please enter your email address.");
  }

  // Check if the user has selected a level - check a level has been entered
  if (userLevel === "") {
    addError("level", "please select a level of study.");
  }

  // Check if the user has specified at least one hour of study - must be equal to or greater than 1;
  if (isNaN(userHours) || userHours < 1) {
    addError("hoursPerWeek", "please enter at least one hours of tuition.");
  }

  // Check if the userLevel exists in the maxHoursPerLevel object
  if (!maxHoursPerLevel.hasOwnProperty(userLevel)) {
    addError("level", "invalid level of study selected.");
  }
  // Check if the number of hours requested is within the allowed range
  const maxAllowedHours = maxHoursPerLevel[userLevel];
  if (userHours > maxAllowedHours) {
    addError(
      "hoursPerWeek",
      `You can only study a maximum of ${maxAllowedHours} hours per week.`
    );
  }
  if (Object.keys(errors).length > 0) {
    displayErrors(errors);

    return false;
  }
  // Add error class to input elements with errors

  // Return early if there are any errors
  if (Object.keys(errors).length > 0) {
    return false;

    displayErrors();
  }

  return {
    userEmail,
    userLevel,
    userHours: parseInt(userHours),
  };
}
