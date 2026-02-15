const role = localStorage.getItem("role");
const latitude = localStorage.getItem("latitude");
const longitude = localStorage.getItem("longitude");

// Protect page
if (!role) {
  window.location.href = "index.html";
}

// Show role
document.getElementById("userRole").innerText = role.toUpperCase();

// Show location
if (latitude && longitude) {
  document.getElementById("userLocation").innerText =
    latitude + ", " + longitude;
} else {
  document.getElementById("userLocation").innerText = "N/A";
}

// Navigation
function goHome() {
  location.reload();
}

function goProducts() {
  alert("Products page coming soon");
}

function goOrders() {
  alert("Orders page coming soon");
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
