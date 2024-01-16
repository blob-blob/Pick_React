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
  const clientId = import.meta.env.REACT_APP_NAVER_CLIENT_ID;
  const redirectUri = 'http://localhost:8080/v1/api/login/oauth2/code/naver';

  return (
    <TungLayout>
      <h1>LOGIN</h1>
      <div id="naverIdLogin" className="mt-8" />
      <body>
        <a
          href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`}>
          Naver Login
        </a>
      </body>
    </TungLayout>
  );
}

export default Login;
