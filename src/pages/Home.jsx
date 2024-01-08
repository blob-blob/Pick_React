import DefaultLayout from '../layouts/default';

function Home() {
  return (
    <DefaultLayout>
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
        <p>
          <Link to="/PickList">go to picklist page</Link>
        </p>
        <p>
          <Link to="/MyCollection">go to MyCollection page</Link>
        </p>
        <p>
          <Link to="/FollowCollection">go to FollowCollection page</Link>
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </DefaultLayout>
  );
}

export default Home;
