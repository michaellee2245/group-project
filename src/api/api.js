import axios from 'axios';


export const getMessages = (user) => {
  axios.get('/api/message/',user)
  .then (res => {
    console.log(res)
  })
  .catch(error => console.error(error))
}