const registry = {};

const get = (selector) => {
  return registry[selector] ? registry[selector] : false;
};

const add = (selector, component) => {
  if (typeof component !== 'function') {
    return;
  }
  registry[selector] = component;
};

export default { add, get };
