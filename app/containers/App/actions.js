/*
 *
 * App actions
 *
 */

import {
  LOGIN_USER_ACTION,
  LOGIN_USER_ACTION_SUCCESS,
  LOGIN_USER_ACTION_ERROR,
  RESET_USER_ACTION,
  VERIFY_PHONE_ACTION,
  VERIFY_PHONE_ACTION_SUCCESS,
  VERIFY_PHONE_ACTION_ERROR,
} from './constants';

export function loginAction(phone) {
  return {
    type: LOGIN_USER_ACTION,
    phone,
  };
}

export function loginActionSuccess(user) {
  return {
    type: LOGIN_USER_ACTION_SUCCESS,
    user,
  };
}

export function loginActionError(error) {
  return {
    type: LOGIN_USER_ACTION_ERROR,
    error,
  };
}

export function resetUser() {
  return {
    type: RESET_USER_ACTION,
  };
}

export function verifyPhoneAction(phone, code) {
  return {
    type: VERIFY_PHONE_ACTION,
    phone,
    code,
  };
}

export function verifyPhoneActionSuccess(token) {
  return {
    type: LOGIN_USER_ACTION_SUCCESS,
    token,
  };
}

export function verifyPhoneActionError(error) {
  return {
    type: LOGIN_USER_ACTION_ERROR,
    error,
  };
}
