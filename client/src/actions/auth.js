import axios from 'axios';

import { REGISTER_FAIL, REGISTER_SUCCESS } from './types';

// Register User

export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    'Content-Type': 'application/json'
  };

  const body = JSON.stringify({ name, email, password });

  try {
    await axios.post('/api/users/', body, config);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: REGISTER_FAIL });
  }
};
