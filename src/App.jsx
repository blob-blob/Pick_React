import { Routes, Route } from 'react-router-dom';
import { Home, PickList } from './pages';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PickList" element={<PickList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
