const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  },
  { passive: true },
);

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
hamburger.addEventListener("click", () => {
  const open = hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open", open);
  hamburger.setAttribute("aria-expanded", open);
});

function closeMobile() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
}
window.closeMobile = closeMobile;

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);
revealEls.forEach((el) => observer.observe(el));

function handleSubmit() {
  const fname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!fname) {
    document.getElementById("fname").style.borderColor = "var(--orange)";
  }
  if (!email) {
    document.getElementById("email").style.borderColor = "var(--orange)";
  }
  if (!fname || !email) {
    return;
  }

  document.getElementById("formContent").style.display = "none";
  document.getElementById("formSuccess").classList.add("visible");
}
window.handleSubmit = handleSubmit;

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener(
  "scroll",
  () => {
    let current = "";
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.style.color =
        link.getAttribute("href") === `#${current}` ? "var(--white)" : "";
    });
  },
  { passive: true },
);

