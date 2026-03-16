
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector("[data-mobile-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");

  if (toggle) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  document.querySelectorAll("[data-faq-question]").forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      answer.classList.toggle("hidden");
    });
  });
});
