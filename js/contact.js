document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');

    // Phone number validation
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        // Allow only numbers and limit to 10 digits
        this.value = this.value.replace(/[^0-9]/g, '').slice(0, 10);
    });

    // Form submission handling
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const course = document.getElementById('course').value;
        const message = document.getElementById('message').value.trim();
        const consent = document.getElementById('consent').checked;

        // Validation checks
        if (!name || name.length < 2) {
            alert('Please enter a valid name');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid 10-digit phone number starting with 6-9');
            return;
        }

        if (!course) {
            alert('Please select a course');
            return;
        }

        if (!message) {
            alert('Please enter a message');
            return;
        }

        if (!consent) {
            alert('Please agree to be contacted');
            return;
        }

        // If all validations pass
        const formData = {
            name: name,
            email: email,
            phone: phone,
            course: course,
            message: message
        };

        // Simulate form submission (replace with actual backend logic)
        console.log('Form Submitted:', formData);
        
        // Show success message
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
});
