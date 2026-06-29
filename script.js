document.addEventListener('DOMContentLoaded', () => {

  // ==================== SERVICES DATA ====================
  const services = [
    {
      id: 1,
      name: "Printing & Photocopying",
      price: 500
    },
    {
      id: 2,
      name: "Document Editing & Formatting",
      price: 2500
    },
    {
      id: 3,
      name: "Laminating",
      price: 800
    },
    {
      id: 4,
      name: "Passport Photographs",
      price: 1500
    },
    {
      id: 5,
      name: "Binding (Spiral / Hard Cover)",
      price: 1200
    },
    {
      id: 6,
      name: "PDF Conversion & Merging",
      price: 1000
    },
    {
      id: 7,
      name: "Scanning Documents",
      price: 600
    },
    {
      id: 8,
      name: "Resume / Thesis Writing Assistance",
      price: 3000
    },
    {
      id: 9,
      name: "Form Filling & Official Documents",
      price: 2000
    }
  ];

  // Render service cards
  const serviceGrid = document.getElementById('serviceGrid');
  services.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.innerHTML = `
      <h3>${service.name}</h3>
      <p><strong>From ₦${service.price}</strong></p>
      <small>Click to order</small>
    `;
    card.onclick = () => openOrderPanel(service);
    serviceGrid.appendChild(card);
  });

  // ==================== ORDER PANEL LOGIC ====================
  let currentService = null;
  let quantity = 1;

  function openOrderPanel(service) {
    currentService = service;
    quantity = 1;

    document.getElementById('selectedService').textContent = service.name;
    document.getElementById('quantity').textContent = quantity;
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('orderPanel').style.display = 'block';
    document.getElementById('locationField').style.display = 'none';
  }

  window.changeQty = function(amount) {
    quantity = Math.max(1, quantity + amount);
    document.getElementById('quantity').textContent = quantity;
  };

  // Toggle delivery location
  document.getElementById('delivery').addEventListener('change', function() {
    document.getElementById('locationField').style.display = this.checked ? 'block' : 'none';
  });

  window.closePanel = function() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('orderPanel').style.display = 'none';
  };

  // Submit Order
  window.submitOrder = function() {
    const printType = document.getElementById('printType').value;
    const notes = document.getElementById('notes').value;
    const delivery = document.getElementById('delivery').checked;
    const location = document.getElementById('location').value;
    const fileInput = document.getElementById('fileUpload');

    let summary = `✅ ORDER SUMMARY\n\n`;
    summary += `Service: ${currentService.name}\n`;
    summary += `Quantity: ${quantity}\n`;
    summary += `Print Type: ${printType}\n`;
    summary += `Total Amount: ₦${(currentService.price * quantity).toLocaleString()}\n\n`;

    if (notes) summary += `Notes: ${notes}\n\n`;
    if (delivery && location) summary += `Delivery Location: ${location}\n`;
    else if (delivery) summary += `Delivery Requested\n`;

    summary += `\nThank you for ordering with Austin Global Services!`;

    alert(summary);

    // Optional: You can later connect this to WhatsApp
    // Example: window.open(`https://wa.me/2349115643951?text=${encodeURIComponent(summary)}`);

    closePanel();
    
    // Reset form
    document.getElementById('notes').value = '';
    document.getElementById('delivery').checked = false;
    document.getElementById('location').value = '';
  };

  // Keep previous form handlers (Home & old services)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = this.querySelector('input[type="text"]').value || "Customer";
      alert(`Thank you, ${name}! Your message has been received.`);
      this.reset();
    });
  }
});