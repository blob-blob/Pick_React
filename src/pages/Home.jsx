import React, { useState } from 'react';
import DefaultLayout from '../layouts/Default';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('collections'); // collections 또는 follows

  const handleKeyDown = (e, tab) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setSelectedTab(tab);
    }
  };

  // 컬렉션 추가
  const addCollection = () => {
    console.log('addCollection');
    navigate('/add/collection');
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
            내 컬렉션
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
      {/* 컬렉션 추가 버튼 */}
      <button
        onClick={addCollection}
        className="fixed p-4 bg-gray-200 border-none rounded-full cursor-pointer right-4 bottom-[100px]">
        <FaPlus size={24} />
      </button>
    </DefaultLayout>
  );
};

export default Home;
