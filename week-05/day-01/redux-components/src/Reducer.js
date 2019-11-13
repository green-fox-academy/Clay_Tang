const initialState = {
  counter: 0,
  tags: []
}

function Reducer(state = initialState, action) {
  if (action.type === 'INCREASE') {
    return {
      ...state,
      counter: state.counter + (action.amount || 1)
    }
  }
  if (action.type === 'DECREASE') {
    return {
      ...state,
      counter: state.counter - (action.amount || 1)
    }
  }
  if (action.type === 'RESET') {
    return {
      ...state,
      counter: 0
    }
  }
  if (action.type === 'SET') {
    return {
      ...state,
      counter: action.amount
    }
  }
  return state;
}

export default Reducer;