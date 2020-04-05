import * as VDOM from '../../vdom/vdom';

const getCount = (items) => {
  return items.length === 1 ? '1 Item' : `${items.length} Items`;
};

const get$Node = ($target, { items = [] }) => {
  const $cloneTarget = $target.cloneNode(true);
  $cloneTarget.textContent = getCount(items);
  return $cloneTarget;
};

const getVNode = (vTarget, { items = [] } = {}) => {
  return VDOM.VElement.create({
    ...vTarget,
    children: [getCount(items)],
  });
};

export default { get$Node, getVNode };
