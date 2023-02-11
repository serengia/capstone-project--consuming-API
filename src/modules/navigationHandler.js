const homeBtn = document.getElementById("home");
const contactBtn = document.getElementById("contact");
const sections = document.querySelectorAll(".section");
const sectionMain = document.querySelector(".section-main");
const sectionContact = document.querySelector(".section-contact");

const hideAllSections = () => {
  sections.forEach((sec) => {
    sec.style.display = "none";
  });
};

const navigationHandler = () => {
  homeBtn.addEventListener("click", () => {
    hideAllSections();
    sectionMain.style.display = "block";
  });

  contactBtn.addEventListener("click", () => {
    hideAllSections();
    sectionContact.style.display = "block";
  });
};

export default navigationHandler;
