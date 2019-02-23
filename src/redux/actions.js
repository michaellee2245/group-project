import axios from 'axios';
import {push} from 'connected-react-router';

export const login = (user) => {
  return dispatch => {
    axios.post('/api/auth/login' ,user)
    .then( (user) => {
      dispatch ({
        type: "USER",
        payload: user
      })
      if (user){
        dispatch(push('/dashboard'))
      }
    })
  }
}

export const logout = () => {
  return dispatch => {
    axios.get('/api/auth/logout')
    .then(() => {
      dispatch ({
        type: "LOGOUT",
        payload: null
      })
        dispatch(push('/'))
      
    })
  }
}

export const getSession = () => {
  return dispatch => {
    axios.get('/api/auth/session ')
    .then( (user) => {
      dispatch ({
        type: "USER",
        payload: user,
      })
      if (!user) {
        dispatch (push('/marketing'))
      } else {
        dispatch (push('/dashboard'))
      }
    })
  }
}

// user must have name, email and password
export const register = (user) => {
  return dispatch => {
    axios.post('/api/auth/register',user)
    .then ((user) => {
      dispatch ({
        type: "USER",
        payload: user
      })
      dispatch(push('/dashboard'))
    })
  }
}

export const dashboard = (boardID) => {
  return dispatch => {
    axios.get('/api/dashboard')
    .then (board => {
      dispatch ({
        type: "BOARDS",
        payload: board.data
      })
    })
  }
}