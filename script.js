"use strict";
/*Typing name */
const text = "Gabriel Janjić";
const typingText = document.querySelector(".typing-text");

let index = 0;

window.addEventListener("load", typeCharacter);

function typeCharacter() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeCharacter, 100);
  }
}
/*Typing array */
const texts = ["Front-end developer", "bacc. ing. techn. inf. (soon)"];
const typingArray = document.querySelector(".typing-array");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];
  if (!isDeleting) {
    typingArray.textContent += currentText.charAt(charIndex);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1500);
      return;
    }
  } else {
    typingArray.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }
  }
  const speed = isDeleting ? 50 : 120;
  setTimeout(typeEffect, speed);
}
window.addEventListener("load", typeEffect);
/*Changing language */
const uk = document.querySelector(".uk");
const croatia = document.querySelector(".croatia");
/*Personal info */
const nameTitle = document.getElementById("name-title");
const nameContent = document.getElementById("name-content");
const dateTitle = document.getElementById("date-title");
const dateContent = document.getElementById("date-content");
const addressTitle = document.getElementById("address-title");
const addressContent = document.getElementById("address-content");
const zipTitle = document.getElementById("zip-title");
const zipContent = document.getElementById("zip-content");
const emailTitle = document.getElementById("email-title");
const emailContent = document.getElementById("email-content");
const phoneTitle = document.getElementById("phone-title");
const phoneContent = document.getElementById("phone-content");
const educationTitle = document.getElementById("education-title");
const educationContent = document.getElementById("education-content");
const aboutMe = document.getElementById("about-me");
const skills = document.getElementById("skills");
const projects = document.getElementById("projects");
const btnDownload = document.getElementById("btn-download");
/*NAV BAR */
const navBarAboutMe = document.getElementById("nav-bar-about-me");
const navBarSkills = document.getElementById("nav-bar-skills");
const navBarProjects = document.getElementById("nav-bar-projects");

uk.addEventListener("click", function () {
  uk.classList.add("contrast");
  croatia.classList.remove("contrast");
  nameTitle.textContent = "	Name:";
  dateTitle.textContent = "Date of Birth:";
  dateContent.textContent = "June 15, 2002";
  addressTitle.textContent = "Address:";
  addressContent.textContent = "Šenova 3, Zagreb, CRO";
  zipTitle.textContent = "Zip Code:";
  phoneTitle.textContent = "Phone:";
  educationTitle.textContent = "Education:";
  educationContent.textContent = "Bacc. Ing. Techn. Inf.";
  btnDownload.textContent = "Download my CV";
  aboutMe.textContent = "About me";
  skills.textContent = "Skills";
  projects.textContent = "Projects";

  navBarAboutMe.textContent = "About me";
  navBarSkills.textContent = "Skills";
  navBarProjects.textContent = "Projects";
});
croatia.addEventListener("click", function () {
  croatia.classList.add("contrast");
  uk.classList.remove("contrast");
  nameTitle.textContent = "Ime:";
  dateTitle.textContent = "Datum rođenja:";
  dateContent.textContent = "15.06.2002.";
  addressTitle.textContent = "Adresa:";
  addressContent.textContent = "Šenova 3, Zagreb, Hrvatska";
  zipTitle.textContent = "Poštanski broj:";
  phoneTitle.textContent = "Broj:";
  educationTitle.textContent = "Edukacija:";
  educationContent.textContent = "Bacc. Ing. Techn. Inf., smjer Održavanje računalnih sustava";
  btnDownload.textContent = "Preuzmite moj životopis";

  aboutMe.textContent = "O meni";
  skills.textContent = "Vještine";
  projects.textContent = "Projekti";

  navBarAboutMe.textContent = "O meni";
  navBarSkills.textContent = "Vještine";
  navBarProjects.textContent = "Projekti";
});
/*Links to projects */
document.getElementById("to-do-list").addEventListener("click", function () {
  window.open("https://gabrieljanjic.github.io/to-do-list/", "_blank");
});

document.getElementById("omnifood").addEventListener("click", function () {
  window.open("https://gabrieljanjic.github.io/omnifood/", "_blank");
});
document.getElementById("weather").addEventListener("click", function () {
  window.open("https://gabrieljanjic.github.io/weather-app/", "_blank");
});

document.getElementById("calculator").addEventListener("click", function () {
  window.open("https://gabrieljanjic.github.io/calculator/", "_blank");
});
document.getElementById("imdb").addEventListener("click", function () {
  window.open("https://gabrieljanjic.github.io/imdb/", "_blank");
});

document.getElementById("rps").addEventListener("click", function () {
  window.open("https://gabrieljanjic.github.io/rock-paper-scissors/", "_blank");
});
///*Showing navBar *///

const aboutMeSection = document.querySelector(".about-me-section");
const welcomeSection = document.querySelector(".welcome-section");

const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (enteries) {
  const [entry] = enteries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const welcomeSectionObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

welcomeSectionObserver.observe(welcomeSection);

///*Showing divs*///
const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.remove("section-hidden");
      observer.unobserve(entry.target);
    }
  });
};

const allSectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  allSectionObserver.observe(section);
  section.classList.add("section-hidden");
  console.log(section);
});
s;
