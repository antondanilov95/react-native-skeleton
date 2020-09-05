import reducer from '../../utils/reducer';
import {types} from './actions';

const initState = {
    token:null,
    isLoading: false,
    user: {
      name:'',
    },
};

export default reducer(initState, {
  [types.INIT_ACCOUNT]: (state, action) => {
    return {
      ...state,
      isLoading: true
    };
  },
  [types.INIT_ACCOUNT_SUCCESS]: (state, action) => {
    const {name, token} = action.payload
    return {
      ...state,
      isLoading: false,
      user: {
        name
      },
      token
    };
  },
  [types.INIT_ACCOUNT_FAILURE]: (state, action) => {
    return {
      ...state,
      isLoading: false,
    };
  },
  [types.LOGIN_SUCCESS]: (state, action) => {
    return {
      ...state,
      error: '',
      token: action.payload,
      user: {
        ...action.payload
      }
    };
  },
  [types.LOGIN_FAILURE]: (state, action) => {
    return {
      ...state,
      error: action.payload
    };
  },
  [types.LOGOUT_SUCCESS]: (state) => {
    return {
      ...state,
      ...initState
    };
  },
  [types.SET_NAME]: (state, action) => {
    return {
      ...state,
      user: {
        ...state.user,
        name: action.payload
      },
    };
  },
});
