const shrink_btn = document.querySelector(".shrink-btn");
const search = document.querySelector(".search");
const sidebar_links = document.querySelectorAll(".sidebar-links a");
const active_tab = document.querySelector(".active-tab");
const shortcuts = document.querySelector(".sidebar-links h4");
const tooltip_elements = document.querySelectorAll(".tooltip-element");
const page_landed = document.querySelectorAll(".page-landed main");
const active_page = document.querySelector(".active-page");

let activeIndex;

shrink_btn.addEventListener("click", () => {
  document.body.classList.toggle("shrink");
  setTimeout(moveActiveTab, 400);

  shrink_btn.classList.add("hovered");

  setTimeout(() => {
    shrink_btn.classList.remove("hovered");
  }, 500);
});

function moveActiveTab() {
  let topPosition = activeIndex * 58 + 2.5;

  if (activeIndex > 3) {
    topPosition += shortcuts.clientHeight;
  }

  active_tab.style.top = `${topPosition}px`;
}

function changeLink() {
  sidebar_links.forEach((sideLink) => sideLink.classList.remove("active"));
  this.classList.add("active");
  
  page_landed.forEach((page) => page.classList.remove("active-page"));

  activeIndex = this.dataset.active;

  switch (+activeIndex) {
    case 0:
      page_landed[0].classList.add("active-page");
      break;
    case 1:
      page_landed[1].classList.add("active-page");
      break;
    case 2:
      page_landed[2].classList.add("active-page");
      break;
    case 3:
      page_landed[3].classList.add("active-page");
      break;
  }

  moveActiveTab();
}

sidebar_links.forEach((link) => link.addEventListener("click", changeLink));

function showTooltip() {
  let tooltip = this.parentNode.lastElementChild;
  let spans = tooltip.children;
  let tooltipIndex = this.dataset.tooltip;

  Array.from(spans).forEach((sp) => sp.classList.remove("show"));
  spans[tooltipIndex].classList.add("show");

  tooltip.style.top = `${(100 / (spans.length * 2)) * (tooltipIndex * 2 + 1)}%`;
}

tooltip_elements.forEach((elem) => {
  elem.addEventListener("mouseover", showTooltip);
});