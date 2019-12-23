import { REGISTER_FAIL, REGISTER_SUCCESS } from './types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_FAIL:
      return { ...state, ...payload, isAuthenticated: false, loading: false };
    case REGISTER_SUCCESS:
      localStorage.setItem('token', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    default:
      return state;
  }
};
