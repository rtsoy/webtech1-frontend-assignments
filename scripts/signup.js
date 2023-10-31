$(document).ready(function() {
    $("#registerButton").prop("disabled", true);

    // Validation for first name and last name
    function validateNameInput(inputField, errorElement) {
        const value = inputField.val().trim();
        if (value.length < 2) {
            errorElement.text("At least 2 characters required");
            return false;
        } else {
            errorElement.text("");
            return true;
        }
    }

    // Validation for email
    function validateEmailInput(inputField, errorElement) {
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        const value = inputField.val().trim();
        if (!emailRegex.test(value)) {
            errorElement.text("Invalid email address");
            return false;
        } else {
            errorElement.text("");
            return true;
        }
    }

    // Validation for password
    function validatePasswordInput(inputField, errorElement) {
        const value = inputField.val();
        if (value.length < 8) {
            errorElement.text("At least 8 characters required");
            return false;
        } else {
            errorElement.text("");
            return true;
        }
    }

    // Validation for confirm password
    function validateConfirmPasswordInput(password1, password2, errorElement) {
        const value1 = password1.val();
        const value2 = password2.val();
        if (value1 !== value2) {
            errorElement.text("Passwords do not match");
            return false;
        } else {
            errorElement.text("");
            return true;
        }
    }

    // Validation for agree checkbox
    function validateAgreeCheckbox(checkbox, errorElement) {
        if (!checkbox.is(":checked")) {
            errorElement.text("You must agree to the terms!");
            return false;
        } else {
            errorElement.text("");
            return true;
        }
    }

    const firstNameInput = $("#inputFirstName");
    const lastNameInput = $("#inputLastName");
    const emailInput = $("#inputEmail");
    const passwordInput1 = $("#inputPassword1");
    const passwordInput2 = $("#inputPassword2");
    const agreeCheckbox = $("#agreeCheckbox")

    const firstNameError = $("#firstNameError");
    const lastNameError = $("#lastNameError");
    const emailError = $("#emailError");
    const passwordError1 = $("#passwordError1");
    const passwordError2 = $("#passwordError2");
    const agreeError = $("#checkBoxError")

    const registerButton = $("#registerButton");

    firstNameInput.on("input", function() {
        validateNameInput(firstNameInput, firstNameError);
        updateRegisterButtonState();
    });

    lastNameInput.on("input", function() {
        validateNameInput(lastNameInput, lastNameError);
        updateRegisterButtonState();
    });

    emailInput.on("input", function() {
        validateEmailInput(emailInput, emailError);
        updateRegisterButtonState();
    });

    passwordInput1.on("input", function() {
        validatePasswordInput(passwordInput1, passwordError1);
        validateConfirmPasswordInput(passwordInput1, passwordInput2, passwordError2);
        updateRegisterButtonState();
    });

    passwordInput2.on("input", function() {
        validateConfirmPasswordInput(passwordInput1, passwordInput2, passwordError2);
        updateRegisterButtonState();
    });

    agreeCheckbox.on("change", function() {
        validateAgreeCheckbox(agreeCheckbox, agreeError);
        updateRegisterButtonState();
    });

    function updateRegisterButtonState() {
        if (
            validateNameInput(firstNameInput, firstNameError) &&
            validateNameInput(lastNameInput, lastNameError) &&
            validateEmailInput(emailInput, emailError) &&
            validatePasswordInput(passwordInput1, passwordError1) &&
            validateConfirmPasswordInput(passwordInput1, passwordInput2, passwordError2) && 
            validateAgreeCheckbox(agreeCheckbox, agreeError)
        ) {
            registerButton.prop("disabled", false);
        } else {
            registerButton.prop("disabled", true);
        }
    }

    registerButton.on("click", function() {
        if (!registerButton.prop("disabled")) {
            alert("User registered successfully!");
        }
    });
});
