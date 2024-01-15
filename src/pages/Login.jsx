const { naver } = window;
import React, { useEffect } from 'react';
import TungLayout from '../layouts/Tung';

function Login() {
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: `${import.meta.env.VITE_NAVER_CLIENT_ID}`,
      callbackUrl: `http://localhost:3001/home`,
      isPopup: true,
      loginButton: { color: 'green', type: 2, height: 10 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <TungLayout>
      <h1>LOGIN</h1>
      <div id="naverIdLogin" className="mt-8" />
    </TungLayout>
  );
}

export default Login;
