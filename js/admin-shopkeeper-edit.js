const BACKEND_URL = "https://c-production-c7d3.up.railway.app";

// 🔐 simple admin check (mobile saved after login)
const role = localStorage.getItem("role");

if (role !== "admin") {
  alert("Access denied: Admin only");
  window.location.href = "index.html";
}

// Load shopkeeper items
fetch(`${BACKEND_URL}/admin/shopkeeper/items`)
  .then(res => res.json())
  .then(data => {
    if (!data.success) {
      alert("Failed to load items");
      return;
    }

    const container = document.getElementById("items");

    data.items.forEach((item, index) => {
      const div = document.createElement("div");
      div.style.border = "1px solid #ccc";
      div.style.margin = "10px";
      div.style.padding = "10px";

      div.innerHTML = `
        <b>Item ${index + 1}</b><br>
        Name: <input value="${item.name}" id="name-${index}" /><br>
        Price: <input value="${item.price}" id="price-${index}" /><br>
        <button onclick="saveItem(${index}, '${item.id}')">Save</button>
      `;

      container.appendChild(div);
    });
  });

function saveItem(index, id) {
  const name = document.getElementById(`name-${index}`).value;
  const price = document.getElementById(`price-${index}`).value;

  fetch(`${BACKEND_URL}/admin/shopkeeper/items/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Item updated");
      } else {
        alert("Update failed");
      }
    });
}
