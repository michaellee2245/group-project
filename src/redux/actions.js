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
      dispatch(push('/dashboard/join-team'))
    })
  }
}

export const dashboard = (boardID) => {
  return dispatch => {
    return axios.get('/api/dashboard')
    .then (board => {
      dispatch ({
        type: "BOARDS",
        payload: board.data
      })
    })
  }
}

export const setPhone = (number) => {
  return dispatch => {
    axios.put("/api/user/phone", number)
    .then (() => {
      dispatch({
        type: "PHONE",
        payload: number.phone
      })
    }) 
  }
}

export const setEmail = (email) => {
  return dispatch => {
    axios.put("/api/user/email", email)
    .then (() => {
      dispatch({
        type: "EMAIL",
        payload: email.email
      })
    }) 
  }
}

export const setTitle = (title) => {
  return dispatch => {
    axios.put("/api/user/title", title)
    .then (() => {
      dispatch({
        type: "TITLE",
        payload: title.title
      })
    }) 
  }
}

export const setPic = (pic) => {
  return dispatch => {
    axios.put("/api/user/pic", pic)
    .then (() => {
      dispatch({
        type: "PIC",
        payload: pic.pic
      })
    }) 
  }
}