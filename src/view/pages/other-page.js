const template = `
  <header-box data-title="Other Page"></header-box>
  <hr>
  <p>Altra pagina</p>
`;

export default class OtherPage extends HTMLElement {
  constructor() {
    super();
    const tmpl = document.createElement('template');
    tmpl.innerHTML = template;
    const elem = document.createElement('div');
    elem.append(tmpl.content.cloneNode(true));
    this.appendChild(elem);
  }
}
