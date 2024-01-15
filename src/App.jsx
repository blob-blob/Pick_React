import { Routes, Route } from 'react-router-dom';
import { Home, Myinfo, Login } from './pages';

import './App.css';
import './index.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myinfo" element={<Myinfo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
