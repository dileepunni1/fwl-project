export default function reducer(state = {}, action) {
  let nextState = {};
  switch (action.type) {
    case 'ADD':
      nextState = {
        items: [
          ...state.items,
          action.payload.item,
        ],
      };
      return nextState;
    case 'FILTER':
      nextState = {
        items: action.payload.initialState.items.filter((item) => {
          return item.toLowerCase().indexOf(action.payload.filter.toLowerCase()) >= 0;
        }),
      };
      return nextState;
    default:
      return state;
  }
}
