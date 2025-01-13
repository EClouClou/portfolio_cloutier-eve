document.getElementById("dark").addEventListener("click", function (event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  darkMode();
});

function darkMode() {
  document.body.classList.toggle("dark-mode");
}
