import { call, put, takeLatest } from 'redux-saga/effects';
import { headersOptions } from 'helpers/httpHeadersHelper';
import { push } from 'connected-react-router';
import request from 'utils/request';
import tgpApi from 'api/tgpApi';

import { LOGIN_USER_ACTION, VERIFY_PHONE_ACTION } from './constants';

import {
  loginActionError,
  loginActionSuccess,
  verifyPhoneActionError,
  verifyPhoneActionSuccess,
} from './actions';
import { ADMIN_ROLE } from '../../helpers/userHelper';

function* loginUser(action) {
  try {
    const api = tgpApi.login;
    const body = JSON.stringify({
      phone: action.phone,
      verify: true,
    });
    const requestOptions = headersOptions(body, api.method);

    const response = yield call(request, api.url, requestOptions);
    console.log(response);
    const { user } = response;

    if (user.role !== ADMIN_ROLE) {
      yield put(
        loginActionError('You may be a good person, but you are not an admin.'),
      );
    } else {
      yield put(loginActionSuccess(user));
    }
  } catch (err) {
    console.log(err);
    yield put(loginActionError(err.message ? err.message : err));
  }
}

function* verifyPhone(action) {
  try {
    const api = tgpApi.verifyCode;
    const body = JSON.stringify({
      phone: action.phone,
      code: action.code,
    });
    const requestOptions = headersOptions(body, api.method);

    const response = yield call(request, api.url, requestOptions);
    console.log(response);
    const { token } = response;
    yield put(verifyPhoneActionSuccess(token));
    yield put(push('dashboard'));
  } catch (err) {
    console.log(err);
    yield put(verifyPhoneActionError(err.message ? err.message : err));
  }
}

// Individual exports for testing
export default function* appSaga() {
  const loginAction = yield takeLatest(LOGIN_USER_ACTION, loginUser); // eslint-disable-line no-unused-vars
  const verifyAction = yield takeLatest(VERIFY_PHONE_ACTION, verifyPhone); // eslint-disable-line no-unused-vars
}
