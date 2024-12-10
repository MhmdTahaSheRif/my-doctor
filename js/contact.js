document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (name && email && message) {
      alert("Thank you for contacting us, " + name + "! We will get back to you soon.");
      // You can replace this with an actual form submission to a backend server
      document.getElementById("contactForm").reset(); // Reset form after submission
    } else {
      alert("Please fill out all fields.");
    }
  });
  