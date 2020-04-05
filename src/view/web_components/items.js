import VWCComponent from '../../vdom/lib/v-wc-element';

export default class ItemList extends VWCComponent {
  static get observedAttributes() {
    return [
      'items',
    ];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    this.ul = document.createElement('ul');
    this.ul.className = 'item-list list-group';

    const style = `
    <style>
      .list-group {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        padding-left: 0;
        margin-bottom: 0;
      }
      .list-group-item:first-child {
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
      }
      .list-group-item:last-child {
        margin-bottom: 0;
        border-bottom-right-radius: .25rem;
        border-bottom-left-radius: .25rem;
      }
      .list-group-item {
        position: relative;
        display: block;
        padding: .75rem 1.25rem;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.125);
      }
    </style>
      `;
    shadowRoot.innerHTML = style;
    shadowRoot.appendChild(document.createElement('slot'));
    shadowRoot.appendChild(this.ul);
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
    const items = this.items.reduce((str, item) => {
      return `${str}<li class="list-group-item">${item}</li>`;
    }, '');

    this.changeDetection('ul', items);
  }
}
