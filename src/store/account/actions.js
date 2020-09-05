import AsyncStorage from '@react-native-community/async-storage';

export const types = {
  LOGIN_SUCCESS: Symbol('LOGIN_SUCCESS'),
  LOGOUT_SUCCESS: Symbol('LOGOUT_SUCCESS'),
  LOGIN_FAILURE: Symbol('LOGIN_FAILURE'),
  INIT_ACCOUNT: Symbol('INIT_ACCOUNT'),
  INIT_ACCOUNT_SUCCESS: Symbol('INIT_ACCOUNT_SUCCESS'),
  INIT_ACCOUNT_FAILURE: Symbol('INIT_ACCOUNT_FAILURE'),
  SET_NAME: Symbol('SET_NAME'),
};

export default {
  initAccount: () => {
    return async (dispatch, getState) => {
      dispatch({type: types.INIT_ACCOUNT});
      try {
        const token = await AsyncStorage.getItem('@token')

        dispatch({type: types.INIT_ACCOUNT_SUCCESS, payload: {token, name: token}});
      } catch (err) {
        dispatch({type: types.INIT_ACCOUNT_FAILURE});
        throw err;
      }
    }
  },
  login: ({name = '', password = ''}) => {
    return async (dispatch, getState) => {
      try {
        if (!name){
          throw 'Name cannot be empty'
        }
        if(password !== '1234'){
          throw 'Incorrect password'
        }
        const res = {
          name
        }
        await AsyncStorage.setItem('@token', name)
        dispatch({type: types.LOGIN_SUCCESS, payload: res});
      } catch (err) {
        dispatch({type: types.LOGIN_FAILURE, payload: err});
        throw err;
      }
    }
  },
  setName: (name) => {
    return async (dispatch, getState) => {
      try {
        dispatch({type: types.SET_NAME, payload: name});
      } catch (err) {
        throw err;
      }
    }
  },

  logout: () => {
    return async (dispatch, getState) => {
      try {
        await AsyncStorage.removeItem('@token')
        dispatch({type: types.LOGOUT_SUCCESS});
      } catch (err) {
        throw err;
      }
    }
  },
};
