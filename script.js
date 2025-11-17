document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const successMessageDiv = document.getElementById('success-message');
    const welcomeEmailSpan = document.getElementById('welcome-email');

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // New elements for error display
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    // Function to display errors
    function displayError(element, message) {
        element.textContent = message;
        element.style.display = 'block';
    }

    // Function to clear errors
    function clearError(element) {
        element.textContent = '';
        element.style.display = 'none';
    }

    // Simple email regex for client-side check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        let isValid = true; 

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Reset errors
        clearError(emailError);
        clearError(passwordError);

        // 1. Email Validation
        if (email === "") {
            displayError(emailError, "Email address is required.");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            displayError(emailError, "Please enter a valid email address.");
            isValid = false;
        }

        // 2. Password Validation
        if (password === "") {
            displayError(passwordError, "Password is required.");
            isValid = false;
        } else if (password.length < 8) {
            displayError(passwordError, "Password must be at least 8 characters.");
            isValid = false;
        }

        // If the form is not valid, stop here.
        if (!isValid) {
            return;
        }

        // --- SUCCESS ACTION ---

        // 1. Update the welcome message
        welcomeEmailSpan.textContent = email;

        // 2. Hide the main login components
        document.querySelector('.logo').style.display = 'none'; 
        form.style.display = 'none';
        document.querySelector('.signup-text').style.display = 'none';

        // 3. Display the success message
        successMessageDiv.style.display = 'block';

        passwordInput.value = '';
    });

    // Prevent navigation for the static links
    const staticLinks = document.querySelectorAll('.forgot-password, .sign-up-link');
    staticLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            // We leave a simple alert for these non-implemented features
            alert(`The link to '${link.textContent.trim()}' is not yet implemented.`);
        });
    });
});
    const staticLinks = document.querySelectorAll('.forgot-password, .sign-up-link');
    staticLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`The link to '${link.textContent.trim()}' is not yet implemented.`);
        });
    });
});
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
