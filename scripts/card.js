export default class Card {
  constructor({ name, link }) {
    console.log({ name, link }, cardSelector);
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    alert("hoorah");
  }

  getView() {
    //get card view
    //set event listener
    this._setEventListeners;
    //retru the card
  }
}
