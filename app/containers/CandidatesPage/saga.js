import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { ADD_CANDIDATE_ACTION, LOAD_ALL_CANDIDATES_ACTION } from './constants';
import tgpApi from '../../api/tgpApi';
import { getTokenFromState, logoutUser } from '../../helpers/userHelper';
import request from '../../utils/request';
import { headersOptions } from '../../helpers/httpHeadersHelper';
import {
  loadAllCandidatesActionSuccess,
  loadAllCandidatesActionError,
  loadAllCandidatesAction,
} from './actions';

function* loadAllCandidates() {
  try {
    const api = tgpApi.loadAllCandidates;
    const token = yield select(getTokenFromState);
    const requestOptions = headersOptions(null, api.method, token);

    const response = yield call(request, api.url, requestOptions);
    console.log(response);
    yield put(loadAllCandidatesActionSuccess(response.candidates));
  } catch (err) {
    console.log(err);
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

function* addCandidate(action) {
  try {
    const api = tgpApi.addCandidate;
    const token = yield select(getTokenFromState);
    const body = JSON.stringify({
      ...action.candidate,
    });
    const requestOptions = headersOptions(body, api.method, token);

    const response = yield call(request, api.url, requestOptions);
    console.log(response);
    yield put(loadAllCandidatesAction());
    yield put(push('/dashboard/candidates'));
  } catch (err) {
    console.log(err);
    if (err.response && err.response.error === 'Unauthorized') {
      yield logoutUser();
    } else {
      yield put(
        loadAllCandidatesActionError(
          err.message ? err.message : 'Error adding candidate',
        ),
      );
    }
  }
}

export default function* candidatePageSaga() {
  yield takeLatest(LOAD_ALL_CANDIDATES_ACTION, loadAllCandidates);
  const action = yield takeLatest(ADD_CANDIDATE_ACTION, addCandidate); // eslint-disable-line no-unused-vars
}
