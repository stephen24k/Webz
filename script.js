 function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    // Dark mode toggle
    document.getElementById("toggle-dark").onclick = () => {
      document.body.classList.toggle("dark-mode");
    };

       function toggleDarkMode() {
      document.body.classList.toggle('dark-mode');
    }

    // Animated form submission
     const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
    function sendMessage(e) {
      e.preventDefault();
 
      const response = document.getElementById('form-response');
      response.innerText = 'Sending...';

      // Simulate sending
      setTimeout(() => {
        response.innerText = `Thanks, ${name}! Your message has been sent.`;
        document.querySelector('form').reset();
      }, 2000);

      // TODO: Connect to Formspree or backend API here
    }