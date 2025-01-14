document.getElementById("dark").addEventListener("click", function (event) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  darkMode();
});

function darkMode() {
  document.body.classList.toggle("dark-mode");
}

document.querySelector(".navbar__arrow").addEventListener("mouseover", (e) => {
  e.target.classList.add("animate__animated", "animate__headShake");
});

document
  .querySelector(".navbar__arrow")
  .addEventListener("animationend", (e) => {
    e.target.classList.remove("animate__animated", "animate__headShake");
  });
