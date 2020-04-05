export default class HeaderApp extends HTMLElement {
  static get observedAttributes() {
    return ['color', 'data-title'];
  }

  get color() {
    return this.getAttribute('color') || 'black';
  }

  set color(value) {
    this.setAttribute('color', value);
  }

  get title() {
    return this.getAttribute('data-title') || 'FWL Project';
  }

  set title(value) {
    console.log('set title', value);
    this.setAttribute('data-title', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (!this.div) {
      return;
    }

    if (name === 'color') {
      this.div.style.color = newValue;
    }

    if (name === 'data-title') {
      this.title = newValue;
      this.div.innerHTML = `<h1>${newValue}</h1>`;
    }
  }

  connectedCallback() {
    window.requestAnimationFrame(() => {
      this.div = document.createElement('div');
      this.div.innerHTML = `<h1>${this.title}</h1>`;
      this.div.style.color = this.color;
      this.appendChild(this.div);
    });
  }
}
