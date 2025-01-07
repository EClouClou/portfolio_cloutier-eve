import projets from "../data/projets.json";

// Fonction pour générer le contenu de la modale
const generateModalContent = (projet) => {
  const holder = document.querySelector(".modale-holder");
  const contenuHolder = document.querySelector(".modale-contenu");
  const closeBtn = document.querySelector("[data-modal-close]");
  const header = holder.querySelector("header");

  // Réinitialiser le contenu de la modale
  contenuHolder.innerHTML = "";

  // Mise à jour du titre de la modale
  header.querySelector("h2")?.remove(); // Supprime le titre existant (utilise l'opérateur de coalescence nulle)

  // Réinitialiser la palette existante
  const existingPalette = header.querySelector(".palette-item");
  if (existingPalette) {
    existingPalette.remove(); // Supprime toute ancienne palette
  }

  // Palette de couleurs
  const palette = document.createElement("div");
  palette.classList.add("palette-item");

  // Chaque couleur
  projet.palette.forEach((item) => {
    const color = document.createElement("div");
    color.classList.add("palette");
    color.style.background = item;
    palette.append(color);
    header.append(palette);
  });

  // Image du projet
  const img = document.createElement("img");
  img.src = projet.imgModal;
  img.alt = projet.imgAlt;
  contenuHolder.append(img);

  // Conteneur d'informations
  const infosHolder = document.createElement("div");
  infosHolder.classList.add("infos-holder");

  // Titre
  const title = document.createElement("h2");
  title.innerText = projet.name;
  infosHolder.prepend(title);

  // Type et stack
  const typeStackHolder = document.createElement("div");
  typeStackHolder.classList.add("typestack-holder");

  const typeP = document.createElement("p");
  typeP.innerHTML = "<strong>Type :</strong> " + projet.type;
  typeStackHolder.append(typeP);

  const stackHolder = document.createElement("ul");
  stackHolder.classList.add("subtitle1");
  stackHolder.innerHTML = projet.stack
    .map((item) => `<li>${item}</li>`)
    .join(", ");
  typeStackHolder.append(stackHolder);
  infosHolder.append(typeStackHolder);

  // Client
  const audience = document.createElement("p");
  audience.classList.add("audience");
  audience.innerHTML = "<strong>Public cible : </strong> " + projet.audience;

  // Public cible
  const customer = document.createElement("p");
  customer.classList.add("customer");
  customer.innerHTML = "<strong>Client : </strong> " + projet.customer;
  infosHolder.append(customer, audience);

  // Description
  const descriptionHolder = document.createElement("p");
  descriptionHolder.classList.add("description");
  descriptionHolder.innerHTML =
    "<strong>Mandat : </strong> " + projet.description;
  infosHolder.append(descriptionHolder);

  // Liens
  const liensHolder = document.createElement("ul");
  liensHolder.innerHTML = "<strong>Liens : </strong> ";
  liensHolder.classList.add("liensHolder");

  Object.entries(projet.liens).forEach(([lien, url]) => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.href = url;
    aElement.innerText = `${lien.toUpperCase()}`;
    aElement.target = "_blank"; // Ouvre dans un nouvel onglet

    const iElement = document.createElement("i");
    iElement.classList.add(`fa-${lien}`, "fa-brands");
    aElement.append(iElement);

    liElement.append(aElement);
    liensHolder.append(liElement);
  });
  infosHolder.append(liensHolder);

  contenuHolder.append(infosHolder);

  // Afficher la modale
  holder.classList.remove("hidden");

  // Fermeture de la modale
  closeBtn.addEventListener("click", () => holder.classList.add("hidden"), {
    once: true, // Empêche l'ajout multiple d'écouteurs
  });
};

// Fonction pour générer la liste des projets
const generateProjectsList = () => {
  const holder = document.querySelector(".projets-holder");
  holder.classList.add();

  // Carte du projet
  projets.forEach((projet) => {
    const cardHolder = document.createElement("button");
    cardHolder.classList.add(
      "card-holder",
      "card-shadow",
      "relative",
      "overflow-h"
    );

    if (projet.gridArea) {
      cardHolder.classList.add(`tuile-${projet.gridArea}`);
    }

    // Image du projet
    const img = document.createElement("img");
    img.src = projet.imgCard;
    img.alt = projet.imgAlt;

    const kind = document.createElement("h6");
    kind.innerText = projet.kind;
    kind.classList.add("kind");

    const stack = document.createElement("p");
    stack.classList.add("stack", "subtitle1");
    stack.innerText = projet.stack.join(", ");

    cardHolder.append(img, kind, stack);

    // Événement pour afficher la modale
    cardHolder.addEventListener("click", () => generateModalContent(projet));

    holder.append(cardHolder);
  });
};

// Initialisation après le chargement du DOM
document.addEventListener("DOMContentLoaded", generateProjectsList);
-0;
