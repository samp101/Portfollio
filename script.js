const projects = document.querySelectorAll(".projects");

let options = {
  root: document.querySelector(".projects"),
  rootMargin: "0px",
  threshold: 0.5,
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slider");
    }
  });
});

projects.forEach((project) => {
  observer.observe(project);
});
