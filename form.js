function validateForm(event) {
    event.preventDefault();

    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var passwordInput = document.getElementById("password");
    var ageInput = document.getElementById("age");
    var genderInput = document.getElementById("gender");
    var dateInput = document.getElementById("date");
    var colorInput = document.getElementById("color");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var passwordError = document.getElementById("passwordError");
    var ageError = document.getElementById("ageError");
    var genderError = document.getElementById("genderError");
    var dateError = document.getElementById("dateError");
    var colorError = document.getElementById("colorError");

    var isValid = true;

    // Name validation
    if (nameInput.value === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Email validation
    if (emailInput.value === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Phone number validation
    var phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneInput.value)) {
      phoneError.textContent = "Invalid phone number";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }

    // Password validation
    if (passwordInput.value.length < 8) {
      passwordError.textContent = "Password should be at least 8 characters long";
      isValid = false;
    } else {
      passwordError.textContent = "";
    }

    // Age validation
    if (ageInput.value < 18 || ageInput.value > 100) {
      ageError.textContent = "Age should be between 18 and 100";
      isValid = false;
    } else {
      ageError.textContent = "";
    }

    // Gender validation
    if (genderInput.value === "") {
      genderError.textContent = "Gender is required";
      isValid = false;
    } else {
      genderError.textContent = "";
    }

    // Date validation
    var currentDate = new Date();
    var selectedDate = new Date(dateInput.value);
    if (selectedDate > currentDate) {
      dateError.textContent = "Invalid date";
      isValid = false;
    } else {
      dateError.textContent = "";
    }

    // Color validation
    if (colorInput.value === "") {
      colorError.textContent = "Color is required";
      isValid = false;
    } else {
      colorError.textContent = "";
    }

    if (isValid) {
      // Submit the form if all validations pass
      document.getElementById("myForm").submit();
    }
  }