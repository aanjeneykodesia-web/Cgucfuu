const API = "https://c-production-c7d3.up.railway.app";

// Load requests
fetch(API + "/admin/requests")
  .then(r => r.json())
  .then(d => {
    d.forEach(req => {
      // render request
    });
  });

// Approve request
function approveRequest(id) {
  fetch(API + "/approve-request", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  })
  .then(r => r.json())
  .then(res => alert(res.message));
}
