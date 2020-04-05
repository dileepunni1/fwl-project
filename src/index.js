import FakeData from './fake-data';

import Header from './view/web_components/header';
import Items from './view/web_components/items';
import Counter from './view/web_components/counter';
import Button, { ADD_ITEM } from './view/web_components/button';
import Filter, { FILTER_ITEM } from './view/web_components/filter';

const state = {
  items: FakeData.getItems(),
};

const render = newState => {
  window.requestAnimationFrame(() => {
    document.querySelector('item-list').items = newState.items;
    document.querySelector('item-counter').items = newState.items;
  });
};

render({ ...state });

document.querySelector('item-filter').addEventListener(FILTER_ITEM, (e) => {
  const filteredItems = state.items.filter((item) => {
    return item.toLowerCase().indexOf(e.detail.filter.toLowerCase()) >= 0;
  });
  render({ items: filteredItems });
});

document.querySelector('item-button').addEventListener(ADD_ITEM, () => {
  state.items.push(FakeData.getItem());
  render({ ...state });
});

window
  .customElements
  .define('item-header', Header);

window
  .customElements
  .define('item-filter', Filter);

window
  .customElements
  .define('item-counter', Counter);

window
  .customElements
  .define('item-list', Items);

window
  .customElements
  .define('item-button', Button);
