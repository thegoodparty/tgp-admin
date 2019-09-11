import { takeLatest, call, put, select, all } from 'redux-saga/effects';

import { LOAD_ALL_CANDIDATES_ACTION } from './constants';
import tgpApi from '../../api/tgpApi';
import { getTokenFromState, logoutUser } from '../../helpers/userHelper';
import request from '../../utils/request';
import { headersOptions } from '../../helpers/httpHeadersHelper';
import {
  loadAllCandidatesActionSuccess,
  loadAllCandidatesActionError,
} from './actions';

function* loadAllCandidates() {
  try {
    console.log('loading candidates saga')
    const api = tgpApi.loadAllCandidates;
    const token = yield select(getTokenFromState);
    const requestOptions = headersOptions(null, api.method, token);

    const response = yield call(request, api.url, requestOptions);
    console.log(response);
    yield put(loadAllCandidatesActionSuccess(response.candidates));
  } catch (err) {
    console.log(err)
    if (err.response && err.response.error === 'Unauthorized') {
      yield logoutUser();
    } else {
      yield put(
        loadAllCandidatesActionError(
          err.message ? err.message : 'Error Loading candidates',
        ),
      );
    }
  }
}

export default function* candidatePageSaga() {
  yield takeLatest(LOAD_ALL_CANDIDATES_ACTION, loadAllCandidates);
}
