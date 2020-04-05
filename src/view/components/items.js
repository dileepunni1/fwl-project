import component from './component';

const getHTML = (items) => items.reduce((str, item) => {
  return `
    ${str}
    <li class="list-group-item">
      ${item}
    </li>`;
}, '');

export default (vTarget, { items = [] }) => {
  return component(vTarget, getHTML(items));
};
