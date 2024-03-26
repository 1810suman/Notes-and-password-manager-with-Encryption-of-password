// Get the form element
const passwordForm = document.getElementById('password-form');

// Add event listener for form submission
passwordForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the password input value
    const passwordInput = document.getElementById('password').value;

    // Replace 'YOUR_OPENING_PASSWORD' with your actual opening password
    const openingPassword = 'Any_desiresd_password';

    // Check if the entered password matches the opening password
    if (passwordInput === openingPassword) {
        // If password matches, redirect to the main notes and password manager page
        window.location.href = 'io.html';
    } else {
        // If password does not match, display an alert
        alert('Incorrect password. Please try again.');
    }
});
