// 🔗 Live Railway backend
const BACKEND_URL = "https://c-production-df72.up.railway.app";

document.addEventListener("DOMContentLoaded", () => {
  console.log("edit.js loaded");

  // Only admin should see this
  loadUsers();
});

// 🔹 Load all users for admin panel
async function loadUsers() {
  try {
    const res = await fetch(`${BACKEND_URL}/admin/users`);
    const data = await res.json();

    if (!data.success) {
      console.error("Failed to load users");
      return;
    }

    renderUsers(data.users);
  } catch (err) {
    console.error("Admin fetch error:", err);
  }
}

// 🔹 Render users in admin panel
function renderUsers(users) {
  const container = document.getElementById("adminList");

  if (!container) {
    console.warn("adminList element not found");
    return;
  }

  container.innerHTML = "";

  users.forEach((user, index) => {
    const row = document.createElement("div");
    row.style.border = "1px solid #ccc";
    row.style.padding = "8px";
    row.style.marginBottom = "6px";

    row.innerHTML = `
      <b>${index + 1}. ${user.mobile}</b>
      <br>Role: ${user.role}
      <br>
      <button onclick="editUser('${user.mobile}')">Edit</button>
    `;

    container.appendChild(row);
  });
}

// 🔹 Edit user (placeholder for now)
function editUser(mobile) {
  alert("Edit clicked for: " + mobile);
  // Later you can open modal / form here
}
