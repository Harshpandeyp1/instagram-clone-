// Define the hardcoded correct username and password.
const CORRECT_USERNAME = "harshpandey_p1";
const CORRECT_PASSWORD = "Harshpandey";

// Get the form and input elements from the HTML.
const loginForm = document.querySelector('form');
const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');

// Add an event listener to the form for when it's submitted.
loginForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior which reloads the page.
  event.preventDefault();

  // Get the values the user entered.
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Check if the entered credentials match the correct ones.
  if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
    // If they match, redirect the user to the homepage.
    console.log("Login successful! Redirecting to homepage.html");
    window.location.href = "homepage.html";
  } else {
    // If they don't match, display a message to the user.
    console.log("Invalid username or password.");

    // Create or find an existing message element.
    let messageElement = document.getElementById('login-message');
    if (!messageElement) {
      messageElement = document.createElement('p');
      messageElement.id = 'login-message';
      messageElement.style.color = 'red';
      messageElement.style.textAlign = 'center';
      loginForm.insertBefore(messageElement, loginForm.querySelector('button[type="submit"]'));
    }
    messageElement.textContent = "Invalid username or password. Please try again.";
  }
});
