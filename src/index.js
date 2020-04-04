import faker from 'faker';

const n = faker.random.number({ min: 2, max: 5 });
const items = Array.from({ length: n }, () => faker.name.findName());


const app = document.querySelector('#app');
const ul = document.createElement('ul');
ul.className = 'list-group';

const addItem = (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  li.className = 'list-group-item';
  return li;
};

items.forEach((item) => {
  ul.appendChild(addItem(item));
});

app.appendChild(ul);

const button = document.createElement('button');
button.textContent = 'Aggiungi un elemento';
button.className = 'btn btn-primary';
button.addEventListener('click', () => {
  ul.appendChild(addItem(faker.name.findName()));
});
app.appendChild(document.createElement('hr'));
app.appendChild(button);
