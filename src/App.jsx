import { Routes, Route } from 'react-router-dom';
import { Home, PickList } from './pages';

import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PickList" element={<PickList />} />
      </Routes>
    </>
  );
}

export default App;
