/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const myCustomNav = document.getElementById("navbar__list");
for (let i = 1; i <= 4; i++) {
  const newList = document.createElement("li");
  newList.innerHTML = `<a href=#section${i} class='nav-link'>section ${i}`;
  newList.setAttribute("class", "nav-item");

  myCustomNav.appendChild(newList);
}

const myNav = document.getElementById("navbar-icon");

myNav.addEventListener("click", function () {
  const myCollapse = document.getElementById("collapse");
  myCollapse.classList.toggle("slide");
});

// Add class 'active' to section when near top of viewport
const setActive = document.getElementsByClassName("nav-item");
for (let i = 0; i < setActive.length; i++) {
  setActive[i].onclick = function () {
    // remove class from sibling

    let el = setActive[0];
    while (el) {
      if (el.tagName === "LI") {
        //remove class
        el.classList.remove("active");
      }
      // pass to the new sibling
      el = el.nextSibling;
    }

    this.classList.add("active");
  };
}

// Scroll to anchor ID using scrollTO event
let sectionOne = document.querySelector("#section1"),
  sectionTwo = document.querySelector("#section2"),
  sectionThree = document.querySelector("#section3"),
  sectionFour = document.querySelector("#section4");

window.addEventListener("scroll", function () {
  const windo = window.pageYOffset + 200,
    listOne = document.querySelector("li:nth-child(1)"),
    listTwo = document.querySelector("li:nth-child(2)"),
    listThree = document.querySelector("li:nth-child(3)"),
    listFour = document.querySelector("li:nth-child(4)");
  if (sectionOne.offsetTop <= windo && sectionTwo.offsetTop > windo) {
    listOne.setAttribute("class", "active");
    listTwo.removeAttribute("class", "active");
    listThree.removeAttribute("class", "active");
    listFour.removeAttribute("class", "active");
    sectionOne.setAttribute("class", "your-active-class");
    sectionTwo.removeAttribute("class", "your-active-class");
    sectionThree.removeAttribute("class", "your-active-class");
    sectionFour.removeAttribute("class", "your-active-class");
  } else if (sectionTwo.offsetTop <= windo && sectionThree.offsetTop > windo) {
    listTwo.setAttribute("class", "active");
    listOne.removeAttribute("class", "active");
    listThree.removeAttribute("class", "active");
    listFour.removeAttribute("class", "active");
    sectionTwo.setAttribute("class", "your-active-class");
    sectionOne.removeAttribute("class", "your-active-class");
    sectionThree.removeAttribute("class", "your-active-class");
    sectionFour.removeAttribute("class", "your-active-class");
  } else if (sectionThree.offsetTop <= windo && sectionFour.offsetTop > windo) {
    listThree.setAttribute("class", "active");
    listTwo.removeAttribute("class", "active");
    listOne.removeAttribute("class", "active");
    listFour.removeAttribute("class", "active");
    sectionThree.setAttribute("class", "your-active-class");
    sectionTwo.removeAttribute("class", "your-active-class");
    sectionOne.removeAttribute("class", "your-active-class");
    sectionFour.removeAttribute("class", "your-active-class");
  } else if (sectionFour.offsetTop <= windo) {
    listFour.setAttribute("class", "active");
    listTwo.removeAttribute("class", "active");
    listThree.removeAttribute("class", "active");
    listOne.removeAttribute("class", "active");
    sectionFour.setAttribute("class", "your-active-class");
    sectionTwo.removeAttribute("class", "your-active-class");
    sectionThree.removeAttribute("class", "your-active-class");
    sectionOne.removeAttribute("class", "your-active-class");
  }
});

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
const links = document.querySelectorAll(".navbar__menu ul li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop - 50;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
// Set sections as active
let sectionOne = document.querySelector("#section1"),
  sectionTwo = document.querySelector("#section2"),
  sectionThree = document.querySelector("#section3"),
  sectionFour = document.querySelector("#section4");

window.addEventListener("scroll", function () {
  const windo = window.pageYOffset + 200,
  if (sectionOne.offsetTop <= windo && sectionTwo.offsetTop > windo) {
    sectionOne.setAttribute("class", "your-active-class");
    sectionTwo.removeAttribute("class", "your-active-class");
    sectionThree.removeAttribute("class", "your-active-class");
    sectionFour.removeAttribute("class", "your-active-class");
  } else if (sectionTwo.offsetTop <= windo && sectionThree.offsetTop > windo) {
    sectionTwo.setAttribute("class", "your-active-class");
    sectionOne.removeAttribute("class", "your-active-class");
    sectionThree.removeAttribute("class", "your-active-class");
    sectionFour.removeAttribute("class", "your-active-class");
  } else if (sectionThree.offsetTop <= windo && sectionFour.offsetTop > windo) {
    sectionThree.setAttribute("class", "your-active-class");
    sectionTwo.removeAttribute("class", "your-active-class");
    sectionOne.removeAttribute("class", "your-active-class");
    sectionFour.removeAttribute("class", "your-active-class");
  } else if (sectionFour.offsetTop <= windo) {
    sectionFour.setAttribute("class", "your-active-class");
    sectionTwo.removeAttribute("class", "your-active-class");
    sectionThree.removeAttribute("class", "your-active-class");
    sectionOne.removeAttribute("class", "your-active-class");
  }
});