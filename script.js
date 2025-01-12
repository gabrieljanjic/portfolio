"use strict";

document.getElementById("to-do-list").addEventListener("click", function () {
  window.open("https://gabrieljanjic.github.io/to-do-list/", "_blank");
});

document.getElementById("omnifood").addEventListener("click", function () {
  window.open("https://gabrieljanjic.github.io/omnifood/", "_blank");
});

document.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const scrollPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  console.log(scrollPosition);
  console.log(viewportHeight);
  if (scrollPosition > viewportHeight - 100) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

window.addEventListener("scroll", function () {
  let projects = document.querySelectorAll(".div-project");
  projects.forEach(function (project) {
    let position = project.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom > 0) {
      project.classList.add("visible");
    } else {
      project.classList.remove("visible");
    }
  });
});
