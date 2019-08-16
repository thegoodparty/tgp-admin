import ENV from './ENV';
let base = 'http://localhost:1337/api/v1/';
if (ENV === 'dev') {
  base = 'http://tgp-api-dev.us-west-2.elasticbeanstalk.com/api/v1/';
}

const api = {
  base,
  login: {
    url: base + 'entrance/login',
    method: 'PUT',
  },
  verifyCode: {
    url: base + 'entrance/verify-phone',
    method: 'PUT',
  },
  allUsers: {
    url: base + 'admin/all-users',
    method: 'GET',
  },
};
export default api;
