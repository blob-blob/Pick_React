import { apiClient } from './http';
// SNS 로그인 처리
const setSnsAuth = param => {
  console.log('setSnsAuth ::', param);
  const { provider, code } = param;
  apiClient
    .get(`/login/oauth2/code/${provider}?code=${code}`)
    .then(res => {
      console.log('loginData :', res);
      return true;
    })
    .catch(err => {
      console.error('error =>', err);
      return;
    });
};

export { setSnsAuth };
