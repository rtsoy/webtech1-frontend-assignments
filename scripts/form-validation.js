// Validates a form for rating feedback
function validateRateUsForm() {
    // Get the form data
    var email = document.getElementById("exampleFormControlInput1").value;
    var message = document.getElementById("exampleFormControlTextarea1").value;

    // Email validation using a regular expression
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    // Check if the email is valid
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if the feedback message is empty
    if (message.length == 0) {
        alert("Message cannot be empty.");
        return;
    }

    // Show a Bootstrap modal dialog
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show()
}

// This function handles the radio button selection for rating
function handleRadioSelection(radio) {
    // Get all radio buttons with the name "rating"
    const radios = document.querySelectorAll('input[type="radio"][name="rating"]');

    // Uncheck other radio buttons when a new one is selected
    radios.forEach((r) => {
      if (r !== radio) {
        r.checked = false;
      }
    });
  }