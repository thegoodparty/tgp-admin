import { getCookie } from './cookieHelper';

export const ADMIN_ROLE = 30;

export const getUser = () => {
  const userCookie = getCookie('tgpuser');
  let user = false;
  if (typeof userCookie === 'string') {
    user = JSON.parse(decodeURIComponent(userCookie));
  }
  return user;
};
