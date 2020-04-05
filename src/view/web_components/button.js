export const ADD_ITEM = 'ADD_ITEM';

export default class ItemButton extends HTMLElement {
  constructor() {
    super();
    this.b = document.createElement('button');
    this.b.textContent = 'Aggiungi';
    this.b.className = 'btn btn-primary';
    this.addEventListener('click', this.onClick);
    this.appendChild(this.b);
  }

  onClick() {
    const event = new CustomEvent(ADD_ITEM);
    this.dispatchEvent(event);
  }
}
