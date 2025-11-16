document.addEventListener('DOMContentLoaded', () => {
    // Elements we need to manipulate
    const form = document.querySelector('form');
    const container = document.querySelector('.container');
    const successMessageDiv = document.getElementById('success-message');
    const welcomeEmailSpan = document.getElementById('welcome-email');

    // Listen for the form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Simple validation
        if (email === "" || password === "") {
            alert("Please enter both email and password.");
            return; 
        }

        // --- SUCCESS ACTION ---

        // 1. Update the welcome message with the user's email
        welcomeEmailSpan.textContent = email;

        // 2. Hide the main container content (form, logo, signup text)
        // We use the container for this specific HTML structure
        form.style.display = 'none'; // Hide the form
        document.querySelector('.logo').style.display = 'none'; // Hide the logo
        document.querySelector('.signup-text').style.display = 'none'; // Hide the signup prompt

        // 3. Display the success message
        successMessageDiv.style.display = 'block';

        // Optional: Hide the password for security after 'submission'
        document.getElementById('password').value = '';
    });

    // Prevent navigation for the static links
    const staticLinks = document.querySelectorAll('.forgot-password, .sign-up-link');
    staticLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // You can add different alerts for each link here if needed
            alert(`The link to '${link.textContent.trim()}' is not yet implemented.`);
        });
    });
});
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
