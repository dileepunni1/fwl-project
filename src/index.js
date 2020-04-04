import FakeData from './fake-data';
import Render from './view/render';

const state = {
  items: FakeData.getItems(),
};

let app = document.querySelector('#app');

const render = newState => {
  window.requestAnimationFrame(() => {
    const cloneApp = Render(app, newState);
    app.replaceWith(cloneApp);
    app = cloneApp;
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
