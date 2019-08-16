import { call, put, takeLatest, select } from 'redux-saga/effects';
import { headersOptions } from 'helpers/httpHeadersHelper';
import { push } from 'connected-react-router';
import request from 'utils/request';
import tgpApi from 'api/tgpApi';

import { LOAD_ALL_USERS_ACTION } from './constants';

import { loadAllUsersActionSuccess, loadAllUsersActionError } from './actions';
import { getTokenFromState } from '../../helpers/userHelper';

function* loadAllUsers() {
  try {
    const api = tgpApi.allUsers;
    const token = yield select(getTokenFromState);
    const requestOptions = headersOptions(null, api.method, token);

    const response = yield call(request, api.url, requestOptions);
    console.log(response);
    yield put(loadAllUsersActionSuccess(response.users));
  } catch (err) {
    yield put(
      loadAllUsersActionError(
        err.message ? err.message : 'Error Loading Users',
      ),
    );
  }
}

// Individual exports for testing
export default function* pledgeSaga() {
  yield takeLatest(LOAD_ALL_USERS_ACTION, loadAllUsers);
}
