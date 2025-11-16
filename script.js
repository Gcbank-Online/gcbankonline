document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the form element.
    const form = document.querySelector('form');
    
    // 2. Add an event listener for the 'submit' event on the form.
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission (which reloads the page).
        event.preventDefault(); 

        // 3. Get the values from the input fields using their IDs.
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // 4. Simple client-side validation logic.
        if (email === "" || password === "") {
            alert("Please enter both your email address and password to sign in.");
            return; // Stop execution if fields are empty
        }

        // 5. Success/Action Feedback (since there is no server for now).
        // In a real app, you would use 'fetch()' or 'XMLHttpRequest' here 
        // to send the data to a backend server.
        const confirmationMessage = `Sign In Attempt:\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}\n\nThis is a client-side simulation. If this were a real application, your credentials would now be sent securely to the GC Bank server for verification.`;
        
        alert(confirmationMessage);
        
        // Optional: Clear the password field after alert (good practice)
        passwordInput.value = '';
    });
    
    // Optional: Add a listener for the 'Forgot Password?' link (prevent navigation)
    const forgotPasswordLink = document.querySelector('.forgot-password');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Forgot Password feature not yet implemented. Please contact support.");
        });
    }

    // Optional: Add a listener for the 'Sign Up' link (prevent navigation)
    const signUpLink = document.querySelector('.sign-up-link');
    if (signUpLink) {
        signUpLink.addEventListener('click', function(event) {
            event.preventDefault();
            alert("Sign Up page not yet implemented. Redirecting to signup...");
        });
    }
});
