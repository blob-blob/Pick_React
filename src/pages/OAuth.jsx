import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setSnsAuth } from '@/api/login';
import Cookies from 'js-cookie';

const OAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const provider = queryParams.get('state');
  const code = queryParams.get('code');

  useEffect(() => {
    if (Cookies.get('accessToken')) {
      navigate('/');
      return;
    }

    setSnsAuth({ provider, code }).then(() => {
      navigate('/');
    });
  }, [provider, code, navigate]);

  return null;
};

export default OAuth;
