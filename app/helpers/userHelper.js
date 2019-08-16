import { getCookie } from './cookieHelper';

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
