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
    case "PHONE": {
      return {...state, user: {...state.user, user: {...state.user.user, phone: action.payload}}}
    }
    case "EMAIL": {
      return {...state, user: {...state.user, user: {...state.user.user, email: action.payload}}}
    }
    case "TITLE": {
      return {...state, user: {...state.user, user: {...state.user.user, title: action.payload}}}
    }
    case "PIC": {
      return {...state, user: {...state.user, user: {...state.user.user, pic: action.payload}}}
    }

    default: return state
  }
}

export default reducer;