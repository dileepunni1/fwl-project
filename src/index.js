import FakeData from './fake-data';
import Items from './view/items';

const state = {
  items: FakeData.getItems(),
};

const app = document.querySelector('#app');

const input = document.createElement('input');
input.className = 'form-control';
input.addEventListener('input', (evt) => {
  let ulCloned = app.querySelector('.list-group').cloneNode(false);
  const filteredItems = state.items.filter((item) => {
    return item.toLowerCase().indexOf(evt.target.value.toLowerCase()) >= 0;
  });
  ulCloned = Items.createItemList(ulCloned, filteredItems);
  app.querySelector('.list-group').replaceWith(ulCloned);
});
app.appendChild(input);

app.appendChild(document.createElement('hr'));

const ul = document.createElement('ul');
ul.className = 'list-group';
app.appendChild(ul);

const button = document.createElement('button');
button.textContent = 'Aggiungi un elemento';
button.className = 'btn btn-primary';
button.addEventListener('click', () => {
  const newItem = FakeData.getItem();
  state.items.push(newItem);
  app.querySelector('.list-group').appendChild(Items.createItem(newItem));
  input.dispatchEvent(new Event('input'));
});
app.appendChild(document.createElement('hr'));
app.appendChild(button);

window.requestAnimationFrame(() => {
  const cloneTarget = Items.createItemList(ul, state.items);
  ul.replaceWith(cloneTarget);
});
