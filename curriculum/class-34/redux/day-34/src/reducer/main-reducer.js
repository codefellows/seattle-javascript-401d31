import {combineReducers} from 'redux';

import categories from './category-reducer';
import books from './book-reducer';

export default combineReducers({
  categories,
  books,
});