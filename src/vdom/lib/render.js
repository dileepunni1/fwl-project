export default function render(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const $node = document.createElement(vNode.tagName);

  Object.entries(vNode.attrs).forEach((attr) => $node.setAttribute(attr[0], attr[1]));
  vNode.children.forEach(child => $node.appendChild(render(child)));

  return $node;
}
