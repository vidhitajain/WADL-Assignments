document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;

  
      // Validation: Check if username contains numeric values
      ///\d/ is a regular expression pattern that matches any numeric digit 
      if (/\d/.test(username)) {
        alert('Username cannot contain numeric characters.');
        return;
      }
  
      alert('Login successful!');
    });
  });