import * as VDom from '../vdom';

export default class vElement extends HTMLElement {
  constructor() {
    super();
    this.vDom = undefined;
  }

  changeDetection(selector, markup) {
    window.requestAnimationFrame(() => {
      let $element = this.shadowRoot ? this.shadowRoot.querySelector(selector) : this.querySelector(selector);
      const vNodes = VDom.Mapper.mapRootNode($element);
      const newVItems = VDom.Mapper.mapRootNode(typeof markup === 'string' ? VDom.Helpers.stringToHTML(markup) : markup);
      vNodes.children = newVItems.children;

      if (this.vDom) {
        const patch = VDom.diff(this.vDom, vNodes);
        $element = patch($element);
      } else {
        $element.replaceWith(VDom.render(vNodes));
      }
      this.vDom = vNodes;
    });
  }
}
