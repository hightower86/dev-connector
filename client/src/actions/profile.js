import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_PROFILES,
  UPDATE_PROFILE
} from '../actions/types';

// Get current users profile
export const getUserProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');
    console.log('from profile_action', res);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Create or update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  const config = {
    'Content-Type': 'application/json'
  };
  try {
    const res = await axios.post('api/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile updated' : 'Profile created'));

    if (!edit) {
      history.push('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await axios.get('/api/profile');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// ADD EXPERIENCE
export const addExperience = (formData, history) => async dispatch => {
  const config = {
    'Content-Type': 'application/json'
  };
  try {
    const res = await axios.put('api/profile/experience', formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Experience added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// ADD EDUCATION
export const addEducation = (formData, history) => async dispatch => {
  const config = {
    'Content-Type': 'application/json'
  };
  try {
    const res = await axios.put('api/profile/education', formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Education added', 'success'));

    history.push('/dashboard');
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
