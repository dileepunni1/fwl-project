const registry = {};

const renderWrapper = component => {
  return (target, state) => {
    const cloneTarget = component(target, state);
    const childComponents = cloneTarget.querySelectorAll('[data-component]');

    Array.from(childComponents).forEach(targetChild => {
      const selector = targetChild.dataset.component;
      const child = registry[selector];
      if (!child) {
        return;
      }

      targetChild.replaceWith(child(targetChild, state));
    });
    return cloneTarget;
  };
};

const add = (selector, component) => {
  if (typeof component !== 'function') {
    return;
  }
  registry[selector] = renderWrapper(component);
};

const renderRoot = (target, state) => {
  const cloneComponent = root => root.cloneNode(true);
  return renderWrapper(cloneComponent)(target, state);
};

export default { add, renderRoot };
