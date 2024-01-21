import { Routes, Route } from 'react-router-dom';
import { Home, Myinfo, Login, OAuth } from './pages';

import './App.css';
import './index.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myinfo" element={<Myinfo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth" element={<OAuth />} />
      </Routes>
    </>
  );
}

export default App;
