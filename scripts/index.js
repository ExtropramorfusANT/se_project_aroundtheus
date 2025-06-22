import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago Di Braise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

//-----------------//
// new sect from vid//
//------------------//
const cardData = {
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",

  name: "Lake Louise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",

  name: "Bald Mountains",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",

  name: "Latemar",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",

  name: "Vanoise National Park",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",

  name: "Lago Di Braise",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
};

//-----------------//
// new sect from vid//
//------------------//

/*Elements*/
const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseBtn = document.querySelector("#profile-close-modal");
const profileTitle = document.querySelector("#profile-title");
const profileDesc = document.querySelector(".profile__description"); // use id
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescInput = document.querySelector("#profile-desc-input");
const editProfileModal = document.querySelector("#profile-edit-modal");
const profileEditForm = editProfileModal.querySelector(".modal__form");
const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const addCardButton = document.querySelector("#add-card-button");
const addCardCloseBtn = addCardModal.querySelector("#add-card-close-modal");
const addCardForm = document.querySelector("#add-card-form");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const titleInput = document.querySelector("#card-title-input");
const linkInput = document.querySelector("#card-link-input");
const cardListEl = document.querySelector(".cards__list");

const popups = document.querySelectorAll(".modal");
/*Function*/

const cardSelector = "#card-template";

const validationSettings = {
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

editFormValidator.enableValidation();

const addFormValidator = new FormValidator(
  validationSettings,
  addCardFormElement
);

addFormValidator.enableValidation();

const card = new Card(cardData, "#card-template");
card.getView();

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

const cardTitle = document.querySelector(".card__title");
const cardImage = document.querySelector(".card__image");

function closePopup(popup) {
  popup.classList.remove("modal_opened");
  // Remove event listener here
  document.removeEventListener("keydown", handleEscape);
}

const imageModal = document.querySelector("#image-modal");
const imageCloseBtn = imageModal.querySelector(".modal__close");
const modalImage = imageModal.querySelector("#modal-image");
const modalImageDescription = imageModal.querySelector("#modal-caption");

function openImageModal(link, name) {
  modalImage.src = link;
  modalImage.alt = name;
  modalImageDescription.textContent = name;
  openPopup(imageModal);
}

function openPopup(popup) {
  popup.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscape);
}

function handleEscape(e) {
  if (e.key === "Escape") {
    e.preventDefault();
    const openedModal = document.querySelector(".modal_opened");
    closePopup(openedModal);
  }
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", handlePopupClose);
});

//Event handler
function handleProfileEditSubmit(e) {
  e.preventDefault();
  // Update the profile title and description
  profileTitle.textContent = profileTitleInput.value;
  profileDesc.textContent = profileDescInput.value;
  closePopup(profileEditModal);
}

function handlePopupClose(e) {
  if (e.target.classList.contains("modal")) {
    closePopup(e.currentTarget);
  }
}

function createCard(cardData) {
  const cardElement = new Card(
    cardData,
    "#card-template",
    openImageModal
  ).getView();
  return cardElement;
}

function handleAddCardSubmit(event) {
  event.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: linkInput.value,
  };
  console.log("CARD DATA", cardData);

  const cardToAppend = createCard(cardData); // this way
  cardListEl.prepend(cardToAppend);
  console.log(newCard);

  // Reset the form
  addCardForm.reset();
  closePopup(addCardModal);
}

addCardForm.addEventListener("submit", handleAddCardSubmit);

addCardButton.addEventListener("click", () => {
  openPopup(addCardModal);
});

addCardCloseBtn.addEventListener("click", () => {
  closePopup(addCardModal);
});

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescInput.value = profileDesc.textContent;
  openPopup(profileEditModal);
});

profileCloseBtn.addEventListener("click", () => {
  closePopup(profileEditModal);
});
imageCloseBtn.addEventListener("click", () => {
  closePopup(imageModal);
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  cardListEl.prepend(createCard(cardData));
});
