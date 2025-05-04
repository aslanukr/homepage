const themeToggle = document.getElementById("theme-toggle");
const icon = document.getElementById("theme-icon");
const body = document.body;

function updateIcon() {
  if (body.classList.contains("light-theme")) {
    icon.src = "assets/moon_icon.png";
    icon.alt = "Moon Icon";
  } else {
    icon.src = "assets/sun_icon.png";
    icon.alt = "Sun Icon";
  }
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  updateIcon();
});

updateIcon();
