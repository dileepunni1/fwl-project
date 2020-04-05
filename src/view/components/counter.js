import * as VDOM from '../../vdom/vdom';

const getCount = (items) => {
  return items.length === 1 ? '1 Item' : `${items.length} Items`;
};

export default (target, { items = [] }) => {
  const cloneTarget = target.cloneNode(true);
  cloneTarget.textContent = getCount(items);
  return cloneTarget;
};

export function testCallback() {
  const vElement = VDOM.VElement.create({ tagName: 'p', attrs: { class: 'test-class' }, isSVG: false, children: [] });
  const vChildElement = VDOM.VElement.create({ tagName: 'span', attrs: { class: '' }, isSVG: false, children: ['Lorem Ipsum'] });
  const vChildElement2 = VDOM.VElement.create({ tagName: 'span', attrs: { class: '', 'data-component': 'item-test' }, isSVG: false, children: ['Lorem Ipsum'] });
  vElement.children.push(vChildElement);
  vElement.children.push(vChildElement2);
  return vElement;
}
