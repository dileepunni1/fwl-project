import * as VDOM from '../../vdom/vdom';

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

const getVNode = (vTarget, { items = [] }) => {
  const children = (items.map((item) => VDOM.VElement.create({
    tagName: 'li',
    attrs: { class: 'list-group-item' },
    isSVG: false,
    children: [item],
  })));

  return VDOM.VElement.create({
    ...vTarget,
    children,
  });
};


export default { createItem, createItemList, getVNode };
