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

/*Elements*/
const profileEditBtn = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileCloseBtn = document.querySelector("#profile-close-modal");
const profileTitle = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescInput = document.querySelector("#profile-desc-input");
const editProfileModal = document.querySelector("#profile-edit-modal");
const profileEditForm = editProfileModal.querySelector(".modal__form");
const addCardModal = document.querySelector("#add-card-modal");
const addCardFormElement = addCardModal.querySelector(".modal__form");
const addCardButton = document.querySelector("#add-card-button");
const addCardCloseBtn = addCardModal.querySelector("#add-card-close-modal");
const likeButton = document.querySelector(".card__like-button");
const cardImageOpened = document.querySelector(".card__image");

const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const cardListEl = document.querySelector(".cards__list");
/*Function*/

function getCardElement(cardData) {
  //e.preventDefault();
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");

  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });
  cardTitleEl.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  cardImage.addEventListener("click", () => {
    openImageModal(cardData.link, cardData.name);
  });

  return cardElement;
}

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

const cardTitle = document.querySelector(".card__title");
const cardImage = document.querySelector(".card__image");

function closeModal() {
  profileEditModal.classList.remove("modal_opened");
}

const imageModal = document.querySelector("modal__close");
const modalImage = document.querySelector("#modal-image");
const modalImageDescription = document.querySelector(
  "#modal-image-description"
);

function openImageModal(link, name) {
  modalImage.src = link;
  modalImage.alt = name;
  imageModal.classList.add("modal_opened");
  console.log("clicked");
}

//Event handler
function handleProfileEditSubmit(e) {
  e.preventDefault();
  const profileTitle = cardTitleInput.value;
  const profileDesc = cardUrlInput.value;
  // Update the profile title and description
  profileTitle.textContent = profileTitleInput.value;
  profileDesc.textContent = profileDescInput.value;
  closeModal(profileEditModal);
}

document.addEventListener("DOMContentLoaded", () => {
  const addCardForm = document.querySelector("#add-card-modal .modal__form");

  addCardForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleInput = document.querySelector("#card-title-input").value;
    const linkInput = document.querySelector("#card-link-input").value;

    const cardData = {
      name: titleInput,
      link: linkInput,
    };

    const newCard = getCardElement(cardData);
    cardListEl.appendChild(newCard);

    // Reset the form
    addCardForm.reset();
    addCardModal.classList.remove("modal_opened");
  });
});

addCardButton.addEventListener("click", () => {
  addCardModal.classList.add("modal_opened");
});

addCardCloseBtn.addEventListener("click", () => {
  addCardModal.classList.remove("modal_opened");
});

profileEditBtn.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescInput.value = profileDesc.textContent;
  profileEditModal.classList.add("modal_opened");
});

profileCloseBtn.addEventListener("click", () => {
  profileEditModal.classList.remove("modal_opened");
});
imageCloseBtn.addEventListener("click", () => {
  imageCloseBtn.classList.remove("#image-modal_opened");
  imageModal.classList.remove("modal_opened");
});

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.append(cardElement);
});
