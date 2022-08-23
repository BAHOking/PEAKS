let buttonTheme = document.querySelector(".button__theme");

let body = document.querySelector("body");

let header = document.querySelector(".header");
let landingLogoText = document.querySelector(".landing-logo__text");
let headerHeading = document.querySelector(".header_heading");
let headerHeadingSpan = document.querySelector(".header_heading-span");
let headerText = document.querySelector(".header_text");
let headerButton = document.querySelector(".header_button");

let sectionText = document.querySelector(".section_text");
let sectionTextSpan = document.querySelector(".section_text-span");
let sectionCard = document.querySelectorAll(".section_card");

let sectionBanner = document.querySelector(".section_banner");
let sectionBannerHeading = document.querySelector(".section_banner_heading");
let sectionBannerSpan = document.querySelector(".section_banner-span");
let sectionBannerButton = document.querySelector(".section_banner_button");

let footer = document.querySelector(".footer");

buttonTheme.addEventListener("click", func1);

let theme = 1;

function func1() {
  theme = 2;

  this.style.background = "linear-gradient(to right, #689801, #2b59dc)";
  this.style.color = "black";
  this.innerHTML = "L";

  body.style.background = "#21232e";

  header.style.backgroundImage = "url(images/m-h-night.jpg)";
  landingLogoText.style.color = "#fff";
  headerHeading.style.color = "#fff";
  headerHeadingSpan.style.background = "#ff4e33";
  headerText.style.color = "#fff";
  headerButton.style.background = "#e3ac00";

  sectionText.style.color = "#fff";
  sectionTextSpan.style.background = "#ff4e33";
  for (let elem of sectionCard) {
    elem.style.background = "#3b3f50";
  }

  sectionBanner.style.background =
    "linear-gradient(to right, #da9e09, #912a53)";
  sectionBannerHeading.style.color = "#fff";
  sectionBannerSpan.style.background = "#ff4e33";
  sectionBannerButton.style.background = "#e3ac00";

  footer.style.background = "#3b3f50";

  this.removeEventListener("click", func1);
  this.addEventListener("click", func2);
}

function func2() {
  theme = 1;

  this.style.background = "linear-gradient(to right, #da9e09, #912a53)";
  this.style.color = "blacwhite";
  this.innerHTML = "D";

  body.style.background = "white";

  header.style.backgroundImage = "url(images/m-h-day.jpg)";
  landingLogoText.style.color = "#2c2f3c";
  headerHeading.style.color = "#2c2f3c";
  headerHeadingSpan.style.background = "#14a0c7";
  headerText.style.color = "#2c2f3c";
  headerButton.style.background = "#699900";

  sectionText.style.color = "#2c2f3c";
  sectionTextSpan.style.background = "#14a0c7";
  for (let elem of sectionCard) {
    elem.style.background = "#21232e";
  }

  sectionBanner.style.background =
    "linear-gradient(to right, #689801, #2b59dc)";
  sectionBannerHeading.style.color = "#2c2f3c";
  sectionBannerSpan.style.background = "#14a0c7";
  sectionBannerButton.style.background = "#699900";

  footer.style.background = "#21232e";

  this.removeEventListener("click", func2);
  this.addEventListener("click", func1);
}

buttonTheme.addEventListener("mouseover", function () {
  this.style.color = "#fff";
});

buttonTheme.addEventListener("mouseout", function () {
  this.style.color = "#000";
});

headerButton.addEventListener("mouseover", function () {
  this.style.background = "#fff";
  this.style.color = "#000";
});

headerButton.addEventListener("mouseout", function () {
  this.style.color = "#fff";

  if (theme === 1) {
    this.style.background = "#699900";
  }
  if (theme === 2) {
    this.style.background = "#e3ac00";
  }
});

sectionBannerButton.addEventListener("mouseover", function () {
  this.style.background = "#fff";
  this.style.color = "#000";
});

sectionBannerButton.addEventListener("mouseout", function () {
  this.style.color = "#fff";

  if (theme === 1) {
    this.style.background = "#699900";
  }
  if (theme === 2) {
    this.style.background = "#e3ac00";
  }
});
