import axios from 'axios';
import { setAlert } from './alert';

import {
GET_PROFILE,
PROFILE_ERROR
} from '../actions/types'

export const getUserProfile = () = async dispatch => {
  try {
    const res = axios.get('/api/profile/me')
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.responce.statusText, status: err.responce.status}
    })
  }
}