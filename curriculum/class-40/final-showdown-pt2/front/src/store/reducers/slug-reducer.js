export default (state = [], action) => {
  switch (action.type) {
    case "SLUGS_LOAD":
      return action.payload;
    case "SLUGS_UPDATE":
      return state.map(slug => {
        if (slug.id === action.payload.id) {
          return action.payload;
        }
        return slug;
      })
    default:
      return state;
  }
}