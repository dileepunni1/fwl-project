import component from './component';

const createItem = (item) => {
  const li = document.createElement('li');
  li.textContent = item;
  li.className = 'list-group-item';
  return li;
};

const createItemList = ($target, { items = [] }) => {
  const $cloneTarget = $target.cloneNode(false);

  items.forEach((item) => {
    $cloneTarget.appendChild(createItem(item));
  });

  return $cloneTarget;
};

const getHTML = (items) => items.reduce((str, item) => {
  return `
    ${str}
    <li class="list-group-item">
      ${item}
    </li>`;
}, '');

const getVNode = (vTarget, { items = [] }) => {
  return component(vTarget, getHTML(items));
};

export default { createItem, createItemList, getVNode };
