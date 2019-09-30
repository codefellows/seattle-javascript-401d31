export default (state = {}, {type, payload}) => {
  switch(type) {
    case 'CATEGORY_CREATE':
      return {...state, [payload.id]: []};
    case 'CATEGORY_DELETE':
      const clonedState = {...state};
      delete clonedState[payload.id];
      return clonedState;
    case 'BOOK_CREATE':
      // Vinicio - I want my payload to be an object with
      // name - name of the book
      // id - the id for the book
      // categoryId - the category for the book

      // Vinicio - I need to isolate the array I want to update
      const targetArray = state[payload.categoryId];
      const updatedArray = [...targetArray, payload];

      return {...state, [payload.categoryId]: updatedArray};
    default:
      return state;
  }
};