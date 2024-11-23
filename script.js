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

  // Update sustainability metrics
  const totalReduced = document.getElementById('total-reduced');
  let reduced = parseInt(totalReduced.innerText.replace('kg', '')) + parseInt(quantity);
  totalReduced.innerText = `${reduced}kg`;

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

  // Update sustainability metrics for donation
  const totalDonated = document.getElementById('total-donated');
  let donated = parseInt(totalDonated.innerText.replace('kg', '')) + parseInt(donationQuantity);
  totalDonated.innerText = `${donated}kg`;

  // Update community impact
  const communityImpact = document.getElementById('community-impact');
  let impact = parseInt(communityImpact.innerText.replace('people helped', '')) + Math.ceil(donationQuantity / 5);
  communityImpact.innerText = `${impact} people helped`;

  // Clear form fields
  document.getElementById('donation-form').reset();
});
