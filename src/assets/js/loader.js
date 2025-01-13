document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  // Désactiver le scroll
  document.body.classList.add("no-scroll");

  window.addEventListener("load", () => {
    loader.style.display = "none";
    document.body.classList.remove("no-scroll");
  });
});
