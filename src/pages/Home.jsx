import React, { useState } from 'react';
import DefaultLayout from '../layouts/Default';

function Home() {
  const [selectedTab, setSelectedTab] = useState('collections'); // collections 또는 follows

  const handleKeyDown = (e, tab) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setSelectedTab(tab);
    }
  };

  return (
    <DefaultLayout>
      <div className="w-full">
        <div className="flex items-start my-4 space-x-8">
          <div
            role="button"
            tabIndex={0}
            className="bg-white focus:outline-none"
            style={{ fontWeight: selectedTab === 'collections' ? 'bold' : 'normal' }}
            onClick={() => setSelectedTab('collections')}
            onKeyDown={e => handleKeyDown(e, 'collections')}>
            내컬렉션
          </div>
          <div
            role="button"
            tabIndex={0}
            className="bg-white focus:outline-none"
            style={{ fontWeight: selectedTab === 'follows' ? 'bold' : 'normal' }}
            onClick={() => setSelectedTab('follows')}
            onKeyDown={e => handleKeyDown(e, 'follows')}>
            팔로우
          </div>
        </div>
        <div>{selectedTab === 'collections' ? 'collections' : 'follows'}</div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
