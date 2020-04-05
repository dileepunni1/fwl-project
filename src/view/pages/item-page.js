import FakeData from '../../fake-data';

import itemsList from '../web_components/items';
import ItemCounter from '../web_components/counter';
import ItemsFilter, { FILTER_ITEM } from '../web_components/filter';
import ItemButton, { ADD_ITEM } from '../web_components/button';

const state = {
  items: FakeData.getItems(),
};

const template = `
  <header-box data-title="Item Page"></header-box>
  <hr>
  <item-filter></item-filter>
  <hr>
  <!-- commento di test -->
  <item-counter></item-counter>
  <hr>
  <item-list>
    <p class="alert alert-light">Testo Introduttivo</p>
    <hr/>
  </item-list>
  <hr>
  <item-button></item-button>
`;

export default class ItemPage extends HTMLElement {
  constructor() {
    super();
    const tmpl = document.createElement('template');
    tmpl.innerHTML = template;
    const elem = document.createElement('div');
    elem.append(tmpl.content.cloneNode(true));
    this.appendChild(elem);
    this.render({ ...state });

    this.querySelector('item-filter').addEventListener(FILTER_ITEM, (e) => {
      const filteredItems = state.items.filter((item) => {
        return item.toLowerCase().indexOf(e.detail.filter.toLowerCase()) >= 0;
      });
      this.render({ items: filteredItems });
    });

    this.querySelector('item-button').addEventListener(ADD_ITEM, () => {
      state.items.push(FakeData.getItem());
      this.render({ ...state });
    });
  }

  render(newState) {
    window.requestAnimationFrame(() => {
      this.querySelector('item-list').items = newState.items;
      this.querySelector('item-counter').items = newState.items;
    });
  }
}


window
  .customElements
  .define('item-list', itemsList);

window
  .customElements
  .define('item-filter', ItemsFilter);

window
  .customElements
  .define('item-counter', ItemCounter);

window
  .customElements
  .define('item-button', ItemButton);
