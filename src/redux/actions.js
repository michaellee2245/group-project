import axios from 'axios';
import {push} from 'connected-react-router';
import { UV_UDP_REUSEADDR } from 'constants';

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
      console.log('redux session',user.data)
      dispatch ({
        type: "USER",
        payload: user,
        payload2: user.data.dashboard
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
      console.log('register', user)
      dispatch ({
        type: "USER",
        payload: user
      })
    })
  }
}

export const dashboard = (boardID) => {
  return dispatch => {
    axios.get('/api/dashboard')
    .then (board => {
      console.log('reduxboard',board.data)
      dispatch ({
        type: "BOARDS",
        payload: board.data
      })
    })
  }
}