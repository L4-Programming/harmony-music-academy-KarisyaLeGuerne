export function displayResults(output) {
  console.log("Displaying the final result...");

  let results = document.querySelector("#results");

  results.innerHTML = `
  <dl>
  <dt>Email</dt>
  <dd>${output.userEmail}</dd>
  </dl>
`;
}
