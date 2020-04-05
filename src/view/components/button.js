import component from '../component';

const getHTML = () => 'Aggiungi';

export default (vTarget, { items = [] } = {}) => {
  const vEvents = [{
    event: 'click',
    selector: '',
    callback: 'add',
  }];
  return component(vTarget, getHTML(items), vEvents);
};
