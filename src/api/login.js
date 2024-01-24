import { apiClient } from './http';
import Cookies from 'js-cookie';

const setSnsAuth = param => {
  console.log('setSnsAuth ::', param);
  const { provider, code } = param;

  if (Cookies.get('accessToken') && Cookies.get('refreshToken')) {
    return Promise.resolve();
  }

  return apiClient
    .get(`/login/oauth2/code/${provider}?code=${code}`)
    .then(res => {
      console.log('loginData :', res.data.data);
      Cookies.set('accessToken', res.data.data.accessToken);
      Cookies.set('refreshToken', res.data.data.refreshToken);
    })
    .catch(err => {
      console.error('error =>', err);
    });
};

export { setSnsAuth };
