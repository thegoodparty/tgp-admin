import { takeLatest, call, put, select, all } from 'redux-saga/effects';

import { LOAD_CD_W_MAP_ACTION, LOAD_CD_WEEKLY_TREND_ACTION } from './constants';
import tgpApi from '../../api/tgpApi';
import { getTokenFromState, logoutUser } from '../../helpers/userHelper';
import request from '../../utils/request';
import { headersOptions } from '../../helpers/httpHeadersHelper';
import {
  loadCdWeeklyTrendActionError,
  loadCdWeeklyTrendActionSuccess,
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
function* loadCdWeeklyTrend() {
  try {
    const api = tgpApi.cdWeeklyTrend;
    const token = yield select(getTokenFromState);
    const requestOptions = headersOptions(null, api.method, token);

    const api2 = tgpApi.senateWeeklyTrend;
    const requestOptions2 = headersOptions(null, api2.method, token);

    const [cdResponse, senateResponse] = yield all([
      call(request, api.url, requestOptions),
      call(request, api2.url, requestOptions2),
    ]);

    yield put(
      loadCdWeeklyTrendActionSuccess(
        cdResponse.cdWeeklyTrend,
        senateResponse.senateWeeklyTrend,
      ),
    );
  } catch (err) {
    if (err.response && err.response.error === 'Unauthorized') {
      yield logoutUser();
    } else {
      yield put(
        loadCdWeeklyTrendActionError(
          err.message ? err.message : 'Error Loading CD Trend',
        ),
      );
    }
  }
}

export default function* dashboardPageSaga() {
  yield takeLatest(LOAD_CD_W_MAP_ACTION, loadCdWithMap);
  yield takeLatest(LOAD_CD_WEEKLY_TREND_ACTION, loadCdWeeklyTrend);
}
