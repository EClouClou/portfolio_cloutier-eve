const btnsDialogTrigger = document.querySelectorAll("button[data-dialog]");
const dialogs = document.querySelectorAll(".dialog");

function closingDialog(e) {
  const dialog = e.target;
  dialog.removeAttribute("closing");
  dialog.removeAttribute("open");
  dialog.removeEventListener("animationend", closingDialog);
}

function closeDialog(dialog) {
  dialog.setAttribute("closing", "");
  dialog.addEventListener("animationend", closingDialog);
}

btnsDialogTrigger.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dialogSelector = btn.getAttribute("data-dialog");
    const dialog = document.querySelector(dialogSelector);

    if (dialog) {
      if (dialog.hasAttribute("open")) {
        closeDialog(dialog);
      } else {
        dialog.setAttribute("open", "");
      }
    }
  });
});

dialogs.forEach((dialog) => {
  dialog.addEventListener("click", () => {
    closeDialog(dialog);
  });

  const childrens = dialog.children; // Correction du sélecteur
  Array.from(childrens).forEach((child) => {
    child.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
    });
  });

  const links = dialog.querySelectorAll("a[href^='#']");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      closeDialog(dialog);

      setTimeout(() => {
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Ajustez si nécessaire
    });
  });
});
