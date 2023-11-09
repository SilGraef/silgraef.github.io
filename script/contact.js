// Validate the contact form data before submitting the form.
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
  // Check if the required fields are empty.
  const requiredFields = ['name', 'email', 'message'];
  for (const field of requiredFields) {
    const fieldValue = contactForm.querySelector(`input[name="${field}"]`).value;
    if (fieldValue === '') {
      event.preventDefault();
      alert(`The ${field} field is required.`);
      return;
    } else {
      // Add a red border if the field is invalid.
      contactForm.querySelector(`input[name="${field}"]`).classList.add('invalid-input');
    }
  }

  // Check if the email address is valid.
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailFieldValue = contactForm.querySelector('input[name="email"]').value;
  if (!emailRegex.test(emailFieldValue)) {
    event.preventDefault();
    alert('Please enter a valid email address.');
    return;
  }

  // Submit the form if all the validation checks pass.
  if (contactForm.querySelectorAll('.invalid-input').length === 0) {
    contactForm.submit();
  }
});

