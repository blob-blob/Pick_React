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

  const tabs = [
    { name: 'collections', label: '내 컬렉션' },
    { name: 'follows', label: '팔로우' },
  ];

  return (
    <DefaultLayout>
      <div className="w-full">
        <div className="flex items-start my-4 space-x-8">
          {tabs.map((tab, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              className="bg-white focus:outline-none"
              style={{ fontWeight: selectedTab === tab.name ? 'bold' : 'normal' }}
              onClick={() => setSelectedTab(tab.name)}
              onKeyDown={e => handleKeyDown(e, tab.name)}>
              {tab.label}
            </div>
          ))}
        </div>
        <div>{selectedTab}</div>
      </div>
      {/* 지도보기 버튼 */}
      <button
        onClick={() => navigate('/map')}
        className="absolute px-4 py-2 transform -translate-x-1/2 bg-gray-300 rounded-full bottom-[100px] left-1/2">
        지도로 보기
      </button>
      {/* 컬렉션 추가 버튼 */}
      <button
        onClick={() => navigate('/add/collection')}
        className="fixed p-4 bg-gray-200 border-none rounded-full cursor-pointer right-4 bottom-[100px]">
        <FaPlus size={24} />
      </button>
    </DefaultLayout>
  );
};

export default Home;
