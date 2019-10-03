export default (state = [], {type, payload}) => {
  switch(type) {
    case 'PET_LOAD':
      return payload;
    default:
      return state;
  }
};
