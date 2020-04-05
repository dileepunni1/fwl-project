import FakeData from './fake-data';

import Items from './view/components/items';
import Counter from './view/components/counter';
import Registry from './view/registry';

import * as VDom from './vdom/vdom';

const state = {
  items: FakeData.getItems(),
};

let app = document.querySelector('#app');

// Registry.add('item-list', Items.createItemList);
// Registry.add('item-counter', Counter);

VDom.Registry.add('item-list', Items.getVNode);
VDom.Registry.add('item-counter', Counter.getVNode);

const render = newState => {
  window.requestAnimationFrame(() => {
    const cloneApp = Registry.renderRoot(app, newState);
    app = VDom.mount(cloneApp, app);

    console.log(VDom.Mapper.mapRootNode(app, state));
    console.log(VDom.render(VDom.Mapper.mapRootNode(app, state)));
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
