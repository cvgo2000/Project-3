export default (state, action) => {
  switch (action.type) {
    case "ADD_TRAIL_TO_FAV":
      return {
        ...state,
        trailList: [action.payload, ...state.trailList],
      };
    case "REMOVE_TRAIL_FROM_FAV":
      return {
        ...state,
        trailList: state.trailList.filter(
          (trail) => trail._id !== action.payload
        ),
      };
    default:
      return state;
  }
};
