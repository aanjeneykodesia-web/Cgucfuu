const API = "https://c-production-c7d3.up.railway.app";

function loadProducts() {
  fetch(API + "/admin/products")
    .then(r => r.json())
    .then(d => {
      const box = document.getElementById("productList");
      box.innerHTML = "";
      d.products.forEach(p => {
        box.innerHTML += `
          <div style="border:1px solid #aaa;padding:8px;margin:8px">
            <b>${p.name}</b><br>
            Price: ${p.price} | Qty: ${p.qty}<br>
            <button onclick="openEditPage('${p.id}')">Edit</button>
          </div>`;
      });
    });
}

function openEditPage(id) {
  window.location.href = "edit-product.html?id=" + id;
}

function addProduct() {
  fetch(API + "/admin/add-product", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: pid.value,
      name: pname.value,
      price: pprice.value,
      qty: pqty.value
    })
  }).then(loadProducts);
}

loadProducts();