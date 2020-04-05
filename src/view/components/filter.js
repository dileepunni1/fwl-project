import component from '../component';

const getHTML = () => '';

export default (vTarget, { items = [] } = {}) => {
  const vEvents = [{
    event: 'input',
    selector: '',
    callback: 'filter',
  }];
  return component(vTarget, getHTML(items), vEvents);
};
