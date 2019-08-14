/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import {
  LOGIN_USER_ACTION,
  LOGIN_USER_ACTION_SUCCESS,
  LOGIN_USER_ACTION_ERROR,
  RESET_USER_ACTION,
  VERIFY_PHONE_ACTION,
  VERIFY_PHONE_ACTION_SUCCESS,
  VERIFY_PHONE_ACTION_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  user: false,
  token: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_USER_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.user = false;
        draft.token = false;
        break;

      case LOGIN_USER_ACTION_SUCCESS:
        /* eslint-disable no-case-declarations */
        draft.loading = false;
        draft.error = false;
        draft.user = action.user;
        break;

      case LOGIN_USER_ACTION_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.user = false;
        draft.token = false;
        break;

      case RESET_USER_ACTION:
        draft.loading = false;
        draft.error = false;
        draft.user = false;
        draft.token = false;
        break;

      case VERIFY_PHONE_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.token = false;
        break;

      case VERIFY_PHONE_ACTION_SUCCESS:
        /* eslint-disable no-case-declarations */
        draft.loading = false;
        draft.error = false;
        draft.token = action.token;
        break;

      case VERIFY_PHONE_ACTION_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.token = false;
        break;
    }
  });

export default appReducer;
