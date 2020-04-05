const events = {};

const get = (selector) => {
  return events[selector] ? events[selector] : false;
};

const add = (selector, component) => {
  if (typeof component !== 'function') {
    return;
  }
  events[selector] = component;
};

export default { add, get };
