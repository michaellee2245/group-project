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

export const register = () => {
  return dispatch => {
    axios.get('/api/auth/register')
    .then ((user) => {
      dispatch ({
        type: "USER",
        payload: user
      })
    })
  }
}