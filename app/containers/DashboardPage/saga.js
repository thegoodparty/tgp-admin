import { takeLatest, call, put, select } from 'redux-saga/effects';

import { LOAD_CD_W_MAP_ACTION } from './constants';
import tgpApi from '../../api/tgpApi';
import { getTokenFromState, logoutUser } from '../../helpers/userHelper';
import request from '../../utils/request';
import { headersOptions } from '../../helpers/httpHeadersHelper';
import {
  loadCdWithMapActionError,
  loadCdWithMapActionSuccess,
} from './actions';

function* loadCdWithMap() {
  try {
    console.log('loadCdWithMap');
    const api = tgpApi.cdWithUsers;
    const token = yield select(getTokenFromState);
    const requestOptions = headersOptions(null, api.method, token);

    const response = yield call(request, api.url, requestOptions);
    yield put(loadCdWithMapActionSuccess(response.cd));
  } catch (err) {
    if (err.response && err.response.error === 'Unauthorized') {
      yield logoutUser();
    } else {
      yield put(
        loadCdWithMapActionError(
          err.message ? err.message : 'Error Loading CD',
        ),
      );
    }
  }
}

export default function* dashboardPageSaga() {
  yield takeLatest(LOAD_CD_W_MAP_ACTION, loadCdWithMap);
}
