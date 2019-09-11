/*
 *
 * CandidatesPage actions
 *
 */

import {
  LOAD_ALL_CANDIDATES_ACTION,
  LOAD_ALL_CANDIDATES_ACTION_SUCCESS,
  LOAD_ALL_CANDIDATES_ACTION_ERROR,
} from './constants';

export function loadAllCandidatesAction() {
  return {
    type: LOAD_ALL_CANDIDATES_ACTION,
  };
}

export function loadAllCandidatesActionSuccess(candidates) {
  return {
    type: LOAD_ALL_CANDIDATES_ACTION_SUCCESS,
    candidates,
  };
}

export function loadAllCandidatesActionError(error) {
  return {
    type: LOAD_ALL_CANDIDATES_ACTION_ERROR,
    error,
  };
}
