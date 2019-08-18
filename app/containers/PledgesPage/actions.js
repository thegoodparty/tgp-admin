/*
 *
 * PledgesPage actions
 *
 */

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

export function loadThresholdsAction() {
  return {
    type: LOAD_THRESHOLDS_ACTION,
  };
}

export function loadThresholdsSuccess(cdThresholds, senateThresholds) {
  return {
    type: LOAD_THRESHOLDS_ACTION_SUCCESS,
    cdThresholds,
    senateThresholds,
  };
}

export function loadThresholdsError(error) {
  return {
    type: LOAD_THRESHOLDS_ACTION_ERROR,
    error,
  };
}

export function loadSenateWithUsersAction() {
  return {
    type: LOAD_SENATE_W_USERS_ACTION,
  };
}

export function loadSenateWithUsersActionSuccess(senateWithUsers) {
  return {
    type: LOAD_SENATE_W_USERS_ACTION_SUCCESS,
    senateWithUsers,
  };
}

export function loadSenateWithUsersActionError(error) {
  return {
    type: LOAD_SENATE_W_USERS_ACTION_ERROR,
    error,
  };
}
