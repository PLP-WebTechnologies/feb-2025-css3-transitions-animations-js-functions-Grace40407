const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const box = document.getElementById("box");

// Apply stored theme on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
  }
};

// Function to switch theme and save preference
function setTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
}

// Theme button event listeners
lightBtn.addEventListener("click", () => {
  setTheme("light");
  triggerBoxAnimation();
});

darkBtn.addEventListener("click", () => {
  setTheme("dark");
  triggerBoxAnimation();
});

// Function to animate box
function triggerBoxAnimation() {
  box.classList.remove("animate"); // Reset animation
  void box.offsetWidth; // Force reflow
  box.classList.add("animate");
}
