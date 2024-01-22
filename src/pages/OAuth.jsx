import { useLocation, useNavigate } from 'react-router-dom';

import { setSnsAuth } from '@/api/login';
import React, { useEffect } from 'react';
const OAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const provider = queryParams.get('state');
  const code = queryParams.get('code');

  useEffect(() => {
    setSnsAuth({ provider, code })
      .then(() => {
        navigate('/');
      })
      .catch(error => {
        console.error('error::', error);
      });
  }, [provider, code, navigate]);

  return (
    <div>
      <p>{`State: ${provider}`}</p>
      <p>{`Code: ${code}`}</p>
    </div>
  );
};

export default OAuth;
