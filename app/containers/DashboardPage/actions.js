/*
 *
 * DashboardPage actions
 *
 */

import {
  LOAD_CD_W_MAP_ACTION,
  LOAD_CD_W_MAP_ACTION_SUCCESS,
  LOAD_CD_W_MAP_ACTION_ERROR,
  LOAD_CD_WEEKLY_TREND_ACTION,
  LOAD_CD_WEEKLY_TREND_ACTION_SUCCESS,
  LOAD_CD_WEEKLY_TREND_ACTION_ERROR,
} from './constants';

export function loadCdWithMapAction() {
  return {
    type: LOAD_CD_W_MAP_ACTION,
  };
}

export function loadCdWithMapActionSuccess(cdWithMap) {
  return {
    type: LOAD_CD_W_MAP_ACTION_SUCCESS,
    cdWithMap,
  };
}

export function loadCdWithMapActionError(error) {
  return {
    type: LOAD_CD_W_MAP_ACTION_ERROR,
    error,
  };
}

export function loadCdWeeklyTrendAction() {
  return {
    type: LOAD_CD_WEEKLY_TREND_ACTION,
  };
}

export function loadCdWeeklyTrendActionSuccess(cdTrend, senateTrend) {
  return {
    type: LOAD_CD_WEEKLY_TREND_ACTION_SUCCESS,
    cdTrend,
    senateTrend
  };
}

export function loadCdWeeklyTrendActionError(error) {
  return {
    type: LOAD_CD_WEEKLY_TREND_ACTION_ERROR,
    error,
  };
}
