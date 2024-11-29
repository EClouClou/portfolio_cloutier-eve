// import projets from "../data/projets.json";

// const generateModalContent = (projet) => {
//   const holder = document.querySelector(".modale-holder");
//   const contenuHolder = document.querySelector(".modale-contenu");
//   const closeBtn = document.querySelector("[data-modal-close]");

//   const header = holder.querySelector("header");

//   if (header.querySelector("h2")) {
//     header.querySelector("h2").remove();
//   }

//   const title = document.createElement("h2");
//   title.innerText = projet.name;
//   header.prepend(title);

//   contenuHolder.innerHTML = "";

//   const img = document.createElement("img");
//   img.src = projet.img;
//   img.alt = projet.imgAlt;
//   contenuHolder.append(img);

//   const infosHolder = document.createElement("div");
//   infosHolder.classList.add("flex", "flex-column", "justify-between");
//   const typeStackHolder = document.createElement("div");
//   typeStackHolder.classList.add("flex");
//   typeStackHolder.classList.add("align-center", "justify-between");
//   const typeP = document.createElement("p");
//   typeP.innerText = projet.type;
//   typeStackHolder.append(typeP);
//   const stackHolder = document.createElement("ul");
//   const stackItems = projet.stack;
//   stackItems.forEach((item) => {
//     const liElement = document.createElement("li");
//     liElement.innerText = item;
//     stackHolder.append(liElement);
//   });
//   typeStackHolder.append(stackHolder);
//   infosHolder.append(typeStackHolder);

//   //description
//   const descriptionHolder = document.createElement("p");
//   descriptionHolder.innerText = projet.description;
//   infosHolder.append(descriptionHolder);

//   //liens
//   const liensHolder = document.createElement("ul");
//   liensHolder.classList.add("flex", "gap-1");
//   const projetLiens = projet.liens;
//   for (var lien in projetLiens) {
//     const liElement = document.createElement("li");
//     const aElement = document.createElement("a");
//     const iElement = document.createElement("i");
//     aElement.innerText = "Voir sur " + lien.toUpperCase();
//     aElement.href = projetLiens[lien];
//     //1ere loop - projetLiens['youtube'];
//     iElement.classList.add("fa-brands", "fa-" + lien);
//     //1ere loop - fa-youtube
//     aElement.append(iElement);
//     liElement.append(aElement);
//     liensHolder.append(liElement);
//   }
//   infosHolder.append(liensHolder);

//   contenuHolder.append(infosHolder);

//   //montrer la modale
//   holder.classList.remove("hidden");

//   //fermeture modale
//   closeBtn.addEventListener("click", () => {
//     holder.classList.add("hidden");
//   });
// };

// // Liste des projets
// const generateProjectsList = () => {
//   const holder = document.querySelector(".projets-holder");

//   projets.forEach((projet) => {
//     const cardHolder = document.createElement("button");
//     cardHolder.classList.add("flex", "flex-col");

//     if (projet.gridArea) {
//       cardHolder.classList.add("tuile-" + projet.gridArea);
//     }

//     const img = document.createElement("img");
//     img.src = projet.img;
//     img.alt = projet.imgAlt;
//     img.classList.add("grid-img", "rounded");
//     cardHolder.append(img);

//     const infos = document.createElement("div");

//     const infosHolder = document.createElement("div");
//     infosHolder.classList.add(
//       "flex",
//       "justify-between",
//       "bottom-0",
//       "p-1",
//       "align-center",
//       "bg-test"
//     );

//     const kind = document.createElement("h6");
//     kind.innerText = projet.kind;

//     const typeStackHolder = document.createElement("div");
//     typeStackHolder.classList.add("flex");

//     const typeS = document.createElement("grid__stack");

//     typeStackHolder.append(typeS);

//     typeS.classList.add("subtitle1");
//     typeS.innerText = projet.stack;
//     infos.append(infosHolder);
//     infosHolder.append(kind);
//     infosHolder.append(typeStackHolder);
//     cardHolder.append(infos);

//     // const modalBtn = document.createElement("button");
//     // modalBtn.innerText = "En savoir plus";
//     // modalBtn.setAttribute(
//     //   "aria-label",
//     //   modalBtn.innerText + " - " + projet.name
//     // );
//     // cardHolder.append();

