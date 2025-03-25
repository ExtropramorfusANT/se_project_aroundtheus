function enableValidation(options) {
  const formEls = [...document.querySelectorAll("popup__form")]; //popup form is used for simplistics, could be more specific with the targetting.
  const formEls.forEach((formEl) => {
    formEl.addEventListene('submit', () => {
        
    })
    
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
