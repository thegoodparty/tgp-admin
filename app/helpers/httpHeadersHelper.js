export const headersOptions = (body, method = 'GET', token) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return {
    headers,
    method,
    mode: 'cors',
    body,
  };
};
