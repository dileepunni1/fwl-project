import * as VDOM from '../vdom/vdom';

export default (vTarget, template, vEvents = []) => {
  const $nodesByHTML = VDOM.Helpers.stringToHTML(template);
  const vNodes = VDOM.Mapper.mapRootNode($nodesByHTML);

  const cloneVEvents = vEvents.map(event => {
    const callback = VDOM.Events.get(event.callback);
    return callback ? { ...event, callback } : {};
  });

  return VDOM.VElement.create({
    ...vTarget,
    children: [...vNodes.children],
    events: [...cloneVEvents],
  });
};
