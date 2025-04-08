
        function validateForm() {
            let email = document.getElementById("email").value;
            let confirmEmail = document.getElementById("confirm-email").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirm-password").value;
            let emailError = document.getElementById("email-error");
            let passwordError = document.getElementById("password-error");
            let valid = true;

            if (email !== confirmEmail) {
                emailError.style.display = "block";
                valid = false;
            } else {
                emailError.style.display = "none";
            }

            if (password !== confirmPassword) {
                passwordError.style.display = "block";
                valid = false;
            } else {
                passwordError.style.display = "none";
            }

            return valid;
        }
    