function showInputError(formEl, inputEl, options) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.add(options.inputErrorClass);
  errorMessageEl.textContent = inputEl.validationMessage;
  errorMessageEl.classList.add("modal__error_visible");
}
//error message is defined but not used
function hideInputError(formEl, inputEl, options) {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  errorMessageEl.textContent = "";
  inputEl.classList.remove(options.inputErrorClass);
}

function hasInvalidInput(inputList) {
  return !input.every((inputEl) => inputEl.validity.valid);
}

//disable button

//enable button

function toggleButtonState(inputEls, submitButton, { inactiveButtonClass }) {
  if (hasInvalidInput) {
    submitButton.classList.add(inactiveButtonClass); //move this line and the 1 below to its own function.
    submitButton.disabled = true;
    return;
  }
  submitButton.classList.remove(inactiveButtonClass);
  submitButton.disabled = true;
}

function setEventListeners(formEl, options) {
  const { inputSelector } = options;
  const inputEls = [...formEl.querySelectorAll(options.inputSelector)];
  const submitButton = formEl.querySelector(".modal__button");
  console.log(inputEls);
  inputEls.forEach((inputEl) => {
    inputEl.addEventListener("input", (e) => {
      checkInputValidity(formEl, inputEl, options);
      console.log("code ran -- set event list.");
      toggleButtonState(inputEls, submitButton, options);
    });
  });
}

function enableValidation(options) {
  console.log("message");
  const formEls = [...document.querySelectorAll(options.formSelector)]; //popup form is used for simplistics, could be more specific with the targetting.
  console.log(formEls);
  formEls.forEach((formEl) => {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
    //look for inputs in form
    //loop through inputs to see if all are valid
    //if not valid grab validation message and add error class input
    //if all inputs are valid -- reset error message and anabe button
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);
