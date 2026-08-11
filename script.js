// Pequenas interações, sem dependências externas.
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const hero = document.querySelector(".hero-image");
window.addEventListener("scroll", () => {
  if (!hero || window.innerWidth < 800) return;
  hero.style.transform = `translateY(${window.scrollY * 0.08}px)`;
}, { passive: true });
