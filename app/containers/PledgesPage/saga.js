import { call, put, takeLatest, select } from 'redux-saga/effects';
import { headersOptions } from 'helpers/httpHeadersHelper';
import { push } from 'connected-react-router';
import request from 'utils/request';
import tgpApi from 'api/tgpApi';

import {
  LOAD_ALL_USERS_ACTION,
  LOAD_CD_W_USERS_ACTION, LOAD_SENATE_W_USERS_ACTION,
  LOAD_THRESHOLDS_ACTION,
} from './constants';

import {
  loadAllUsersActionSuccess,
  loadAllUsersActionError,
  loadThresholdsSuccess,
  loadThresholdsError,
  loadCdWithUsersActionSuccess,
  loadCdWithUsersActionError, loadSenateWithUsersActionSuccess, loadSenateWithUsersActionError,
} from './actions';
import { getTokenFromState, logoutUser } from '../../helpers/userHelper';

function* loadAllUsers() {
  try {
    const api = tgpApi.allUsers;
    const token = yield select(getTokenFromState);
    const requestOptions = headersOptions(null, api.method, token);

    const response = yield call(request, api.url, requestOptions);
    yield put(loadAllUsersActionSuccess(response.users));
  } catch (err) {
    if (err.response && err.response.error === 'Unauthorized') {
      yield logoutUser();
    } else {
      yield put(
        loadAllUsersActionError(
          err.message ? err.message : 'Error Loading Users',
        ),
      );
    }
  }
}

function* loadThresholds() {
  try {
    const api = tgpApi.thresholds;
    const token = yield select(getTokenFromState);
    const requestOptions = headersOptions(null, api.method, token);

    const response = yield call(request, api.url, requestOptions);
    console.log(response);
    yield put(
      loadThresholdsSuccess(response.cdThreshold, response.senateThreshold),
    );
  } catch (err) {
    if (err.response && err.response.error === 'Unauthorized') {
      yield logoutUser();
    } else {
      yield put(
        loadThresholdsError(err.message ? err.message : 'Error Loading Users'),
      );
    }
  }
}

function* loadCdWithUsers() {
  try {
    const api = tgpApi.cdWithUsers;
    const token = yield select(getTokenFromState);
    const requestOptions = headersOptions(null, api.method, token);

    const response = yield call(request, api.url, requestOptions);
    console.log(response);
    yield put(loadCdWithUsersActionSuccess(response.cd));
  } catch (err) {
    if (err.response && err.response.error === 'Unauthorized') {
      yield logoutUser();
    } else {
      yield put(
        loadCdWithUsersActionError(
          err.message ? err.message : 'Error Loading CD',
        ),
      );
    }
  }
}

function* loadSenateWithUsers() {
  try {
    const api = tgpApi.senateWithUsers;
    const token = yield select(getTokenFromState);
    const requestOptions = headersOptions(null, api.method, token);

    const response = yield call(request, api.url, requestOptions);
    console.log(response);
    yield put(loadSenateWithUsersActionSuccess(response.senate));
  } catch (err) {
    if (err.response && err.response.error === 'Unauthorized') {
      yield logoutUser();
    } else {
      yield put(
        loadSenateWithUsersActionError(
          err.message ? err.message : 'Error Loading Senate',
        ),
      );
    }
  }
}

// Individual exports for testing
export default function* pledgeSaga() {
  yield takeLatest(LOAD_ALL_USERS_ACTION, loadAllUsers);
  yield takeLatest(LOAD_THRESHOLDS_ACTION, loadThresholds);
  yield takeLatest(LOAD_CD_W_USERS_ACTION, loadCdWithUsers);
  yield takeLatest(LOAD_SENATE_W_USERS_ACTION, loadSenateWithUsers);
}
