function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const contact = document.getElementById("contact").value;
  
    // Basic validation
    if (name === "") {
      alert("Please enter your name.");
      return false;
    }
    if (email === "") {
      alert("Please enter your email address.");
      return false;
    }
    if (password === "") {
      alert("Please enter a password.");
      return false;
    }
    if (contact === "") {
      alert("Please enter your contact number.");
      return false;
    }

    // Submit the form
    return true;
  }