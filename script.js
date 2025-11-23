// Hamburger menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-navigation');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  nav.classList.toggle('active');
});

// Contact form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Clear previous errors
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach(msg => {
    msg.textContent = '';
    msg.classList.remove('visible');
  });

  const inputs = form.querySelectorAll('input, textarea');
  let isFormValid = true;

  inputs.forEach(input => {
    input.classList.remove('error');

    if (!input.checkValidity()) {
      isFormValid = false;
      const errorMsg = input.nextElementSibling;
      input.classList.add('error');

      if (input.validity.valueMissing) {
        errorMsg.textContent = 'This field is required.';
      } else if (input.validity.typeMismatch) {
        errorMsg.textContent = 'Please enter a valid value.';
      } else {
        errorMsg.textContent = 'Invalid input.';
      }
      errorMsg.classList.add('visible');
    }
  });

  if (isFormValid) {
    alert('Thank you for contacting Gc Bank Plc! We will get back to you shortly.');
    form.reset();
  }
});

// Modal dialog functionality
const modal = document.getElementById('announcement-modal');
const openModalBtn = document.getElementById('open-modal-btn');
const closeModalBtn = modal.querySelector('.modal-close');

function openModal() {
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  openModalBtn.focus(); // Return focus to button
}

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});

// Trap focus inside modal when open (basic)
modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }
});

// Tabs functionality
const tabs = document.querySelectorAll('.tabs [role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    activateTab(tab);
  });

  tab.addEventListener('keydown', (e) => {
    let index = Array.prototype.indexOf.call(tabs, e.currentTarget);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % tabs.length;
      tabs[nextIndex].focus();
      activateTab(tabs[nextIndex]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      tabs[prevIndex].
