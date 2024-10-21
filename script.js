// Dark mode toggle
const toggle = document.getElementById('darkmode-toggle');
const body = document.body;
const toggleSwitch = document.querySelector("#darkmode-toggle");

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    body.classList.add('dark-mode');
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    body.classList.remove('dark-mode');
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme);

// Load previously saved theme
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    body.classList.add('dark-mode');
  }
}

// Automatic slider for the logos section
const logosSlide = document.querySelector('.logos-slide');
const logosWrapper = document.querySelector('.logos-wrapper');
let clone = logosSlide.cloneNode(true);
logosWrapper.appendChild(clone);

// Fonction pour changer les icônes en fonction du thème
function switchIcons(theme) {
  const images = document.querySelectorAll('.logos-slide img');
  images.forEach((img) => {
    if (img.src.includes('-Dark.svg') || img.src.includes('-Light.svg')) {
      img.src = img.src.replace(theme === 'dark' ? '-Light' : '-Dark', theme === 'dark' ? '-Dark' : '-Light');
    }
  });
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    body.classList.add('dark-mode');
    localStorage.setItem("theme", "dark");
    switchIcons("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    body.classList.remove('dark-mode');
    localStorage.setItem("theme", "light");
    switchIcons("light");
  }
}

// Appeler switchIcons lors du chargement de la page
if (currentTheme) {
  switchIcons(currentTheme);
}