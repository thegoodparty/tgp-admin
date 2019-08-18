/*
 *
 * DashboardPage reducer
 *
 */
import produce from 'immer';
import {
  LOAD_CD_W_MAP_ACTION,
  LOAD_CD_W_MAP_ACTION_ERROR,
  LOAD_CD_W_MAP_ACTION_SUCCESS,
} from './constants';

export const initialState = {
  cdWithMap: false,
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const dashboardPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_CD_W_MAP_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.cdWithMap = false;
        break;
      case LOAD_CD_W_MAP_ACTION_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.cdWithMap = action.cdWithMap;
        break;
      case LOAD_CD_W_MAP_ACTION_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.cdWithMap = false;
        break;
    }
  });

export default dashboardPageReducer;
