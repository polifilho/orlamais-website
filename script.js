const header = document.querySelector(".site-header--overlay");

if (header) {
  const updateHeader = () => {
    const isScrolled = window.scrollY > 20;
    header.classList.toggle("site-header--solid", isScrolled);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0 && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealElements.forEach((element) => observer.observe(element));
}
