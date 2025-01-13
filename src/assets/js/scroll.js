document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    const targetId = this.getAttribute("href"); // Récupère l'attribut href
    const targetElement = document.querySelector(targetId); // Cible l'élément correspondant à l'ancre

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Défilement fluide
        block: "start", // Positionnement en haut de la fenêtre
      });
    }
  });
});
