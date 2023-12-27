(() => {
    const refs = {
      openBurgerBtn: document.querySelector("[burger-open]"),
      closeBurger: document.querySelectorAll("[burger-close]"),
      modal: document.querySelector("[burger-menu]"),
    };
    
    refs.closeBurger.forEach(function(btn) {
        btn.addEventListener("click", toggleBurger);
    });
  
    refs.openBurgerBtn.addEventListener("click", toggleBurger);
  
    function toggleBurger() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();