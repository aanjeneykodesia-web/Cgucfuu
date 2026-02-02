
function placeOrder() {
  const cart = [
    { productId: "P1", name:"Rice", qty:2, price:50, manufacturerId:"M1" },
    { productId: "P2", name:"Sugar", qty:1, price:40, manufacturerId:"M2" },
    { productId: "P3", name:"Oil", qty:3, price:120, manufacturerId:"M1" }
  ];

  fetch("https://supply-chain-backend-production-36ed.up.railway.app/place-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ shopkeeperId:"S1", items: cart })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}
