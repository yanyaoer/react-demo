let initialState = {
  items: [1,2,3],
  text: 'world',
  status: false,
}

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'TEST_LOG':
      console.log(action.payload);
      return state;
    case 'TEST_FETCH':
      newState = Object.assign({}, state, {
        text: action.payload
      })
      return newState;
    case 'TEST_REVERSE':
      newState = Object.assign({}, state, {
        items: state.items.slice().reverse()
      })
      return newState;

    default:
      return state;
  }
}
