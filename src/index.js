import Header from './view/web_components/header';
import ItemPage from './view/pages/item-page';
import OtherPage from './view/pages/other-page';

import Router from './router';

window
  .customElements
  .define('item-page', ItemPage);


window
  .customElements
  .define('other-page', OtherPage);


window
  .customElements
  .define('header-box', Header);


const router = new Router({
  mode: 'hash',
  root: '/',
});

router
  .add(/items/, () => {
    document.getElementById('app').innerHTML = '<item-page></item-page>';
  })
  .add(/other/, () => {
    document.getElementById('app').innerHTML = '<other-page></other-page>';
  })
  // .add(/foo\/(.*)\/bar\/(.*)/, (foo_id, bar_id) => { })
  .add('', () => {
    console.log('general controller');
  });
