import Header from './view/web_components/header';
import ItemPage from './view/pages/item-page';

window
  .customElements
  .define('item-page', ItemPage);

window
  .customElements
  .define('header-box', Header);
