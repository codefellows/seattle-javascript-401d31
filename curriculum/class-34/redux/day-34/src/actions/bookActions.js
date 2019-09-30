export const createBookAction = (name, categoryId) => ({
  type: 'BOOK_CREATE',
  payload: {
    id: Math.random(),
    name,
    categoryId,
  }
});

export const deleteBookAction = (name, categoryId) => ({
  type: 'BOOK_CREATE',
  payload: {
    id: Math.random(),
    name,
    categoryId,
  }
});
