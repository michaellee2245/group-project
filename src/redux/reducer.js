const initState = {
  user: null,
  dashboard: {}
}

const reducer = (state = initState, action) => {
  switch (action.type){
    case "USER": {
      return {...state, user: action.payload.data}
    }
    case "LOGOUT": {
      return {...state, user: action.payload}
    }
    case "BOARDS": {
      return {...state, dashboard: action.payload}
    }
    
    default: return state
  }
}

export default reducer;