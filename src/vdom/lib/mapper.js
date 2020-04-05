import vElement from './v-element';
import Registry from './registry';

const updateRegistredComponents = (vNode, state) => {
  let newVNode = vNode;
  if (newVNode.children) {
    const isComponent = Object.keys(newVNode.attrs).find((attr => attr === 'data-component'));
    if (isComponent) {
      const componentGenerator = Registry.get(newVNode.attrs['data-component']);
      if (componentGenerator) {
        newVNode = componentGenerator(newVNode, state);
      }
    }

    const children = newVNode.children.map(child => updateRegistredComponents(child, state));
    newVNode.children = children;
  }
  return newVNode;
};

const mapNode = ($node, func) => {
  const vNode = func($node);
  if (typeof vNode === 'string') {
    return vNode;
  }

  vNode.children = Array.prototype.map.call($node.childNodes, ($childNode) => mapNode($childNode, func));
  return vNode;
};

const mapRootNode = ($target, state) => {
  const createVElement = ($root) => vElement.createByNode($root);
  return updateRegistredComponents(mapNode($target, createVElement), state);
};

export default { mapRootNode };
