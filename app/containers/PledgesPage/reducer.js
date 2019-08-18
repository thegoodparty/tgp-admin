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
  LOAD_THRESHOLDS_ACTION,
  LOAD_THRESHOLDS_ACTION_SUCCESS,
  LOAD_THRESHOLDS_ACTION_ERROR,
  LOAD_CD_W_USERS_ACTION,
  LOAD_CD_W_USERS_ACTION_SUCCESS,
  LOAD_CD_W_USERS_ACTION_ERROR,
  LOAD_SENATE_W_USERS_ACTION,
  LOAD_SENATE_W_USERS_ACTION_SUCCESS,
  LOAD_SENATE_W_USERS_ACTION_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  users: false,
  cdThresholds: false,
  senateThresholds: false,
  cdWithUsers: false,
  senateWithUsers: false,
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

      case LOAD_THRESHOLDS_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.cdThresholds = false;
        draft.senateThresholds = false;
        break;
      case LOAD_THRESHOLDS_ACTION_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.cdThresholds = action.cdThresholds;
        draft.senateThresholds = action.senateThresholds;
        break;
      case LOAD_THRESHOLDS_ACTION_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.cdThresholds = false;
        draft.senateThresholds = false;
        break;

      case LOAD_CD_W_USERS_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.cdWithUsers = false;
        break;
      case LOAD_CD_W_USERS_ACTION_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.cdWithUsers = action.cdWithUsers;
        break;
      case LOAD_CD_W_USERS_ACTION_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.cdWithUsers = false;
        break;

      case LOAD_SENATE_W_USERS_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.senateWithUsers = false;
        break;
      case LOAD_SENATE_W_USERS_ACTION_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.senateWithUsers = action.senateWithUsers;
        break;
      case LOAD_SENATE_W_USERS_ACTION_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.senateWithUsers = false;
        break;
    }
  });

export default pledgesPageReducer;
