import Helpers from './helpers';

const getAttributes = attributes => {
  return Array.prototype.reduce.call(attributes, (obj, attribute) => {
    return { ...obj, [attribute.name]: attribute.value };
  }, {});
};

const createByNode = ($node, isSVG) => {
  if ($node.nodeType === 3) {
    return $node.textContent;
  }

  const tagName = $node.nodeType === 8 ? 'comment' : $node.tagName.toLowerCase();
  const attrs = $node.nodeType !== 1 ? [] : Helpers.cleanObject(getAttributes($node.attributes));

  return Helpers.cleanObject({
    tagName,
    attrs,
    isSVG: isSVG || tagName === 'svg',
    children: [],
  });
};

export default { createByNode };
