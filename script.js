document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally and refreshing the page

  // Retrieve and trim values to remove extra spaces
  const fname = document.querySelector('input[name="fname"]').value.trim();
  const lname = document.querySelector('input[name="lname"]').value.trim();

  // Combine first name and last name with a space
  const fullName = `${fname} ${lname}`.trim();

  // Display the full name using alert
  alert(fullName);
});
