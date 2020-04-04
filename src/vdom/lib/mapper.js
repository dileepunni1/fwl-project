
import vElement from './v-element';

const mapNode = ($node, func) => {
  const vNode = func($node);
  if (typeof vNode === 'string') {
    return vNode;
  }

  vNode.children = Array.prototype.map.call($node.childNodes, ($childNode) => mapNode($childNode, func));
  return vNode;
};

const mapRootNode = ($target) => {
  const createVElement = ($root) => vElement.createByNode($root);
  return mapNode($target, createVElement);
};

export default { mapRootNode };
