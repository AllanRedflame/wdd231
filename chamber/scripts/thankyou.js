const params = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("date").value = new Date().toISOString();
});

document.getElementById("out-first").textContent = params.get("first-name");
document.getElementById("out-last").textContent = params.get("last-name");
document.getElementById("out-email").textContent = params.get("email-box");
document.getElementById("out-phone").textContent = params.get("phone-number-box");
document.getElementById("out-business").textContent = params.get("business-name-box");
document.getElementById("out-date").textContent = params.get("date-accessed");

