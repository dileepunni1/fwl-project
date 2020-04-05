import VWCComponent from '../../vdom/lib/v-wc-element';

export default class ItemCounter extends VWCComponent {
  static get observedAttributes() {
    return [
      'items',
    ];
  }

  constructor() {
    super();
    this.p = document.createElement('p');
    this.p.className = 'item-counter alert alert-primary';
    this.appendChild(this.p);
  }

  get items() {
    if (!this.hasAttribute('items')) {
      return [];
    }

    return JSON.parse(this.getAttribute('items'));
  }

  set items(value) {
    this.setAttribute('items', JSON.stringify(value));
  }

  attributeChangedCallback() {
    this.changeDetection('p', `${this.items.length} Items`);
  }
}
