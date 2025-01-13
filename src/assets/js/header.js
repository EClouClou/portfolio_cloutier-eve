// document.addEventListener("DOMContentLoaded", () => {
//   const backToTopBtn = document.getElementById("backToTop");

//   // Masquer ou afficher la flèche en fonction de la position initiale
//   if (document.documentElement.scrollTop > 300) {
//     backToTopBtn.classList.add("show");
//   } else {
//     backToTopBtn.classList.remove("show");
//   }
// });

// const handleScroll = () => {
//   const backToTopBtn = document.getElementById("backToTop");

//   if (document.documentElement.scrollTop > 300) {
//     backToTopBtn.classList.add("show");
//   } else {
//     backToTopBtn.classList.remove("show");
//   }
// };

// window.onscroll = () => {
//   handleScroll();
// };

// document.getElementById("backToTop").addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("backToTop");

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  };

  // Vérification initiale
  handleScroll();

  // Gestion des événements
  window.addEventListener("scroll", handleScroll);

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