//     cardHolder.addEventListener("click", () => {
//       generateModalContent(projet);
//     });

//     holder.append(cardHolder);
//   });
// };

// document.addEventListener("DOMContentLoaded", () => {
//   generateProjectsList();
// });

import projets from "../data/projets.json";

// Fonction pour générer le contenu de la modale
const generateModalContent = (projet) => {
  const holder = document.querySelector(".modale-holder");
  const contenuHolder = document.querySelector(".modale-contenu");
  const closeBtn = document.querySelector("[data-modal-close]");
  const header = holder.querySelector("header");

  // Mise à jour du titre de la modale
  header.querySelector("h2")?.remove(); // Supprime le titre existant (utilise l'opérateur de coalescence nulle)
  const title = document.createElement("h2");
  title.innerText = projet.name;
  header.prepend(title);

  // Réinitialiser le contenu de la modale
  contenuHolder.innerHTML = "";

  // Image du projet
  const img = document.createElement("img");
  img.src = projet.img;
  img.alt = projet.imgAlt;
  contenuHolder.append(img);

  // Conteneur d'informations
  const infosHolder = document.createElement("div");
  infosHolder.classList.add("flex", "flex-col", "justify-between", "gap-1");

  // Type et stack
  const typeStackHolder = document.createElement("div");
  typeStackHolder.classList.add("flex", "align-center", "justify-between");
  const typeP = document.createElement("p");
  typeP.innerText = projet.type;
  typeStackHolder.append(typeP);

  const stackHolder = document.createElement("ul");
  projet.stack.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.innerText = item;
    stackHolder.append(liElement);
  });
  typeStackHolder.append(stackHolder);
  infosHolder.append(typeStackHolder);

  // Description
  const descriptionHolder = document.createElement("p");
  descriptionHolder.innerText = projet.description;
  infosHolder.append(descriptionHolder);

  // Liens
  const liensHolder = document.createElement("ul");
  liensHolder.classList.add("flex", "gap-1");
  Object.entries(projet.liens).forEach(([lien, url]) => {
    const liElement = document.createElement("li");
    const aElement = document.createElement("a");
    aElement.href = url;
    aElement.innerText = `Voir sur ${lien.toUpperCase()}`;
    aElement.target = "_blank"; // Ouvre dans un nouvel onglet

    const iElement = document.createElement("i");
    iElement.classList.add("fa-brands", `fa-${lien}`);
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

  projets.forEach((projet) => {
    // Carte du projet
    const cardHolder = document.createElement("button");
    cardHolder.classList.add(
      "cardHolder",
      "flex",
      "flex-col",
      "relative",
      "card-shadow"
    );

    if (projet.gridArea) {
      cardHolder.classList.add(`tuile-${projet.gridArea}`);
    }

    // Image du projet
    const img = document.createElement("img");
    img.src = projet.img;
    img.alt = projet.imgAlt;
    img.classList.add("grid-img", "rounded");
    cardHolder.append(img);

    const infosWrapper = document.createElement("div");
    infosWrapper.classList.add("infos-wrapper"); // Le conteneur absolu

    // Informations de la carte
    const infosHolder = document.createElement("div");
    infosHolder.classList.add(
      "infos-holder",
      // "bg-test",
      "p-1",
      "absolute",
      "bottom-0",
      "justify-between",
      "text-shadow",
      "w-90",
      "gap-1"
    );

    const kind = document.createElement("h6");
    kind.innerText = projet.kind;
    kind.classList.add("kind");

    const stack = document.createElement("p");
    stack.classList.add("stack", "subtitle1");
    stack.innerText = projet.stack.join(", "); // Convertir le tableau en une chaîne

    infosHolder.append(kind, stack); // Ajoute les éléments dans infosHolder
    infosWrapper.append(infosHolder); // Place infosHolder dans l'enveloppe
    cardHolder.append(infosWrapper); // Ajoute l'enveloppe à la carte

    // Événement pour afficher la modale
    cardHolder.addEventListener("click", () => generateModalContent(projet));

    holder.append(cardHolder);
  });
};

// Initialisation après le chargement du DOM
document.addEventListener("DOMContentLoaded", generateProjectsList);
