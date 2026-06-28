document.addEventListener('DOMContentLoaded', () => {
    
  // Contact Form (Home page)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[type="text"]').value;
      
      if (name.trim() === '') {
        alert("Please enter your name.");
        return;
      }
      
      alert(`Thank you, ${name}! Your message has been received. We will contact you soon at whiteperfect946@gmail.com.`);
      this.reset();
    });
  }

  // Quote Form (Services page)
  const quoteForms = document.querySelectorAll('.quote');
  quoteForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[placeholder*="Name"]').value;
      
      if (name && name.trim() !== '') {
        alert(`Thank you, ${name}! Your quote request has been submitted successfully. We will respond within 24 hours at whiteperfect946@gmail.com.`);
        this.reset();
      } else {
        alert("Please fill in your name.");
      }
    });
  });

});