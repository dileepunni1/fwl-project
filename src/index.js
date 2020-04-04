import faker from 'faker';

const n = faker.random.number({ min: 2, max: 5 });
const items = Array.from({ length: n }, () => faker.name.findName());

const addItem = (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  li.className = 'list-group-item';
  return li;
};

const addItemsToUl = (ul, itemsToAppend) => {
  itemsToAppend.forEach((item) => {
    ul.appendChild(addItem(item));
  });
};

const app = document.querySelector('#app');

const input = document.createElement('input');
input.className = 'form-control';
input.addEventListener('input', (evt) => {
  const ulCloned = app.querySelector('.list-group').cloneNode(false);
  const filteredItems = items.filter((item) => {
    return item.toLowerCase().indexOf(evt.target.value.toLowerCase()) >= 0;
  });
  addItemsToUl(ulCloned, filteredItems);
  app.querySelector('.list-group').replaceWith(ulCloned);
});
app.appendChild(input);

app.appendChild(document.createElement('hr'));

const ul = document.createElement('ul');
ul.className = 'list-group';
addItemsToUl(ul, items);
app.appendChild(ul);

const button = document.createElement('button');
button.textContent = 'Aggiungi un elemento';
button.className = 'btn btn-primary';
button.addEventListener('click', () => {
  const newItem = faker.name.findName();
  items.push(newItem);
  app.querySelector('.list-group').appendChild(addItem(newItem));
  input.dispatchEvent(new Event('input'));
});
app.appendChild(document.createElement('hr'));
app.appendChild(button);
