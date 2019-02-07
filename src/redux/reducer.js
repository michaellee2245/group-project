const initState = {
  user: null
}

const reducer = (state = initState, action) => {
  switch (action.type){
    case "USER": {
      return {...state, user: action.payload.data}
    }
    case "LOGOUT": {
      return {...state, user: action.payload}
    }
    default: return state
  }
}

export default reducer;