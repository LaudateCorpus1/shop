import combineReducers from '../../../node_modules/@0xcda7a/redux-es6/es/combineReducers.js';
import categories from './categories.js';
import location from './location.js';
import network from './network.js';
import cart from './cart.js';
import checkout from './checkout.js';
import announcer from './announcer.js';

export default combineReducers({
  categories,
  location,
  network,
  cart,
  checkout,
  announcer
});