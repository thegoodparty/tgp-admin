export const getCookie = name => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return parts
      .pop()
      .split(';')
      .shift();
  return false;
};

export const setCookie = (name, value, days = 2) => {
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
};

export const setUserCookie = (
  id,
  token,
  fname,
  lname,
  email,
  avatarUrl = false,
) => {
  setCookie(
    'rcuser',
    JSON.stringify({
      id,
      token,
      fname,
      lname,
      email,
      avatarUrl,
    }),
  );
};

export const cleanCookies = () => {
  document.cookie.split(';').forEach(c => {
    document.cookie = c
      .replace(/^ +/, '')
      .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
  });
};
