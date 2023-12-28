(() => {
  let refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    inputField: document.querySelector("[data-input-field]")
  };

  refs.openModalBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      toggleModal();
      focusInputField();
    });
  });

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function focusInputField() {
    refs.inputField.focus();
  }
})();
