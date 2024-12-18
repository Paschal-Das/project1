$(document).ready(function() {
    $('#registrationForm').on('submit', function(e) {
        let isValid = true;

        // Remove previous error messages
        $('.error').remove();

        // Validate Name
        if ($('#name').val().trim() === '') {
            $('#name').after('<span class="error">Name is required</span>');
            isValid = false;
        }

        // Validate Email
        const email = $('#email').val();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#email').after('<span class="error">Invalid email format</span>');
            isValid = false;
        }

        // Validate Phone
        const phone = $('#phone').val();
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            $('#phone').after('<span class="error">Phone number must be 10 digits</span>');
            isValid = false;
        }

        // Validate Message
        if ($('#message').val().trim() === '') {
            $('#message').after('<span class="error">Message cannot be empty</span>');
            isValid = false;
        }

        // Stop form submission if validation fails
        if (!isValid) {
            e.preventDefault();
        }
    });
});