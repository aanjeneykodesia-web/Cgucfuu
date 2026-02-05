const API = "https://c-production-c7d3.up.railway.app";

const adminList = document.getElementById("adminList");

fetch(API + "/admin/users")
  .then(res => res.json())
  .then(data => {
    if (!data.success || data.users.length === 0) {
      adminList.innerHTML = "<p>No users found</p>";
      return;
    }

    adminList.innerHTML = "";

    data.users.forEach((user, index) => {
      const box = document.createElement("div");
      box.style.border = "1px solid #ccc";
      box.style.margin = "10px";
      box.style.padding = "10px";

      box.innerHTML = `
        <strong>${index + 1}. ${user.mobile}</strong><br>
        Role: ${user.role}<br>
        <button onclick="editUser('${user.mobile}')">Edit</button>
      `;

      adminList.appendChild(box);
    });
  })
  .catch(err => {
    adminList.innerHTML = "<p>Error loading users</p>";
    console.error(err);
  });

function editUser(mobile) {
  window.location.href = "edit.html?mobile=" + mobile;
}
