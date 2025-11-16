document.addEventListener('DOMContentLoaded', () => {
    // Get the sign-in button
    const signInButton = document.querySelector('.sign-in-button');
    // Get the form so we can prevent the default submission behavior
    const loginForm = document.querySelector('form');

    // Listen for the form submission
    loginForm.addEventListener('submit', function(event) {
        // Stop the form from trying to submit to a server (which would refresh the page)
        event.preventDefault(); 

        // Get values from the input fields
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation and alert
        if (email === "" || password === "") {
            alert("Please enter both email and password.");
        } else {
            // Display a success message
            alert(`Attempting to sign in with: \nEmail: ${email}`);
            // In a real app, this is where you'd send data to a server.
        }
    });
});
