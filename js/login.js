const BACKEND_URL = "https://c-production-c7d3.up.railway.app";

document.addEventListener("DOMContentLoaded", () => {

  const mobileInput =
    document.getElementById("mobile") ||
    document.querySelector("input[type='tel']") ||
    document.querySelector("input[type='number']") ||
    document.querySelector("input");

  if (!mobileInput) {
    alert("Mobile input not found");
    return;
  }

  // 🔁 Login when user presses ENTER
  mobileInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      loginUser();
    }
  });

  // 🔁 Also login when input loses focus (optional but useful)
  mobileInput.addEventListener("blur", () => {
    if (mobileInput.value.trim().length >= 10) {
      loginUser();
    }
  });

  async function loginUser() {
    const mobile = mobileInput.value.trim();

    if (!mobile) {
      alert("Please enter mobile number");
      return;
    }

    try {
      const res = await fetch(`${BACKEND_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile })
      });

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (!data.success || !data.role) {
        alert(data.message || "Login failed");
        return;
      }

      // ✅ STRICT ROLE ROUTING
      if (data.role === "admin") {
        window.location.href = "dashboard.html";
      }
      else if (data.role === "manufacturer") {
        window.location.href = "dashboard5.html";
      }
      else if (data.role === "shopkeeper") {
        window.location.href = "dashboard6.html";
      }
      else if (data.role === "transporter") {
        window.location.href = "dashboard7.html";
      }
      else {
        alert("Unknown role: " + data.role);
      }

    } catch (err) {
      console.error(err);
      alert("Server not reachable");
    }
  }
});