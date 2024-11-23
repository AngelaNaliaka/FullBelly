document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Log food waste (For simplicity, we log it to console here)
  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value;
  const reason = document.getElementById('reason').value;

  console.log(`Product: ${product}, Quantity: ${quantity}, Reason: ${reason}`);

  // Reset the form after submission
  document.querySelector('form').reset();
  alert('Waste Logged!');
});
