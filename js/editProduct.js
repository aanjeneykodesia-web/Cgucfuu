const API = "https://c-production-c7d3.up.railway.app";

if (localStorage.getItem("role") !== "admin") {
  document.body.innerHTML = "Access Denied";
}

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

fetch(API + "/admin/products")
  .then(r => r.json())
  .then(d => {
    const p = d.products.find(x => x.id === productId);
    if (!p) return alert("Product not found");
    pname.value = p.name;
    pprice.value = p.price;
    pqty.value = p.qty;
  });

function updateProduct() {
  fetch(API + "/admin/update-product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: productId,
      price: pprice.value,
      qty: pqty.value
    })
  }).then(() => window.location.href = "admin.html");
}

function goBack() {
  window.location.href = "admin.html";
}