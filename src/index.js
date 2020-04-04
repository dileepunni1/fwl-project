import FakeData from './fake-data';
import Render from './view/render';

const state = {
  items: FakeData.getItems(),
};

let app = document.querySelector('#app');

const render = newState => {
  const cloneApp = Render(app, newState);
  app.replaceWith(cloneApp);
  app = cloneApp;
};

const input = document.createElement('input');
input.className = 'form-control';
input.addEventListener('input', (evt) => {
  const filteredItems = state.items.filter((item) => {
    return item.toLowerCase().indexOf(evt.target.value.toLowerCase()) >= 0;
  });
  render({ ...state, items: filteredItems });
});

const ul = document.createElement('ul');
ul.className = 'list-group';
ul.setAttribute('data-component', 'item-list');

const p = document.createElement('p');
p.className = 'alert alert-primary';
p.setAttribute('data-component', 'item-counter');

const button = document.createElement('button');
button.textContent = 'Aggiungi un elemento';
button.className = 'btn btn-primary';
button.addEventListener('click', () => {
  state.items.push(FakeData.getItem());
  render({ ...state });
});

app.before(input);
app.appendChild(document.createElement('hr'));
app.appendChild(p);
app.appendChild(document.createElement('hr'));
app.appendChild(ul);
app.appendChild(document.createElement('hr'));
app.after(button);

window.requestAnimationFrame(() => {
  render({ ...state });
});
