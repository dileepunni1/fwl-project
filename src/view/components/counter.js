import component from './component';

const getCount = (items) => {
  return items.length === 1 ? '1 Item' : `${items.length} Items`;
};


const get$Node = ($target, { items = [] }) => {
  const $cloneTarget = $target.cloneNode(true);
  $cloneTarget.textContent = getCount(items);
  return $cloneTarget;
};

const getHTML = (items) => `<strong>${getCount(items)}</strong>`;

const getVNode = (vTarget, { items = [] } = {}) => {
  return component(vTarget, getHTML(items));
};

export default { get$Node, getVNode };
