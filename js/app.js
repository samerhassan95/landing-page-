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

// build the nav to specify each section as a variable by using for loop to build in nav bar
function buildNav() {
  const navListUnorderedList = document.getElementById("navbar__list");
  for (let i = 1; i < 5; i++) {
    const navListItem = document.createElement("li");
    navListItem.classList.add("menu__link");
    navListItem.id = `navbarsection ${i}`;
    const navListItemText = document.createTextNode(`Section ${i}`);
    navListItem.appendChild(navListItemText);
    navListUnorderedList.appendChild(navListItem);
    navListItem.addEventListener("click", scrollToNavItem);
  }
}
// Add class 'active' to section when near top of viewport
function activeClass(event) {
  console.log(event.target.innerHTML);
  const sectionActivated = document.querySelector(
    `[navbar-menu^="${navbar - menu}"]`
  );
}
// Scroll to anchor ID using scrollTO event by inner HTML that included into each section by using event listener function
function scrollToNavItem(event) {
  console.log(event.target.innerHTML);
  const dataNav = event.target.innerHTML;
  const section = document.querySelector(`[data-nav^="${dataNav}"]`);

  section.scrollIntoView({ behavior: "smooth" });
}

/**
 * End Main Functions
 * Begin Events
 *
 */
// Build menu

// Scroll to section on link click by using getbounding client rect by specify height,width that appears in the viewport

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.top <
      (window.innerHeight / 3 || document.documentElement.clientHeight / 3) &&
    rect.left >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Set sections as active by for each function
function activateInViewSections() {
  console.log("scrolling");
  document.querySelectorAll("[data-nav]").forEach(function (section) {
    console.log(section.id, isInViewport(section));

    if (isInViewport(section)) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  });
}

buildNav();

window.addEventListener("scroll", activateInViewSections);
