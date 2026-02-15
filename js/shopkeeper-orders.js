const mobile = localStorage.getItem("selectedUser");

if (!mobile) {
  alert("No user selected");
  window.location.href = "admin-dashboard.html";
}

fetch(`/orders/${mobile}`)
  .then(res => res.json())
  .then(data => {

    const container = document.getElementById("ordersContainer");

    if (!data.orders || data.orders.length === 0) {
      container.innerHTML = "<p>No orders found.</p>";
      return;
    }

    data.orders.forEach(order => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Product:</strong> ${order.product}</p>
        <p><strong>Quantity:</strong> ${order.quantity}</p>
        <hr>
      `;
      container.appendChild(div);
    });

  });
