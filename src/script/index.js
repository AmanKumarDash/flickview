document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
  
        if (username === 'admin' && password === 'password') {
          alert('Login Successful');
          window.location.assign("main.html")
        } else {
          alert('Invalid username or password');
        }
      });
  
      // Handle registration form submission
      document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;
        const confirmPassword = document.getElementById('regConfirmPassword').value;
  
        if (username && email && password && confirmPassword) {
          if (password === confirmPassword) {
            alert('Registration Successful');
            document.getElementById('registrationForm').reset();
          } else {
            alert('Passwords do not match');
          }
        } else {
          alert('Please fill in all fields');
        }
      });
  
      // Toggle between login and registration forms
      var loginForm = document.getElementById('loginForm');
      var registrationForm = document.getElementById('registrationForm');
      var showRegFormBtn = document.getElementById('showRegistrationForm');
      var backToLoginFormBtn = document.getElementById('backToLoginForm');
  
      showRegFormBtn.addEventListener('click', function(event) {
        event.preventDefault();
        loginForm.style.display = 'none';
        registrationForm.style.display = 'block';
      });
  
      backToLoginFormBtn.addEventListener('click', function(event) {
        event.preventDefault();
        registrationForm.style.display = 'none';
        loginForm.style.display = 'block';
      });