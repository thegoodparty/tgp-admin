/*
 *
 * DashboardPage actions
 *
 */

import {
  LOAD_CD_W_MAP_ACTION,
  LOAD_CD_W_MAP_ACTION_SUCCESS,
  LOAD_CD_W_MAP_ACTION_ERROR,
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
