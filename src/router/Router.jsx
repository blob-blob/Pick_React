import { Home, MyInfo, Login, OAuth, NotFound } from '@/pages';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';

export default function Router() {
  return (
    <Routes>
      {/* { 인증을 반드시 해야지만 접속 가능한 페이지 } */}
      <Route element={<ProtectedRoutes authentication={true} />}>
        <Route path="/" element={<Home />} />
        <Route path="/myinfo" element={<MyInfo />} />
      </Route>

      {/* { 인증을 반드시 하지 않아야만 접속이 가능한 페이지} */}
      <Route element={<ProtectedRoutes authentication={false} />}>
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<OAuth />} />
      </Route>

      {/* { 인증 여부 상관 없이 접속 가능한 페이지} */}
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
