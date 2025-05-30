// Modal open/close functionality
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modal");

  openBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "false");
  });

  closeBtn.addEventListener("click", () => {
    modal.setAttribute("aria-hidden", "true");
  });
});
