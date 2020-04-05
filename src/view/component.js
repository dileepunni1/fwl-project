import * as VDOM from '../../vdom/vdom';

export default (vTarget, template) => {
  const $nodesByHTML = VDOM.Helpers.stringToHTML(template);
  const vNodes = VDOM.Mapper.mapRootNode($nodesByHTML);
  return VDOM.VElement.create({
    ...vTarget,
    children: [...vNodes.children],
  });
};
