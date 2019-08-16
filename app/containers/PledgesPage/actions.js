/*
 *
 * PledgesPage actions
 *
 */

import {
  LOAD_ALL_USERS_ACTION,
  LOAD_ALL_USERS_ACTION_SUCCESS,
  LOAD_ALL_USERS_ACTION_ERROR,
} from './constants';

export function loadAllUsersAction() {
  return {
    type: LOAD_ALL_USERS_ACTION,
  };
}

export function loadAllUsersActionSuccess(users) {
  return {
    type: LOAD_ALL_USERS_ACTION_SUCCESS,
    users,
  };
}

export function loadAllUsersActionError(error) {
  return {
    type: LOAD_ALL_USERS_ACTION_ERROR,
    error,
  };
}
