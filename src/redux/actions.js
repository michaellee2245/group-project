import axios from 'axios';
import {push} from 'connected-react-router';

export const login = (user) => {
  return dispatch => {
    axios.post('/api/auth/login' ,user)
    .then( (user) => {
      console.log('redux', user)
      dispatch ({
        type: "USER",
        payload: user
      })
      if (user){
        dispatch(push('dashboard page'))
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
    })
  }
}

export const getSession = () => {
  return dispatch => {
    axios.get('/api/auth/session ')
    .then( (user) => {
      console.log('redux session',user.data)
      dispatch ({
        type: "USER",
        payload: user
      })
      if (!user) {
        dispatch (push('homepage'))
      } else {
        dispatch (push('dashboard page'))
      }
    })
  }
}

// user must have name, email and password
export const register = (user) => {
  return dispatch => {
    axios.post('/api/auth/register',user)
    .then ((user) => {
      console.log('register', user)
      dispatch ({
        type: "USER",
        payload: user
      })
    })
  }
}