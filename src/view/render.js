import Items from './components/items';
import Counter from './components/counter';

export default (target, state) => {
  const cloneTarget = target.cloneNode(true);

  const itemList = cloneTarget.querySelector('[data-component=item-list]');
  const itemCounter = cloneTarget.querySelector('[data-component=item-counter]');

  itemList.replaceWith(Items.createItemList(itemList, state.items));
  itemCounter.replaceWith(Counter(itemCounter, state.items));

  return cloneTarget;
};
