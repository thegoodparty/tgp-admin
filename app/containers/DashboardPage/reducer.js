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
  LOAD_CD_WEEKLY_TREND_ACTION,
  LOAD_CD_WEEKLY_TREND_ACTION_SUCCESS,
  LOAD_CD_WEEKLY_TREND_ACTION_ERROR,
} from './constants';

export const initialState = {
  cdWithMap: false,
  cdTrend: false,
  senateTrend: false,
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

      case LOAD_CD_WEEKLY_TREND_ACTION:
        draft.loading = true;
        draft.error = false;
        draft.cdTrend = false;
        draft.senateTrend = false;
        break;
      case LOAD_CD_WEEKLY_TREND_ACTION_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.cdTrend = action.cdTrend;
        draft.senateTrend = action.senateTrend;
        break;
      case LOAD_CD_WEEKLY_TREND_ACTION_ERROR:
        draft.loading = false;
        draft.error = action.error;
        draft.cdTrend = false;
        draft.senateTrend = false;
        break;
    }
  });

export default dashboardPageReducer;
