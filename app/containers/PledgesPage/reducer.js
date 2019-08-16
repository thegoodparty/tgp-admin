/*
 *
 * PledgesPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_ALL_USERS_ACTION,
  LOAD_ALL_USERS_ACTION_SUCCESS,
  LOAD_ALL_USERS_ACTION_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  users: false,
};

/* eslint-disable default-case, no-param-reassign */
const pledgesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ALL_USERS_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.users = false;
        break;
      case LOAD_ALL_USERS_ACTION_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.users = action.users;
        break;
      case LOAD_ALL_USERS_ACTION_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.users = false;
        break;
    }
  });

export default pledgesPageReducer;
