import axios from 'axios';
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-type': 'application/json',
    Authorization: 'accesstoken',
  },
});
// 요청 인터셉터 추가
apiClient.interceptors.request.use();
// 응답 인터셉터 추가
apiClient.interceptors.response.use(
  async res => {
    // 응답 데이터
    const resData = res.data.data;
    if (resData) {
      console.log('resData:::', resData);
    }
    return res;
  },
  async err => {
    console.log('err::', err);
    return Promise.reject(err);
  },
);
