export default function render(vNode) {
  if (typeof vNode === 'string') {
    return document.createTextNode(vNode);
  }

  const $node = document.createElement(vNode.tagName);

  Object.entries(vNode.attrs).forEach((attr) => $node.setAttribute(attr[0], attr[1]));
  vNode.children.forEach(child => $node.appendChild(render(child)));

  vNode.events.map((event) => {
    const $selectedNode = event.selector ? $node.querySelector(event.selector) : $node;
    return $selectedNode.addEventListener(event.event, event.callback);
  });

  return $node;
}
