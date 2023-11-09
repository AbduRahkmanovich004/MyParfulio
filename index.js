// for animate sections
const allSections = document.querySelectorAll("nav, section, footer");

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  setTimeout(() => {
      entry.target.classList.remove("div");
  }, 200);
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("div");
});