document.getElementById('userForm').addEventListener('submit', function(event) {
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    const nameError = document.getElementById('nameError');
    if (name.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Contact Number validation
    const contact = document.getElementById('contact').value;
    const contactError = document.getElementById('contactError');
    const contactPattern = /^\d{10}$/;
    if (!contactPattern.test(contact)) {
        contactError.textContent = 'Please enter a valid 10-digit contact number.';
        isValid = false;
    } else {
        contactError.textContent = '';
    }

    // Question validation
    const question = document.getElementById('question').value;
    const questionError = document.getElementById('questionError');
    if (question.trim() === '') {
        questionError.textContent = 'Question is required.';
        isValid = false;
    } else {
        questionError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();

        
    }

    if (isValid) {

        

        alert('Form submitted successfully!');
        document.getElementById('userForm').reset();

    }
});