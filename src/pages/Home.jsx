import React, { useState } from 'react';
import DefaultLayout from '../layouts/Default';

function Home() {
  const [selectedTab, setSelectedTab] = useState('collections'); // collections 또는 follows

  return (
    <DefaultLayout>
      <div className="w-full">
        <div className="flex flex-col items-start pt-4 pl-4">
          <button
            className="bg-white focus:outline-none"
            style={{ fontWeight: selectedTab === 'collections' ? 'bold' : 'normal' }}
            onClick={() => setSelectedTab('collections')}>
            내컬렉션
          </button>
          <button
            className="bg-white focus:outline-none"
            style={{ fontWeight: selectedTab === 'follows' ? 'bold' : 'normal' }}
            onClick={() => setSelectedTab('follows')}>
            팔로우
          </button>
        </div>
        <div>{selectedTab === 'collections' ? 'collections' : 'follows'}</div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
