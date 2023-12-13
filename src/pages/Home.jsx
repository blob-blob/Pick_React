import { useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../layouts/default';
import reactLogo from '../assets/react.svg';
import viteLogo from '../../public/vite.svg';

function Home() {
  const [count, setCount] = useState(0);
  return (
    // <DefaultLayout>
    <>
      <h1>Home</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <Link to="/PickList">go to picklist page</Link>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
    // </DefaultLayout>
  );
}

export default Home;
