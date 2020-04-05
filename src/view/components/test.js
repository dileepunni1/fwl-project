import * as VDOM from '../../vdom/vdom';

export default function testCallback() {
  return VDOM.VElement.create({ tagName: 'p', attrs: { class: '' }, isSVG: false, children: ['Prova Figlio'] });
}
