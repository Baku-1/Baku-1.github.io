import { register, login } from '../../services/authService';

export const registerUser = (userData) => async (dispatch) => {
  const data = await register(userData);
    dispatch({ type: 'REGISTER_USER', payload: data });
    };

    export const loginUser = (userData) => async (dispatch) => {
      const data = await login(userData);
        dispatch({ type: 'LOGIN_USER', payload: data });
        };