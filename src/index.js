import FakeData from './fake-data';

import Items from './view/components/items';
import Counter from './view/components/counter';
import Button from './view/components/button';
import Filter from './view/components/filter';

import * as VDom from './vdom/vdom';

const state = {
  items: FakeData.getItems(),
};

let app = document.querySelector('#app');

VDom.Registry.add('item-list', Items);
VDom.Registry.add('item-counter', Counter);
VDom.Registry.add('item-add', Button);
VDom.Registry.add('item-filter', Filter);

let vDom = {};

const render = newState => {
  window.requestAnimationFrame(() => {
    const cloneVDom = VDom.Mapper.mapRootNode(app, newState);
    const patch = VDom.diff(vDom, cloneVDom);
    app = patch(app);
    vDom = cloneVDom;
  });
};

VDom.Events.add('add', () => {
  state.items.push(FakeData.getItem());
  render({ ...state });
});

VDom.Events.add('filter', (evt) => {
  const filteredItems = state.items.filter((item) => {
    return item.toLowerCase().indexOf(evt.target.value.toLowerCase()) >= 0;
  });
  render({ ...state, items: filteredItems });
});

render({ ...state });
