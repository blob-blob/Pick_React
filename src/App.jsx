import { Routes, Route } from 'react-router-dom';
import { Home, PickList, MyCollection, FollowCollection } from './pages';

import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PickList" element={<PickList />} />
        <Route path="/MyCollection" element={<MyCollection />} />
        <Route path="/FollowCollection" element={<FollowCollection />} />
      </Routes>
    </>
  );
}

export default App;
