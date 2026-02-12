
const manufacturerId = "M1";

fetch(`https://c-production-df72.up.railway.appmanufacturer-orders/${manufacturerId}`)
  .then(res => res.json())
  .then(orders => {
    orders.forEach(order => {
      const div = document.createElement("div");
      div.innerHTML = `
        <h3>Order ID: ${order.orderId}</h3>
        <p>Status: ${order.status}</p>
        <ul>
          ${order.items.map(i => `<li>${i.name} - Qty: ${i.qty}</li>`).join("")}
        </ul>
      `;
      document.body.appendChild(div);
    });
  });
