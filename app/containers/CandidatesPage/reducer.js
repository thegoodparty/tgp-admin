/*
 *
 * CandidatesPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_ALL_CANDIDATES_ACTION,
  LOAD_ALL_CANDIDATES_ACTION_SUCCESS,
  LOAD_ALL_CANDIDATES_ACTION_ERROR,
} from './constants';

export const initialState = {
  loading: false,
  error: false,
  candidates: false,
};

/* eslint-disable default-case, no-param-reassign */
const candidatesPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_ALL_CANDIDATES_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.candidates = false;
        break;

      case LOAD_ALL_CANDIDATES_ACTION_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.candidates = action.candidates;
        break;

      case LOAD_ALL_CANDIDATES_ACTION_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.candidates = false;
        break;
    }
  });

export default candidatesPageReducer;
