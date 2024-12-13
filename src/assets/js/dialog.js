const btnsDialogTrigger = document.querySelectorAll("button[data-dialog]");
const dialogs = document.querySelectorAll(".dialog");

function closingDialog(e) {
  const dialog = e.target;

  dialog.removeAttribute("closing", "");
  dialog.removeAttribute("open", "");

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
      if (dialog.checkVisibility()) {
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

  const childrens = dialog.querySelectorAll("& > *");

  childrens.forEach((children) => {
    children.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
    });
  });
});
