import { push } from 'connected-react-router';
import { put } from 'redux-saga/effects';
import { cleanCookies, getCookie } from './cookieHelper';
import { resetUser } from '../containers/App/actions';

export const ADMIN_ROLE = 30;
let cachedToken;

export const getUser = () => {
  const userCookie = getCookie('tgpuser');
  let user = false;
  if (typeof userCookie === 'string') {
    user = JSON.parse(decodeURIComponent(userCookie));
  }
  return user;
};

export const getTokenFromState = state => {
  // cache the token.
  if (cachedToken) {
    return cachedToken;
  }
  const { token } = state.appPage;
  if (token) {
    cachedToken = token.token;
    return token.token;
  }
  return '';
};

export function* logoutUser() {
  cleanCookies();
  yield put(resetUser());
  yield put(push('/'));
}
