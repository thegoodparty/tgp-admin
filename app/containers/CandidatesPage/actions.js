/*
 *
 * CandidatesPage actions
 *
 */

import {
  LOAD_ALL_CANDIDATES_ACTION,
  LOAD_ALL_CANDIDATES_ACTION_SUCCESS,
  LOAD_ALL_CANDIDATES_ACTION_ERROR,
  ADD_CANDIDATE_ACTION,
  ADD_CANDIDATE_ACTION_SUCCESS,
  ADD_CANDIDATE_ACTION_ERROR,
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

export function addCandidateAction(candidate) {
  return {
    type: ADD_CANDIDATE_ACTION,
    candidate,
  };
}

export function addCandidateActionSuccess(candidate) {
  return {
    type: ADD_CANDIDATE_ACTION_SUCCESS,
    candidate,
  };
}

export function addCandidateActionError(error) {
  return {
    type: ADD_CANDIDATE_ACTION_ERROR,
    error,
  };
}
