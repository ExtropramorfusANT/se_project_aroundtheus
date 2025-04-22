class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings._formSelector;
    this._inputSelector = settings._inputSelector;
    this._submitButtonSelector = settings._submitButtonSelector;
    this._inactiveButtonClass = settings._inactiveButtonClass;
    this._inputErrorClass = settings._inputErrorClass;
    this._errorClass = settings._errorClass;
    this._form = formElement = settings._form;
  }

  _showInputError(inputElement, errorMessage) {
    console.log("=============");
    console.log(inputEl.id);
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
    inputEl.classList.add(options.inputErrorClass);
    errorMessageEl.textContent = inputEl.validationMessage;
    errorMessageEl.classList.add(options.errorClass);
  }

  _toggleButtonState() {
    //
  }

  _hasInvalidInput() {
    //
  }

  _setEventListeners() {
    const inputList = Array.from(
      this.form.querySelectorAll(this._inputSelector)
    );
    const buttonElement = this.form.querySelector(this._submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(this.form, inputElement, rest);
        toggleButtonState(inputList, buttonElement, this._inactiveButtonClass);
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formEl, options);
  }
}

const editFormValidator = new FormValidator();
editFormValidator.enableValidation();
