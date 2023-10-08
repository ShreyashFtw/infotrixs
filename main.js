document.addEventListener("DOMContentLoaded", function () {
    function handleGetStartedClick() {
      const emailInput = document.querySelector(".email");
      const userEmail = emailInput.value;
  
      if (userEmail && userEmail.includes("@")) {
        // The email contains "@" symbol
        alert(`Thank you for signing up with email: ${userEmail}`);
      } else {
        alert("Please enter a valid email address");
      }
    }
  
    // Added a click event listener to the "Get Started" button
    const getStartedButton = document.querySelector(".get_started");
    getStartedButton.addEventListener("click", handleGetStartedClick);
    });
  