// 로그인 버튼 컴포넌트
const { naver } = window;
import React, { useEffect } from 'react';

const initializeNaverLogin = () => {
  const naverLogin = new naver.LoginWithNaverId({
    clientId: `${import.meta.env.VITE_NAVER_CLIENT_ID}`,
    isPopup: false,
    loginButton: { color: 'green', type: 3, height: 58 },
    callbackHandle: true,
  });
  naverLogin.init();
};

const Naver = () => {
  useEffect(() => {
    initializeNaverLogin();
  }, []);
  const NAVER_CLIENT_ID = import.meta.env.VITE_NAVER_CLIENT_ID; // 발급받은 클라이언트 아이디
  const REDIRECT_URI = 'http://localhost:3000/oauth'; // Callback URL
  const STATE = 'naver';
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}`;

  const NaverLogin = () => {
    window.location.href = NAVER_AUTH_URL;
  };

  return (
    <button id="naverIdLogin" onClick={NaverLogin} className="max-w-[390px] min-w-[270px] mt-8 bg-white">
      네이버 로그인
    </button>
  );
};

export default Naver;
