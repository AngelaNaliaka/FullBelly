// Handling Food Waste Form Submission
document.getElementById('log-waste-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value;
  const reason = document.getElementById('reason').value;

  const wasteLog = document.getElementById('waste-log');
  const wasteEntry = document.createElement('p');
  wasteEntry.textContent = `${product} - ${quantity}kg discarded due to ${reason}.`;

  wasteLog.appendChild(wasteEntry);

  // Clear form fields
  document.getElementById('log-waste-form').reset();
});

// Handling Food Donation Form Submission
document.getElementById('donation-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const donationItem = document.getElementById('donation-item').value;
  const donationQuantity = document.getElementById('donation-quantity').value;

  const donationLog = document.getElementById('donation-log');
  const donationEntry = document.createElement('p');
  donationEntry.textContent = `${donationItem} - ${donationQuantity}kg donated.`;

  donationLog.appendChild(donationEntry);

  // Clear form fields
  document.getElementById('donation-form').reset();
});
