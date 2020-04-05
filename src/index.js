import FakeData from './fake-data';

import Items from './view/components/items';
import Counter from './view/components/counter';

import * as VDom from './vdom/vdom';

const state = {
  items: FakeData.getItems(),
};

let app = document.querySelector('#app');

VDom.Registry.add('item-list', Items);
VDom.Registry.add('item-counter', Counter);

const render = newState => {
  window.requestAnimationFrame(() => {
    const cloneApp = VDom.render(VDom.Mapper.mapRootNode(app, newState));
    app = VDom.mount(cloneApp, app);
  });
};

document.querySelector('[data-component=item-filter]').addEventListener('input', (evt) => {
  const filteredItems = state.items.filter((item) => {
    return item.toLowerCase().indexOf(evt.target.value.toLowerCase()) >= 0;
  });
  render({ ...state, items: filteredItems });
});

document.querySelector('[data-component=item-add]').addEventListener('click', () => {
  state.items.push(FakeData.getItem());
  render({ ...state });
});

render({ ...state });
